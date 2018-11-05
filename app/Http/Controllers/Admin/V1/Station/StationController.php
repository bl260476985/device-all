<?php

namespace App\Http\Controllers\Admin\V1\Station;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\VarStore;
use App\Utils\CommonHelper;
use App\Utils\OperateRecordHelper;
use App\Utils\NumTransNameHelper as TransHelper;


class StationController extends Controller
{

    /**
     * search
     * @param  Request $req
     * @return Response
     */
    public function search(Request $req)
    {
//        ini_set('memory_limit', '1024M');
//        ini_set('max_execution_time', '180');
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $station_base_status = TransHelper::STATION_BASE_STATUS;
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null) {
            $data = [];
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'created_at';
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        $is_limit = 0;//是否增加绑定限制
        if ($userInfo['type'] == 2) {
            $is_limit = 1;
        }
        $cur_id = $userInfo['id'];
        $data_collection = collect($data);
        $offset = (int)$data_collection->get('offset', 0);
        $limit = (int)$data_collection->get('limit', 20);
        //默认0全部2测试中1使用中
        $status = $data_collection->get('status', 0);

        $province_id = $data_collection->get('province_id', 0);

        $city_id = $data_collection->get('city_id', 0);

        $district_id = $data_collection->get('district_id', 0);


        $data['station_obj'] = $data_collection->get('station_obj', ['id' => null, 'name' => '']);
        $data['enter_obj'] = $data_collection->get('enter_obj', ['id' => null, 'name' => '']);

        $station_obj_id = isset($data['station_obj']['id']) ? (int)$data['station_obj']['id'] : 0;
        $station_obj_name = isset($data['station_obj']['name']) ? (string)$data['station_obj']['name'] : '';
        $enter_obj_id = isset($data['enter_obj']['id']) ? (int)$data['enter_obj']['id'] : 0;
        $enter_obj_name = isset($data['enter_obj']['id']) ? (string)$data['enter_obj']['name'] : '';

        $enter_obj_id = CommonHelper::idCollectByName($enter_obj_id, $enterpriseMap, 'name', $enter_obj_name, 'enterprise_id', $enterpriseMapIds);

        $result = ['total' => 0, 'list' => []];
        $is_add_special = 0;
        $stations_base = DB::table('station')->when(!empty($station_obj_id), function ($query) use ($station_obj_id) {
            return $query->where('id', $station_obj_id);
        })->when(empty($station_obj_id) && !empty($station_obj_name), function ($query) use ($station_obj_name) {
            return $query->where('name', 'like', '%' . $station_obj_name . '%');
        })->when(count($enter_obj_id) > 0, function ($query) use ($enter_obj_id) {
            return $query->whereIn('enterprise_id', $enter_obj_id);
        })->when(!empty($status), function ($query) use ($status) {
            return $query->where('status', $status);
        })->when(!empty($province_id), function ($query) use ($province_id) {
            return $query->where('province_id', $province_id);
        })->when(!empty($city_id), function ($query) use ($city_id) {
            return $query->where('city_id', $city_id);
        })->when(!empty($district_id), function ($query) use ($district_id) {
            return $query->where('district_id', $district_id);
        })->when(!empty($is_limit), function ($query) use ($cur_id) {
            return $query->where('bind_user_id', $cur_id);
        })->when($is_add_special == 0, function ($query) use ($enterpriseMapIds) {
            return $query->whereIn('enterprise_id', $enterpriseMapIds);
        })->where('is_del', 0);

        $stations_count = $stations_base->count();
        $result['total'] = $stations_count;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $offset = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $limit = 20;
        }
        $stations = $stations_base->orderBy($data['order_by'], $data['order'])
            ->skip($offset)
            ->take($limit)
            ->get();

        $result['list'] = $stations->map(function ($item) use ($enterpriseMap, $station_base_status) {
            $module = $item;
            $module['enterprise_name'] = '';
            if (isset($enterpriseMap[$item['enterprise_id']])) {
                $module['enterprise_name'] = $enterpriseMap[$item['enterprise_id']]['name'];
            }
            $module['status'] = isset($station_base_status[$item['status']]) ? $station_base_status[$item['status']] : '';
            return $module;
        })->all();

        return $this->success($result);
    }

    /**
     * get
     * @param  Request $req
     * @return Response
     */
    public function get(Request $req)
    {
//        ini_set('memory_limit', '256M');
        //对id进行加密解决可预测性
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;

        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            $data = [];
        }
        if (!isset($data['id'])) {
            $data['id'] = 0;
        }
        $id = $data['id'];

        $station = CommonHelper::isDataExists('station', 'id', $id)->where('is_del', 0)->first();
        if (!empty($station)) {
            if (!in_array($station['enterprise_id'], $enterpriseMapIds)) {
                return $this->fail('您没有权限查看该设备组信息');
            }
            $station['enterprise_name'] = '';
            if (isset($enterpriseMap[$station['enterprise_id']])) {
                $station['enterprise_name'] = $enterpriseMap[$station['enterprise_id']]['name'];
            }
        }
        return $this->success($station);
    }

    /**
     * add
     * @param  Request $req
     * @return Response
     */
    public function add(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息

        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['enterprise_id']) || empty($data['enterprise_id'])) {
            return $this->fail('请选择设备组所属的公司');
        }
        if (!isset($data['name']) || empty($data['name'])) {
            return $this->fail('请输入设备组名称');
        }
        $existedStation = CommonHelper::isDataExists('station', 'name', $data['name'])->where('is_del', 0)->first();
        if (!empty($existedStation)) {
            return $this->fail('此设备组名称已存在，请勿重复录入');
        }
        if (!isset($data['bind_user_id']) || empty($data['bind_user_id'])) {
            return $this->fail('请选择设备组所属人');
        }
        $fields = [
            'name',
            'enterprise_id',
            'province_id',
            'city_id',
            'district_id',
            'country',
            'province',
            'city',
            'district',
            'address',
            'longitude',
            'latitude',
            'contacts',
            'phone',
            'remarks',
            'status',
            'open_forbin_date',
            'bind_user_id',
        ];
        $insert = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $insert[$field] = $data[$field];
            }
        }
        $resmsg = '';
        try {
            DB::transaction(function () use ($insert, $data, $userInfo) {
                $id = parent::getUid(); //生成唯一标识
                $insert['id'] = $id;
                DB::table('station')->insert($insert);
            });
        } catch (\Exception $e) {
            $resmsg = '设备组新增失败，请重试!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success();
    }

    /**
     * delete
     * @param  Request $req
     * @return Response
     */
    public function delete(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id'])) {
            return $this->fail('参数错误');
        }
        $id = (int)$data['id'];
        $now = date('Y-m-d H:i:s');
        $pic_ids = [];
        $station = CommonHelper::isDataExists('station', 'id', $id)->where('is_del', 0)->first();
        if (!empty($station)) {
            if (!in_array($station['enterprise_id'], $enterpriseMapIds)) {
                return $this->fail('您没有权限删除该设备组信息');
            }
            DB::table('station')->where('id', $id)->update([
                'is_del' => 1,
                'deleted_at' => $now,
            ]);
            //设备组下的设备及端口都要删除
            DB::table('device')->where('station_id', $id)->update([
                'is_del' => 1,
                'deleted_at' => $now,
            ]);
        }
        return $this->success();
    }

    /**
     * update
     * @param  Request $req
     * @return Response
     */
    public function update(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id']) || empty($data['id'])) {
            return $this->fail('缺少设备组id');
        }
        $id = (int)$data['id'];
        $station = CommonHelper::isDataExists('station', 'id', $id)->where('is_del', 0)->first();
        if (empty($station)) {
            return $this->fail('设备组不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $station['enterprise_id'])) {
            return $this->fail('您没有权限编辑此设备组');
        }
        if (isset($data['name']) && empty($data['name'])) {
            return $this->fail('请输入设备组名称');
        }
        if ($station['name'] != $data['name']) {
            $existedStation = CommonHelper::isDataExists('station', 'name', $data['name'])->where('is_del', 0)->first();
            if (!empty($existedStation)) {
                return $this->fail('不能与已有设备组重名');
            }
        }
        if (isset($data['enterprise_id']) && empty($data['enterprise_id'])) {
            return $this->fail('请选择设备组所属的公司');
        }
        if (isset($data['bind_user_id']) && empty($data['bind_user_id'])) {
            return $this->fail('请选择设备组所属人');
        }
        $fields = [
            'name',
            'enterprise_id',
            'province_id',
            'city_id',
            'district_id',
            'country',
            'province',
            'city',
            'district',
            'address',
            'longitude',
            'latitude',
            'contacts',
            'phone',
            'remarks',
            'status',
            'open_forbin_date',
            'bind_user_id'
        ];
        $update = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $update[$field] = $data[$field];
            }
        }
        DB::table('station')->where('id', $id)->update($update);
        //当设备组详细地址更新时改变所有桩的地址
        if ($station['address'] != $data['address']) {
            DB::table('device')->where('station_id', $id)->where('is_del', 0)->update([
                'address' => $data['address'],
            ]);
        }
        return $this->success();
    }

    /**
     * assigned 分配设备组接口
     * @param  Request $req
     * @return Response
     */
    public function assignSearch(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'created_at';
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        if (!isset($data['bind_user_id']) || empty($data['bind_user_id'])) {
            return $this->fail('缺少系统用户id');
        }
        $data_collection = collect($data);
        $offset = (int)$data_collection->get('offset', 0);
        $limit = (int)$data_collection->get('limit', 20);
        $query_name = $data_collection->get('query', '');//输入的设备组名称
        $user_id = (int)$data['bind_user_id'];

        $stationIds_base = DB::table('station')->select('id', 'name', 'enterprise_id', 'province', 'city', 'district', 'address', 'longitude', 'latitude', 'contacts', 'bind_user_id')
            ->when(!empty($query_name), function ($query) use ($query_name) {
                return $query->where('name', $query_name);
            })
            ->where('bind_user_id', $user_id)
            ->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0);

        $stationNum = $stationIds_base->count();
        $result['total'] = (int)$stationNum;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $offset = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $limit = 20;
        }

        $stations = $stationIds_base->orderBy($data['order_by'], $data['order'])
            ->skip($offset)
            ->take($limit)
            ->get();

        $result['list'] = $stations->map(function ($item) use ($enterpriseMap) {
            $module = $item;
            $module['enterprise_name'] = '';
            if (isset($enterpriseMap[$item['enterprise_id']])) {
                $module['enterprise_name'] = $enterpriseMap[$item['enterprise_id']]['name'];
            }
            return $module;
        })->all();
        return $this->success($result);
    }

    /**
     * assigned 分配设备组接口
     * @param  Request $req
     * @return Response
     */
    public function assignStation(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        if ($userInfo['type'] == 2) {
            return $this->fail('运维人员无法分配设备组');
        }
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['station_ids']) || empty($data['station_ids'])) {
            return $this->fail('缺少设备组集合');
        } else if (!is_array($data['station_ids'])) {
            return $this->fail('设备组集合类型错误');
        }
        if (!isset($data['bind_user_id']) || empty($data['bind_user_id'])) {
            return $this->fail('缺少系统用户id');
        }
        $station_ids = $data['station_ids'];
        $user_id = $data['bind_user_id'];

        $stationInfo = DB::table('station')->select('enterprise_id')->whereIn('id', $station_ids)
            ->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0)
            ->get()
            ->pluck('enterprise_id')
            ->values()
            ->all();
        if (count($stationInfo) != 1) {
            return $this->fail('所选设备组归属单位不一致');
        }
        $userInfo = DB::table('system_user')->select('id', 'enterprise_id')->where('id', $user_id)->whereIn('enterprise_id', $enterpriseMapIds)->where('is_del', 0)->first();
        if (empty($userInfo)) {
            return $this->fail('无法分配设备组给所选所属人');
        } else if ($userInfo['enterprise_id'] != $stationInfo[0]) {
            return $this->fail('设备组归属单位与所属人归属单位不一致');
        }

        DB::table('station')->whereIn('id', $station_ids)->where('is_del', 0)->update([
            'bind_user_id' => $user_id
        ]);

        return $this->success();
    }

}

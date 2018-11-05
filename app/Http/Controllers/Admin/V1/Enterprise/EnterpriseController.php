<?php

namespace App\Http\Controllers\Admin\V1\Enterprise;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use App\Http\Controllers\Controller;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\VarStore;
use App\Utils\CommonHelper;
use App\Utils\OperateRecordHelper;

class EnterpriseController extends Controller
{

    /**
     * search
     * @param  Request $req
     * @return
     */
    public function search(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'created_at';
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        if (!isset($data['enter_obj']) || empty($data['enter_obj'])) {
            $data['enter_obj'] = [
                'id' => null,
                'name' => ''
            ];
        }
        $enter_obj_id = (int)$data['enter_obj']['id'];
        $enter_obj_name = (string)$data['enter_obj']['name'];

        $result = ['total' => 0, 'list' => []];
        foreach ($enterpriseMap as $id => $enterprise) {
            if (!AccountHelper::have($enterpriseMap, $userInfo['enterprise_id'], $id)) {
                continue;
            }
            if (isset($data['province_id']) && $data['province_id'] > 0 && $enterprise['province_id'] != $data['province_id']) {
                continue;
            }
            if (isset($data['city_id']) && $data['city_id'] > 0 && $enterprise['city_id'] != $data['city_id']) {
                continue;
            }
            if (isset($data['district_id']) && $data['district_id'] > 0 && $enterprise['district_id'] != $data['district_id']) {
                continue;
            }
            if (isset($data['parent_id']) && $data['parent_id'] > 0 && $enterprise['parent_id'] != $data['parent_id']) {
                continue;
            }
            if ((int)$enter_obj_id > 0 && $enterprise['id'] != (int)$enter_obj_id) {
                continue;
            }
            if (empty($enter_obj_id) && !empty($enter_obj_name) && mb_strpos($enterprise['name'], $enter_obj_name) === false) {
                continue;
            }
            if (isset($data['code']) && $data['code'] != '' && strpos($enterprise['code'], $data['code']) === false) {
                continue;
            }
            if (isset($data['level']) && !empty($data['level']) && $enterprise['level'] != (int)$data['level']) {
                continue;
            }
            $enterprise['parent_name'] = '';
            if (isset($enterpriseMap[$enterprise['parent_id']])) {
                $enterprise['parent_name'] = $enterpriseMap[$enterprise['parent_id']]['name'];
            }

            $result['list'][] = $enterprise;
        }
        $sorter = new KeySorter($data['order_by'], $data['order']);
        $sorter->sort($result['list']);
        $result['total'] = count($result['list']);
        $result['list'] = array_values($result['list']);

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $data['offset'] = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $data['limit'] = 20;
            $result['list'] = array_slice($result['list'], $data['offset'], $data['limit']);
        }

        return $this->success($result);
    }

    /**
     * get
     * @param  Request $req
     * @return
     */
    public function get(Request $req)
    {
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
        $id = (int)$data['id'];
        if (!isset($enterpriseMap[$id])) {
            return $this->fail('此公司不存在');
        }

        $enterprise = $enterpriseMap[$id];
        if (!in_array($enterprise['id'], $enterpriseMapIds)) {
            return $this->fail('您没有权限查看该公司信息');
        }
        $enterprise['parent_name'] = '';
        if (isset($enterpriseMap[$enterprise['parent_id']]) && !empty($enterpriseMap[$enterprise['parent_id']])) {
            $enterprise['parent_name'] = $enterpriseMap[$enterprise['parent_id']]['name'];
        }

        return $this->success($enterprise);
    }

    /**
     * add
     * @param  Request $req
     * @return
     */
    public function add(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        //获取对应公司id
        $curEnterprise = collect($enterpriseMap)->where('id', $userInfo['enterprise_id'])->first();
        $curLevel = empty($curEnterprise['level']) ? 0 : (int)$curEnterprise['level'];
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['parent_id']) || empty($data['parent_id'])) {
            return $this->fail('请选择上一级公司');
        }
        if (!isset($enterpriseMap[$data['parent_id']])) {
            return $this->fail('上一级公司不存在');
        }
        if (!isset($data['name']) || empty($data['name'])) {
            return $this->fail('请输入公司名称');
        }

        $existedEnterprise = CommonHelper::isDataExists('enterprise', 'name', $data['name'])->where('is_del', 0)->first();
        if (!empty($existedEnterprise)) {
            return $this->fail('此公司已存在，请勿重复输入');
        }
        //是否创建默认系统用户组
        $fitSystemUserGroup = 0;
        if ($curLevel == 1) {
            if (isset($data['is_cregroup']) && $data['is_cregroup'] == 1) {
                if (!isset($data['cust_user_group']) || empty($data['cust_user_group'])) {
                    return $this->fail('请输入系统用户组名');
                }
                $existedUserGroup = CommonHelper::isDataExists('system_user_group_new', 'name', $data['cust_user_group'])->where('is_del', 0)->first();
                if (!empty($existedUserGroup)) {
                    return $this->fail('自定义系统用户组已存在，请重新输入');
                }
                $fitSystemUserGroup = 1;
            }
        }
        $chooseLevel = (int)$enterpriseMap[$data['parent_id']]['level'];
        //[{"user_id":100,"role_id":1,"phone":"15658836039","name":"test1","enterprise":10001}]

        $fields = [
            'name',
            'code',
            'parent_id',
            'contacts',
            'phone',
            'country',
            'province_id',
            'city_id',
            'district_id',
            'province',
            'city',
            'district',
            'address',
            'remarks',
        ];
        $insert = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $insert[$field] = $data[$field];
            }
        }
        $insert['level'] = $chooseLevel + 1;
        $resmsg = '';
        try {
            DB::transaction(function () use ($insert, $fitSystemUserGroup, $data, $userInfo) {
                $enter_id = parent::getUid(); //生成唯一标识
                $insert['id'] = $enter_id;
                DB::table('enterprise')->insert($insert);
                //根据标记进行默认用户组和公共站点组的创建
                if ($fitSystemUserGroup == 1) {
                    $insert = [
                        'id' => parent::getUid(), //生成唯一标识
                        'name' => trim($data['cust_user_group']),
                        'enterprise_id' => $enter_id,
                        'create_user_id' => $userInfo['id'],
                        'group_flag' => 1,//默认系统用户组
                        'remarks' => '自动创建',
                    ];
                    DB::table('system_user_group_new')->insertGetId($insert);
                }
            });
        } catch (\Exception $e) {
            $resmsg = '公司新增失败，请重试!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success();
    }

    /**
     * delete
     * @param  Request $req
     * @return
     */
    public function delete(Request $req)
    {
        parent::getBaseInfo();
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
        if (!isset($enterpriseMap[$id])) {
            return $this->fail('此公司不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $id)) {
            return $this->fail('您没有权限删除该公司');
        }
        if ($enterpriseMap[$id]['level'] == 1) {
            return $this->fail('无法删除一级公司，不能删除');
        }
        if ($userInfo['enterprise_id'] == $enterpriseMap[$id]['id']) {
            return $this->fail('无法删除归属公司');
        }
        $now = date('Y-m-d H:i:s');
        DB::table('enterprise')->where('id', $id)->where('is_del', 0)->update([
            'is_del' => 1,
            'deleted_at' => $now,
        ]);
        //删除公司删除对应的站点设备设备端口以及系统用户
        $stationIds = DB::table('station')->select('id')->where('enterprise_id', $id)->where('is_del', 0)->get()->pluck('id')->all();
        DB::table('device')->whereIn('station_id', $stationIds)->where('is_del', 0)->update([
            'is_del' => 1,
            'deleted_at' => $now,
        ]);
        DB::table('station')->whereIn('id', $stationIds)->where('is_del', 0)->update([
            'is_del' => 1,
            'deleted_at' => $now,
        ]);
        $systemId = DB::table('system_user')->select('id')->where('enterprise_id', $id)->where('is_del', 0)->get()->pluck('id')->all();

        DB::table('system_user')->where('enterprise_id', $id)->where('is_del', 0)->update([
            'is_del' => 1,
            'deleted_at' => $now,
        ]);
        DB::table('system_user_authen')->whereIn('user_id', $systemId)->where('is_del', 0)->update([
            'is_del' => 1,
            'deleted_at' => $now,
        ]);
        DB::table('system_user_group_new')->where('enterprise_id', $id)->where('is_del', 0)->update([
            'is_del' => 1,
            'deleted_at' => $now,
        ]);

        return $this->success();
    }

    /**
     * update
     * @param  Request $req
     * @return
     */
    public function update(Request $req)
    {
        parent::getBaseInfo();
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id'])) {
            $data['id'] = 0;
        }
        $id = (int)$data['id'];
        if (!isset($enterpriseMap[$id])) {
            return $this->fail('此公司不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $id)) {
            return $this->fail('您没有权限删除该公司');
        }
        if (isset($data['name']) && empty($data['name'])) {
            return $this->fail('请输入公司名称');
        }
        $curEnterpriseInfo = CommonHelper::isDataExists('enterprise', 'id', $id)->where('is_del', 0)->first();
        if (empty($curEnterpriseInfo)) {
            return $this->fail('当前公司不存在');
        }
        if ($enterpriseMap[$id]['name'] != $data['name']) {
            $existedEnterprise = CommonHelper::isDataExists('enterprise', 'name', $data['name'])->where('is_del', 0)->first();
            if (!empty($existedEnterprise)) {
                return $this->fail('不能和已有公司重名');
            }
        }

        if (isset($data['parent_id']) && ($data['parent_id'] == 0 && $enterpriseMap[$id]['level'] > 1)) {
            return $this->fail('请选择上一级公司');
        }
        if (isset($data['parent_id']) && !isset($enterpriseMap[$data['parent_id']]) && $enterpriseMap[$id]['level'] > 1) {
            return $this->fail('上一级公司不存在');
        }

        if ($enterpriseMap[$id]['level'] > 1) {
            $temp_enter = ['enterprise_id' => $id, 'type' => $curEnterpriseInfo['type']];
            $childEnterprises = self::searchMapEnterprise($enterpriseMap, $temp_enter);
            if (count($childEnterprises) > 1 && (int)$enterpriseMap[$data['parent_id']]['level'] >= (int)$enterpriseMap[$id]['level']) {
                return $this->fail('该公司拥有下级公司，无法更改为更低级别');
            }
            if ((int)$enterpriseMap[$data['parent_id']]['level'] < (int)$enterpriseMap[$curEnterpriseInfo['parent_id']]['level']) {
                $station_num = DB::table('station')->where('enterprise_id', $id)->where('is_del', 0)->count();
                if ($station_num > 0) {
                    return $this->fail('该公司拥有站点，无法更改为更高级别');
                }
            }
        }
        if ($enterpriseMap[$id]['level'] == 1 && (int)$data['parent_id'] > $curEnterpriseInfo['parent_id']) {
            return $this->fail('一级公司属最高级别，不能更改为低级别');
        }

        $fields = [
            'name',
            'code',
            'contacts',
            'phone',
            'country',
            'province_id',
            'city_id',
            'district_id',
            'province',
            'city',
            'district',
            'address',
            'remarks',
        ];
        $update = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $update[$field] = $data[$field];
            }
        }
        if ($data['parent_id'] != $id && $enterpriseMap[$id]['level'] > 1) {
            $update['parent_id'] = (int)$data['parent_id'];
            $update['level'] = $enterpriseMap[$data['parent_id']]['level'] + 1;
        }
        DB::table('enterprise')->where('id', $id)->update($update);

        return $this->success();
    }
}
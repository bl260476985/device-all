<?php

namespace App\Http\Controllers\Admin\V1\Work;

use App\Utils\CommonHelper;
use App\Utils\OperateRecordHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\VarStore;
use App\Utils\NumTransNameHelper as TransHelper;

class WarnRecoverController extends Controller
{
    /**
     * search 实时统计报警信息
     * @param  Request $req
     * @return
     */
    public function warnSearch(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $warning_type = TransHelper::WARNING_TYPE;
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'uploaded_at';
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        $data_collection = collect($data);
        $offset = (int)$data_collection->get('offset', 0);
        $limit = (int)$data_collection->get('limit', 20);
        $is_limit = 0;//是否增加绑定限制
        if ($userInfo['type'] == 2) {
            $is_limit = 1;
        }
        $cur_id = $userInfo['id'];
        $result = ['total' => 0, 'list' => []];
        $stationIds = DB::table('station')->select('id')->when(!empty($is_limit), function ($query) use ($cur_id) {
            return $query->where('bind_user_id', $cur_id);
        })->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0)
            ->get()
            ->pluck('id')
            ->all();
        $deviceIds = DB::table('device')->select('id')->whereIn('station_id', $stationIds)->get()->pluck('id')->all();
        //获取报警信息
        $warn_base = DB::table('device_warning')->select('id', 'device_id', 'device_number', 'fault_type', 'type', 'warning_content', 'detail', 'uploaded_at', 'warn_status')
            ->whereIn('device_id', $deviceIds)
            ->where('is_del', 0);

        $warnNum = $warn_base->count();
        $result['total'] = (int)$warnNum;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $offset = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $limit = 20;
        }

        $warns = $warn_base->orderBy($data['order_by'], $data['order'])
            ->skip($offset)
            ->take($limit)
            ->get();

        $result['list'] = $warns->map(function ($item) use ($warning_type) {
            $module = $item;
            $module['type_name'] = '设备报警';
            if ($item['type'] == 2) {
                $module['type_name'] = '设备恢复';
            }
            unset($module['detail']);
            return $module;
        })->all();

        return $this->success($result);
    }

    /**
     * pushSearch 以人作为单位查看推送列表
     * @param  Request $req
     * @return
     */
    public function pushSearch(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $warning_type = TransHelper::WARNING_TYPE;
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'uploaded_at';
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        $data_collection = collect($data);
        $offset = (int)$data_collection->get('offset', 0);
        $limit = (int)$data_collection->get('limit', 20);
        $query_name = $data_collection->get('query', '');
        $is_limit = 0;//是否增加绑定限制
        if ($userInfo['type'] == 2) {
            $is_limit = 1;
        }
        $cur_id = $userInfo['id'];
        $result = ['total' => 0, 'list' => []];
        $users_base = DB::table('system_user')->select('id', 'name')
            ->when(!empty($is_limit), function ($query) use ($cur_id) {
                return $query->where('id', $cur_id);
            })->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0)
            ->get();
        $user_infos = $users_base->keyBy('id')->all();
        $user_ids = $users_base->pluck('id')->all();

        //获取报警信息
        $warn_base = DB::table('device_warning_push')->select('id', 'device_id', 'device_number', 'open_id', 'bind_user_id', 'content', 'address', 'uploaded_at')
            ->when(!empty($query_name), function ($query) use ($query_name) {
                return $query->where('device_number', 'like', "%$query%");
            })
            ->whereIn('bind_user_id', $user_ids)
            ->where('is_del', 0);

        $warnNum = $warn_base->count();
        $result['total'] = (int)$warnNum;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $offset = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $limit = 20;
        }

        $warns = $warn_base->orderBy($data['order_by'], $data['order'])
            ->skip($offset)
            ->take($limit)
            ->get();

        $result['list'] = $warns->map(function ($item) use ($user_infos) {
            $module = $item;
            $module['user_name'] = isset($user_infos[$item['bind_user_id']]['name']) ? $user_infos[$item['bind_user_id']]['name'] : '';
            return $module;
        })->all();

        return $this->success($result);
    }

    /**
     * pushSearch 推送统计 以人作为单位
     * @param  Request $req
     * @return
     */
    public function pushStatistics(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $warning_type = TransHelper::WARNING_TYPE;
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        $result = [];
        $is_limit = 0;//是否增加绑定限制
        if ($userInfo['type'] == 2) {
            $is_limit = 1;
        }
        $cur_id = $userInfo['id'];
        //获取可以查看的系统用户id
        $users_base = DB::table('system_user')->select('id', 'name')
            ->when(!empty($is_limit), function ($query) use ($cur_id) {
                return $query->where('id', $cur_id);
            })->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0)
            ->get();
        $user_infos = $users_base->keyBy('id')->all();
        $user_ids = $users_base->pluck('id')->all();

        foreach ($user_ids as $user_id) {
            $result[] = ['user_id' => $user_id, 'value' => 0];
        }
        $deviceNums = DB::table('device_warning_push')->select(DB::raw('count(id) as push_num'), 'bind_user_id')
            ->whereIn('bind_user_id', $user_ids)
            ->where('is_del', 0)
            ->groupBy('bind_user_id')
            ->get()
            ->keyBy('bind_user_id')
            ->all();
        //统计每个用户收到的消息推送
        foreach ($result as $k => $item) {
            $value = isset($deviceNums[$item['user_id']]['push_num']) ? $deviceNums[$item['user_id']]['push_num'] : 0;
            $result[$k]['value'] = (int)$value;
            $result[$k]['name'] = isset($user_infos[$item['user_id']]['name']) ? $user_infos[$item['user_id']]['name'] : '';
        }
        $sorter = new KeySorter('value', 'desc');
        $sorter->sort($result);
        $result = array_values($result);

        return $this->success($result);
    }

    /**
     * get 获取单个报警信息
     * @param  Request $req
     * @return
     */
    public function get(Request $req)
    {
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        if (empty($id)) {
            return $this->fail('报警id不能为空');
        }
        //获取报警信息
        $warn = DB::table('device_warning')->select('id', 'device_id', 'device_number', 'fault_type', 'type', 'warning_content', 'detail', 'uploaded_at', 'warn_status')
            ->where('id', $id)
            ->where('is_del', 0)
            ->first();

        if (!empty($warn)) {
            $device = DB::table('device')->select('device_name', 'longitude', 'latitude')->where('id', $warn['device_id'])->first();
            $warn['device_name'] = isset($device['device_name']) ? $device['device_name'] : '';
            $warn['longitude'] = isset($device['longitude']) ? $device['longitude'] : '';
            $warn['latitude'] = isset($device['latitude']) ? $device['latitude'] : '';
            //获取处理记录
            $records = DB::table('device_warndeal')->select('id', 'deal_type', 'user_name', 'created_at')
                ->where('warn_id', $id)
                ->orderBy('created_at', 'desc')
                ->get();
            $warn['records'] = $records->map(function ($item) {
                $module = $item;
                $module['type_name'] = $item['deal_type'] == 2 ? '维护' : '完成';
                unset($module['deal_type']);
                return $module;
            })->all();
            unset($warn['detail']);
            unset($warn['fault_type']);
            unset($warn['type']);
        }
        return $this->success($warn);
    }

    /**
     * dealWarn 处理报警
     * @param  Request $req
     * @return
     */
    public function dealWarn(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $cur_id = $userInfo['id'];
        $cur_name = $userInfo['name'];
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        $id = isset($data['id']) ? (int)$data['id'] : 0;
        if (empty($id)) {
            return $this->fail('报警id不能为空');
        }
        //获取报警信息
        $warn = DB::table('device_warning')->select('id', 'warn_status')
            ->where('id', $id)
            ->where('is_del', 0)
            ->first();
        if (empty($warn)) {
            return $this->fail('缺少报警id参数');
        } else if ($warn['warn_status'] == 2) {
            return $this->fail('此报警不在待处理状态');
        }
        try {
            DB::transaction(function () use ($cur_id, $id, $cur_name) {
                DB::table('device_warning')->where('id', $id)->update([
                    'warn_status' => 2
                ]);
                $id = parent::getUid(); //生成唯一标识
                DB::table('device_warndeal')->insert([
                    'id' => $id,
                    'warn_id' => $id,
                    'deal_type' => 1,
                    'deal_user_id' => $cur_id,
                    'user_name' => $cur_name,
                    'deal_source' => 2
                ]);
            });
        } catch (\Exception $e) {
            return $this->fail('此报警处理失败');
        }
        return $this->success();
    }

}
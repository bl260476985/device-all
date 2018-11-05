<?php

namespace App\Http\Controllers\Admin\V1\System;

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
use Mockery\Exception;

class UserDeviceController extends Controller
{

    /**
     * search 统计每个账户绑定的设备数量
     * @param  Request $req
     * @return
     */
    public function search(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
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
        $stations_base = DB::table('station')->select('id', 'bind_user_id')->whereIn('bind_user_id', $user_ids)->where('is_del', 0)->get();
        $stations_infos = $stations_base->groupBy('bind_user_id')->toArray();
        $stations_ids = $stations_base->pluck('id')->all();
        $deviceNums = DB::table('device')->select(DB::raw('count(id) as device_num'), 'station_id')
            ->whereIn('station_id', $stations_ids)
            ->where('is_del', 0)
            ->groupBy('station_id')
            ->get()
            ->keyBy('station_id')
            ->all();
        //统计每个用户绑定的设备,遍历绑定的用户
        $trans_data = [];
        foreach ($stations_infos as $user_id => $item) {
            $trans_data[$user_id] = 0;
            foreach ($item as $value) {
                $num = isset($deviceNums[$value['id']]['device_num']) ? $deviceNums[$value['id']]['device_num'] : 0;
                $trans_data[$user_id] += $num;
            }
        }
        //赋值给所有账户
        foreach ($result as $k => $item) {
            $value = isset($trans_data[$item['user_id']]) ? $trans_data[$item['user_id']] : 0;
            $result[$k]['value'] = (int)$value;
            $result[$k]['name'] = isset($user_infos[$item['user_id']]['name']) ? $user_infos[$item['user_id']]['name'] : '';
        }
        $sorter = new KeySorter('value', 'desc');
        $sorter->sort($result);
        $result = array_values($result);

        return $this->success($result);
    }


}
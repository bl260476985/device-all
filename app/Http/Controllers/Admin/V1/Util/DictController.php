<?php

namespace App\Http\Controllers\Admin\V1\Util;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use App\Utils\AccountHelper;
use App\Utils\CommonHelper;
use App\Utils\VarStore;

class DictController extends Controller
{

    /**
     * search
     * @param  Request $req
     * @return Response
     */
    public function search(Request $req)
    {
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null) {
            $data = [];
        }
        $data_collect = collect($data);
        $type = $data_collect->get('type', '');
        $query = $data_collect->get('query', '');
        $limit = (int)$data_collect->get('limit', 20);
        $offset = (int)$data_collect->get('offset', 0);
        $dict = [];
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $is_limit = 0;//是否增加绑定限制
        if ($userInfo['type'] == 2) {
            $is_limit = 1;
        }
        switch ($type) {
            case 'enterprise':
                foreach ($enterpriseMap as $id => $enterprise) {
                    if (!in_array($id, $enterpriseMapIds)) {
                        continue;
                    }
                    if ($query != '' && mb_strpos($enterprise['name'], $query) === false) {
                        continue;
                    }
                    $dict[] = $enterprise;
                }
                break;
            case 'station':
                $stations = CommonHelper::isDataBelogs('station', $enterpriseMapIds, 'enterprise_id')->select('id', 'name', 'enterprise_id', 'province_id', 'city_id', 'district_id', 'address', 'longitude', 'latitude', 'province', 'city', 'district')
                    ->where('is_del', 0)
                    ->get();
                foreach ($stations as $station) {
                    if ($query != '' && mb_strpos($station['name'], $query) === false) {
                        continue;
                    }
                    $dict[] = $station;
                }
                break;
            case 'device':
                $stationIds = CommonHelper::isDataBelogs('station', $enterpriseMapIds, 'enterprise_id')->select('id')->where('is_del', 0)->get()->pluck('id')->all();

                $devices = DB::table('device')->select('id', 'device_number as name')->whereIn('station_id', $stationIds)->where('is_del', 0)->get();
                foreach ($devices as $device) {
                    if ($query != '' && mb_strpos($device['name'], $query) === false) {
                        continue;
                    }
                    $dict[] = $device;
                }
                break;
            case 'systemuser':
                $user_type = collect($data)->get('user_type', 0);
                $phone = collect($data)->get('phone', '');
                $enterprise_id = collect($data)->get('enterprise_id', 0);
                $systemusers = DB::table('system_user')->select('id', 'name', 'phone', 'type', 'enterprise_id')->whereIn('enterprise_id', $enterpriseMapIds)->where('is_del', 0)->get();
                foreach ($systemusers as $systemuser) {
                    if ($query != '' && mb_strpos($systemuser['name'], $query) === false) {
                        continue;
                    }
                    if ($phone != '' && mb_strpos($systemuser['phone'], $phone) === false) {
                        continue;
                    }
                    if (!empty($enterprise_id) && $systemuser['enterprise_id'] != $enterprise_id) {
                        continue;
                    }
                    if (!empty($is_limit) && $systemuser['id'] != $userInfo['id']) {
                        continue;
                    }
                    if (!empty($user_type) && $systemuser['type'] != 2) {
                        continue;
                    }
                    $dict[] = $systemuser;
                }
                break;
            case 'systemgroup':
                $enterprise_id = collect($data)->get('enterprise_id', 0);
                $systemgroups = DB::table('system_user_group_new')->select('id', 'name', 'enterprise_id')
                    ->when(!empty($enterprise_id), function ($query) use ($enterprise_id) {
                        return $query->where('enterprise_id', $enterprise_id);
                    })->whereIn('enterprise_id', $enterpriseMapIds)->where('is_del', 0)->get();
                foreach ($systemgroups as $item) {
                    if ($query != '' && mb_strpos($item['name'], $query) === false) {
                        continue;
                    }
                    $dict[] = $item;
                }
                break;
            case 'province':
                $dict = DB::table('area')->select('id', 'name')->where('level', 1)->where('is_del', 0)->get()->toArray();
                break;
            case 'city':
                if (!empty($query)) {
                    $dict = DB::table('area')->select('id', 'name')->where('parent_id', (int)$query)->where('is_del', 0)->get()->toArray();
                }
                break;
            case 'district':
                if (!empty($query)) {
                    $dict = DB::table('area')->select('id', 'name')->where('parent_id', (int)$query)->where('is_del', 0)->get()->toArray();
                }
                break;
            case 'system_modules_new':
                $accounts = DB::table('system_modules_new')->where('is_del', 0)->get()->toArray();
                $dict = array_values($accounts);
                break;
            case 'manufacturer':
                $dict = DB::table('manufacturer')->select('id', 'name')->where('is_del', 0)->get()->toArray();
                foreach ($dict as $k => $item) {
                    if ($query != '' && mb_strpos($item['name'], $query) === false) {
                        unset($dict[$k]);
                    }
                }
                $dict = array_values($dict);
                break;
            case 'pushconfig':
                $dict = DB::table('push_config')->select('name', 'value')->where('type', 1)->where('is_del', 0)->get()->toArray();
                foreach ($dict as $k => $item) {
                    if ($query != '' && mb_strpos($item['name'], $query) === false) {
                        unset($dict[$k]);
                    }
                }
                $dict = array_values($dict);
                break;
            default:
                break;
        }
        if ($limit > 0 && !in_array($type, ['system_modules_new', 'enterprise', 'user'])) {
            $dict = array_slice($dict, 0, $limit);
        }
        return $this->success($dict);
    }

}
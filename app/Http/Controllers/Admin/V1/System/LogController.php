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

class LogController extends Controller
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
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
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
        $data_collection = collect($data);
        $offset = (int)$data_collection->get('offset', 0);
        $limit = (int)$data_collection->get('limit', 20);

        $created_st = $data_collection->get('created_st', '');
        $created_et = $data_collection->get('created_et', '');

        if (!empty($created_st)) {
            $created_st = date('Y-m-d 00:00:00', strtotime($created_st));
        }
        if (!empty($created_et)) {
            $created_et = date('Y-m-d 23:59:59', strtotime($created_et));
        }
        $users = DB::table('system_user')->select('id', 'name')->whereIn('enterprise_id', $enterpriseMapIds)->where('is_del', 0)->get();
        $systemUsers = $users->keyBy('id')->all();
        $userkeys = $users->pluck('id')->all();
        $result = ['total' => 0, 'list' => []];
        $users_base = DB::table('log_system_user_login')->select('id', 'user_id', 'ip', 'created_at')
            ->when(!empty($created_st) && !empty($created_et) && strtotime($created_st) <= strtotime($created_et), function ($query) use ($created_st, $created_et) {
                return $query->whereBetween('created_at', [$created_st, $created_et]);
            })->whereIn('user_id', $userkeys)->where('is_del', 0);

        $users_count = $users_base->count();
        $result['total'] = $users_count;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $data['offset'] = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $data['limit'] = 20;
        }
        $users = $users_base->orderBy($data['order_by'], $data['order'])
            ->skip($data['offset'])
            ->take($data['limit'])
            ->get();

        $result['list'] = $users->map(function ($item) use ($systemUsers) {
            $module = $item;
            $module['system_name'] = isset($systemUsers[$item['user_id']]) ? $systemUsers[$item['user_id']]['name'] : '';
            $module['content'] = 'login';
            return $module;
        })->all();
        return $this->success($result);
    }

}
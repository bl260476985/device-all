<?php

namespace App\Http\Controllers\Admin\V1\Statistics;

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

class StatisticsController extends Controller
{
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
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        if (!isset($data['bind_user_id']) || empty($data['bind_user_id'])) {
            return $this->fail('缺少系统用户id');
        }
        $data_collection = collect($data);
        $data_collection = collect($data);
        $created_st = $data_collection->get('created_st', date('Y-m-01'));
        $created_et = $data_collection->get('created_et', date('Y-m-d'));
        $st = $created_st . " 00:00:00";
        $et = $created_et . " 23:59:59";
        $bind_user_id = $data['bind_user_id'];

        $result = [];

        for ($i = strtotime($created_st); $i <= strtotime($created_et); $i += 86400) {
            $tdate = date('Y-m-d', $i);
            $result[$tdate] = ['uploaded_at' => (string)$tdate, 'value' => 0];
        }
        //获取报警信息
        $warn_base = DB::table('device_warning_push')->select(DB::raw('count(id) as device_warn,DATE_FORMAT(uploaded_at,"%Y-%m-%d") as uploaded_at'))
            ->where('bind_user_id', $bind_user_id)
            ->whereBetween('uploaded_at', [$st, $et])
            ->where('is_del', 0)
            ->groupBy(DB::raw('DATE_FORMAT(uploaded_at,"%Y-%m-%d")'))
            ->get()
            ->keyBy('uploaded_at')
            ->all();
        foreach ($warn_base as $k => $item) {
            if (array_key_exists($k, $result)) {
                $result[$k]['uploaded_at'] = $k;
                $result[$k]['value'] = (int)$item['device_warn'];
            }
        }
        //如果倒叙，则重新放入一个新的数组
        if ($data['order'] == 'desc') {
            $new_res = [];
            foreach ($result as $item) {
                array_unshift($new_res, $item);
            }
            $result = $new_res;
        }

        $result = array_values($result);
        return $this->success($result);
    }
}
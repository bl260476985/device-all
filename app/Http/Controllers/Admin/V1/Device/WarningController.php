<?php

namespace App\Http\Controllers\Admin\V1\Device;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use App\Http\Controllers\Controller;
use Mockery\Exception;
use Ramsey\Uuid\Uuid;
use App\Utils\CommonHelper;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\NumTransNameHelper as TransHelper;

class WarningController extends Controller
{

    /*
     * 获取报警记录
     * @param Request $req
     * @return Response
     */
    public function search(Request $req)
    {
        $warning_type_trans = TransHelper::WARNING_TYPE;
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
        if (!isset($data['id']) || empty($data['id'])) {
            return $this->fail('缺少设备id参数');
        }
        $id = (int)$data['id'];
        $device = CommonHelper::isDataExists('device', 'id', $id)->where('is_del', 0)->first();
        if (empty($device)) {
            return $this->fail('此设备不存在');
        }
        $result = ['total' => 0, 'list' => []];

        $warnings = DB::table('device_warning')->select('id', 'device_id', 'fault_type', 'created_at')
            ->where('device_id', $id)
            ->where('is_del', 0)
            ->orderBy($data['order_by'], $data['order'])
            ->take(100)
            ->get();

        $result['list'] = $warnings->map(function ($item) use ($warning_type_trans) {
            $module = $item;
            $module['fault_type_name'] = isset($warning_type_trans[$item['fault_type']]) ? $warning_type_trans[$item['fault_type']] : '';
            return $module;
        })->all();
        return $this->success($result);
    }

    /*
     * 获取报警记录
     * @param Request $req
     * @return Response
     */
    public function heartSet(Request $req)
    {
        $warning_type_trans = TransHelper::WARNING_TYPE;
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null) {
            $data = [];
        }
        if (!isset($data['id']) || empty($data['id'])) {
            return $this->fail('缺少设备id参数');
        }
        if (!isset($data['cur_interval']) || empty($data['cur_interval'])) {
            return $this->fail('心跳间隔不能为空');
        } else if ($data['cur_interval'] < 0) {
            return $this->fail('请输入正确的心跳间隔');
        }
        if (!isset($data['open_push']) || $data['open_push'] < 0) {
            return $this->fail('请选择是否开启推送');
        }
        if ($data['open_push'] == 0 && (!isset($data['open_type']) || empty($data['open_type']))) {
            return $this->fail('请选择开启方式');
        }
        if (!isset($data['push_st']) || $data['push_st'] < 0) {
            return $this->fail('请选择推送开始时间段');
        }
        if (!isset($data['push_et']) || $data['push_et'] < 0) {
            return $this->fail('请选择推送开始时间段');
        }
        $id = (int)$data['id'];
        $open_push = (int)$data['open_push'];
        $open_type = (int)$data['open_type'];
        $push_st = (int)$data['push_st'];
        $push_et = (int)$data['push_et'];
        $device = CommonHelper::isDataExists('device', 'id', $id)->where('is_del', 0)->first();
        if (empty($device)) {
            return $this->fail('此设备不存在');
        }
        DB::table('device')->where('id', $data['id'])->update([
            'cur_interval' => $data['cur_interval'],
            'open_push' => $open_push,
            'open_type' => $open_type,
            'push_st' => $push_st,
            'push_et' => $push_et,
            'open_update_at' => date('Y-m-d H:i:s')
        ]);

        return $this->success();
    }

    /*
    * 获取心跳记录
    * @param Request $req
    * @return Response
    */
    public function heartSearch(Request $req)
    {
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
        if (!isset($data['id']) || empty($data['id'])) {
            return $this->fail('缺少设备id参数');
        }
        $id = (int)$data['id'];
        $device = CommonHelper::isDataExists('device', 'id', $id)->where('is_del', 0)->first();
        if (empty($device)) {
            return $this->fail('此设备不存在');
        }
        ////设备类型1烟感 2智能节点 3门磁 4智能锁5报警设备
        $table = 'heart_records_check';
        if ($device['device_type'] == 1) {
            $table = 'heart_records_smoke';
        } else if ($device['device_type'] == 2) {
            $table = 'heart_records_cover';
        } else if ($device['device_type'] == 3) {
            $table = 'heart_records_door';
        } else if ($device['device_type'] == 4) {
            $table = 'heart_records_lock';
        }
        $result = ['total' => 0, 'list' => []];

        $warnings = DB::table($table)
            ->where('device_id', $id)
            ->where('is_del', 0)
            ->orderBy($data['order_by'], $data['order'])
            ->take(20)
            ->get();

        $result['list'] = $warnings->map(function ($item) {
            $module = $item;
            unset($module['info']);
            return $module;
        })->all();
        return $this->success($result);
    }
}
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
use GuzzleHttp\Client;

class DeviceController extends Controller
{

    /*
     * 获取状态设备数量
     * */
    public function getDeviceNum(Request $req)
    {
        parent::getBaseInfo();
        $enterpriseMapIds = $this->enterpriseMapIds;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $is_limit = 0;//是否增加绑定限制
        if ($userInfo['type'] == 2) {
            $is_limit = 1;
        }
        $cur_id = $userInfo['id'];
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null) {
            $data = [];
        }
        $data_collection = collect($data);
        $type = $data_collection->get('type', 0);  // 1烟感类; 2井盖类; 3温适度类; 4断路检测仪,5为最新设备
        $stationIds = DB::table('station')->select('id')->when(!empty($is_limit), function ($query) use ($cur_id) {
            return $query->where('bind_user_id', $cur_id);
        })->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0)
            ->get()
            ->pluck('id')
            ->all();
        $result = [
            'unknown' => 0,
            'normal' => 0,
            'working' => 0,//工作或操作中
            'warning' => 0,//报警中
            'fault' => 0,//故障中
            'offline' => 0,//离线中
            'total' => 0//总量中
        ];
        $devices = DB::table('device')->select('id', 'device_status')
            ->when(!empty($type), function ($query) use ($type) {
                return $query->where('device_type', $type);
            })
            ->whereIn('station_id', $stationIds)
            ->where('is_del', 0)
            ->get()
            ->groupBy('device_status')
            ->all();
        foreach ($devices as $key => $value) {
            if ($key == 1) {
                $result['unknown'] = count($value);
            } else if ($key == 2) {
                $result['normal'] = count($value);
            } else if ($key == 3) {
                $result['warning'] = count($value);
            } else if ($key == 4) {
                $result['fault'] = count($value);
            } else if ($key == 5) {
                $result['working'] = count($value);
            } else if ($key == 6) {
                $result['offline'] = count($value);
            }
        }
        $result['total'] = (int)$result['unknown'] + (int)$result['normal'] + (int)$result['warning'] + (int)$result['fault'] + (int)$result['working'] + (int)$result['offline'];

        return $this->success($result);

    }


    /*
     * 设备搜索
     * @param Request $req
     * @return Response
     */
    public function search(Request $req)
    {
        parent::getBaseInfo();
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $device_type_trans = TransHelper::DEVICE_BASE_TYPE;
        $door_lock_status = TransHelper::DOOR_LOCK_STATUS;
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
        //运营类型默认0全部1电蛙
        $query = $data_collection->get('query', '');
        $type = $data_collection->get('type', 1);  // 1烟感类; 2井盖类; 3温适度类; 4断路检测仪,5为最新设备
        $station_id = $data_collection->get('station_id', 0);
        if (!empty($station_id)) {
            $data['order_by'] = 'device_name';
            $data['order'] = 'asc';
        }
        $result = ['total' => 0, 'list' => []];
        $stationIds = DB::table('station')->select('id')->when(!empty($is_limit), function ($query) use ($cur_id) {
            return $query->where('bind_user_id', $cur_id);
        })->whereIn('enterprise_id', $enterpriseMapIds)
            ->where('is_del', 0)
            ->get()
            ->pluck('id')
            ->all();

        $device_base = DB::table('device')->select('id', 'device_name', 'device_number', 'station_id',
            'province_id', 'city_id', 'district_id', 'address', 'longitude', 'latitude', 'provider',
            'voltage', 'device_type', 'device_remarks', 'model', 'device_iccid', 'pro_ver', 'device_status',
            'warning_content', 'recent_interval', 'cur_interval', 'recented_at', 'hearted_at', 'manufacturer_id',
            'device_open_info', 'device_heart_info', 'open_push', 'open_type', 'push_st', 'push_et');
        if (!empty($query)) {
            $device_base->where('device_number', 'like', "%$query%")->orWhere('device_name', 'like', "%$query%");
        }
        if (!empty($type)) {
            $device_base->where('device_type', $type);
        }
        if (!empty($station_id)) {
            $device_base->where('station_id', $station_id);
        }
        $device_base->whereIn('station_id', $stationIds)
            ->where('is_del', 0);

        $deviceNum = $device_base->count();
        $result['total'] = (int)$deviceNum;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $offset = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $limit = 20;
        }

        $devices = $device_base->orderBy($data['order_by'], $data['order']);
        if (empty($station_id)) {
            $devices = $device_base->skip($offset)->take($limit);
        }
        $devices = $device_base->get();

        $stationIds = $devices->pluck('station_id')->all();
        $stationInfo = DB::table('station')->select('id', 'name')->whereIn('id', $stationIds)->get()->keyBy('id')->all();

        $result['list'] = $devices->map(function ($item) use ($device_type_trans, $stationInfo, $door_lock_status) {
            $module = $item;
            $module['device_type_name'] = isset($device_type_trans[$item['device_type']]) ? $device_type_trans[$item['device_type']] : '';
            $module['status_name'] = self::statusTrans($item['device_status'], $item['device_type']);//设备类型1烟感 2智能节点 3门磁 4智能锁5报警设备
            $module['station_name'] = isset($stationInfo[$item['station_id']]['name']) ? $stationInfo[$item['station_id']]['name'] : '';//所属设备组或所属线路
            //心跳
            $detail_info = empty($item['device_heart_info']) ? [] : json_decode($item['device_heart_info'], true);
            $uploaded_at = $item['hearted_at'];

            $door_status = isset($detail_info['info']['door_status']) ? $detail_info['info']['door_status'] : -1;//门状态 0开启
            $lock_status = isset($detail_info['info']['lock_status']) ? $detail_info['info']['lock_status'] : -1;//锁状态 1关闭
            $module['temperature'] = isset($detail_info['info']['temperature']) ? $detail_info['info']['temperature'] : '';//温度
            $module['dampness'] = isset($detail_info['info']['humidity']) ? $detail_info['info']['humidity'] : '';//湿度
            $module['beam'] = isset($detail_info['info']['light']) ? $detail_info['info']['light'] . '%' : '';//光照
            $module['inundate'] = (isset($detail_info['info']['water']) && $detail_info['info']['water'] == 1) ? '是' : '否';//是否浸水 是 否
            $module['real_voltage'] = !empty($item['voltage']) ? $item['voltage'] . 'v' : '';//实时电压
            $module['real_quantity'] = isset($detail_info['quantity']) ? $detail_info['quantity'] : '';//电量
            $module['signal'] = isset($detail_info['info']['signal']) ? $detail_info['info']['signal'] : '';//信号
            $module['door_status'] = isset($door_lock_status[$door_status]) ? $door_lock_status[$door_status] : '';
            $module['lock_status'] = isset($door_lock_status[$lock_status]) ? $door_lock_status[$lock_status] : '';
            $module['warning_type'] = isset($detail_info['warning_type']) ? $detail_info['warning_type'] : '';//报警类型或停电类型
            $module['warning_content'] = $item['warning_content'];//报警内容或停电原因
            $module['uploaded_at'] = $uploaded_at;//最后上报时间或停电时间
            unset($module['hearted_at']);
            unset($module['recented_at']);
            unset($module['device_heart_info']);
            unset($module['device_open_info']);
            return $module;
        })->all();
        return $this->success($result);
    }

    /**状态转换
     * @param $device_status
     * @param $device_type
     */
    private static function statusTrans($device_status, $device_type)
    {//设备类型默认1烟感 2智能节点 3门磁 4智能锁5断路检测仪
        //设备状态默认1未知2正常或门磁关闭3门磁开启或异常或告警4故障中5测试中或操作中6离线
        $status_name = '未知';
        if ($device_status == 2) {
            if (in_array($device_type, [1, 2, 4, 5])) {
                $status_name = '正常';
            } else if (in_array($device_type, [3])) {
                $status_name = '关闭';//门磁关闭
            }
        } else if ($device_status == 3) {
            if (in_array($device_type, [1, 4, 5])) {
                $status_name = '报警';
            } else if (in_array($device_type, [2])) {
                $status_name = '异常';
            } else if (in_array($device_type, [3])) {
                $status_name = '开启';//门磁关闭
            }
        } else if ($device_status == 4) {
            $status_name = '故障中';
        } else if ($device_status == 5) {
            $status_name = '操作中';
        } else if ($device_status == 6) {
            $status_name = '离线中';
        }
        return $status_name;
    }

    /**
     * @param Request $req
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
            return $this->fail('缺少设备id参数');
        }
        $id = (int)$data['id'];
        $device = CommonHelper::isDataExists('device', 'id', $id)->where('is_del', 0)->first();
        if (empty($device)) {
            return $this->fail('此设备不存在');
        }
        $fromStation = CommonHelper::isDataExists('station', 'id', $device['station_id'])->where('is_del', 0)->first();
        if (empty($fromStation)) {
            return $this->fail('设备组不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $fromStation['enterprise_id'])) {
            return $this->fail('您没有权限编辑此设备');
        }
        if (isset($data['device_name']) && empty($data['device_name'])) {
            return $this->fail('设备名称不能为空');
        }
        if (isset($data['device_number']) && empty($data['device_number'])) {
            return $this->fail('请输入设备串号');
        }
        if ($device['device_number'] != $data['device_number']) {
            $existedDevice = CommonHelper::isDataExists('device', 'device_number', $data['device_number'])->where('is_del', 0)->first();
            if (!empty($existedDevice)) {
                return $this->fail('此设备串号已存在，请勿重复录入');
            }
        }
        if (isset($data['station_id']) && empty($data['station_id'])) {
            return $this->fail('请选择设备所属的设备组');
        }
        if (isset($data['manufacturer_id']) && empty($data['manufacturer_id'])) {
            return $this->fail('请选择设备制造商');
        }

        if ($data['station_id'] != $device['station_id']) {
            $toStation = CommonHelper::isDataExists('station', 'id', $data['station_id'])->where('is_del', 0)->first();
            if (empty($toStation)) {
                return $this->fail('所选设备组不存在');
            }
            if (!isset($this->enterpriseMap[$toStation['enterprise_id']])) {
                return $this->fail('所选设备组归属单位不存在');
            }
            if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $toStation['enterprise_id'])) {
                return $this->fail('您没有权限将该设备分配到筛选设备组');
            }
        }

        if ($device['device_name'] != $data['device_name']) {
            $existedName = CommonHelper::isDataExists('device', 'device_name', $data['device_name'])->where('station_id', $data['station_id'])->where('is_del', 0)->first();
            if (!empty($existedName)) {
                return $this->fail('此设备所在设备组含有重复名称，请勿重复录入');
            }
        }

        $fields = [
            'device_name',
            'device_number',
            'station_id',
            'country_id',
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
            'device_type',
            'voltage',
            'device_remarks',
            'provider',
            'manufacturer_id'
        ];
        $update = [];
        foreach ($fields as $field) {
            if (isset($data[$field]) && $data[$field] != '') {
                $update[$field] = $data[$field];
            }
        }
        DB::table('device')->where('id', $data['id'])->update($update);

        return $this->success();

    }

    /**
     * 新增设备
     * @param Request $req
     * @return Response
     */
    public function add(Request $req)
    {

        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据错误');
        }
        if (!isset($data['device_name']) || empty($data['device_name'])) {
            return $this->fail('设备名称不能为空');
        }
        if (!isset($data['device_number']) || empty($data['device_number'])) {
            return $this->fail('设备串号不能为空');
        }
        //设备类型默认1，001烟感类 002井盖类 003温适度类 004断路监测仪5杯子报警检测
        if (!isset($data['device_type']) || empty($data['device_type'])) {
            return $this->fail('设备类型不能为空');
        }
        if (!isset($data['manufacturer_id']) || empty($data['manufacturer_id'])) {
            return $this->fail('设备制造商不能为空');
        }

        $existedDevice = CommonHelper::isDataExists('device', 'device_number', $data['device_number'])->where('is_del', 0)->first();
        if (!empty($existedDevice)) {
            return $this->fail('此设备串号已存在，请勿重复录入');
        }
        if (!isset($data['station_id']) || empty($data['station_id'])) {
            return $this->fail('请选择设备所属的设备组');
        }
        $station = CommonHelper::isDataExists('station', 'id', $data['station_id'])->where('is_del', 0)->first();
        if (empty($station)) {
            return $this->fail('设备组不存在');
        }
        $existedName = CommonHelper::isDataExists('device', 'device_name', $data['device_name'])->where('station_id', $data['station_id'])->where('is_del', 0)->first();
        if (!empty($existedName)) {
            return $this->fail('此设备所在设备组含有重复名称，请勿重复录入');
        }
        $enterprise = CommonHelper::isDataExists('enterprise', 'id', $station['enterprise_id'])->where('is_del', 0)->first();
        if (empty($enterprise)) {
            return $this->fail('设备组所属公司不存在');
        }

        $fields = [
            'device_name',
            'device_number',
            'station_id',
            'country_id',
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
            'device_type',
            'voltage',
            'device_remarks',
            'provider',
            'manufacturer_id'
        ];
        $insert = [];
        foreach ($fields as $field) {
            if (isset($data[$field]) && $data[$field] != '') {
                $insert[$field] = $data[$field];
            }
        }
        $resmsg = '';
        try {
            DB::transaction(function () use ($insert) {
                $id = parent::getUid(); //生成唯一标识
                $insert['id'] = $id;
                DB::table('device')->insert($insert);
            });
        } catch (\Exception $e) {
            $resmsg = '智能设备新增失败，请重新添加!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success();
    }

    /**
     * get
     * @param  Request $req
     * @return Response
     */
    public function get(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $device_type_trans = TransHelper::DEVICE_BASE_TYPE;
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            $data = [];
        }
        if (!isset($data['id'])) {
            $data['id'] = 0;
        }
        $id = (int)$data['id'];

        $device = CommonHelper::isDataExists('device', 'id', $id)->where('is_del', 0)->first();
        if (!empty($device)) {
            $device['station_name'] = '';
            $station = CommonHelper::isDataExists('station', 'id', $device['station_id'])->where('is_del', 0)->first();
            if (!empty($station)) {
                if (!in_array($station['enterprise_id'], $enterpriseMapIds)) {
                    return $this->fail('您没有权限查看该设备信息');
                }
                $device['station_name'] = $station['name'];
            }
            $device['device_type_name'] = isset($device_type_trans[$device['device_type']]) ? $device_type_trans[$device['device_type']] : '';
            $device['status_name'] = self::statusTrans($device['device_status'], $device['device_type']);//设备类型1烟感 2智能节点 3门磁 4智能锁5报警设备
        }

        return $this->success($device);
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
        $portsId = [];
        $device = CommonHelper::isDataExists('device', 'id', $id)->where('is_del', 0)->first();
        if (!empty($device)) {
            $station = CommonHelper::isDataExists('station', 'id', $device['station_id'])->where('is_del', 0)->first();
            if (!empty($station)) {
                if (!in_array($station['enterprise_id'], $enterpriseMapIds)) {
                    return $this->fail('您没有权限删除该设备信息');
                }
                DB::table('device')->where('id', $id)->update([
                    'is_del' => 1,
                    'deleted_at' => date('Y-m-d H:i:s'),
                ]);
            }
        }
        return $this->success();
    }

    /**
     * unlock 智能锁远程开锁
     * @param  Request $req
     * @return Response
     */
    public function unlock(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $cur_id = $userInfo['id'];
        $cur_name = $userInfo['name'];
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id'])) {
            return $this->fail('参数错误');
        }
        $id = (int)$data['id'];
        $device = DB::table('device')->select('id', 'device_number')
            ->where('id', $id)
            ->where('is_del', 0)
            ->first();
        if (empty($device)) {
            return $this->fail('此设备不存在');
        } else if (empty($device['device_number'])) {
            return $this->fail('此设备串号为空');
        }
        $did = trim($device['device_number']);
        $url = 'http://101.89.137.126:10223/api/machine/sendOpenCommand?did=' . $did . '&imei_flg=true';
        try {
            $client = new Client(['timeout' => 15]);
            $res = $client->request('GET', $url, [
                'timeout' => 15,
                'connect_timeout' => 2,
            ]);
            if ((int)$res->getStatusCode() !== 200) {
                return $this->fail('unlock response code error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            $insert = [
                'id' => parent::getUid(),
                'device_id' => $id,
                'type' => 1,
                'operator_id' => $cur_id,
                'operator_name' => $cur_name,
            ];
            if ($body == '201') {
                //解锁成功，记录入库
                $insert['content'] = '开启智能锁成功';
                DB::table('device_operate_log')->insert($insert);
            } else {
                //插入开锁失败的记录
                $insert['content'] = '开启智能锁失败';
                DB::table('device_operate_log')->insert($insert);
            }
        } catch (\Exception $e) {
            return $this->fail('unlock fail');
        }

        return $this->success();
    }

}
<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Facades\DB;
use App\Utils\AccountHelper;
use App\Utils\NumTransNameHelper as TransHelper;

class DevicesImport implements ToCollection
{
    /**
     * 原始数据
     * @var
     */
    private $data;
    /**
     * 重复数据
     * @var
     */
    private $repeat;
    /**
     * 过滤后的数据
     * @var
     */
    private $newdata;
    /**
     *库中的设备
     */
    public $device;
    /**
     * 站点
     * @var
     */
    private $station;
    /**
     * 供应商id
     * @var
     */
    private $manufacturer_id;

    /**
     * DevicesImport constructor.
     */
    public function __construct($station, $manufacturer_id)
    {
        $this->station = $station;
        $this->manufacturer_id = $manufacturer_id;
    }

    /**
     * @param Collection $collection
     */
    public function collection(Collection $rows)
    {
        $device_base_type_trans = TransHelper::DEVICE_BASE_TYPE_TRANS;
        $device_base_type_remark = TransHelper::DEVICE_BASE_TYPE_REMARK;
        // 设备号 设备名称 设备类型 备注
        $this->data = $rows;
        $this->compare();//获取正确的数据
        $this->device = $this->deviceInfo();
        if (count($this->newdata) > 0) {
            foreach ($this->newdata as $k => $value) {
                if (in_array($k, $this->device)) {
                    info('DevicesImport double device in DB:' . $k);
                    continue;
                } else {
                    //不在库中的话则入库
                    $id = AccountHelper::getUid();
                    try {
                        $insert = [
                            'id' => $id,
                            'device_name' => isset($value[1]) ? trim($value[1]) : '',
                            'device_number' => isset($value[0]) ? trim($value[0]) : '',
                            'station_id' => $this->station['id'],
                            'province_id' => $this->station['province_id'],
                            'city_id' => $this->station['city_id'],
                            'district_id' => $this->station['district_id'],
                            'province' => $this->station['province'],
                            'city' => $this->station['city'],
                            'district' => $this->station['district'],
                            'address' => $this->station['address'],
                            'longitude' => $this->station['longitude'],
                            'latitude' => $this->station['latitude'],
                            'manufacturer_id' => $this->manufacturer_id,
                            'provider' => (isset($value[3]) && !empty($value[3])) ? trim($value[3]) : '',//备注
                            'device_type' => isset($device_base_type_trans[$value[2]]) ? (int)$device_base_type_trans[$value[2]] : 0,
                            'device_remarks' => isset($device_base_type_remark[$value[2]]) ? $device_base_type_remark[$value[2]] : '',
                        ];
                        DB::table('device')->insert($insert);
                    } catch (\Exception $e) {
                        logger('DevicesImport collection occur exception device id:' . $id);
                    }
                }
            }
        }
        return true;
    }

    /**
     * 返回重复的数据，将不重复的入库
     * @return bool
     */
    protected function compare()
    {
        $repeatdata = [];
        $newdata = [];
        $info = $this->data;
        //对数据进行比较
        foreach ($info as $k => $row) {
            if ($k == 0) {
                continue;
            }
            $number = trim($row[0]);
            if (!array_key_exists($number, $newdata)) {
                $newdata[$number] = $row;
            } else {
                $repeatdata[] = $number;
            }
        }
        $this->newdata = $newdata;
        $this->repeat = $repeatdata;
        return true;
    }

    /**
     * 获取数据库的设备号
     * @return mixed
     */
    public function deviceInfo()
    {
        return DB::table('device')->select('device_number')->where('is_del', 0)->get()->pluck('device_number')->all();
    }

    /**
     * 获取有差异的数据
     * @return mixed
     */
    public function getrepeat()
    {
        return $this->repeat;
    }

}

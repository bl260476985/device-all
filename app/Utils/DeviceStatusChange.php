<?php

namespace App\Utils;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class DeviceStatusChange
{
    /**
     * get an instance
     * @return
     */

    public function __construct()
    {

    }

    /**
     * send
     * @param string $type
     * @param string $phone
     * @param string $code
     * @return
     */
    public function statusChange()
    {
        ini_set('max_execution_time', 0);

        DB::table('device')->select('id', 'device_status', 'recent_interval', 'hearted_at')
            ->where('is_del', 0)
            ->orderBy('id')
            ->chunk(2000, function ($devices) {
                //每个设备的记录
                foreach ($devices as $device) {
                    $status = $device['device_status'];
                    if (in_array($status, [1, 6])) {
                        continue;
                    }
                    //上一次间隔+上一次上报心跳时间
                    if (((int)($device['recent_interval'] * 3600) + strtotime($device['hearted_at'])) < time()) {
                        $update = [
                            'device_status' => 6,
                        ];
                        DB::table('device')->where('id', $device['id'])->update($update);
                        info('sw_device update status success: id=>' . $device['id']);
                    }
                }
            });
    }

}

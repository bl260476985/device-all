<?php

namespace App\Utils;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class PushStatusChange
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
        DB::table('device')->select('id', 'open_push', 'open_type', 'open_update_at')
            ->where('is_del', 0)
            ->orderBy('id')
            ->chunk(2000, function ($devices) {
                //每个设备的记录
                foreach ($devices as $device) {
                    $open_push = (int)$device['open_push'];
                    $open_type = (int)$device['open_type'];
                    if ($open_push == 1 || $open_type == -1) {
                        //打开的过滤掉 或者 手动开启
                        continue;
                    }
                    //开启时间 + 所选时间 小于当前时间 则重置开关为打开
                    if (!empty($device['open_update_at']) && ($open_type + strtotime($device['open_update_at'])) < time()) {
                        $update = [
                            'open_push' => 1,
                        ];
                        DB::table('device')->where('id', $device['id'])->update($update);
                        info('PushStatusChange sw_device update open_push success: id=>' . $device['id']);
                    }
                }
            });
    }

}

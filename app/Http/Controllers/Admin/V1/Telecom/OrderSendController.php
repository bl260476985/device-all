<?php

namespace App\Http\Controllers\Admin\V1\Telecom;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class OrderSendController extends Controller
{

    /*
     * 根据类型订阅消息
     * */
    public function send(Request $req)
    {
        $data = json_decode(trim($req->getContent()), true);
        if (!isset($data['device_number']) || empty($data['device_number'])) {
            return $this->fail('设备编号不能为空');
        }
        $is_stop = !isset($data['Is_stop']) ? '0' : $data['Is_stop'];
        if ($is_stop != '0' && $is_stop != '1') {
            return $this->fail('停止报警参数有误');
        }
        $nodeId = trim($data['device_number']);
        $device = DB::table('device')->select('id', 'device_mini_Id', 'device_name', 'cur_interval')->where('device_number', $nodeId)->where('is_del', 0)->first();
        if (empty($device)) {
            return $this->fail('设备不存在');
        }
        $device_mini_Id = trim($device['device_mini_Id']);
        $token = Cache::store('redis')->get('TELECOM_ACCESS_TOKEN');
        if (empty($token)) {
            return $this->fail('token失效,请重新获取');
        }
        $appId = Config::get('app.app_key');
        $ca_path = Config::get('app.ca_path');
        $private_path = Config::get('app.private_path');
        $url = Config::get('app.app_url') . '/iocm/app/cmd/v1.4.0/deviceCommands';
        try {
            $client = new Client(['timeout' => 300]);
            $res = $client->request('POST', $url, [
                    'cert' => $private_path,//对方的
                    'verify' => env('SSL_VERIFY', false),//校验服务器端的ca证书和域名是否合法
                    'timeout' => 300,
                    'connect_timeout' => 120,
                    'headers' => [
                        'app_key' => $appId,
                        'Authorization' => 'Bearer ' . $token
                    ],
                    'json' => [
                        'deviceId' => $device_mini_Id,
                        'command' => [
                            'serviceId' => 'Alarm_SRV',
                            'method' => 'ALARM_PARA_DOWN',
                            'paras' => [
                                'Is_stop' => $is_stop,
                                'interval' => sprintf('%03s', $device['cur_interval']),
                                'RESERVED' => '0',
                            ],
                        ],
                        'callbackUrl' => Config::get('app.callback_url') . '/admin/v2/telecom/order/result',
                    ]
                ]
            );
            if ((int)$res->getStatusCode() !== 201) {
                return $this->fail('device order push error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            info('device order push response', $body);
        } catch (\Exception $e) {
            logger($e->getMessage());
            return $this->fail('设备命令下发失败');
        }
        return $this->success();
    }

    /**
     * 下发命令的回掉接口
     * @param Request $req
     * @return Response
     */
    public function resultback(Request $req)
    {
        return $this->success();
    }
}
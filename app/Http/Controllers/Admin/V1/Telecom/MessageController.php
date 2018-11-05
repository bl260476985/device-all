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

class MessageController extends Controller
{

    /*
     * 根据类型订阅消息
     * */
    public function message(Request $req)
    {
        $data = json_decode(trim($req->getContent()), true);
        if (!isset($data['notifyType']) || empty($data['notifyType'])) {
            return $this->fail('通知类型不能为空');
        }
        $notifyType = trim($data['notifyType']);//deviceInfoChanged 或  deviceDatasChanged
        $token = Cache::store('redis')->get('TELECOM_ACCESS_TOKEN');
        if (empty($token)) {
            return $this->fail('token失效,请重新获取');
        }
        $appId = Config::get('app.app_key');
        $ca_path = Config::get('app.ca_path');
        $private_path = Config::get('app.private_path');
        $url = Config::get('app.app_url') . '/iocm/app/sub/v1.2.0/subscriptions';
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
                        'notifyType' => $notifyType,
                        'callbackUrl' => '',
                        'appId' => $appId,
                    ]
                ]
            );
            if ((int)$res->getStatusCode() !== 201) {
                return $this->fail('message create error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            info('message create info response', $body);
        } catch (\Exception $e) {
            logger($e->getMessage());
            return $this->fail('消息订阅失败');
        }
        return $this->success();
    }
}
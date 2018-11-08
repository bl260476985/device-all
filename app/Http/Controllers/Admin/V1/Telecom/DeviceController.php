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

class DeviceController extends Controller
{

    /*
     * 获取对接token
     * */
    public function login(Request $req)
    {
        $appId = Config::get('app.app_key');
        $secret = Config::get('app.app_secret');
        $url = Config::get('app.app_url') . '/iocm/app/sec/v1.1.0/login';
        $ca_path = Config::get('app.ca_path');
        $private_path = Config::get('app.private_path');
        try {
            $client = new Client(['timeout' => 300]);
            $res = $client->request('POST', $url, [
                'cert' => $private_path,//对方的
                'verify' => env('SSL_VERIFY', false),//校验服务器端的ca证书和域名是否合法
                'timeout' => 300,
                'connect_timeout' => 120,
                'form_params' => ['appId' => $appId, 'secret' => $secret]
            ]);
            if ((int)$res->getStatusCode() !== 200) {
                return $this->fail('telecom request access token error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            $expired = $body['expiresIn'] - 360;
            if (isset($body['accessToken']) && !empty($body['accessToken'])) {
                Cache::store('redis')->put('TELECOM_ACCESS_TOKEN', $body['accessToken'], (int)($expired / 60));
            }
            info('TELECOM_ACCESS_TOKEN access token:' . $body['accessToken']);
        } catch (\Exception $e) {
            return $this->fail('telecom 获取token失败');
        }
        return $this->success();
    }

    /*
     *单个注册设备
     */
    public function register(Request $req)
    {
        $data = json_decode(trim($req->getContent()), true);
        if (!isset($data['device_number']) || empty($data['device_number'])) {
            return $this->fail('设备编号不能为空');
        }
        $nodeId = trim($data['device_number']);
        $device = DB::table('device')->select('id')->where('device_number', $nodeId)->where('is_del', 0)->first();
        if (empty($device)) {
            return $this->fail('设备不存在');
        }

        $token = Cache::store('redis')->get('TELECOM_ACCESS_TOKEN');
        if (empty($token)) {
            return $this->fail('token失效,请重新获取');
        }
        $appId = Config::get('app.app_key');
        $ca_path = Config::get('app.ca_path');
        $private_path = Config::get('app.private_path');
        $url = Config::get('app.app_url') . '/iocm/app/reg/v1.1.0/deviceCredentials?appId=' . $appId;
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
                        'verifyCode' => $nodeId,//验证码与nodeID相同
                        'nodeId' => $nodeId,//设备编码
                        'timeout' => 86400,//秒
                    ]
                ]
            );
            if ((int)$res->getStatusCode() !== 200) {
                return $this->fail('device register request error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            if (isset($body['deviceId']) && !empty($body['deviceId'])) {
                info('device register response', $body);
                DB::table('device')->where('id', $device['id'])->update([
                    'device_mini_Id' => isset($body['deviceId']) ? $body['deviceId'] : '',
                    'psk' => isset($body['psk']) ? $body['psk'] : '',
                ]);
            }
        } catch (\Exception $e) {
            return $this->fail('设备注册失败');
        }
        return $this->success();
    }

    /*
    *刷新单个设备的nodeid
    */
    public function refreshNodeId(Request $req)
    {
        $data = json_decode(trim($req->getContent()), true);
        if (!isset($data['device_number']) || empty($data['device_number'])) {
            return $this->fail('设备编号不能为空');
        }
        $nodeId = trim($data['device_number']);
        $device = DB::table('device')->select('id', 'device_mini_Id')->where('device_number', $nodeId)->where('is_del', 0)->first();
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
        $url = Config::get('app.app_url') . '/iocm/app/reg/v1.1.0/deviceCredentials/' . $device['device_mini_Id'] . '?appId=' . $appId;
        try {
            $client = new Client(['timeout' => 300]);
            $res = $client->request('PUT', $url, [
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
                        'verifyCode' => $nodeId,//验证码与nodeID相同
                        'nodeId' => $nodeId,//设备编码
                    ]
                ]
            );
            if ((int)$res->getStatusCode() !== 200) {
                return $this->fail('device update node error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            info('device update node response', $body);
        } catch (\Exception $e) {
            logger($e->getMessage());
            return $this->fail('设备更新node失败');
        }
        return $this->success();
    }

    /*
*刷新单个设备的info
*/
    public function refreshInfo(Request $req)
    {
        $data = json_decode(trim($req->getContent()), true);
        if (!isset($data['device_number']) || empty($data['device_number'])) {
            return $this->fail('设备编号不能为空');
        }
        if (!isset($data['manufacturerId']) || empty($data['manufacturerId'])) {
            return $this->fail('厂商id不能为空');
        }
        if (!isset($data['manufacturerName']) || empty($data['manufacturerName'])) {
            return $this->fail('产商名称不能为空');
        }
        if (!isset($data['deviceType']) || empty($data['deviceType'])) {
            return $this->fail('设备类型不能为空');
        }
        if (!isset($data['model']) || empty($data['model'])) {
            return $this->fail('设备型号不能为空');
        }
        if (!isset($data['protocolType']) || empty($data['protocolType'])) {
            return $this->fail('协议类型不能为空');
        }
        if (!isset($data['location']) || empty($data['location'])) {
            return $this->fail('设备位置不能为空');
        }
        $nodeId = trim($data['device_number']);
        $device = DB::table('device')->select('id', 'device_mini_Id', 'device_name')->where('device_number', $nodeId)->where('is_del', 0)->first();
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
        $url = Config::get('app.app_url') . '/iocm/app/dm/v1.4.0/devices/' . $device['device_mini_Id'] . '?appId=' . $appId;
        try {
            $client = new Client(['timeout' => 300]);
            $res = $client->request('PUT', $url, [
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
                        'name' => $device['device_name'],
                        'manufacturerId' => trim($data['manufacturerId']),//厂商id
                        'manufacturerName' => trim($data['manufacturerName']),//产商名称
                        'deviceType' => trim($data['deviceType']),//设备类型
                        'model' => trim($data['model']),//设备型号
                        'protocolType' => trim($data['protocolType']),//协议类型
                        'location' => trim($data['location']),//设备位置
                    ]
                ]
            );
            if ((int)$res->getStatusCode() !== 204) {
                return $this->fail('device update info error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            if (empty($body)) {
                $body = [];
            }
            info('device update info response', $body);
        } catch (\Exception $e) {
            logger($e->getMessage());
            return $this->fail('设备更新info失败');
        }
        return $this->success();
    }

    /**
     * 删除设备
     * @param Request $req
     * @return Response
     */

    public function delete(Request $req)
    {
        $data = json_decode(trim($req->getContent()), true);
        if (!isset($data['device_number']) || empty($data['device_number'])) {
            return $this->fail('设备编号不能为空');
        }
        $nodeId = trim($data['device_number']);
        $device = DB::table('device')->select('id', 'device_mini_Id', 'device_name')->where('device_number', $nodeId)->where('is_del', 0)->first();
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
        $url = Config::get('app.app_url') . '/iocm/app/dm/v1.4.0/devices/' . $device['device_mini_Id'] . '?appId=' . $appId;
        try {
            $client = new Client(['timeout' => 300]);
            $res = $client->request('DELETE', $url, [
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
                    ]
                ]
            );
            if ((int)$res->getStatusCode() !== 204) {
                return $this->fail('device delete error');
            }
            $body = json_decode(trim((string)$res->getBody()), true);
            info('device delete response', $body);
        } catch (\Exception $e) {
            logger($e->getMessage());
            return $this->fail('设备删除失败');
        }
        return $this->success();
    }
}
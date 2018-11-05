<?php

namespace App\Http\Controllers\Api\V1\DeviceClient;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\BaseApiController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;


class DeviceController extends BaseApiController
{

    /**
     * login
     * @param  Request $req
     * @return Response
     */
    public function login(Request $req)
    {
        $time = time();
        $data = $this->Dealparam(trim($req->getContent()));
        if (!is_array($data) || count($data) != 6) {
            return response('{fail,' . $time . ',}');
        }
        if (is_array($data) && count($data) == 6) {
            return response('{Ok,' . $time . ',}');
        }
    }

    /**
     * 设备状态上报
     * @param Request $req
     */
    public function report(Request $req)
    {
        $data = $this->Dealparam(trim($req->getContent()));
        if (!is_array($data) || count($data) != 6) {
            return response('{fail,}');
        }

        if (is_array($data) && count($data) == 6) {
            return response('{Ok,}');
        }
    }

    /**
     * 心跳及设置
     * @param Request $req
     * @return Response
     */
    public function heartSet(Request $req)
    {
        $data = $this->Dealparam(trim($req->getContent()));

        if (!is_array($data) || count($data) != 5) {
            return response('{fail,1,}');
        }
        if (is_array($data) && count($data) == 5) {
            return response('{Ok,1,}');
        }
    }

}
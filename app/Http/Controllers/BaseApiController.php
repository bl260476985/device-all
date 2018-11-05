<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class BaseApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * build the JSON response
     * @param  integer $code
     * @param  string $msg
     * @param  array $data
     * @return \Illuminate\Http\Response
     */
    protected function buildJSONResponse($status, $msg = '', $data = [])
    {
        $key = '';
        $value = '';
        if (count($data) == 2) {
            list($key, $value) = $data;
        }
        if (!empty($key)) {
            return response()->json(['status' => $status, 'msg' => $msg, $key => $value]);
        } else {
            return response()->json(['status' => $status, 'msg' => $msg]);
        }
    }

    /**
     * success
     * @param  integer $code
     * @param  string $msg
     * @param  array $data
     * @return \Illuminate\Http\Response
     */
    protected function success($data = [])
    {
        return $this->buildJSONResponse('ok', '', $data);
    }

    /**
     * fail
     * @param  string $msg
     * @param  array $data
     * @return \Illuminate\Http\Response
     */
    protected function fail($msg, $data = [])
    {
        return $this->buildJSONResponse('fail', $msg, $data);
    }

    /**
     * @param $param
     * @return array|string
     * 获取桩端参数
     */
    protected function Dealparam($param)
    {
        $len = strlen($param);

        if($len < 3){
            $time = date('Y-m-d H:i:s');
            return 'fail';
        }

        $str_array = explode(',',substr($param,1,$len-2));

        return $str_array;


    }

}

<?php

namespace App\Http\Middleware;

use App\Utils\VarStore;
use Closure;

class DataCheckValidator extends Validator
{
    const SOURCE_TYPE = [
        'sirius' => 'DzI3ZTkxODIXUzTzZjdhZXTlOTc8lPX7',
    ];

    public function __construct()
    {
        $this->responseCode = 5000;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed  session(['key' => 'value']);
     */
    public function handle($request, Closure $next)
    {
        $authorization = trim($request->header('Authorization', ''));
        $authorization = substr($authorization, strpos($authorization, ' '));
        $parts = explode(':', base64_decode($authorization));
        if (count($parts) !== 2) {
            return $this->fail('请求参数错误');
        }
        $name = trim($parts[0]);
        $sign = trim($parts[1]);
        $random = trim($request->header('r', ''));
        if (empty($name) || empty($sign) || empty($random)) {
            return $this->fail('请求参数错误');
        }
        logger('name:' . $name . ',sign:' . $sign . ',random:' . $random);
        $sourceType = self::SOURCE_TYPE;
        $source = isset($name) ? trim($name) : '';
        if (empty($source)) {
            return $this->fail('缺少调用来源');
        }
        $key = isset($sourceType[$source]) ? trim($sourceType[$source]) : '';
        $correct = md5('Sirius' . $random . $key);
        if ($correct == $sign) {
            logger("check sign true, the key is" . $key);
        } else {
            return $this->fail('鉴权失败');
        }
        return $next($request);
    }
}

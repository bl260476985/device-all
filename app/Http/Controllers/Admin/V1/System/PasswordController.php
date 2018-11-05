<?php

namespace App\Http\Controllers\Admin\V1\System;

use App\Utils\CommonHelper;
use App\Utils\OperateRecordHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\VarStore;

class PasswordController extends Controller
{

    /**
     * update
     * @param  Request $req
     * @return
     */
    public function update(Request $req)
    {
        parent::getBaseInfo();
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if (!isset($data) || $data == '') {
            return $this->fail('数据格式错误');
        }
        if (!isset($data['oldPwd']) || empty($data['oldPwd'])) {
            return $this->fail('请输入原密码');
        }
        if (!isset($data['newPwd']) || empty($data['newPwd'])) {
            return $this->fail('请输入新密码');
        }
        $oldPwd = trim($data['oldPwd']);
        $newPwd = trim($data['newPwd']);
        $confirm = trim($data['confirm']);
        if ($confirm !== $newPwd) {
            return $this->fail('两次输入的密码不符');
        }
        $user = DB::table('system_user')->where('id', $userInfo['id'])->where('is_del', 0)->first();
        if (empty($user)) {
            return $this->fail('用户不存在');
        }
        $authen = DB::table('system_user_authen')->where('user_id', $user['id'])->where('is_del', 0)->first();
        if (empty($authen)) {
            return $this->fail('用户不存在');
        }
        $oldPwdEncrypted = AccountHelper::encryptPassword($oldPwd, $authen['seed']);
        if ($authen['pass'] != $oldPwdEncrypted) {
            return $this->fail('原密码不正确');
        }
        if (!AccountHelper::isPasswordValid($newPwd)) {
            return $this->fail('新密码格式不正确');
        }
        $newPwdEncrypted = AccountHelper::encryptPassword($newPwd, $authen['seed']);

        DB::table('system_user_authen')->where('id', $authen['id'])->update([
            'pass' => $newPwdEncrypted,
        ]);
        return $this->success();
    }


}
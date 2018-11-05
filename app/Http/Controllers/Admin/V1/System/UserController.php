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
use Mockery\Exception;

class UserController extends Controller
{

    /**
     * search
     * @param  Request $req
     * @return
     */
    public function search(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'created_at';
        }
        if (!isset($data['group_obj']) || empty($data['group_obj'])) {
            $data['group_obj'] = [
                'id' => null,
                'name' => ''
            ];
        }
        if (!isset($data['user_obj']) || empty($data['user_obj'])) {
            $data['user_obj'] = [
                'id' => null,
                'name' => ''
            ];
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        if (!isset($data['offset'])) {
            $data['offset'] = 0;
        }
        if (!isset($data['limit'])) {
            $data['limit'] = 20;
        }
        //系统用户组
        $group_obj_id = isset($data['group_obj']['id']) ? (int)$data['group_obj']['id'] : 0;
        $group_obj_name = isset($data['group_obj']['name']) ? (string)$data['group_obj']['name'] : '';
        $user_obj_id = isset($data['user_obj']['id']) ? (int)$data['user_obj']['id'] : 0;
        $user_obj_name = isset($data['user_obj']['id']) ? (string)$data['user_obj']['name'] : '';
        //获取站点所有集合
        $groupIdsMap = self::searchMapSystemGroups($enterpriseMapIds);

        $group_obj_id = CommonHelper::idCollectByName($group_obj_id, $groupIdsMap, 'name', $group_obj_name);

        $result = ['total' => 0, 'list' => []];
        $users_base = DB::table('system_user')->when(count($group_obj_id) > 0, function ($query) use ($group_obj_id) {
            return $query->whereIn('group_id', $group_obj_id);
        })->when(!empty($user_obj_id), function ($query) use ($user_obj_id) {
            return $query->where('id', $user_obj_id);
        })->when(empty($user_obj_id) && !empty($user_obj_name), function ($query) use ($user_obj_name) {
            return $query->where('name', 'like', '%' . $user_obj_name . '%');
        })->whereIn('enterprise_id', $enterpriseMapIds)->where('is_del', 0);

        $users_count = $users_base->count();
        $result['total'] = $users_count;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $data['offset'] = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $data['limit'] = 20;
        }
        $users = $users_base->orderBy($data['order_by'], $data['order'])
            ->skip($data['offset'])
            ->take($data['limit'])
            ->get();

        $result['list'] = $users->map(function ($item) use ($enterpriseMap) {
            $module = $item;
            $module['enterprise_name'] = '';
            $module['level'] = 0;
            if (array_key_exists($item['enterprise_id'], $enterpriseMap)) {
                $module['enterprise_name'] = $enterpriseMap[$item['enterprise_id']]['name'];
                $module['level'] = $enterpriseMap[$item['enterprise_id']]['level'];
            }
            $module['status'] = '';
            if ($item['status'] == 1) {
                $module['status'] = '正常';
            } else if ($item['status'] == 2) {
                $module['status'] = '封禁';
            }
            $module['gender'] = '';
            if ($item['gender'] == 1) {
                $module['gender'] = '男';
            } else if ($item['gender'] == 2) {
                $module['gender'] = '女';
            }
            $module['type_name'] = '';
            if ($item['type'] == 0 || $item['type'] == 1) {
                $module['type_name'] = '系统管理员';
            } else if ($item['type'] == 2) {
                $module['type_name'] = '运维人员';
            }
            return $module;
        })->all();
        return $this->success($result);
    }

    /**
     * get current
     * @param  Request $req
     * @return
     */
    public function getCurrent(Request $req)
    {
        parent::getBaseInfo();
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        if (!empty($userInfo) && is_array($userInfo)) {
            $userInfo['enterprise_name'] = '';
            $userInfo['enterprise_level'] = 0;
            $enterprise = $this->enterpriseMap;
            //获取对应公司id
            $curEnterprise = collect($enterprise)->where('id', $userInfo['enterprise_id'])->first();
            if (!empty($curEnterprise)) {
                $userInfo['enterprise_name'] = $curEnterprise['name'];
                $userInfo['enterprise_level'] = $curEnterprise['level'];
            }
            //返回用户所拥有的模块
            $userInfo['system_group_modules'] = AccountHelper::getCurGroupModules($userInfo['group_id']);
        }

        return $this->success($userInfo);
    }

    /**
     * get
     * @param  Request $req
     * @return
     */
    public function get(Request $req)
    {
        //对id进行加密解决可预测性
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            $data = [];
        }
        if (!isset($data['id'])) {
            $data['id'] = '';
        }
        $id = $data['id'];
        $parts = explode(':', base64_decode(substr($id, strpos($id, ' '))));
        if (!is_array($parts)) {
            return $this->fail('加密格式有问题');
        }
        $id = (int)$parts[1];
        if (empty($id)) {
            return $this->fail('系统用户ID不对');
        }
        $user = CommonHelper::isDataExists('system_user', 'id', $id)->where('is_del', 0)->first();
        if (!empty($user)) {
            if (!in_array($user['enterprise_id'], $enterpriseMapIds)) {
                return $this->fail('您没有权限查看该用户信息');
            }
            $user['group_name'] = '';
            if (!empty($user['group_id'])) {
                $system_user = CommonHelper::isDataExists('system_user_group_new', 'id', $user['group_id'])->where('is_del', 0)->first();
                $user['group_name'] = $system_user['name'];
            }
            $user['enterprise_name'] = '';
            if (isset($enterpriseMap[$user['enterprise_id']])) {
                $user['enterprise_name'] = $enterpriseMap[$user['enterprise_id']]['name'];
            }
            if ($user['birthday'] == '0000-00-00') {
                $user['birthday'] = '';
            }
        }
        return $this->success($user);
    }

    /**
     * add新增系统用户
     * @param  Request $req
     * @return
     */
    public function add(Request $req)
    {
        parent::getBaseInfo();
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $curEnterprise = collect($enterpriseMap)->where('id', $userInfo['enterprise_id'])->first();
        $curLevel = empty($curEnterprise['level']) ? 0 : (int)$curEnterprise['level'];
        if (empty($curLevel)) {
            return $this->fail('当前登陆用户公司级别异常');
        }
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['enterprise_id']) || empty($data['enterprise_id'])) {
            return $this->fail('请选择所属公司');
        }
        if (empty($this->enterpriseMap[$data['enterprise_id']])) {
            return $this->fail('所属公司不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($this->enterpriseMap, $this->curAdminUser, $data['enterprise_id'])) {
            return $this->fail('您没有权限在此公司下添加系统用户');
        }
        if (!isset($data['name']) || empty($data['name'])) {
            return $this->fail('请输入用户名');
        }
        if (!isset($data['phone']) || empty($data['phone'])) {
            return $this->fail('请输入手机号');
        }
        $existedUser = CommonHelper::isDataExists('system_user', 'name', $data['name'])->where('is_del', 0)->first();
        if (!empty($existedUser)) {
            return $this->fail('此用户名已存在');
        }
        //默认1为男2为女
        if (!isset($data['gender'])) {
            $data['gender'] = 1;
        }
        if ($data['gender'] == 1) {
            $data['face'] = 'male.png';
        } else {
            $data['face'] = 'female.png';
        }
        if (!isset($data['group_id']) || empty($data['group_id'])) {
            return $this->fail('请选择系统用户组');
        }
        if (!isset($data['type']) || empty($data['type'])) {
            return $this->fail('请选择用户类型');
        }

        $fields = [
            'name',
            'phone',
            'email',
            'realname',
            'face',
            'gender',
            'birthday',
            'province_id',
            'city_id',
            'district_id',
            'country',
            'province',
            'city',
            'district',
            'address',
            'enterprise_id',
            'group_id',
            'type'
        ];
        $insert = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $insert[$field] = $data[$field];
            }
        }
        //增加用户角色
        $insert['parent_cre_id'] = $userInfo['id'];
        $resmsg = '';
        $user_id = 0;
        try {
            DB::transaction(function () use ($insert, $data, &$user_id) {
                $user_id = parent::getUid(); //生成唯一标识
                $insert['id'] = $user_id;
                $insert['status'] = 1;  //0全部1正常2封禁
                DB::table('system_user')->insert($insert);
                $pwdmsg = AccountHelper::initpwd();//获取初始化密码和随机码
                DB::table('system_user_authen')->insert([
                    'id' => parent::getUid(), //生成唯一标识
                    'name' => $data['name'],
                    'pass' => $pwdmsg['pass'],
                    'seed' => $pwdmsg['seed'],
                    'user_id' => $user_id,
                    'status' => 1,//默认0全部1正常2封禁
                ]);
            });
        } catch (\Exception $e) {
            $resmsg = '系统用户新增失败，请重试!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success(['id' => $user_id, 'pwd' => 'Sirius123456']);
    }

    /**
     * delete
     * @param  Request $req
     * @return
     */
    public function delete(Request $req)
    {
        parent::getBaseInfo();
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id'])) {
            return $this->fail('参数错误');
        }
        $id = (int)$data['id'];
        if ($id == $this->curAdminUser['id']) {
            return $this->fail('无法删除自身账号');
        }
        $user = CommonHelper::isDataExists('system_user', 'id', $id)->where('is_del', 0)->first();
        if (empty($user)) {
            return $this->fail('用户不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($this->enterpriseMap, $this->curAdminUser, $user['enterprise_id'])) {
            return $this->fail('您没有权限删除该系统用户');
        }
        $resmsg = '';
        try {
            DB::transaction(function () use ($id) {
                CommonHelper::isDataExists('system_user_authen', 'user_id', $id)->where('is_del', 0)->update([
                    'is_del' => 1,
                    'deleted_at' => date('Y-m-d H:i:s'),
                ]);
                CommonHelper::isDataExists('system_user', 'id', $id)->where('is_del', 0)->update([
                    'is_del' => 1,
                    'deleted_at' => date('Y-m-d H:i:s'),
                ]);
                DB::table('wx_user')->where('user_id', $id)->update([
                    'user_id' => 0
                ]);
                DB::table('station')->where('bind_user_id', $id)->update([
                    'bind_user_id' => 0
                ]);
            });
        } catch (\Exception $e) {
            $resmsg = '系统用户删除失败，请重试!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success();
    }

    /**
     * update
     * @param  Request $req
     * @return
     */
    public function update(Request $req)
    {
        parent::getBaseInfo();
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $curEnterprise = collect($enterpriseMap)->where('id', $userInfo['enterprise_id'])->first();
        $curLevel = empty($curEnterprise['level']) ? 0 : (int)$curEnterprise['level'];
        if (empty($curLevel)) {
            return $this->fail('当前登陆用户公司级别异常');
        }
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id']) || empty($data['id'])) {
            return $this->fail('数据格式不对');
        }
        $id = (int)$data['id'];
        $user = CommonHelper::isDataExists('system_user', 'id', $id)->where('is_del', 0)->first();
        if (empty($user)) {
            return $this->fail('用户不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $user['enterprise_id'])) {
            return $this->fail('您没有权限编辑此系统用户');
        }
        if (isset($data['name']) && empty($data['name'])) {
            return $this->fail('请输入用户名');
        }
        if (isset($data['phone']) && empty($data['phone'])) {
            return $this->fail('请输入手机号');
        }
        if ($data['name'] !== $user['name']) {
            $existedUser = CommonHelper::isDataExists('system_user', 'name', $data['name'])->where('is_del', 0)->first();
            if (!empty($existedUser)) {
                return $this->fail('用户名和已有用户重复');
            }
        }
        if (isset($data['gender'])) {
            $data['face'] = 'female.png';
            if ($data['gender'] == 1) {
                //1为男性
                $data['face'] = 'male.png';
            }
        }
        if (isset($data['group_id']) && empty($data['group_id'])) {
            return $this->fail('请选择系统用户组');
        }
        if (isset($data['enterprise_id']) && empty($data['enterprise_id'])) {
            return $this->fail('请选择所属公司');
        }
        if (isset($data['enterprise_id']) && empty($enterpriseMap[$data['enterprise_id']])) {
            return $this->fail('所属公司不存在');
        }
        if (isset($data['type']) && empty($data['type'])) {
            return $this->fail('请选择用户类型');
        }
        $fields = [
            'name',
            'phone',
            'email',
            'realname',
            'face',
            'gender',
            'birthday',
            'province_id',
            'city_id',
            'district_id',
            'country',
            'province',
            'city',
            'district',
            'address',
            'enterprise_id',
            'group_id',
            'type'
        ];
        $update = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $update[$field] = $data[$field];
            }
        }
        //更新个人信息
        CommonHelper::isDataExists('system_user', 'id', $id)->where('is_del', 0)->update($update);
        if (isset($data['name']) && $data['name'] != $user['name']) {
            DB::table('system_user_authen')->where('user_id', $id)->where('is_del', 0)->update([
                'name' => $data['name'],
            ]);
        }
        return $this->success();
    }

    /**
     * login
     * @param  Request $req
     * @return
     * //        $captcha = trim($req->input('captcha'));
     * //验证二维码
     * //        $code = new \Code();
     * //        $_code = $code->get();
     * //        if (strtoupper($captcha) != $_code) {
     * //            return $this->fail('请重新输入验证码');
     * //        }
     */
    public function login(Request $req)
    {
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['name']) || empty($data['name'])) {
            return $this->fail('请输入用户名');
        }
        if (!isset($data['passwd']) || empty($data['passwd'])) {
            return $this->fail('请输入密码');
        }
        $name = trim($data['name']);
        $pwd = trim($data['passwd']);

        $parts = explode(':', base64_decode(substr($pwd, strpos($pwd, ' '))));
        if (!is_array($parts)) {
            return $this->fail('密码解析失败');
        }
        $pwd = isset($parts[1]) ? $parts[1] : '';
        $user = CommonHelper::isDataExists('system_user', 'name', $name)->where('is_del', 0)->first();
        if (empty($user)) {
            return $this->fail('系统用户不存在');
        }
        $authen = CommonHelper::isDataExists('system_user_authen', 'name', $name)->where('is_del', 0)->first();
        if (empty($authen) || (AccountHelper::encryptPassword($pwd, $authen['seed']) != $authen['pass'])) {
            return $this->fail('用户名或密码错误');
        }
        $id = parent::getUid(); //生成唯一标识
        $resmsg = AccountHelper::login($authen['user_id'], $req->ip(), $id);
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success(['user_id' => $authen['user_id']]);
    }

    /**
     * logout
     * @param  Request $req
     * @return
     */
    public function logout(Request $req)
    {
        $currentUserID = !empty(VarStore::get('currentUserId')) ? (int)VarStore::get('currentUserId') : 0;
        AccountHelper::logout($currentUserID, $req->ip());
        return $this->success();
    }

    /**
     * logout
     * @param  Request $req
     * @return
     */
    public function captcha()
    {
//        //生成验证码图片的Builder对象，配置相应属性
//        $builder = new Captcha();
//        //可以设置图片宽高及字体
//        $builder->build($width = 100, $height = 40, $font = null);
//        //获取验证码的内容
//        $phrase = $builder->getPhrase();
//        //把内容存入session
//        Session::flash('milkcaptcha', $phrase);
//        //生成图片
//        header("Cache-Control: no-cache, must-revalidate");
//        header('Content-Type: image/jpeg');
//        $builder->output();

        $code = new \Code();
        $res = $code->make();
        return $this->success($res);
    }

    /**
     * reset 平台重置密码
     * @param  Request $req
     * @return
     */
    public function reset(Request $req)
    {
        parent::getBaseInfo();
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id'])) {
            $data['id'] = 0;
        }
        $id = (int)$data['id'];
        //获取对应公司id
        $curEnterprise = collect($enterpriseMap)->where('id', $userInfo['enterprise_id'])->first();
        $curLevel = empty($curEnterprise['level']) ? 0 : (int)$curEnterprise['level'];
        if (empty($curLevel)) {
            return $this->fail('当前登陆用户公司级别异常');
        }
        $user = CommonHelper::isDataExists('system_user', 'id', $id)->where('is_del', 0)->first();
        if (empty($user)) {
            return $this->fail('用户不存在');
        }
        $authen = CommonHelper::isDataExists('system_user_authen', 'user_id', $id)->where('is_del', 0)->first();
        if (empty($authen)) {
            return $this->fail('用户密码不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $user['enterprise_id'])) {
            return $this->fail('您没有权限重置此系统用户密码');
        }
        $targetUserLevel = 0;//重置用户的公司级别
        if (!empty($user['enterprise_id'])) {
            $enterpriseLevel = collect($enterpriseMap)->where('id', $user['enterprise_id'])->where('is_del', 0)->first();
            if (!empty($enterpriseLevel)) {
                $targetUserLevel = (int)$enterpriseLevel['level'];
            }
        }
        if ($curLevel > $targetUserLevel) {
            return $this->fail('仅上级系统用户可以重置下级用户密码');
        }
        if ($curLevel < $targetUserLevel) {
            $pwdmsg = AccountHelper::initpwd();//获取初始化密码和随机码 Sirius123456
            CommonHelper::isDataExists('system_user_authen', 'user_id', $id)->where('is_del', 0)->update([
                'pass' => $pwdmsg['pass'],
                'seed' => $pwdmsg['seed'],
            ]);
        }
        return $this->success();
    }


}
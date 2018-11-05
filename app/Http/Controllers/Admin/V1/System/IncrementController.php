<?php

namespace App\Http\Controllers\Admin\V1\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\VarStore;
use App\Utils\CommonHelper;
use App\Utils\OperateRecordHelper;


class IncrementController extends Controller
{


    /**
     * get 获取当前用户组的模块
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
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            $data = [];
        }
        if (!isset($data['id'])) {
            $data['id'] = 0;
        }
        $id = (int)$data['id'];
        $group = CommonHelper::isDataExists('system_user_group_new', 'id', $id)->where('is_del', 0)->first();
        if (empty($group)) {
            return $this->fail('系统用户组不存在');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $group['enterprise_id'])) {
            return $this->fail('您没有权限获取该系统用户组信息');
        }
        $result = [
            'users' => [],
            'modules' => [],
            'group' => $group
        ];

        $curUserGroupId = empty($userInfo['group_id']) ? 0 : (int)$userInfo['group_id'];
        $groupInfo = AccountHelper::getCurGroupModules($id);
        $newGroupInfo = [];
        foreach ($groupInfo as $key => $item) {
            $item['has_privilege'] = true;
            $newGroupInfo[$item['module_id']] = $item;
            $result['modules'][] = $item;
        }
        //当前登录人员的权限列表
        $curInfo = AccountHelper::getCurGroupModules($curUserGroupId);
        foreach ($curInfo as $item) {
            $item['has_privilege'] = false;
            if (!array_key_exists($item['module_id'], $newGroupInfo)) {
                $result['modules'][] = $item;
            }
        }
        //获取该系统用户组下的用户
        $result['users'] = CommonHelper::isDataExists('system_user', 'group_id', $group['id'])->select('id', 'name', 'phone')->where('is_del', 0)->get()->toArray();

        return $this->success($result);
    }

    /**
     * search 查询系统所有的应用模块
     * @param  Request $req
     * @return
     */
    public function search(Request $req)
    {
        //对id进行加密解决可预测性
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息

        $result = [
            'no_free' => [],//收费
            'free' => [],//免费
        ];
        $userGroupId = empty($userInfo['group_id']) ? 0 : (int)$userInfo['group_id'];
        $res = AccountHelper::getGroupModules($userGroupId);
        if (count($res) > 0) {
            foreach ($res as $item) {
                if ($item['module_type'] == 1) {
                    continue;
                }
                if (in_array($item['purchase_type'], [1, 3])) {
                    $result['free'][] = $item;
                } else {
                    $result['no_free'][] = $item;
                }
            }
        }

        return $this->success($result);
    }


    /**
     * addManageModules 新增权限
     * @param  Request $req
     * @return
     */

    public function addManageModules(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data == null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        $curEnterprise = collect($enterpriseMap)->where('id', $userInfo['enterprise_id'])->first();
        $curLevel = empty($curEnterprise['level']) ? 0 : (int)$curEnterprise['level'];
        if (empty($curLevel)) {
            return $this->fail('当前登陆用户公司级别异常');
        }
        if ($curLevel > 1) {
            return $this->fail('当前仅1级公司可以添加后台模块');
        }

        if (empty($data['name']) || !isset($data['name'])) {
            return $this->fail('权限名称不能为空');
        }
        if (empty($data['key']) || !isset($data['key'])) {
            return $this->fail('权限key值不能为空');
        }
        //默认0为全部1为免费2为收费3为试用
        if (!isset($data['purchase_type']) || $data['purchase_type'] < 0) {
            return $this->fail('请给出正确的模块计费参数');
        }
        //默认0为全部1为菜单模块2为功能性按钮
        if (!isset($data['module_type']) || $data['module_type'] < 0) {
            return $this->fail('请给出正确的模块类型参数');
        }
        $systemModules = CommonHelper::isDataExists('system_modules_new', 'key', $data['key'])->whereIn('level', [1, 2, 3])->where('is_del', 0)->first();
        if (!empty($systemModules)) {
            return $this->fail('权限key值与已有key值重复');
        }
        $fields = [
            'name',
            'level',
            'key',
            'parent_id',
            'purchase_type',
            'module_type',
        ];
        $insert = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $insert[$field] = $data[$field];
            }
        }
        $resmsg = '';
        try {
            DB::transaction(function () use ($insert, $userInfo, $data) {
                $id = parent::getUid(); //生成唯一标识
                $insert['id'] = $id;
                DB::table('system_modules_new')->insert($insert);
                //创建之后给当前系统用户组增加入权限
                $userGroupId = empty($userInfo['group_id']) ? 0 : (int)$userInfo['group_id'];
                if ($userGroupId > 0) {
                    DB::table('system_group_modules')->insert([
                        'id' => parent::getUid(),
                        'group_id' => $userGroupId,
                        'module_id' => $id,
                        'purchase_type' => $data['purchase_type'],
                    ]);
                }
            });
        } catch (\Exception $e) {
            $resmsg = '系统模块新增失败，请重试!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success();
    }

    /**
     * addManageModules 新增权限
     * @param  Request $req
     * @return
     */

    public function payModules(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (empty($data['id']) || !isset($data['id'])) {
            return $this->fail('模块ID不能为空');
        }
        $systemModules = CommonHelper::isDataExists('system_modules_new', 'id', $data['id'])->where('is_del', 0)->first();
        if (!empty($systemModules)) {
            return $this->fail('该模块不存在');
        }
        if (in_array($systemModules['purchase_type'], [1])) {
            //需要用户付款支付
        }
        //创建之后给当前系统用户组增加入权限
        $userGroupId = empty($userInfo['group_id']) ? 0 : (int)$userInfo['group_id'];
        if ($userGroupId > 0) {
            DB::table('system_group_modules')->insert([
                'id' => parent::getUid(),
                'group_id' => $userGroupId,
                'module_id' => $data['id'],
                'purchase_type' => $data['purchase_type'],
            ]);
        }

        return $this->success();
    }

}
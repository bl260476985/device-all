<?php

namespace App\Http\Controllers\Admin\V1\System;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use App\Utils\AccountHelper;
use App\Utils\KeySorter;
use App\Utils\VarStore;
use App\Utils\CommonHelper;
use App\Utils\OperateRecordHelper;
use Mockery\CountValidator\Exception;


class GroupController extends Controller
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
        $userInfo = $this->curAdminUser;//获取系统用户基本信息

        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null) {
            $data = [];
        }
        if (!isset($data['order_by'])) {
            $data['order_by'] = 'created_at';
        }
        if (!isset($data['order']) || !in_array($data['order'], [KeySorter::ORDER_ASC, KeySorter::ORDER_DESC])) {
            $data['order'] = KeySorter::ORDER_DESC;
        }
        $data_collection = collect($data);
        $offset = (int)$data_collection->get('offset', 0);
        $limit = (int)$data_collection->get('limit', 20);
        $data['system_group_obj'] = $data_collection->get('system_group_obj', ['id' => null, 'name' => '']);
        $group_obj_id = isset($data['system_group_obj']['id']) ? (int)$data['system_group_obj']['id'] : 0;
        $group_obj_name = isset($data['system_group_obj']['name']) ? (string)$data['system_group_obj']['name'] : '';

        $result = ['total' => 0, 'list' => []];
        $groups_base = DB::table('system_user_group_new')->select('id', 'name')
            ->when(!empty($group_obj_id), function ($query) use ($group_obj_id) {
                return $query->where('id', $group_obj_id);
            })->when(empty($group_obj_id) && !empty($group_obj_name), function ($query) use ($group_obj_name) {
                return $query->where('name', 'like', '%' . $group_obj_name . '%');
            })->whereIn('enterprise_id', $enterpriseMapIds)->where('is_del', 0);

        $groups_count = $groups_base->count();
        $result['total'] = $groups_count;

        if (isset($data['offset']) && isset($data['limit'])) {
            if ($data['offset'] < 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $offset = 0;
            if ($data['limit'] <= 0 || (isset($data['total']) && $data['total'] != '' && (int)$data['total'] != $result['total']))
                $limit = 20;
        }
        $groups = $groups_base->orderBy($data['order_by'], $data['order'])
            ->skip($offset)
            ->take($limit)
            ->get();

        //获取查询到的系统用户组的id
        $groupIds = $groups->pluck('id')->all();
        //获取每个系统用户组的人数
        $groupUsers = CommonHelper::isDataExists('system_user')->select('id', 'group_id')->whereIn('group_id', $groupIds)->where('is_del', 0)->get()->groupBy('group_id')->toArray();
        //获取系统所用模块
        $modulesAllInfo = AccountHelper::getAllModules();
        //获取每个用户组下的模块
        $temp_modules = CommonHelper::isDataExists('system_group_modules')->select(
            'id',
            'group_id',
            'module_id',
            'purchase_type')->whereIn('group_id', $groupIds)->where('is_del', 0)->get();
        $modules = $temp_modules->map(function ($item) use ($modulesAllInfo) {
            $module = $item;
            $module['module_name'] = '';
            if (isset($modulesAllInfo[$item['module_id']])) {
                $module['module_name'] = $modulesAllInfo[$item['module_id']]['name'];
            }
            return $module;
        })->groupBy('group_id')->toArray();

        $result['list'] = $groups->map(function ($item) use ($modules, $groupUsers) {
            $module = $item;
            $module['users_num'] = 0;
            if (isset($groupUsers[$item['id']])) {
                $module['users_num'] = count($groupUsers[$item['id']]);
            }
            $module['modules'] = [];
            if (isset($modules[$item['id']])) {
                $module['modules'] = $modules[$item['id']];
            }
            return $module;
        })->all();

        return $this->success($result);
    }

    /**
     * add
     * @param  Request $req
     * @return
     */
    public function add(Request $req)
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
        if (!isset($data['enterprise_id']) || empty($data['enterprise_id'])) {
            return $this->fail('请选择所属公司');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $data['enterprise_id'])) {
            return $this->fail('您没有权限在此公司下添加系统用户组');
        }
        if (!isset($data['name']) || empty($data['name'])) {
            return $this->fail('请输入系统用户组名称');
        }
        if (!isset($data['detail_module']) || !is_array($data['detail_module'])) {
            return $this->fail('权限详情参数格式有误');
        }
        if (count($data['detail_module']) == 0) {
            return $this->fail('请选择对应权限');
        }
        //权限格式 [{"module_id": 1,"purchase_type":0}]

        $existedSystemGroup = CommonHelper::isDataExists('system_user_group_new', 'name', $data['name'])->where('is_del', 0)->first();
        if (!empty($existedSystemGroup)) {
            return $this->fail('此系统用户组已存在，请勿重复输入');
        }
        $fields = [
            'name',
            'remarks',
            'enterprise_id',
        ];
        $insert = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $insert[$field] = $data[$field];
            }
        }

        $resmsg = '';
        $id = 0;
        try {
            DB::transaction(function () use ($insert, &$id) {
                $id = parent::getUid(); //生成唯一标识
                $insert['id'] = $id;
                DB::table('system_user_group_new')->insert($insert);
                if ($id) {
                    if (isset($data['detail_module'])) {
                        if (is_array($data['detail_module']) && count($data['detail_module']) > 0) {
                            foreach ($data['detail_module'] as $group) {
                                DB::table('system_group_modules')->insert([
                                    'id' => parent::getUid(),
                                    'group_id' => $id,
                                    'module_id' => $group['module_id'],
                                    'purchase_type' => $group['purchase_type'],
                                ]);
                            }
                        }
                    }
                }
            });
        } catch (\Exception $e) {
            $resmsg = '系统用户组新增失败，请重试!';
        };
        if (!empty($resmsg)) {
            return $this->fail($resmsg);
        }
        return $this->success(['id' => $id]);
    }

    /**
     * delete
     * @param  Request $req
     * @return
     */
    public function delete(Request $req)
    {
        parent::getBaseInfo();
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if (empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id'])) {
            return $this->fail('参数错误');
        }
        $id = (int)$data['id'];
        if ($id == 1) {
            return $this->fail('此系统用户组无法删除');
        }
        if ($userInfo['group_id'] == $id) {
            return $this->fail('无法删除归属用户组');
        }
        $systemGroup = CommonHelper::isDataExists('system_user_group_new', 'id', $id)->where('is_del', 0)->first();
        if (empty($systemGroup)) {
            return $this->fail('此系统用户组不存在');
        }
        if ($systemGroup['group_flag'] == 1) {
            return $this->fail('此系统用户组为该公司下默认系统用户组，无法删除');
        }

        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $systemGroup['enterprise_id'])) {
            return $this->fail('您没有权限删除该系统用户组');
        }
        $resmsg = '';
        try {
            DB::transaction(function () use ($id, $systemGroup) {
                $now = date('Y-m-d H:i:s');
                DB::table('system_user_group_new')->where('id', $id)->where('is_del', 0)->update([
                    'is_del' => 1,
                    'deleted_at' => $now,
                ]);
                //获取这个组内的用户
                $systemuserMapIds = CommonHelper::isDataExists('system_user', 'group_id', $id)->select('id')->where('is_del', 0)->get()->pluck('id')->all();
                //获取该公司下的默认用户组
                $autoGroupInfo = CommonHelper::isDataExists('system_user_group_new', 'enterprise_id', $systemGroup['enterprise_id'])->select('id')->where('group_flag', 1)->where('is_del', 0)->first();
                $autoGroup = !empty($autoGroupInfo) ? $autoGroupInfo['id'] : 0;

                DB::table('system_user')->where('group_id', $id)->where('is_del', 0)->update([
                    'group_id' => 0,
                ]);
                //删除联桩增值服务
                DB::table('system_group_modules')->where('group_id', $id)->where('is_del', 0)->update([
                    'is_del' => 1,
                    'deleted_at' => $now,
                ]);
            });
        } catch (\Exception $e) {
            $resmsg = '系统用户组删除失败，请重试!';
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
        //获取查看归属自己的用户
        $enterpriseMapIds = $this->enterpriseMapIds;
        $enterpriseMap = $this->enterpriseMap;
        $userInfo = $this->curAdminUser;//获取系统用户基本信息
        $data = json_decode(trim($req->input('content', '')), true);
        if ($data === null || empty($data)) {
            return $this->fail('数据格式不对');
        }
        if (!isset($data['id']) || empty($data['id'])) {
            return $this->fail('缺少系统用户组id');
        }

        $id = (int)$data['id'];

        if ($userInfo['group_id'] == $id) {
            return $this->fail('无法编辑归属用户组');
        }
        $group = CommonHelper::isDataExists('system_user_group_new', 'id', $id)->where('is_del', 0)->first();
        if (empty($group)) {
            return $this->fail('此系统用户组不存在');
        }
        if (!isset($data['enterprise_id']) || empty($data['enterprise_id'])) {
            return $this->fail('请选择所属公司');
        }
        if (!AccountHelper::canManageTheEnterprise($enterpriseMap, $userInfo, $group['enterprise_id'])) {
            return $this->fail('您没有权限在此公司下编辑系统用户组');
        }

        if (isset($data['name']) && empty($data['name'])) {
            return $this->fail('请输入系统用户组名称');
        }
        if (isset($data['users_in']) && !is_array($data['users_in'])) {
            return $this->fail('需要添加系统用户参数有误');
        }
        if (isset($data['users_out']) && !is_array($data['users_out'])) {
            return $this->fail('需要移除的系统用户参数有误');
        }
        if (!isset($data['users_out'])) {
            $data['users_out'] = [];
        }
        if (!isset($data['users_in'])) {
            $data['users_in'] = [];
        }
        if (isset($data['modules']) && !is_array($data['modules'])) {
            return $this->fail('需要添加模块参数有误');
        }

        if ($group['name'] != $data['name']) {
            $existedSystemGroup = CommonHelper::isDataExists('system_user_group_new', 'name', $data['name'])->where('is_del', 0)->first();
            if (!empty($existedSystemGroup)) {
                return $this->fail('不能和已有系统用户组重名');
            }
        }
        //若用户组为默认用户组
        if ($group['group_flag'] == 1) {
            if ($group['enterprise_id'] != $data['enterprise_id']) {
                return $this->fail('该默认系统用户组无法更改公司');
            }
            if (count($data['users_out']) > 0) {
                return $this->fail('该默认系统用户组无法移除用户');
            }
        }

        $fields = [
            'name',
            'remarks',
            'enterprise_id'
        ];
        $update = [];
        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $update[$field] = $data[$field];
            }
        }
        try {
            DB::transaction(function () use ($update, $data, $group, $id, $userInfo) {
                //获取该公司下的默认用户组
                $autoGroupInfo = CommonHelper::isDataExists('system_user_group_new', 'enterprise_id', $group['enterprise_id'])->select('id')->where('group_flag', 1)->where('is_del', 0)->first();
                $autoGroup = !empty($autoGroupInfo) ? $autoGroupInfo['id'] : 0;
                DB::table('system_user_group_new')->where('id', $group['id'])->update($update);
                //更改用户归属
                if (isset($data['users_in']) && count($data['users_in']) > 0) {
                    $data['users_in'] = array_unique($data['users_in']);
                }
                if (isset($data['users_out']) && count($data['users_out']) > 0) {
                    $data['users_out'] = array_unique($data['users_out']);
                }

                $users_in = collect($data['users_in'])->diff($data['users_out'])->all();//返回第一个集合中存在第二个不存在的数组
                $now = date('Y-m-d H:i:s');
                if (count($data['users_out']) > 0) {
                    DB::table('system_user')->whereIn('id', $data['users_out'])->where('group_id', $group['id'])->update([
                        'group_id' => $autoGroup,
                    ]);
                }
                if (count($users_in) > 0) {
                    DB::table('system_user')->whereIn('id', $users_in)->update([
                        'group_id' => $group['id'],
                    ]);
                }
                DB::table('system_group_modules')->where('group_id', $group['id'])->update([
                    'is_del' => 1,
                    'deleted_at' => $now,
                ]);
                if (isset($data['detail_module'])) {
                    if (is_array($data['detail_module']) && count($data['detail_module']) > 0) {
                        foreach ($data['detail_module'] as $module) {
                            DB::table('system_group_modules')->insert([
                                'id' => parent::getUid(),
                                'group_id' => $group['id'],
                                'module_id' => $module['module_id'],
                                'purchase_type' => $module['purchase_type'],
                            ]);
                        }
                    }
                }
            });
        } catch (\Exception $e) {
            $this->fail('更新系统用户组失败');
        }

        return $this->success();
    }

}
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::Group([/*'middleware' => ['web', 'adminlogger']*/], function () {
    Route::any('admin/debug/test', ['uses' => 'DebugController@test']);
    Route::any('admin/debug/test2', ['uses' => 'DebugController@test2']);
});

Route::Group(['namespace' => 'Admin\V1', 'prefix' => 'admin/v1', 'middleware' => ['web', 'datacheck', 'adminlogger']], function () {
    Route::group(['namespace' => 'System', 'prefix' => 'system'], function () {
        Route::match(['post', 'get'], 'user/login', ['uses' => 'UserController@login',]);
        Route::match(['post', 'get'], 'user/logout', ['middleware' => ['adminlogin'], 'uses' => 'UserController@logout']);
        Route::match(['post', 'get'], 'user/getcurrent', ['middleware' => ['adminlogin'], 'uses' => 'UserController@getCurrent']);
        Route::match(['post', 'get'], 'user/reset', ['middleware' => ['adminlogin'], 'uses' => 'UserController@reset']);
        Route::match(['post', 'get'], 'user/search', ['middleware' => ['adminlogin'], 'uses' => 'UserController@search',]);
        Route::match(['post', 'get'], 'user/get', ['middleware' => ['adminlogin'], 'uses' => 'UserController@get',]);
        Route::match(['post', 'get'], 'user/add', ['middleware' => ['adminlogin'], 'uses' => 'UserController@add',]);
        Route::match(['post', 'get'], 'user/delete', ['middleware' => ['adminlogin'], 'uses' => 'UserController@delete',]);
        Route::match(['post', 'get'], 'user/update', ['middleware' => ['adminlogin'], 'uses' => 'UserController@update',]);
        Route::match(['post', 'get'], 'group/search', ['middleware' => ['adminlogin'], 'uses' => 'GroupController@search',]);
        Route::match(['post', 'get'], 'group/add', ['middleware' => ['adminlogin'], 'uses' => 'GroupController@add',]);
        Route::match(['post', 'get'], 'group/delete', ['middleware' => ['adminlogin'], 'uses' => 'GroupController@delete',]);
        Route::match(['post', 'get'], 'group/update', ['middleware' => ['adminlogin'], 'uses' => 'GroupController@update',]);
        Route::match(['post', 'get'], 'group/get', ['middleware' => ['adminlogin'], 'uses' => 'IncrementController@get',]);
        Route::match(['post', 'get'], 'pwd/update', ['middleware' => ['adminlogin'], 'uses' => 'PasswordController@update',]);
        Route::match(['post', 'get'], 'purchased/search', ['middleware' => ['adminlogin'], 'uses' => 'IncrementController@search',]);
        Route::match(['post', 'get'], 'purchased/paymodule', ['middleware' => ['adminlogin'], 'uses' => 'IncrementController@payModules',]);
        Route::match(['post', 'get'], 'purchased/add', ['middleware' => ['adminlogin'], 'uses' => 'IncrementController@addManageModules',]);
        Route::match(['post', 'get'], 'login/search', ['middleware' => ['adminlogin'], 'uses' => 'LogController@search',]);
        Route::match(['post', 'get'], 'user/statistics', ['middleware' => ['adminlogin'], 'uses' => 'UserDeviceController@search',]);
    });

    Route::Group(['namespace' => 'Enterprise', 'prefix' => 'enterprise'], function () {
        Route::match(['post', 'get'], 'enterprise/search', ['middleware' => ['adminlogin'], 'uses' => 'EnterpriseController@search']);
        Route::match(['post', 'get'], 'enterprise/add', ['middleware' => ['adminlogin'], 'uses' => 'EnterpriseController@add']);
        Route::match(['post', 'get'], 'enterprise/update', ['middleware' => ['adminlogin'], 'uses' => 'EnterpriseController@update']);
        Route::match(['post', 'get'], 'enterprise/delete', ['middleware' => ['adminlogin'], 'uses' => 'EnterpriseController@delete']);
        Route::match(['post', 'get'], 'enterprise/get', ['middleware' => ['adminlogin'], 'uses' => 'EnterpriseController@get']);
    });
    Route::Group(['namespace' => 'Station', 'prefix' => 'station'], function () {
        Route::match(['post', 'get'], 'station/search', ['middleware' => ['adminlogin'], 'uses' => 'StationController@search']);
        Route::match(['post', 'get'], 'station/add', ['middleware' => ['adminlogin'], 'uses' => 'StationController@add']);
        Route::match(['post', 'get'], 'station/update', ['middleware' => ['adminlogin'], 'uses' => 'StationController@update']);
        Route::match(['post', 'get'], 'station/delete', ['middleware' => ['adminlogin'], 'uses' => 'StationController@delete']);
        Route::match(['post', 'get'], 'station/get', ['middleware' => ['adminlogin'], 'uses' => 'StationController@get']);
        Route::match(['post', 'get'], 'assign/search', ['middleware' => ['adminlogin'], 'uses' => 'StationController@assignSearch']);
        Route::match(['post', 'get'], 'station/assign', ['middleware' => ['adminlogin'], 'uses' => 'StationController@assignStation']);
    });

    Route::Group(['namespace' => 'Device', 'prefix' => 'device'], function () {
        Route::match(['post', 'get'], 'device/search', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@search']);
        Route::match(['post', 'get'], 'device/add', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@add']);
        Route::match(['post', 'get'], 'device/update', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@update']);
        Route::match(['post', 'get'], 'device/delete', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@delete']);
        Route::match(['post', 'get'], 'device/get', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@get']);
        Route::match(['post', 'get'], 'device/statistics', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@getDeviceNum']);
        Route::match(['post', 'get'], 'device/unlock', ['middleware' => ['adminlogin'], 'uses' => 'DeviceController@unlock']);
        Route::match(['post', 'get'], 'device/warning', ['middleware' => ['adminlogin'], 'uses' => 'WarningController@search']);
        Route::match(['post', 'get'], 'device/heart', ['middleware' => ['adminlogin'], 'uses' => 'WarningController@heartSet']);
        Route::match(['post', 'get'], 'heart/search', ['middleware' => ['adminlogin'], 'uses' => 'WarningController@heartSearch']);
    });

    Route::Group(['namespace' => 'Util', 'prefix' => 'util'], function () {
        Route::match(['post', 'get'], 'util/search', ['middleware' => ['adminlogin'], 'uses' => 'DictController@search']);
    });

    Route::Group(['namespace' => 'Index', 'prefix' => 'index'], function () {
        Route::match(['post', 'get'], 'index/head', ['middleware' => ['adminlogin'], 'uses' => 'IndexDeviceController@headSearch']);
        Route::match(['post', 'get'], 'index/map', ['middleware' => ['adminlogin'], 'uses' => 'IndexDeviceController@mapSearch']);
        Route::match(['post', 'get'], 'index/device', ['middleware' => ['adminlogin'], 'uses' => 'IndexDeviceController@deviceStatistics']);
        Route::match(['post', 'get'], 'index/warning', ['middleware' => ['adminlogin'], 'uses' => 'IndexDeviceController@warning']);
    });

    Route::Group(['namespace' => 'Work', 'prefix' => 'work'], function () {
        Route::match(['post', 'get'], 'warn/manage', ['middleware' => ['adminlogin'], 'uses' => 'WarnRecoverController@warnSearch']);
        Route::match(['post', 'get'], 'warn/get', ['middleware' => ['adminlogin'], 'uses' => 'WarnRecoverController@get']);
        Route::match(['post', 'get'], 'warn/deal', ['middleware' => ['adminlogin'], 'uses' => 'WarnRecoverController@dealWarn']);
        Route::match(['post', 'get'], 'push/manage', ['middleware' => ['adminlogin'], 'uses' => 'WarnRecoverController@pushSearch']);
        Route::match(['post', 'get'], 'push/statistics', ['middleware' => ['adminlogin'], 'uses' => 'WarnRecoverController@pushStatistics']);
    });
    Route::Group(['namespace' => 'Statistics', 'prefix' => 'statistics'], function () {
        Route::match(['post', 'get'], 'push/statistics', ['middleware' => ['adminlogin'], 'uses' => 'StatisticsController@pushSearch']);
    });
    Route::Group(['namespace' => 'File', 'prefix' => 'file'], function () {
        Route::match(['post', 'get'], 'file/upload', ['middleware' => ['adminlogin'], 'uses' => 'FileImportController@uploadFile']);
        Route::match(['post', 'get'], 'device/import', ['middleware' => ['adminlogin'], 'uses' => 'FileImportController@deviceImport']);
    });
});

Route::Group(['namespace' => 'Admin\V1\Telecom', 'prefix' => 'admin/v2/telecom'], function () {
    Route::match(['post', 'get'], 'app/login', ['uses' => 'DeviceController@login']);//获取接入token
    Route::match(['post', 'get'], 'single/register', ['uses' => 'DeviceController@register']);//设备注册
    Route::match(['post', 'get'], 'update/nodeId', ['uses' => 'DeviceController@refreshNodeId']);//设备更新node
    Route::match(['post', 'get'], 'update/info', ['uses' => 'DeviceController@refreshInfo']);//设备更新参数
    Route::match(['post', 'get'], 'delete/info', ['uses' => 'DeviceController@delete']);//设备更新参数
    Route::match(['post', 'get'], 'device/message', ['uses' => 'MessageController@message']);//消息订阅
    Route::match(['post', 'get'], 'order/send', ['uses' => 'OrderSendController@send']);//消息下发
});


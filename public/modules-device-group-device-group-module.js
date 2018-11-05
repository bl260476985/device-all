(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-device-group-device-group-module"],{

/***/ "./src/app/components/device-group/device-group.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/device-group/device-group.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n    background-color: #fff;\r\n    padding: 50px 25px 0 25px;\r\n}\r\n.chart{\r\n    /*margin-top: 50px;*/\r\n    text-align: center;\r\n}\r\n#c2{\r\n    width:70vw;\r\n    margin: 0 auto;\r\n}\r\n.title{\r\n    font-size: 30px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/device-group/device-group.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/device-group/device-group.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"chart\">\n        <div id=\"c2\" [hidden]=\"assign\"></div>\n        <div *ngIf=\"assign\">\n            <p class=\"title\">已选设备</p>\n            <nz-table #basicTable [nzData]=\"chooseStationList\">\n                <thead>\n                    <tr>\n                        <th>名称</th>\n                        <th>单位名称</th>\n                        <th>联系人</th>\n                        <th>详细地址</th>\n                        <th>操作</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of chooseStationList\">\n                        <td>{{data.name}}</td>\n                        <td>{{data.enterprise_name}}</td>\n                        <td>{{data.contacts}}</td>\n                        <td>{{data.address}}</td>\n                        <td>\n                            <button type=\"button\" nz-button nzType=\"default\" nzSize=\"small\" (click)=\"deleteChoose(data)\">删除</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </nz-table>\n        </div>\n    </div>\n    <div nz-row style=\"margin:15px 0;\">\n        <div class=\"search-left\" nz-col nzSm=\"14\">\n            选择所属:\n            <nz-select style=\"width:160px;\" nzAllowClear nzPlaceHolder=\"请选择\" [(ngModel)]=\"left_systemUserId\" (ngModelChange)=\"changeSystemUser($event)\">\n                <nz-option *ngFor=\"let item of systemUser_list\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n            </nz-select>\n            <input type=\"text\" nz-input placeholder=\"输入设备号\" [(ngModel)]=\"info.query\" style=\"width:200px;margin-left:15px;\" (ngModelChange)=\"deviceNumberChange()\">\n        </div>\n        <div nz-col nzSm=\"10\" *ngIf=\"assign\">\n            分配给:\n            <nz-select style=\"width: 200px;\" nzAllowClear nzPlaceHolder=\"请选择\" [(ngModel)]=\"right_systemUserId\">\n                <nz-option *ngFor=\"let item of right_systemUser_list\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n            </nz-select>\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirm()\">确定</button>\n            <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" (click)=\"cancel()\" style=\"margin-right: 10px;\">取消</button>\n        </div>\n        <div nz-col nzSm=\"10\" *ngIf=\"!assign\">\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"assignDevice()\">分配设备</button>\n        </div>\n    </div>\n    <div>\n        <nz-table #deviceTable [nzData]=\"device_list\"\n                                  [nzPageSize]=\"20\" \n                                  [nzTotal]=\"info.total\" \n                                  [nzFrontPagination]=\"false\" \n                                  (nzPageIndexChange)=\"changePage($event)\"\n                                  [nzLoading]=\"info.loading\">\n                <thead>\n                    <tr>\n                        <th>名称</th>\n                        <th>单位名称</th>\n                        <th>联系人</th>\n                        <th>详细地址</th>\n                        <th *ngIf=\"assign\">操作</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of deviceTable.data\">\n                        <td>{{data.name}}</td>\n                        <td>{{data.enterprise_name}}</td>\n                        <td>{{data.contacts}}</td>\n                        <td>{{data.address}}</td>\n                        <td *ngIf=\"assign\">\n                            <label nz-checkbox [(ngModel)]=\"data.checked\" (ngModelChange)=\"changeChecked($event,data)\"></label>\n                        </td>\n                    </tr>\n                </tbody>\n        </nz-table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/device-group/device-group.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/device-group/device-group.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeviceGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGroupComponent", function() { return DeviceGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_system_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/system-user.service */ "./src/app/services/system-user.service.ts");
/* harmony import */ var _services_device_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device-group.service */ "./src/app/services/device-group.service.ts");
/* harmony import */ var _services_dict_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dict.service */ "./src/app/services/dict.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceGroupComponent = /** @class */ (function () {
    function DeviceGroupComponent(systemUserService, deviceGroupService, dictService, message) {
        this.systemUserService = systemUserService;
        this.deviceGroupService = deviceGroupService;
        this.dictService = dictService;
        this.message = message;
        this.user_list = [];
        this.systemUser_list = [];
        this.right_systemUser_list = [];
        this.chooseStationList = [];
        this.assign = false;
        this.info = {
            loading: false,
            bind_user_id: JSON.parse(window.localStorage.getItem('systemInfo')).id,
            query: '',
            order_by: 'created_at',
            order: 'desc',
            offset: 0,
            limit: 20,
            total: 0
        };
        this.device_list = [];
    }
    DeviceGroupComponent.prototype.ngOnInit = function () {
        // 图表
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_5___default.a.Chart({
            container: 'c2',
            forceFit: true,
            height: 300
        });
        this.chart.source(this.user_list);
        this.chart.interval().position('name*设备数量');
        this.chart.render();
        this.searchUser();
        this.searchSystem();
        this.searchDevice();
    };
    DeviceGroupComponent.prototype.searchUser = function () {
        var _this = this;
        this.systemUserService.statistics().subscribe(function (res) {
            _this.user_list = res['data'];
            var arr = [];
            for (var i = 0; i < _this.user_list.length; i++) {
                var key = _this.user_list[i].name;
                var value = _this.user_list[i].value;
                var obj = { name: key, '设备数量': value };
                arr.push(obj);
            }
            _this.chart.changeData(arr);
        });
    };
    DeviceGroupComponent.prototype.assignDevice = function () {
        this.assign = true;
    };
    DeviceGroupComponent.prototype.cancel = function () {
        this.assign = false;
    };
    // 确认分配
    DeviceGroupComponent.prototype.confirm = function () {
        var _this = this;
        var arr = [];
        for (var i = 0; i < this.chooseStationList.length; i++) {
            arr.push(this.chooseStationList[i].id);
        }
        var condition = {
            station_ids: arr,
            bind_user_id: this.right_systemUserId
        };
        this.deviceGroupService.assign(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('分配成功');
                _this.chooseStationList = [];
                _this.searchDevice();
            }
        });
    };
    DeviceGroupComponent.prototype.searchSystem = function () {
        var _this = this;
        var condition = {
            type: 'systemuser',
            query: '',
            limit: 99,
            offset: 0
        };
        this.dictService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.systemUser_list = res['data'];
            _this.left_systemUserId = JSON.parse(window.localStorage.getItem('systemInfo')).id;
            var arr = _this.systemUser_list.filter(function (item, index) {
                return item.id === _this.left_systemUserId;
            });
            var enterprise_id = arr[0].enterprise_id;
            _this.searchRightSystem(enterprise_id);
        });
    };
    DeviceGroupComponent.prototype.searchRightSystem = function (ent_id) {
        var _this = this;
        var condition = {
            type: 'systemuser',
            enterprise_id: ent_id,
            query: '',
            limit: 99,
            offset: 0
        };
        this.dictService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.right_systemUser_list = res['data'];
        });
    };
    // 更改左边系统用户
    DeviceGroupComponent.prototype.changeSystemUser = function ($event) {
        this.chooseStationList = [];
        this.info.bind_user_id = $event;
        this.right_systemUserId = '';
        var arr = this.systemUser_list.filter(function (item, index) {
            return item.id === $event;
        });
        var enterprise_id = arr[0].enterprise_id;
        this.searchRightSystem(enterprise_id);
        this.searchDevice();
    };
    DeviceGroupComponent.prototype.deviceNumberChange = function () {
        this.searchDevice();
    };
    DeviceGroupComponent.prototype.searchDevice = function () {
        var _this = this;
        var condition = {
            bind_user_id: this.info.bind_user_id,
            query: this.info.query,
            order_by: this.info.order_by,
            order: this.info.order,
            offset: this.info.offset,
            limit: this.info.limit,
            total: this.info.total
        };
        this.systemUserService.assignSearch(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
        });
    };
    DeviceGroupComponent.prototype.changeChecked = function ($event, data) {
        console.log($event);
        console.log(data);
        if ($event === true) {
            this.chooseStationList.push(data);
        }
        else {
            this.chooseStationList.filter(function (item, index) {
                return item.id != data.id;
            });
        }
    };
    // 删除所选的设备组
    DeviceGroupComponent.prototype.deleteChoose = function (data) {
        var arr = this.chooseStationList.filter(function (item, index) {
            return item.id != data.id;
        });
        this.chooseStationList = arr;
    };
    DeviceGroupComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.searchDevice();
    };
    DeviceGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-group',
            template: __webpack_require__(/*! ./device-group.component.html */ "./src/app/components/device-group/device-group.component.html"),
            styles: [__webpack_require__(/*! ./device-group.component.css */ "./src/app/components/device-group/device-group.component.css")]
        }),
        __metadata("design:paramtypes", [_services_system_user_service__WEBPACK_IMPORTED_MODULE_1__["SystemUserService"],
            _services_device_group_service__WEBPACK_IMPORTED_MODULE_2__["DeviceGroupService"],
            _services_dict_service__WEBPACK_IMPORTED_MODULE_3__["DictService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]])
    ], DeviceGroupComponent);
    return DeviceGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/device-group/device-group.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/device-group/device-group.module.ts ***!
  \*************************************************************/
/*! exports provided: DeviceGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGroupModule", function() { return DeviceGroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/mycommon/mycommon.module */ "./src/app/modules/mycommon/mycommon.module.ts");
/* harmony import */ var _components_device_group_device_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/device-group/device-group.component */ "./src/app/components/device-group/device-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _components_device_group_device_group_component__WEBPACK_IMPORTED_MODULE_4__["DeviceGroupComponent"] }
];
var DeviceGroupModule = /** @class */ (function () {
    function DeviceGroupModule() {
    }
    DeviceGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_3__["MycommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_device_group_device_group_component__WEBPACK_IMPORTED_MODULE_4__["DeviceGroupComponent"]
            ]
        })
    ], DeviceGroupModule);
    return DeviceGroupModule;
}());



/***/ }),

/***/ "./src/app/services/device-group.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/device-group.service.ts ***!
  \**************************************************/
/*! exports provided: DeviceGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGroupService", function() { return DeviceGroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global */ "./src/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceGroupService = /** @class */ (function () {
    function DeviceGroupService(http) {
        this.http = http;
    }
    // 分配设备组
    DeviceGroupService.prototype.assign = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/station/station/assign', { content: JSON.stringify(condition) });
    };
    DeviceGroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeviceGroupService);
    return DeviceGroupService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-device-group-device-group-module.js.map
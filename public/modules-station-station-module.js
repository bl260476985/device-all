(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-station-station-module"],{

/***/ "./src/app/components/device-group-detail/device-group-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/device-group-detail/device-group-detail.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.top{\r\n    height: 500px;\r\n    width: 100%;\r\n}*/\r\n#map{\r\n    width: 100%;\r\n    height:400px;\r\n}\r\n.bottom{\r\n    background-color: #fff;\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/device-group-detail/device-group-detail.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/device-group-detail/device-group-detail.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"top\">\n        <div id=\"map\"></div>\n    </div>\n    <div class=\"bottom\">\n        <nz-table #basicTable [nzData]=\"device_list\"\n                              [nzPageSize]=\"20\" \n                              [nzTotal]=\"info.total\" \n                              [nzFrontPagination]=\"false\" \n                              (nzPageIndexChange)=\"changePage($event)\"\n                              [nzLoading]=\"info.loading\">\n            <thead>\n                <tr>\n                    <th>名称</th>\n                    <th>编号</th>\n                    <th>说明</th>\n                    <th>类型</th>\n                    <th>类型说明</th>\n                    <th>状态</th>\n                    <th>操作</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n                    <td>{{data.device_name}}</td>\n                    <td>{{data.device_number}}</td>\n                    <td>{{data.provider}}</td>\n                    <td>{{data.device_type_name}}</td>\n                    <td>{{data.device_remarks}}</td>\n                    <td>{{data.status_name}}</td>\n                    <td (click)=\"operateDevice(data)\" class=\"operate\">\n                        <button type=\"button\" \n                        nz-button \n                        nzType=\"primary\" \n                        nzSize=\"small\" \n                        (click)=\"operateDevice(data)\">编辑</button>\n                        <button type=\"button\" \n                        nz-button \n                        nzType=\"default\" \n                        nzSize=\"small\" \n                        (click)=\"deleteDevice(data)\" \n                        style=\"margin-left:5px;\">删除</button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/device-group-detail/device-group-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/device-group-detail/device-group-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DeviceGroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceGroupDetailComponent", function() { return DeviceGroupDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _services_station_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/station.service */ "./src/app/services/station.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceGroupDetailComponent = /** @class */ (function () {
    function DeviceGroupDetailComponent(routerInfo, deviceService, stationService) {
        this.routerInfo = routerInfo;
        this.deviceService = deviceService;
        this.stationService = stationService;
        this.info = {
            loading: false,
            offset: 0,
            limit: 20,
            total: 0
        };
        this.device_list = [];
        this.stationDetail = {
            longitude: '',
            latitude: ''
        };
    }
    DeviceGroupDetailComponent.prototype.ngOnInit = function () {
        this.searchStationDetail();
        this.search();
    };
    DeviceGroupDetailComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 16
        });
    };
    DeviceGroupDetailComponent.prototype.search = function () {
        var _this = this;
        var condition = {
            query: '',
            type: 0,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: 'created_at',
            order: 'desc',
            total: this.info.total,
            station_id: this.routerInfo.snapshot.params.id
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            for (var i = 0; i < _this.device_list.length; i++) {
                _this.addMarker(_this.device_list[i]);
            }
        });
    };
    DeviceGroupDetailComponent.prototype.searchStationDetail = function () {
        var _this = this;
        var condition = {
            id: this.routerInfo.snapshot.params.id
        };
        this.stationService.get(condition).subscribe(function (res) {
            console.log(res);
            _this.stationDetail = res['data'];
            var arr = [_this.stationDetail.longitude, _this.stationDetail.latitude];
            _this.map.setCenter(arr);
        });
    };
    DeviceGroupDetailComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
    //添加点标记
    DeviceGroupDetailComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png'
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png'
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png'
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/suo_zc.png'
                });
                break;
            // case "报警设备"
        }
        // const marker = new AMap.Marker({
        //     position: longitude,
        //     map: this.map
        // });
        // marker.content = '我是第' + (device.device_number) + '个Marker';
        // marker.content = `${Device.device_number}<br />
        //                   设备名:${Device.device_name} <br />
        //                   `
        // marker.on('click', this.markerClick.bind(this));
    };
    DeviceGroupDetailComponent.prototype.mapClick = function (device) {
        var lng = device.longitude;
        var lat = device.latitude;
        this.map.setZoomAndCenter(13, [lng, lat]);
        // this.addMarker(device);
    };
    DeviceGroupDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-group-detail',
            template: __webpack_require__(/*! ./device-group-detail.component.html */ "./src/app/components/device-group-detail/device-group-detail.component.html"),
            styles: [__webpack_require__(/*! ./device-group-detail.component.css */ "./src/app/components/device-group-detail/device-group-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
            _services_station_service__WEBPACK_IMPORTED_MODULE_3__["StationService"]])
    ], DeviceGroupDetailComponent);
    return DeviceGroupDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/station-add/station-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/station-add/station-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".longitude {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/station-add/station-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/station-add/station-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:15px;background: #fff;padding: 24px; min-height: 360px;\">\n    <div nz-row>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">上级公司</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <div class=\"input-group\">\n                        <div class=\"form-control\" style=\"height: 32px;\">\n                            <span *ngFor=\"let ent of enterprises\" style=\"font-size:12px;overflow:hidden\" [hidden]=\"ent.id != enterprise.parent_id\">{{ent.name}}</span>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-default\" style=\"height: 32px;\" (click)=\"chooseEnterprise()\">选择</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">所属人</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <div class=\"input-group\">\n                        <div class=\"form-control\" style=\"height: 32px;\">\n                            <span *ngFor=\"let user of bind_user\" style=\"font-size:12px;overflow:hidden\" [hidden]=\"user.id != bind_user_id\">{{user.name}}</span>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-default\" style=\"height: 32px;\" (click)=\"chooseUser()\">选择</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">站点名称</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"站点名称\" [(ngModel)]=\"info.station_name\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">所在城市</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <app-choose-address></app-choose-address>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">详细地址</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"详细地址\" [(ngModel)]=\"info.address\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">经纬度</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <div class=\"input-group\">\n                        <div class=\"form-control\" style=\"height: 32px;\">\n                            <span>{{info.longitude}}</span>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-info btn-outline btn-size-12\" (click)=\"getMap()\">选经纬度\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">联系人</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"联系人\" [(ngModel)]=\"info.contacts\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">联系电话</label>\n                <div nz-col nzLg=\"16\" nzXl=\"12\">\n                    <input type=\"text\" nz-input placeholder=\"联系电话\" [(ngModel)]=\"info.phone\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">备注</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"备注\" [(ngModel)]=\"info.remarks\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">站点状态</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <nz-select style=\"width: 100%;\" [(ngModel)]=\"info.status\">\n                        <nz-option nzValue=\"1\" nzLabel=\"使用中\"></nz-option>\n                        <nz-option nzValue=\"2\" nzLabel=\"测试中\"></nz-option>\n                    </nz-select>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">投入使用时间</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <nz-date-picker [(ngModel)]=\"info.open_forbin_date\" (ngModelChange)=\"onChange($event)\" nzPlaceHolder=\"请选择投入使用时间\" style=\"width: 100%;\"></nz-date-picker>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div nz-row>\n        <div nz-col class=\"text-center add-footer\">\n            <a [routerLink]=\"['../']\">\n                <button nz-button nzType=\"default\">取消</button>\n            </a>\n            <button nz-button nzType=\"primary\" (click)=\"submit()\" class=\"submit-right\">确认</button>\n        </div>\n    </div>\n    <app-choose-enterprise #chooseEnterpriseChild (childQuery)=\"getEnterpriseId($event)\"></app-choose-enterprise>\n</div>\n<nz-modal \n    [(nzVisible)]=\"isVisible\" \n    nzTitle=\"请选择经纬度\" \n    (nzOnCancel)=\"handleCancel()\" \n    (nzOnOk)=\"handleOk()\"\n    [nzBodyStyle] = \"bodyStyle\"\n    nzWidth = '1000px'\n    >\n    <input type=\"text\" nz-input [(ngModel)]=\"longitude\" class=\"longitude\" style=\"width: 300px;\">\n    <div id=\"container\" style=\"width: 100%;height: 100%;\"></div>\n</nz-modal>\n\n<!-- 选择设备组所属人 -->\n<nz-modal [(nzVisible)]=\"isVisibleUser\" nzTitle=\"选择设备组所属人\" (nzOnCancel)=\"bindUserCancel()\" (nzOnOk)=\"bindUserOk()\" [nzFooter]=\"modalFooter\">\n  <nz-radio-group [(ngModel)]=\"bind_user_id\" style=\"width: 100%;\">\n        <label nz-radio *ngFor=\"let user of bind_user\" nzValue=\"{{user.id}}\" [ngStyle]=\"style\" class=\"frogEnterprise-level-{{user.id}}\"\n        style=\"width: 50%;margin-right: 0;\">{{user.name}}</label>\n  </nz-radio-group>\n  <ng-template #modalFooter>\n    <button nz-button nzType=\"default\" (click)=\"bindUserCancel()\">取消</button>\n    <button nz-button nzType=\"primary\" (click)=\"bindUserOk()\">确定</button>\n  </ng-template>\n</nz-modal>\n\n"

/***/ }),

/***/ "./src/app/components/station-add/station-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/station-add/station-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: StationAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationAddComponent", function() { return StationAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _directive_choose_enterprise_choose_enterprise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directive/choose-enterprise/choose-enterprise.component */ "./src/app/directive/choose-enterprise/choose-enterprise.component.ts");
/* harmony import */ var _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directive/choose-address/choose-address.component */ "./src/app/directive/choose-address/choose-address.component.ts");
/* harmony import */ var _services_station_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/station.service */ "./src/app/services/station.service.ts");
/* harmony import */ var _services_dict_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/dict.service */ "./src/app/services/dict.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StationAddComponent = /** @class */ (function () {
    function StationAddComponent(message, stationService, dictService, router) {
        this.message = message;
        this.stationService = stationService;
        this.dictService = dictService;
        this.router = router;
        this.lng = '';
        this.lat = '';
        this.longitude = '';
        this.bodyStyle = { 'width': '1000px', 'height': '660px' };
        this.info = {
            station_name: '',
            address: '',
            status: '1',
            contacts: '',
            remarks: '',
            phone: '',
            longitude: '',
            latitude: '',
            open_forbin_date: null,
            dateRange: [],
            province_id: undefined,
            city_id: undefined,
            district_id: undefined,
            province: undefined,
            city: undefined,
            district: undefined,
        };
        this.enterprise = {
            parent_id: ''
        };
        this.bind_user_id = '';
        this.enterprises = [];
        this.bind_user = [];
        // 经纬度模态框
        this.isVisible = false;
        // 所属人Modal
        this.isVisibleUser = false;
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a);
    }
    StationAddComponent.prototype.ngOnInit = function () {
        var that = this;
        Object.defineProperty(this.enterprise, 'parent_id', {
            get: function () {
                return this._parent_id;
            },
            set: function (newValue) {
                this._parent_id = newValue;
                console.log(that.enterprise.parent_id);
                if (newValue === '') {
                    that.bind_user = [];
                }
                else {
                    var condition = {
                        type: 'systemuser',
                        enterprise_id: that.enterprise.parent_id
                    };
                    that.dictService.search(condition).subscribe(function (res) {
                        console.log(res);
                        that.bind_user = res['data'];
                    });
                }
            }
        });
        // this.getEnterprise()
    };
    StationAddComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    //初始化时先获取可以选择的归属公司
    StationAddComponent.prototype.getEnterprise = function () {
        var _this = this;
        var condition = {
            type: 'enterprise',
            query: '',
            limit: 999,
            offset: 0
        };
        this.dictService.search(condition).subscribe(function (res) {
            console.log(res['data']);
            _this.enterprises = res['data'];
        });
    };
    // 选择归属公司
    StationAddComponent.prototype.chooseEnterprise = function () {
        console.log(this.child);
        this.child.showModal();
        console.log(this.enterprise.parent_id);
    };
    // 选择设备组所属人
    StationAddComponent.prototype.chooseUser = function () {
        if (this.enterprise.parent_id === '' || this.enterprise.parent_id === undefined) {
            this.message.error('请先选择归属公司');
            return false;
        }
        this.isVisibleUser = true;
    };
    StationAddComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.enterprise.parent_id);
        if (this.enterprise.parent_id === '' || this.enterprise.parent_id === undefined) {
            this.message.warning('请选择归属公司');
            return false;
        }
        if (this.bind_user_id === '' || this.bind_user_id === undefined) {
            this.message.warning('请选择设备组所属人');
            return false;
        }
        if (this.info.station_name === '') {
            this.message.warning('请输入站点名称');
            return false;
        }
        if (this.choose_address.provinceOption.id === undefined) {
            this.message.warning('请选择省份');
            return false;
        }
        if (this.choose_address.cityOption.id === undefined) {
            this.message.warning('请选择市');
            return false;
        }
        if (this.choose_address.districtOption.id === undefined) {
            this.message.warning('请选择区县');
            return false;
        }
        if (this.info.contacts === '') {
            this.message.warning('请输入联系人');
            return false;
        }
        if (this.info.phone === '') {
            this.message.warning('请输入联系电话');
            return false;
        }
        if (this.info.remarks === '') {
            this.message.warning('请输入备注');
            return false;
        }
        if (this.info.open_forbin_date === null) {
            this.message.warning('请选择投入使用时间');
            return false;
        }
        var condition = {
            enterprise_id: this.enterprise.parent_id,
            bind_user_id: this.bind_user_id,
            name: this.info.station_name,
            province_id: this.choose_address.provinceOption.id,
            city_id: this.choose_address.cityOption.id,
            district_id: this.choose_address.districtOption.id,
            province: this.choose_address.provinceOption.name,
            city: this.choose_address.cityOption.name,
            district: this.choose_address.districtOption.name,
            address: this.info.address,
            longitude: this.info.longitude,
            latitude: this.info.latitude,
            contacts: this.info.contacts,
            phone: this.info.phone,
            remarks: this.info.remarks,
            status: this.info.status,
            open_forbin_date: this.info.open_forbin_date
        };
        this.stationService.add(condition).subscribe(function (data) {
            console.log(data);
            var that = _this;
            if (data['code'] == 0) {
                _this.message.success('添加成功');
                that.router.navigate(['/station']);
            }
        });
    };
    // 获得子件组传递的公司id
    StationAddComponent.prototype.getEnterpriseId = function ($event) {
        console.log($event);
        if ($event.type) {
            this.enterprises = $event.data;
        }
        else {
            this.enterprise.parent_id = $event;
        }
    };
    // 更改时间
    StationAddComponent.prototype.onChange = function (result) {
        console.log(moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'));
        this.info.open_forbin_date = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
    };
    StationAddComponent.prototype.getMap = function () {
        var that = this;
        this.isVisible = true;
        var map = new AMap.Map("container", {
            resizeEnable: true,
            zoom: 12,
            center: [121.498586, 31.239637],
        });
        //为地图注册click事件获取鼠标点击出的经纬度坐标
        var clickEventListener = map.on('click', function (e) {
            var lng = e.lnglat.lng, lat = e.lnglat.lat;
            console.log(lng + ':' + lat);
            that.lng = lng;
            that.lat = lat;
            that.longitude = lng + ',' + lat;
        });
    };
    StationAddComponent.prototype.handleOk = function () {
        this.isVisible = false;
        this.info.longitude = this.longitude;
    };
    StationAddComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    StationAddComponent.prototype.bindUserOk = function () {
        this.isVisibleUser = false;
    };
    StationAddComponent.prototype.bindUserCancel = function () {
        this.bind_user_id = '';
        this.isVisibleUser = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_7__["ChooseAddressComponent"]),
        __metadata("design:type", _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_7__["ChooseAddressComponent"])
    ], StationAddComponent.prototype, "choose_address", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chooseEnterpriseChild'),
        __metadata("design:type", _directive_choose_enterprise_choose_enterprise_component__WEBPACK_IMPORTED_MODULE_6__["ChooseEnterpriseComponent"])
    ], StationAddComponent.prototype, "child", void 0);
    StationAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-station-add',
            template: __webpack_require__(/*! ./station-add.component.html */ "./src/app/components/station-add/station-add.component.html"),
            styles: [__webpack_require__(/*! ./station-add.component.css */ "./src/app/components/station-add/station-add.component.css")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _services_station_service__WEBPACK_IMPORTED_MODULE_8__["StationService"],
            _services_dict_service__WEBPACK_IMPORTED_MODULE_9__["DictService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StationAddComponent);
    return StationAddComponent;
}());



/***/ }),

/***/ "./src/app/components/station-edit/station-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/station-edit/station-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".longitude {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/station-edit/station-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/station-edit/station-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:15px;background: #fff;padding: 24px; min-height: 360px;\">\n    <div nz-row>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">上级公司</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <div class=\"input-group\">\n                        <div class=\"form-control\" style=\"height: 32px;\">\n                            <span *ngFor=\"let ent of enterprises\" style=\"font-size:12px;overflow:hidden\" [hidden]=\"ent.id != enterprise.parent_id\">{{ent.name}}</span>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-default\" style=\"height: 32px;\" (click)=\"chooseEnterprise()\">选择</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">所属人</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <div class=\"input-group\">\n                        <div class=\"form-control\" style=\"height: 32px;\">\n                            <span *ngFor=\"let user of bind_user\" style=\"font-size:12px;overflow:hidden\" [hidden]=\"user.id != bind_user_id\">{{user.name}}</span>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-default\" style=\"height: 32px;\" (click)=\"chooseUser()\">选择</button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">站点名称</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"站点名称\" [(ngModel)]=\"info.station_name\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">所在城市</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <app-choose-address \n                        [parent_provinceOption]=\"choose_address.provinceOption\"></app-choose-address>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">详细地址</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"详细地址\" [(ngModel)]=\"info.address\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">经纬度</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <div class=\"input-group\">\n                        <div class=\"form-control\" style=\"height: 32px;\">\n                            <span>{{info.longitude}},{{info.latitude}}</span>\n                        </div>\n                        <span class=\"input-group-btn\">\n                            <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-info btn-outline btn-size-12\" data-toggle=\"modal\" data-target=\"#LocationModal\" (click)=\"getMap()\">选经纬度\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">联系人</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"联系人\" [(ngModel)]=\"info.contacts\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">联系电话</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"联系电话\" [(ngModel)]=\"info.phone\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">备注</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <input type=\"text\" nz-input placeholder=\"备注\" [(ngModel)]=\"info.remarks\">\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">站点状态</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <nz-select style=\"width: 100%;\" [(ngModel)]=\"info.status\">\n                        <nz-option nzValue=\"1\" nzLabel=\"使用中\"></nz-option>\n                        <nz-option nzValue=\"2\" nzLabel=\"测试中\"></nz-option>\n                    </nz-select>\n                </div>\n            </div>\n        </div>\n        <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n            <div nz-row [nzGutter]=\"16\">\n                <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">投入使用时间</label>\n                <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                    <nz-date-picker [(ngModel)]=\"info.open_forbin_date\" (ngModelChange)=\"onChange($event)\" nzPlaceHolder=\"请选择投入使用时间\" style=\"width: 100%;\"></nz-date-picker>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div nz-row>\n        <div nz-col class=\"text-center add-footer\">\n            <a [routerLink]=\"['/station']\">\n                <button nz-button nzType=\"default\">取消</button>\n            </a>\n            <button nz-button nzType=\"primary\" (click)=\"submit()\" class=\"submit-right\">确认</button>\n        </div>\n    </div>\n    <app-choose-enterprise #chooseEnterpriseChild (childQuery)=\"getEnterpriseId($event)\" [parent_id]=\"enterprise.parent_id\"></app-choose-enterprise>\n</div>\n<nz-modal \n    [(nzVisible)]=\"isVisible\" \n    nzTitle=\"请选择经纬度\" \n    (nzOnCancel)=\"handleCancel()\" \n    (nzOnOk)=\"handleOk()\"\n    [nzBodyStyle] = \"bodyStyle\"\n    nzWidth = '1000px'\n    >\n    <input type=\"text\" nz-input [(ngModel)]=\"longitude\" class=\"longitude\" style=\"width: 300px;\">\n    <div id=\"container\" style=\"width: 100%;height: 100%;\"></div>\n</nz-modal>\n<!-- 选择设备组所属人 -->\n<nz-modal [(nzVisible)]=\"isVisibleUser\" nzTitle=\"选择设备组所属人\" (nzOnCancel)=\"bindUserCancel()\" (nzOnOk)=\"bindUserOk()\" [nzFooter]=\"modalFooter\">\n  <nz-radio-group [(ngModel)]=\"bind_user_id\" style=\"width: 100%;\">\n        <label nz-radio *ngFor=\"let user of bind_user\" nzValue=\"{{user.id}}\" [ngStyle]=\"style\" class=\"frogEnterprise-level-{{user.id}}\"\n        style=\"width: 50%;margin-right: 0;\">{{user.name}}</label>\n  </nz-radio-group>\n  <ng-template #modalFooter>\n    <button nz-button nzType=\"default\" (click)=\"bindUserCancel()\">取消</button>\n    <button nz-button nzType=\"primary\" (click)=\"bindUserOk()\">确定</button>\n  </ng-template>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/station-edit/station-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/station-edit/station-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: StationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationEditComponent", function() { return StationEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _directive_choose_enterprise_choose_enterprise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directive/choose-enterprise/choose-enterprise.component */ "./src/app/directive/choose-enterprise/choose-enterprise.component.ts");
/* harmony import */ var _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directive/choose-address/choose-address.component */ "./src/app/directive/choose-address/choose-address.component.ts");
/* harmony import */ var _services_station_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/station.service */ "./src/app/services/station.service.ts");
/* harmony import */ var _services_dict_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/dict.service */ "./src/app/services/dict.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StationEditComponent = /** @class */ (function () {
    function StationEditComponent(message, stationService, dictService, router, routerInfo) {
        this.message = message;
        this.stationService = stationService;
        this.dictService = dictService;
        this.router = router;
        this.routerInfo = routerInfo;
        this.parent_provinceOption = null;
        //经纬度弹窗
        this.isVisible = false;
        // 设备组所属人modal
        this.isVisibleUser = false;
        this.bind_user_id = '';
        this.bind_user = [];
        this.enterprise = {
            parent_id: ''
        };
        this.enterprises = [];
        this.bodyStyle = { 'width': '1000px', 'height': '660px' };
        this.lng = '';
        this.lat = '';
        this.longitude = '';
        this.info = {
            station_name: '',
            address: '',
            status: '1',
            contacts: '',
            remarks: '',
            phone: '',
            longitude: '',
            latitude: '',
            open_forbin_date: null,
            dateRange: [],
            province_id: undefined,
            city_id: undefined,
            district_id: undefined,
            province: undefined,
            city: undefined,
            district: undefined,
            show_map: false,
            lng: null,
            lat: null
        };
        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
        console.log('父组件执行');
        this.getEnterpriseDetail();
    }
    StationEditComponent.prototype.ngOnInit = function () {
        var that = this;
        Object.defineProperty(this.enterprise, 'parent_id', {
            get: function () {
                return this._parent_id;
            },
            set: function (newValue) {
                this._parent_id = newValue;
                console.log(that.enterprise.parent_id);
                if (newValue === '') {
                    that.bind_user = [];
                }
                else {
                    var condition = {
                        type: 'systemuser',
                        enterprise_id: that.enterprise.parent_id
                    };
                    that.dictService.search(condition).subscribe(function (res) {
                        console.log(res);
                        that.bind_user = res['data'];
                    });
                }
            }
        });
        this.getEnterprise();
        this.renderMap();
    };
    // 选择归属公司
    StationEditComponent.prototype.chooseEnterprise = function () {
        console.log(this.child);
        this.child.showModal();
        console.log(this.enterprise.parent_id);
    };
    // 选择设备组所属人
    StationEditComponent.prototype.chooseUser = function () {
        if (this.enterprise.parent_id === '' || this.enterprise.parent_id === undefined) {
            this.message.error('请先选择归属公司');
            return false;
        }
        this.isVisibleUser = true;
    };
    StationEditComponent.prototype.getEnterpriseDetail = function () {
        var _this = this;
        var condition = {
            id: this.routerInfo.snapshot.params['id']
        };
        this.stationService.get(condition).subscribe(function (res) {
            console.log(res);
            var station = res['data'];
            _this.enterprise.parent_id = station.enterprise_id;
            _this.bind_user_id = station.bind_user_id;
            _this.info.station_name = station.name;
            _this.choose_address.provinceOption = { id: station.province_id, name: station.province };
            _this.choose_address.cityOption = { id: station.city_id, name: station.city };
            _this.choose_address.districtOption = { id: station.district_id, name: station.district };
            _this.info.address = station.address;
            _this.info.contacts = station.contacts;
            _this.info.phone = station.phone;
            _this.info.open_forbin_date = station.open_forbin_date;
            _this.info.status = station.status;
            _this.info.remarks = station.remarks;
            // this.info.latitude = station.latitude;
            _this.info.longitude = station.longitude + ',' + station.latitude;
            console.log(_this.choose_address);
        });
    };
    //初始化时先获取可以选择的归属公司
    StationEditComponent.prototype.getEnterprise = function () {
        var _this = this;
        var condition = {
            type: 'enterprise',
            query: '',
            limit: 999,
            offset: 0
        };
        this.dictService.search(condition).subscribe(function (res) {
            console.log(res['data']);
            _this.enterprises = res['data'];
        });
    };
    // 获得子件组传递的公司id
    StationEditComponent.prototype.getEnterpriseId = function ($event) {
        console.log($event);
        if ($event.type) {
            this.enterprises = $event.data;
        }
        else {
            this.enterprise.parent_id = $event;
        }
    };
    // 更改时间
    StationEditComponent.prototype.onChange = function (result) {
        console.log(moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD'));
        this.info.open_forbin_date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
    };
    StationEditComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.enterprise.parent_id);
        if (this.enterprise.parent_id === '' || this.enterprise.parent_id === undefined) {
            this.message.warning('请选择归属公司');
            return false;
        }
        if (this.bind_user_id === '' || this.bind_user_id === undefined) {
            this.message.warning('请选择设备组所属人');
            return false;
        }
        if (this.info.station_name === '') {
            this.message.warning('请输入站点名称');
            return false;
        }
        if (this.choose_address.provinceOption.id === undefined) {
            this.message.warning('请选择省份');
            return false;
        }
        if (this.choose_address.cityOption.id === undefined) {
            this.message.warning('请选择市');
            return false;
        }
        if (this.choose_address.districtOption.id === undefined) {
            this.message.warning('请选择区县');
            return false;
        }
        if (this.info.contacts === '') {
            this.message.warning('请输入联系人');
            return false;
        }
        if (this.info.phone === '') {
            this.message.warning('请输入联系电话');
            return false;
        }
        if (this.info.remarks === '') {
            this.message.warning('请输入备注');
            return false;
        }
        if (this.info.open_forbin_date === null) {
            this.message.warning('请选择投入使用时间');
            return false;
        }
        if (this.info.longitude == '') {
            this.message.warning('请选择经纬度');
            return false;
        }
        var arr = this.info.longitude.split(',');
        var condition = {
            id: this.routerInfo.snapshot.params['id'],
            enterprise_id: this.enterprise.parent_id,
            bind_user_id: this.bind_user_id,
            name: this.info.station_name,
            province_id: this.choose_address.provinceOption.id,
            city_id: this.choose_address.cityOption.id,
            district_id: this.choose_address.districtOption.id,
            province: this.choose_address.provinceOption.name,
            city: this.choose_address.cityOption.name,
            district: this.choose_address.districtOption.name,
            address: this.info.address,
            longitude: arr[0],
            latitude: arr[1],
            contacts: this.info.contacts,
            phone: this.info.phone,
            remarks: this.info.remarks,
            status: this.info.status,
            open_forbin_date: this.info.open_forbin_date
        };
        this.stationService.update(condition).subscribe(function (data) {
            console.log(data);
            var that = _this;
            if (data['code'] == 0) {
                _this.message.success('更新成功');
                that.router.navigate(['/station']);
            }
        });
    };
    StationEditComponent.prototype.renderMap = function () {
    };
    StationEditComponent.prototype.getMap = function () {
        var that = this;
        this.isVisible = true;
        var map = new AMap.Map("container", {
            resizeEnable: true,
            zoom: 12,
            center: [121.498586, 31.239637],
        });
        //为地图注册click事件获取鼠标点击出的经纬度坐标
        var clickEventListener = map.on('click', function (e) {
            var lng = e.lnglat.lng, lat = e.lnglat.lat;
            console.log(lng + ':' + lat);
            // that.info.longitude = lng;
            // that.info.latitude = lat;
            that.longitude = lng + ',' + lat;
            // document.getElementById("lnglat")['value'] = e.lnglat.getLng() + ',' + e.lnglat.getLat()
        });
        // const auto = new AMap.Autocomplete({
        //     input: "tipinput"
        // });
        // AMap.event.addListener(auto, "select", select);
        function select(e) {
            if (e.poi && e.poi.location) {
                map.setZoom(15);
                map.setCenter(e.poi.location);
            }
        }
    };
    StationEditComponent.prototype.handleOk = function () {
        this.isVisible = false;
        this.info.longitude = this.longitude;
    };
    StationEditComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    StationEditComponent.prototype.bindUserCancel = function () {
        this.bind_user_id = '';
        this.isVisibleUser = false;
    };
    StationEditComponent.prototype.bindUserOk = function () {
        this.isVisibleUser = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_7__["ChooseAddressComponent"]),
        __metadata("design:type", _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_7__["ChooseAddressComponent"])
    ], StationEditComponent.prototype, "choose_address", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chooseEnterpriseChild'),
        __metadata("design:type", _directive_choose_enterprise_choose_enterprise_component__WEBPACK_IMPORTED_MODULE_6__["ChooseEnterpriseComponent"])
    ], StationEditComponent.prototype, "child", void 0);
    StationEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-station-edit',
            template: __webpack_require__(/*! ./station-edit.component.html */ "./src/app/components/station-edit/station-edit.component.html"),
            styles: [__webpack_require__(/*! ./station-edit.component.css */ "./src/app/components/station-edit/station-edit.component.css")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _services_station_service__WEBPACK_IMPORTED_MODULE_8__["StationService"],
            _services_dict_service__WEBPACK_IMPORTED_MODULE_9__["DictService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StationEditComponent);
    return StationEditComponent;
}());



/***/ }),

/***/ "./src/app/components/station-list/station-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/station-list/station-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/station-list/station-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/station-list/station-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-breadcrumb style=\"margin:16px 0;\">\n  <nz-breadcrumb-item>管理中心</nz-breadcrumb-item>\n  <nz-breadcrumb-item>设备组列表</nz-breadcrumb-item>\n</nz-breadcrumb>\n<div style=\"padding:20px; background: #fff;\">\n  <div nz-row>\n    <!-- <div nz-col nzSpan=\"24\" class=\"filter-group\"> -->\n      <!-- <div nz-col nzSpan=\"8\" class=\"filter-input\">\n        <span nz-col nzSpan=\"4\">站点状态</span>\n        <div nz-col nzSpan=\"12\">\n          <nz-select [(ngModel)]=\"info.status\" style=\"width: 100%;\">\n            <nz-option nzValue=\"0\" nzLabel=\"全部\"></nz-option>\n            <nz-option nzValue=\"1\" nzLabel=\"使用中\"></nz-option>\n            <nz-option nzValue=\"2\" nzLabel=\"测试中\"></nz-option>\n          </nz-select>\n        </div>\n      </div> -->\n      <div class=\"filter-group\" nz-col nzSm=\"0\" nzXl=\"0\">\n          <span nz-col nzSpan=\"6\">所在城市</span>\n          <div nz-col nzSpan=\"15\">\n            <app-choose-address></app-choose-address>\n          </div>\n      </div>\n      <div class=\"filter-group\" nz-col nzSm=\"24\" nzMd=\"12\" nzXl=\"8\">\n            <span nz-col nzSpan=\"6\">设备组名称</span>\n            <div nz-col nzSpan=\"15\">\n              <app-fuzzy-search type=\"station\" [(ngModel)]=\"station_item\"></app-fuzzy-search>\n            </div>\n      </div>\n      <div class=\"filter-group\" nz-col nzSm=\"24\" nzMd=\"12\" nzXl=\"8\">\n            <span nz-col nzSpan=\"6\">单位名称</span>\n            <div nz-col nzSpan=\"15\">\n                <app-fuzzy-search type=\"enterprise\" [(ngModel)]=\"enterprise_item\"></app-fuzzy-search>\n            </div>\n      </div>\n    <button nz-button nzType=\"primary\" class=\"pull-right clearfix\" (click)=\"search()\" *ngIf=\"auth.indexOf(312296149) !== -1\">查询</button>\n  </div>\n\n</div>\n<div style=\"margin-top:15px;background: #fff;padding: 24px; min-height: 360px;\">\n    <div nz-row style=\"margin-bottom: 15px;\" *ngIf=\"auth.indexOf(328369488) !== -1\">\n        <div nz-col>\n            <a [routerLink]=\"['./add']\" class=\"pull-right clearfix\">\n                <button nz-button nzType=\"default\">添加</button>\n            </a>\n        </div>\n    </div>\n  <div nz-row>\n    <nz-table \n          #basicTable [nzData]=\"station_list\" \n          [nzPageSize]=\"20\" \n          [nzTotal]=\"info.total\" \n          [nzFrontPagination]=\"false\" \n          (nzPageIndexChange)=\"changePage($event)\"\n          [nzLoading]=\"info.loading\"\n          >\n          <thead>\n            <tr>\n              <th>设备组名称</th>\n              <th>归属单位</th>\n              <th>省份</th>\n              <th>市</th>\n              <th>区县</th>\n              <th>详细地址</th>\n              <th>投入使用时间</th>\n              <!-- *ngIf=\"auth.indexOf(300570360) !== -1 || auth.indexOf(385657318) !== -1\" -->\n              <th>操作</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of basicTable.data\">\n              <td>{{data.name}}</td>\n              <td>{{data.enterprise_name}}</td>\n              <td>{{data.province}}</td>\n              <td>{{data.city}}</td>\n              <td>{{data.district}}</td>\n              <td>{{data.address}}</td>\n              <td>{{data.open_forbin_date}}</td>\n              <td>\n                 <button type=\"button\" \n                        nz-button nzType=\"primary\" \n                        nzSize=\"small\"\n                        [routerLink] = \"['/station/edit',data.id]\"\n                        *ngIf=\"auth.indexOf(300570360) !== -1\"\n                        >编辑</button>\n                 <button \n                        type=\"button\" \n                        nz-button \n                        nzType=\"default\" \n                        nzSize=\"small\"\n                        style=\"margin-left: 5px\"\n                        [routerLink]=\"['/station/detail',data.id]\"\n                        >详情</button>\n                 <button type=\"button\" \n                        nz-button nzType=\"danger\" \n                        nzSize=\"small\"\n                        nz-popconfirm\n                        nzTitle=\"确认要删除吗?\"\n                        (nzOnConfirm)=\"delete(data)\"\n                        *ngIf=\"auth.indexOf(385657318) !== -1\"\n                        style=\"margin-left: 5px\" \n                        >删除</button>\n              </td>\n            </tr>\n          </tbody>\n        </nz-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/station-list/station-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/station-list/station-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: StationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationListComponent", function() { return StationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_station_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/station.service */ "./src/app/services/station.service.ts");
/* harmony import */ var _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directive/choose-address/choose-address.component */ "./src/app/directive/choose-address/choose-address.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StationListComponent = /** @class */ (function () {
    function StationListComponent(stationService, router, message) {
        this.stationService = stationService;
        this.router = router;
        this.message = message;
        this.enterprise_item = { id: 0, name: '' };
        this.station_item = { id: 0, name: '' };
        this.station_list = [];
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.info = {
            loading: false,
            station_obj: {
                id: '',
                name: ''
            },
            enter_obj: {
                id: '',
                name: ''
            },
            query: '',
            total: 0,
            pageCnt: 0,
            page: 1,
            offset: 0,
            limit: 20,
            status: '0',
            provider: '全部',
            open_type: '全部',
            order_by: 'created_at',
            order: 'desc',
            query_name: '',
            query_station_group: '',
            query_station_group_id: '',
            show_loading_modal: false,
            show_another_screen: false,
            show_dropdown_station_list: false,
            station_group: '',
            station_group_id: '',
            export_all: false,
            enterprise_name: '',
            enterprise_id: '',
            monitor_type: 'normal',
        };
    }
    StationListComponent.prototype.ngOnInit = function () {
        console.log(this.choose_address);
        this.search();
    };
    StationListComponent.prototype.search = function () {
        var _this = this;
        var condition = {
            status: this.info.status,
            province_id: this.choose_address.provinceOption === undefined ? 0 : this.choose_address.provinceOption.id,
            city_id: this.choose_address.cityOption === undefined ? 0 : this.choose_address.cityOption.id,
            district_id: this.choose_address.districtOption === undefined ? 0 : this.choose_address.districtOption.id,
            station_obj: { id: this.station_item.id, name: this.station_item.name },
            enter_obj: { id: this.enterprise_item.id, name: this.enterprise_item.name },
            offset: this.info.offset,
            total: this.info.total,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
        };
        this.info.loading = true;
        this.stationService.search(condition)
            .subscribe(function (data) {
            console.log(data);
            _this.station_list = data.data.list;
            _this.info.total = data.data.total;
            _this.info.loading = false;
        });
    };
    StationListComponent.prototype.changePage = function ($event) {
        console.log($event);
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 删除
    StationListComponent.prototype.delete = function (data) {
        var _this = this;
        console.log(data);
        var condition = {
            id: data.id
        };
        this.stationService.delete(condition).subscribe(function (res) {
            console.log(res);
            _this.message.success('删除成功');
            _this.search();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_4__["ChooseAddressComponent"]),
        __metadata("design:type", _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_4__["ChooseAddressComponent"])
    ], StationListComponent.prototype, "choose_address", void 0);
    StationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-station-list',
            template: __webpack_require__(/*! ./station-list.component.html */ "./src/app/components/station-list/station-list.component.html"),
            styles: [__webpack_require__(/*! ./station-list.component.css */ "./src/app/components/station-list/station-list.component.css")],
            providers: [_services_station_service__WEBPACK_IMPORTED_MODULE_3__["StationService"]]
        }),
        __metadata("design:paramtypes", [_services_station_service__WEBPACK_IMPORTED_MODULE_3__["StationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], StationListComponent);
    return StationListComponent;
}());



/***/ }),

/***/ "./src/app/modules/station/station.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/station/station.module.ts ***!
  \***************************************************/
/*! exports provided: StationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationModule", function() { return StationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/mycommon/mycommon.module */ "./src/app/modules/mycommon/mycommon.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_station_list_station_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/station-list/station-list.component */ "./src/app/components/station-list/station-list.component.ts");
/* harmony import */ var _components_station_add_station_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/station-add/station-add.component */ "./src/app/components/station-add/station-add.component.ts");
/* harmony import */ var _components_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/station-edit/station-edit.component */ "./src/app/components/station-edit/station-edit.component.ts");
/* harmony import */ var _components_device_group_detail_device_group_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/device-group-detail/device-group-detail.component */ "./src/app/components/device-group-detail/device-group-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _components_station_list_station_list_component__WEBPACK_IMPORTED_MODULE_4__["StationListComponent"] },
    { path: 'add', component: _components_station_add_station_add_component__WEBPACK_IMPORTED_MODULE_5__["StationAddComponent"] },
    { path: 'edit/:id', component: _components_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_6__["StationEditComponent"] },
    { path: 'detail/:id', component: _components_device_group_detail_device_group_detail_component__WEBPACK_IMPORTED_MODULE_7__["DeviceGroupDetailComponent"] }
];
var StationModule = /** @class */ (function () {
    function StationModule() {
    }
    StationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__["MycommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_station_list_station_list_component__WEBPACK_IMPORTED_MODULE_4__["StationListComponent"],
                _components_station_add_station_add_component__WEBPACK_IMPORTED_MODULE_5__["StationAddComponent"],
                _components_station_edit_station_edit_component__WEBPACK_IMPORTED_MODULE_6__["StationEditComponent"],
                _components_device_group_detail_device_group_detail_component__WEBPACK_IMPORTED_MODULE_7__["DeviceGroupDetailComponent"]
            ]
        })
    ], StationModule);
    return StationModule;
}());



/***/ }),

/***/ "./src/app/services/station.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/station.service.ts ***!
  \*********************************************/
/*! exports provided: StationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationService", function() { return StationService; });
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



var StationService = /** @class */ (function () {
    function StationService(http) {
        this.http = http;
    }
    // 获取区域列表接口
    StationService.prototype.search = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/station/station/search', { content: JSON.stringify(condition) });
    };
    // 删除区域
    StationService.prototype.delete = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/station/station/delete', { content: JSON.stringify(condition) });
    };
    // 获取区域详情
    StationService.prototype.get = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/station/station/get', { content: JSON.stringify(condition) });
    };
    // 更新区域接口
    StationService.prototype.update = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/station/station/update', { content: JSON.stringify(condition) });
    };
    // 新增区域接口
    StationService.prototype.add = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/station/station/add', { content: JSON.stringify(condition) });
    };
    StationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StationService);
    return StationService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-station-station-module.js.map
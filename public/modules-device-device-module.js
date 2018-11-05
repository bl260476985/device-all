(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-device-device-module"],{

/***/ "./src/app/components/device-add/device-add.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/device-add/device-add.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".longitude {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/device-add/device-add.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/device-add/device-add.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:15px;background: #fff;padding: 24px; min-height: 360px;\">\n    <form #addForm=\"ngForm\" (ngSubmit)=\"submit(addForm)\">\n        <div nz-row>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">设备名称</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <input type=\"text\" nz-input placeholder=\"请输入设备名称\" ngModel name=\"device_name\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">设备串号</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <input type=\"text\" nz-input placeholder=\"请输入设备串号\" ngModel name=\"device_number\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">归属设备组</label>\n                    <div nz-col  nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <app-form-choose-enterprise [ngModel]=\"station\" name=\"station_id\" [type]=\"'station'\"></app-form-choose-enterprise>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">所在城市</label>\n                    <div nz-col  nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <app-choose-address></app-choose-address>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">详细地址</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <input type=\"text\" nz-input placeholder=\"详细地址\" ngModel name=\"address\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">经纬度</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <div class=\"input-group\">\n                            <div class=\"form-control\" style=\"height: 32px;\">\n                                <span>{{longitude}}</span>\n                            </div>\n                            <span class=\"input-group-btn\">\n                                <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-info btn-outline btn-size-12\" (click)=\"getMap()\">选经纬度\n                                </button>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">设备类型</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <nz-select style=\"width: 100%;\" [ngModel]=\"info.type\" name=\"device_type\">\n                            <nz-option nzValue=\"1\" nzLabel=\"烟感\" nzDisabled *ngIf=\"info.type == '1'\"></nz-option>\n                            <nz-option nzValue=\"2\" nzLabel=\"智能节点\" nzDisabled *ngIf=\"info.type == '2'\"></nz-option>\n                            <nz-option nzValue=\"3\" nzLabel=\"门磁\" nzDisabled *ngIf=\"info.type == '3'\"></nz-option>\n                            <nz-option nzValue=\"4\" nzLabel=\"智能锁\" nzDisabled *ngIf=\"info.type == '4'\"></nz-option>\n                            <nz-option nzValue=\"5\" nzLabel=\"断路检测仪\" nzDisabled *ngIf=\"info.type == '5'\"></nz-option>\n                        </nz-select>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">类型说明</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <input type=\"text\" nz-input placeholder=\"请输入类型说明\" [ngModel]=\"info.device_remarks\" name=\"device_remarks\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">说明</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"16\" nzXXl=\"14\">\n                        <input type=\"text\" nz-input placeholder=\"请输入说明\" [ngModel]=\"info.provider\" name=\"provider\">\n                        <!-- <nz-select style=\"width: 100%;\" [ngModel]=\"info.provider\" name=\"provider\">\n                            <nz-option nzValue=\"\" nzLabel=\"请选择说明\"></nz-option>\n                            <nz-option nzValue=\"库存设备\" nzLabel=\"库存设备\"></nz-option>\n                            <nz-option nzValue=\"演示设备\" nzLabel=\"演示设备\"></nz-option>\n                            <nz-option nzValue=\"2\" nzLabel=\"智能节点\"></nz-option>\n                            <nz-option nzValue=\"3\" nzLabel=\"门磁\"></nz-option>\n                            <nz-option nzValue=\"4\" nzLabel=\"智能锁\"></nz-option>\n                            <nz-option nzValue=\"5\" nzLabel=\"断路检测仪\"></nz-option>\n                        </nz-select> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-row>\n            <div nz-col class=\"text-center add-footer\">\n                <a [routerLink]=\"['/device']\">\n                    <button nz-button nzType=\"default\">取消</button>\n                </a>\n                <button nz-button nzType=\"primary\" type=\"submit\" class=\"submit-right\">确认</button>\n            </div>\n        </div>\n    </form>\n</div>\n<nz-modal \n    [(nzVisible)]=\"isVisible\" \n    nzTitle=\"请选择经纬度\" \n    (nzOnCancel)=\"handleCancel()\" \n    (nzOnOk)=\"handleOk()\"\n    [nzBodyStyle] = \"bodyStyle\"\n    nzWidth = '1000px'\n    >\n    <input type=\"text\" nz-input [(ngModel)]=\"longitude\" class=\"longitude\" style=\"width: 300px;\">\n    <div id=\"container\" style=\"width: 100%;height: 100%;\"></div>\n</nz-modal>\n\n"

/***/ }),

/***/ "./src/app/components/device-add/device-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/device-add/device-add.component.ts ***!
  \***************************************************************/
/*! exports provided: DeviceAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAddComponent", function() { return DeviceAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directive/choose-address/choose-address.component */ "./src/app/directive/choose-address/choose-address.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceAddComponent = /** @class */ (function () {
    function DeviceAddComponent(deviceService, message, router, routerInfo) {
        this.deviceService = deviceService;
        this.message = message;
        this.router = router;
        this.routerInfo = routerInfo;
        this.isVisible = false;
        this.bodyStyle = { 'width': '1000px', 'height': '660px' };
        this.info = {
            type: '1',
            device_remarks: '独立式烟雾报警器',
            longitude: '',
            provider: '库存设备'
        };
    }
    DeviceAddComponent.prototype.ngOnInit = function () {
        this.searchType();
        Object.defineProperty({}, 'station_id', {
            get: function () {
                console.log(this._station_id);
                return this._station_id;
            },
            set: function (newValue) {
                console.log(newValue);
                this._station_id = newValue;
            }
        });
    };
    DeviceAddComponent.prototype.ngOnChanges = function (value) {
        console.log(value);
    };
    DeviceAddComponent.prototype.searchType = function () {
        // 获取路由参数设置设备类型
        var type = this.routerInfo.snapshot.params.type;
        switch (type) {
            case "1":
                this.info.type = String(type);
                this.info.device_remarks = '独立式烟雾报警器';
                break;
            case "2":
                this.info.type = String(type);
                this.info.device_remarks = 'Nb-IoT智能井盖';
                break;
            case "3":
                this.info.type = String(type);
                this.info.device_remarks = "门磁感应检测";
                break;
            case "4":
                this.info.type = String(type);
                this.info.device_remarks = "智能锁";
                break;
            case "5":
                this.info.type = String(type);
                this.info.device_remarks = "报警检测";
                break;
        }
    };
    DeviceAddComponent.prototype.getMap = function () {
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
        function select(e) {
            if (e.poi && e.poi.location) {
                map.setZoom(15);
                map.setCenter(e.poi.location);
            }
        }
    };
    DeviceAddComponent.prototype.handleOk = function () {
        this.isVisible = false;
        this.info.longitude = this.longitude;
    };
    DeviceAddComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    DeviceAddComponent.prototype.submit = function (form) {
        var _this = this;
        console.log(form.value.station_id);
        return false;
        if (form.value.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (form.value.device_number === '') {
            this.message.warning('请输入设备串号');
            return false;
        }
        if (form.value.station_id == '') {
            this.message.warning('请选择归属区域');
            return false;
        }
        if (!this.choose_address.provinceOption || this.choose_address.provinceOption.name == '全部') {
            this.message.warning('请选择省份');
            return false;
        }
        if (!this.choose_address.cityOption || this.choose_address.cityOption.name == '全部') {
            this.message.warning('请选择城市');
            return false;
        }
        if (!this.choose_address.districtOption || this.choose_address.districtOption.name == '全部') {
            this.message.warning('请选择区县');
            return false;
        }
        if (form.value.address == '') {
            this.message.warning('请输入详细地址');
            return false;
        }
        if (this.info.longitude === '') {
            this.message.warning('请选择经纬度');
            return false;
        }
        var arr = this.info.longitude.split(',');
        var condition = form.value;
        condition.province_id = this.choose_address.provinceOption.id;
        condition.city_id = this.choose_address.cityOption.id;
        condition.district_id = this.choose_address.districtOption.id;
        condition.province = this.choose_address.provinceOption.name;
        condition.city = this.choose_address.cityOption.name;
        condition.district = this.choose_address.districtOption.name;
        condition.longitude = arr[0];
        condition.latitude = arr[1];
        console.log(form);
        this.deviceService.add(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('创建成功');
                switch (_this.info.type) {
                    case "1":
                        _this.router.navigate(['/device/smoke']);
                        break;
                    case "2":
                        _this.router.navigate(['/device/wellCover']);
                        break;
                    case "3":
                        _this.router.navigate(['/device/door']);
                        break;
                    case "4":
                        _this.router.navigate(['/device/lock']);
                        break;
                    case "5":
                        _this.router.navigate(['/device/monitor']);
                        break;
                    default:
                        _this.router.navigate(['/device']);
                        break;
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_3__["ChooseAddressComponent"]),
        __metadata("design:type", _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_3__["ChooseAddressComponent"])
    ], DeviceAddComponent.prototype, "choose_address", void 0);
    DeviceAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-add',
            template: __webpack_require__(/*! ./device-add.component.html */ "./src/app/components/device-add/device-add.component.html"),
            styles: [__webpack_require__(/*! ./device-add.component.css */ "./src/app/components/device-add/device-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], DeviceAddComponent);
    return DeviceAddComponent;
}());



/***/ }),

/***/ "./src/app/components/device-door/device-door.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/device-door/device-door.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n  height: 100%;\r\n}\r\n\r\n.device-top {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: left;\r\n  background: #ffffff;\r\n  margin: 0px 10px 0px 10px;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.device-top-left {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.device-top-left div {\r\n  flex: 1;\r\n  width: 0;\r\n}\r\n\r\n.device-top-right {\r\n  float: right;\r\n}\r\n\r\n.device-container {\r\n  background-color: #ffffff;\r\n  margin: 10px 10px 0 10px;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  height: calc(100% - 40px);\r\n}\r\n\r\n.container-top {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.container-left {\r\n  width: 60%;\r\n}\r\n\r\n.container-right {\r\n  width: 40%;\r\n}\r\n\r\n.container-left input,\r\nbutton {\r\n  display: inline-block;\r\n}\r\n\r\n.container-left input {\r\n  margin-right: 30px;\r\n}\r\n\r\n.container-left button {\r\n  margin-left: 10px;\r\n}\r\n\r\n#map {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.addBtn{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.operate{\r\n    cursor: pointer;\r\n}\r\n\r\n.operate img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.ant-form-item{\r\n    margin-bottom: 3px!important;\r\n}\r\n\r\n.ant-form-item-control-wrapper .ant-form-item-control{\r\n    line-height: 20px!important;\r\n}\r\n\r\n.ant-form-item-label{\r\n    line-height: 20px!important;\r\n}\r\n\r\n.item-label{\r\n    text-align: right;\r\n    margin-right: 5px;\r\n    line-height: 30px;\r\n}\r\n\r\n.item-content{\r\n    line-height: 30px;\r\n}\r\n\r\n.heart-left{\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n\r\n.heart-right{\r\n    display: inline-block;\r\n    width: 50%;\r\n    margin-left: 5%;\r\n}\r\n\r\n.footer{\r\n    /*border-top: 1px solid #ccc;*/\r\n}\r\n\r\n.container-top{\r\n  position: relative;\r\n}\r\n\r\n/*高德点标注*/\r\n\r\n.info {\r\n    border: solid 1px silver;\r\n}\r\n\r\ndiv.info-top {\r\n    position: relative;\r\n    background: none repeat scroll 0 0 #F9F9F9;\r\n    border-bottom: 1px solid #CCC;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n\r\ndiv.info-top div {\r\n    display: inline-block;\r\n    color: #333333;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding: 0 10px;\r\n}\r\n\r\ndiv.info-top img {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    transition-duration: 0.25s;\r\n}\r\n\r\ndiv.info-top img:hover {\r\n    box-shadow: 0px 0px 5px #000;\r\n}\r\n\r\ndiv.info-middle {\r\n    font-size: 12px;\r\n    padding: 6px;\r\n    line-height: 20px;\r\n}\r\n\r\ndiv.info-bottom {\r\n    height: 0px;\r\n    width: 100%;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\n\r\ndiv.info-bottom img {\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\n\r\nspan {\r\n    margin-left: 5px;\r\n    font-size: 11px;\r\n}\r\n\r\n.info-middle img {\r\n    float: left;\r\n    margin-right: 6px;\r\n}\r\n\r\n.info-top div{\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/device-door/device-door.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/device-door/device-door.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"device-top\">\n     <div class=\"device-top-left\">\n      <div>设备总数:{{deviceDetail.total}}</div>\n      <div>正常:{{deviceDetail.normal}}</div>\n      <div>工作中:{{deviceDetail.working}}</div>\n      <div>报警:{{deviceDetail.warning}}</div>\n      <div>离线:{{deviceDetail.offline}}</div>\n     </div>\n     <div class=\"device-top-right\">\n      <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"showAllDevice()\">显示所有设备</button>\n     </div>\n  </div>\n  <div class=\"device-container\">\n    <div class=\"container-left\">\n      <div class=\"container-top\">\n        <input type=\"text\" nz-input nzSize=\"default\" placeholder=\"请输入名称或编号\" style=\"width:260px;\" [(ngModel)]=\"info.query\">\n        <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"clear()\">清空</button>\n        <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"search()\" *ngIf=\"auth.indexOf(141565597) !== -1\">搜索</button>\n        <button nz-button nzType=\"primary\" nzSize=\"small\" class=\"addBtn\" [routerLink]=\"['/device/add',3]\" *ngIf=\"auth.indexOf(213486063) !== -1\">添加</button>\n      </div>\n      <nz-table #basicTable [nzData]=\"device_list\"\n                  [nzPageSize]=\"20\" \n                      [nzTotal]=\"info.total\" \n                      [nzFrontPagination]=\"false\" \n                      (nzPageIndexChange)=\"changePage($event)\"\n                      [nzLoading]=\"info.loading\">\n        <thead>\n          <tr>\n            <th>名称</th>\n            <th>编号</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>类型说明</th>\n            <th>状态</th>\n            <th  *ngIf=\"auth.indexOf(319668985) !== -1 || auth.indexOf(459257163) !== -1\">操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n            <td>{{data.device_name}}</td>\n            <td>{{data.device_number}}</td>\n            <td>{{data.provider}}</td>\n            <td>{{data.device_type_name}}</td>\n            <td>{{data.device_remarks}}</td>\n            <td>{{data.status_name}}</td>\n            <td class=\"operate\">\n              <button type=\"button\" nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"operateDevice(data)\"\n              *ngIf=\"auth.indexOf(319668985) !== -1\"\n              >编辑</button>\n              <button type=\"button\" \n                  nz-button \n                  nzType=\"danger\" \n                  nzSize=\"small\" \n                  nz-popconfirm\n                  nzTitle=\"确认要删除吗?\"\n                  (nzOnConfirm)=\"deleteDevice(data)\"\n                  *ngIf=\"auth.indexOf(459257163) !== -1\"\n                  >删除</button>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n    <div class=\"container-right\">\n      <div id=\"map\">\n        \n      </div>\n    </div>\n  </div>\n</div>\n<!-- 设备操作模态框 -->\n<nz-modal [(nzVisible)]=\"isOperate\" \n      nzTitle=\"操作\" \n      [nzBodyStyle] = \"bodyStyle\"\n        nzWidth = '1000px'\n        [nzFooter]=\"null\"\n        (nzOnCancel) = \"operateCancel()\"\n      >\n    <nz-tabset>\n      <nz-tab nzTitle=\"操作日志\">\n          <nz-table #warningTable [nzData]=\"singleDevice.warning\"\n                      [nzFrontPagination]=\"false\"\n                      [nzSize]=\"'small'\"\n                      [nzShowPagination]=\"false\"\n                      >\n        <thead>\n          <tr>\n            <th>日期</th>\n            <th>设备号</th>\n            <th>说明</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of warningTable.data\">\n            <td>{{data.created_at}}</td>\n            <td>{{data.device_id}}</td>\n            <td>{{data.fault_type_name}}</td>\n          </tr>\n        </tbody>\n      </nz-table>\n      </nz-tab>\n      <nz-tab nzTitle=\"添加工作计划\">\n          <div nz-row>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设&nbsp;&nbsp;备&nbsp;&nbsp;号:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_number}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_type_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备&nbsp;&nbsp;&nbsp;&nbsp;  注:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_remarks}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">心跳间隔:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <input type=\"number\" nz-input style=\"width: 200px\" [(ngModel)]=\"cur_interval\" placeholder=\"请输入心跳间隔\" min=\"0\">\n                  <span>小时</span>\n              </div>\n            </div>\n            <!-- <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">开始时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-date-picker\n                nzShowTime\n                nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                nzPlaceHolder=\"请选择开始时间\"\n                (ngModelChange)=\"onChange($event)\"\n                (nzOnOk)=\"onOk($event)\"\n              ></nz-date-picker>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">持续时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"continuedValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"5分钟\" nzLabel=\"5分钟\"></nz-option>\n                  <nz-option nzValue=\"15分钟\" nzLabel=\"15分钟\"></nz-option>\n                  <nz-option nzValue=\"半小时\" nzLabel=\"半小时\"></nz-option>\n                  <nz-option nzValue=\"一小时\" nzLabel=\"一小时\"></nz-option>\n                  <nz-option nzValue=\"一天\" nzLabel=\"一天\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">类&nbsp;&nbsp;&nbsp;&nbsp;  型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"typeValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"单次\" nzLabel=\"单次\"></nz-option>\n                  <nz-option nzValue=\"多次\" nzLabel=\"多次\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">计划说明:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <textarea rows=\"3\" nz-input [(ngModel)]=\"inputValue\" style=\"width: 300px;\" placeholder=\"请输入计划说明\"></textarea>\n              </div>\n            </div> -->\n            <div nz-col [nzXl]=\"24\" class=\"footer\">\n              <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"addWorkPlan()\">确认</button>\n              <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n            </div>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"编辑设备\">\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_name\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_type_name\" readonly=\"readonly\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备号:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_number\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">归属设备组:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <app-form-choose-enterprise [type]=\"'station'\" [(ngModel)]=\"singleDevice.station_id\"></app-form-choose-enterprise>\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备注:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.provider\" placeholder=\"请输入备注\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\" class=\"footer\">\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirmEditDevice()\">确认</button>\n            <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"历史数据\">\n            <div style=\"display: flex;\">\n                <div class=\"heart-left\" style=\"height: 500px;\">\n                    <h4>心跳记录</h4>\n                    <nz-table #heartTable [nzData]=\"singleDevice.heart\"\n                                      [nzFrontPagination]=\"false\"\n                                      [nzSize]=\"'small'\"\n                                      [nzShowPagination]=\"false\"\n                                      >\n                    <thead>\n                        <tr>\n                            <th>日期</th>\n                            <th>温度(°C)</th>\n                            <th>光照度(lux)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of heartTable.data\">\n                            <td>{{data.created_at}}</td>\n                            <td>{{data.temperature}}</td>\n                            <td>{{data.beam}}</td>\n                        </tr>\n                    </tbody>\n                </nz-table>\n                </div>\n                <div class=\"heart-right\">\n                    <h4>历史数据</h4>\n                    <div id=\"chartLock\">\n                        \n                    </div>\n                </div>\n            </div>\n        </nz-tab>\n    </nz-tabset>\n</nz-modal>\n<nz-modal [(nzVisible)]=\"bigMapVisible\" \n        nzTitle=\"显示全部设备\" \n        (nzOnCancel)=\"bigCancel()\" \n        [nzFooter]=\"null\"\n        [nzBodyStyle] = \"bigMapStyle\"\n        nzWidth=\"1200px\"\n        [nzMaskClosable]=\"false\"\n      >\n    <div id=\"bigMap\" style=\"height:60vh;\">\n      \n    </div>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/device-door/device-door.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/device-door/device-door.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeviceDoorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDoorComponent", function() { return DeviceDoorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceDoorComponent = /** @class */ (function () {
    function DeviceDoorComponent(deviceService, message) {
        this.deviceService = deviceService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.isOperate = false;
        // infoWindow;
        // 心跳间隔
        this.cur_interval = '';
        this.singleDevice = {
            id: '',
            station_id: '',
            device_name: '',
            device_number: '',
            device_type_name: '',
            device_remarks: '',
            provider: '',
            warning: [],
            heart: []
        };
        this.continuedValue = '5分钟';
        this.typeValue = '单次';
        this.planValue = '';
        this.bodyStyle = { 'height': 'auto' };
        this.deviceDetail = {
            total: 0,
            normal: 0,
            working: 0,
            warning: 0,
            offline: 0
        };
        this.info = {
            query: '',
            type: 3,
            offset: 0,
            limit: 20,
            order_by: 'created_at',
            order: 'desc',
            total: 0,
            loading: false,
        };
        this.device_list = [];
        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.bigMapVisible = false;
        this.bigMapStyle = { height: 'auto' };
    }
    DeviceDoorComponent.prototype.ngOnInit = function () {
        var obj = {
            tem: 213123,
            name: '12321312',
            age: 18,
            sex: 'woman'
        };
        var content = '';
        for (var i in obj) {
            content += i;
            content += ':';
            content += obj[i];
            content += '<br />';
        }
        console.log(content);
        this.statistics();
        this.search();
    };
    DeviceDoorComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 2
        }); // 创建地图实例
    };
    DeviceDoorComponent.prototype.mapClick = function (Device) {
        var lng = Device.longitude;
        var lat = Device.latitude;
        this.map.setZoomAndCenter(17, [lng, lat]);
        var content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u540D\u79F0:" + Device.device_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u7535\u538B:" + Device.real_voltage + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u72B6\u6001:" + Device.status_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t";
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, [lng, lat]);
    };
    // 清空查询输入框
    DeviceDoorComponent.prototype.clear = function () {
        this.info.query = '';
    };
    // 查询设备
    DeviceDoorComponent.prototype.search = function () {
        var _this = this;
        var that = this;
        var condition = {
            query: this.info.query,
            type: this.info.type,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            for (var i = 0; i < _this.device_list.length; i++) {
                var device = _this.device_list[i];
                _this.addMarker(_this.device_list[i]);
                /*AMap.event.addListener(this.marker, 'click', (e) =>{
                        console.log(this.device_list[i])
                         //实例化信息窗体
                                const title = `${this.device_list[i].device_name}`;
                                const content = [
                                            this.device_list[i].device_name,
                                            this.device_list[i].device_number
                                    ];
                                const infoWindow = new AMap.InfoWindow({
                                        isCustom: true,  //使用自定义窗体
                                        content: this.createInfoWindow(title, content.join("<br/>"),this),
                                        offset: new AMap.Pixel(16, -45)
                                });
                                infoWindow.open(this.map, this.marker.getPosition());
                });*/
            }
        });
    };
    DeviceDoorComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 获取顶部数据
    DeviceDoorComponent.prototype.statistics = function () {
        var _this = this;
        var condition = {
            type: this.info.type
        };
        this.deviceService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceDetail = res['data'];
        });
    };
    // 编辑设备
    DeviceDoorComponent.prototype.operateDevice = function (device) {
        this.singleDevice = JSON.parse(JSON.stringify(device));
        this.getWarning(device.id);
        this.getHeart(device.id);
        this.isOperate = true;
    };
    DeviceDoorComponent.prototype.operateCancel = function () {
        this.isOperate = false;
    };
    DeviceDoorComponent.prototype.operateOk = function () {
        this.isOperate = true;
    };
    // 删除设备
    DeviceDoorComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var condition = {
            id: device.id
        };
        this.deviceService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    DeviceDoorComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    DeviceDoorComponent.prototype.onOk = function (data) {
        console.log(data);
    };
    // 获取单个设备的报警记录
    DeviceDoorComponent.prototype.getWarning = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.singleDevice.warning = res['data']['list'];
        });
    };
    // 获取单个设备的心跳记录
    DeviceDoorComponent.prototype.getHeart = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.heartSearch(condition).subscribe(function (res) {
            _this.singleDevice.heart = res['data']['list'];
            // 获取设备心跳记录后 渲染图表
            _this.renderChart();
        });
    };
    DeviceDoorComponent.prototype.cancleDevice = function () {
        this.isOperate = false;
    };
    // 单个设备添加工作计划
    DeviceDoorComponent.prototype.addWorkPlan = function () {
        var _this = this;
        if (this.cur_interval === '') {
            this.message.warning('请输入心跳间隔');
            return false;
        }
        var condition = {
            id: this.singleDevice.id,
            cur_interval: this.cur_interval
        };
        this.deviceService.heart(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('设置成功');
                _this.isOperate = false;
            }
        });
    };
    // 编辑单个设备
    DeviceDoorComponent.prototype.confirmEditDevice = function () {
        var _this = this;
        if (this.singleDevice.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (this.singleDevice.device_number === '') {
            this.message.warning('请输入设备号');
            return false;
        }
        if (this.singleDevice.station_id === '') {
            this.message.warning('请选择设备组');
            return false;
        }
        var condition = this.singleDevice;
        this.deviceService.update(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('修改成功');
                _this.isOperate = false;
            }
        });
    };
    //添加点标记
    DeviceDoorComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        // const marker = new AMap.Marker({
        //     position: longitude,
        //     map: this.map
        // });
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                    content: ''
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                    content: ''
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                    content: ''
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/suo_zc.png',
                    content: ''
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        marker.content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u540D\u79F0:" + Device.device_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u7535\u538B:" + Device.real_voltage + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u72B6\u6001:" + Device.status_name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t";
        marker.on('click', this.markerClick.bind(this));
    };
    DeviceDoorComponent.prototype.markerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    };
    //构建自定义信息窗体
    DeviceDoorComponent.prototype.createInfoWindow = function (title, content, that) {
        console.log(that);
        var info = document.createElement("div");
        info.className = "info";
        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("span");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = this.closeInfoWindow.bind(this);
        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);
        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);
        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    };
    // 关闭信息窗体
    DeviceDoorComponent.prototype.closeInfoWindow = function (that) {
        console.log(this);
        this.map.clearInfoWindow();
    };
    DeviceDoorComponent.prototype.renderChart = function () {
        var heart = this.singleDevice.heart;
        var arr = [];
        for (var i = 0; i < heart.length; i++) {
            var obj = {
                date: heart[i].created,
                '光照度': heart[i].temperature,
                '温度': heart[i].beam
            };
            arr.push(obj);
        }
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_3___default.a.Chart({
            container: 'chartLock',
            forceFit: true,
            height: 500,
            padding: 'auto'
        });
        this.chart.source(arr, {
            beam: {
                min: 0,
                tickInterval: 50,
                alias: '光照度'
            },
            temperature: {
                // min: 5,
                tickInterval: 5,
                alias: '温度'
            }
        });
        // 左侧 Y 轴，即光照轴
        this.chart.axis('beam', {
            label: {
                formatter: function (val) {
                    return val + ' mm'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#95ceff'
                }
            },
            line: null,
            tickLine: null
        });
        // 右侧第一个 Y 轴，即温度轴
        this.chart.axis('temperature', {
            line: null,
            tickLine: null,
            label: {
                formatter: function (val) {
                    return val + ' °C'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#90ed7d'
                }
            }
        });
        this.chart.legend({
            position: 'top'
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('date*光照度').color('blue').size(2); // 光照
        this.chart.line().position('date*温度').color('red').size(2).shape('smooth'); // 温度
        // this.chart.point().position('date*temperature').color('#90ed7d').shape('diamond');
        this.chart.render();
    };
    DeviceDoorComponent.prototype.showAllDevice = function () {
        this.bigMapVisible = true;
        this.bigMap = new AMap.Map('bigMap', {
            resizeEnable: true,
            zoom: 2
        });
        for (var i = 0; i < this.device_list.length; i++) {
            var marker = this.bigMapAddMarker(this.device_list[i]);
        }
    };
    DeviceDoorComponent.prototype.bigCancel = function () {
        this.bigMapVisible = false;
    };
    //添加点标记
    DeviceDoorComponent.prototype.bigMapAddMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n\t                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n\t                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n\t                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n\t                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n\t                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n\t                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n\t                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n\t                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n\t                           </div>\n\t                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n\t                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n\t                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n\t                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n\t                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n\t                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n\t                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n\t                           </div>\n\t                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n\t                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n\t                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n\t                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n\t                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n\t                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n\t                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n\t                           </div>\n\t                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n\t                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n\t                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n\t                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n\t                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n\t                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n\t                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n\t                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n\t                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n\t                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n\t                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n\t                              <p><button>\u5F00\u542F</button></p>\n\t                           </div>\n\t                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n\t                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n\t                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n\t                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n\t                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n\t                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n\t                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n\t                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n\t                           </div>\n\t                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.bigMapMarkerClick.bind(this));
    };
    DeviceDoorComponent.prototype.bigMapMarkerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.bigMap, e.target.getPosition());
    };
    DeviceDoorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-door',
            template: __webpack_require__(/*! ./device-door.component.html */ "./src/app/components/device-door/device-door.component.html"),
            styles: [__webpack_require__(/*! ./device-door.component.css */ "./src/app/components/device-door/device-door.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], DeviceDoorComponent);
    return DeviceDoorComponent;
}());



/***/ }),

/***/ "./src/app/components/device-edit/device-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/device-edit/device-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".longitude {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 40px;\r\n}"

/***/ }),

/***/ "./src/app/components/device-edit/device-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/device-edit/device-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:15px;background: #fff;padding: 24px; min-height: 360px;\">\n    <form #editForm=\"ngForm\" (ngSubmit)=\"submit(editForm)\">\n        <div nz-row>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">设备名称</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\">\n                        <input type=\"text\" nz-input placeholder=\"请输入设备名称\" [ngModel]=\"deviceInfo.device_name\" name=\"device_name\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"11\" nzOffset=\"1\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">设备串号</label>\n                    <div nz-col nz-col nzLg=\"16\" nzXl=\"12\">\n                        <input type=\"text\" nz-input placeholder=\"请输入设备串号\" [ngModel]=\"deviceInfo.device_number\" name=\"device_number\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">归属设备组</label>\n                    <div nz-col  nzLg=\"16\" nzXl=\"16\">\n                        <app-form-choose-enterprise [ngModel]=\"deviceInfo.station_id\" name=\"station_id\" [type]=\"'station'\"></app-form-choose-enterprise>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">所在城市</label>\n                    <div nz-col  nzLg=\"16\" nzXl=\"16\">\n                        <app-choose-address [parent_provinceOption]=\"choose_address.provinceOption\"></app-choose-address>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">详细地址</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\">\n                        <input type=\"text\" nz-input placeholder=\"详细地址\" [ngModel]=\"deviceInfo.address\" name=\"address\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">经纬度</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\">\n                        <div class=\"input-group\">\n                            <div class=\"form-control\" style=\"height: 32px;\">\n                                <span>{{longitude}}</span>\n                            </div>\n                            <span class=\"input-group-btn\">\n                                <button type=\"button\" nz-button nzType=\"default\" class=\"btn btn-info btn-outline btn-size-12\" (click)=\"getMap()\">选经纬度\n                                </button>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">设备类型</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\">\n                        <nz-select style=\"width: 100%;\" [ngModel]=\"deviceInfo.device_type\" name=\"device_type\">\n                            <nz-option nzValue=\"1\" nzLabel=\"烟感\" nzDisabled></nz-option>\n                            <!-- <nz-option nzValue=\"2\" nzLabel=\"智能节点\"></nz-option>\n                            <nz-option nzValue=\"3\" nzLabel=\"门磁\"></nz-option>\n                            <nz-option nzValue=\"4\" nzLabel=\"智能锁\"></nz-option>\n                            <nz-option nzValue=\"5\" nzLabel=\"断路检测仪\"></nz-option> -->\n                        </nz-select>\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">类型说明</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\">\n                        <input type=\"text\" nz-input placeholder=\"请输入类型说明\" [ngModel]=\"deviceInfo.device_remarks\" name=\"device_remarks\">\n                    </div>\n                </div>\n            </div>\n            <div nz-col nzXs=\"24\" nzMd=\"12\" nzLg=\"12\" nzXl=\"12\" class=\"add-form\">\n                <div nz-row [nzGutter]=\"16\">\n                    <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">说明</label>\n                    <div nz-col nzLg=\"16\" nzXl=\"16\">\n                        <input type=\"text\" nz-input placeholder=\"请输入说明\" [ngModel]=\"deviceInfo.provider\" name=\"provider\">\n                        <!-- <nz-select style=\"width: 100%;\" [ngModel]=\"deviceInfo.provider\" name=\"provider\">\n                            <nz-option nzValue=\"\" nzLabel=\"请选择说明\"></nz-option>\n                            <nz-option nzValue=\"库存设备\" nzLabel=\"库存设备\"></nz-option>\n                            <nz-option nzValue=\"演示设备\" nzLabel=\"演示设备\"></nz-option>\n                        </nz-select> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div nz-row>\n            <div nz-col class=\"text-center\">\n                <a [routerLink]=\"['/device']\">\n                    <button nz-button nzType=\"default\">取消</button>\n                </a>\n                <button nz-button nzType=\"primary\" type=\"submit\" class=\"submit-right\">确认</button>\n            </div>\n        </div>\n    </form>\n</div>\n<nz-modal \n    [(nzVisible)]=\"isVisible\" \n    nzTitle=\"请选择经纬度\" \n    (nzOnCancel)=\"handleCancel()\" \n    (nzOnOk)=\"handleOk()\"\n    [nzBodyStyle] = \"bodyStyle\"\n    nzWidth = '1000px'\n    >\n    <input type=\"text\" nz-input [(ngModel)]=\"longitude\" class=\"longitude\" style=\"width: 300px;\">\n    <div id=\"container\" style=\"width: 100%;height: 100%;\"></div>\n</nz-modal>\n\n"

/***/ }),

/***/ "./src/app/components/device-edit/device-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/device-edit/device-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeviceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceEditComponent", function() { return DeviceEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var DeviceEditComponent = /** @class */ (function () {
    function DeviceEditComponent(deviceService, router, routerInfo, message) {
        this.deviceService = deviceService;
        this.router = router;
        this.routerInfo = routerInfo;
        this.message = message;
        this.bodyStyle = { 'width': '1000px', 'height': '660px' };
        this.isVisible = false;
        this.deviceInfo = {
            device_name: '',
            device_number: '',
            station_id: '',
            address: '',
            longitude: '',
            latitude: '',
            device_type: '',
            device_remarks: '',
            provider: '',
            province_id: '0',
            city_id: '0',
            district_id: '0',
            province: '',
            city: '',
            district: ''
        };
    }
    DeviceEditComponent.prototype.ngOnInit = function () {
        this.getDeviceDetail();
    };
    DeviceEditComponent.prototype.getDeviceDetail = function () {
        var _this = this;
        var condition = {
            id: this.routerInfo.snapshot.params.id
        };
        this.deviceService.get(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceInfo = res['data'];
            _this.choose_address.provinceOption = { id: _this.deviceInfo.province_id, name: _this.deviceInfo.province };
            _this.choose_address.cityOption = { id: _this.deviceInfo.city_id, name: _this.deviceInfo.city };
            _this.choose_address.districtOption = { id: _this.deviceInfo.district_id, name: _this.deviceInfo.district };
            _this.longitude = _this.deviceInfo.longitude + ',' + _this.deviceInfo.latitude;
        });
    };
    DeviceEditComponent.prototype.submit = function (form) {
        var _this = this;
        console.log(form);
        if (form.value.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (form.value.device_number === '') {
            this.message.warning('请输入设备串号');
            return false;
        }
        if (form.value.station_id === '') {
            this.message.warning('请选择归属区域');
            return false;
        }
        if (!this.choose_address.provinceOption || this.choose_address.provinceOption.name == '全部') {
            this.message.warning('请选择省份');
            return false;
        }
        if (!this.choose_address.cityOption || this.choose_address.cityOption.name == '全部') {
            this.message.warning('请选择城市');
            return false;
        }
        if (!this.choose_address.districtOption || this.choose_address.districtOption.name == '全部') {
            this.message.warning('请选择区县');
            return false;
        }
        if (form.value.address === '') {
            this.message.warning('请输入详细地址');
            return false;
        }
        if (form.value.device_remarks === '') {
            this.message.warning('请输入类型说明');
            return false;
        }
        if (this.deviceInfo.longitude === '') {
            this.message.warning('请选择经纬度');
            return false;
        }
        var arr = this.deviceInfo.longitude.split(',');
        var condition = form.value;
        condition.id = this.routerInfo.snapshot.params.id;
        condition.province_id = this.choose_address.provinceOption.id;
        condition.city_id = this.choose_address.cityOption.id;
        condition.district_id = this.choose_address.districtOption.id;
        condition.province = this.choose_address.provinceOption.name;
        condition.city = this.choose_address.cityOption.name;
        condition.district = this.choose_address.districtOption.name;
        condition.longitude = arr[0];
        condition.latitude = arr[1];
        this.deviceService.update(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.router.navigate(['/device']);
            }
        });
    };
    DeviceEditComponent.prototype.getMap = function () {
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
            that.longitude = lng + ',' + lat;
        });
        function select(e) {
            if (e.poi && e.poi.location) {
                map.setZoom(15);
                map.setCenter(e.poi.location);
            }
        }
    };
    DeviceEditComponent.prototype.handleOk = function () {
        this.isVisible = false;
        this.deviceInfo.longitude = this.longitude;
    };
    DeviceEditComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_4__["ChooseAddressComponent"]),
        __metadata("design:type", _directive_choose_address_choose_address_component__WEBPACK_IMPORTED_MODULE_4__["ChooseAddressComponent"])
    ], DeviceEditComponent.prototype, "choose_address", void 0);
    DeviceEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-edit',
            template: __webpack_require__(/*! ./device-edit.component.html */ "./src/app/components/device-edit/device-edit.component.html"),
            styles: [__webpack_require__(/*! ./device-edit.component.css */ "./src/app/components/device-edit/device-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], DeviceEditComponent);
    return DeviceEditComponent;
}());



/***/ }),

/***/ "./src/app/components/device-list/device-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/device-list/device-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n    height: 100%;\r\n}\r\n.device-top{\r\n    height: 40px;\r\n    line-height: 40px;\r\n    text-align: left;\r\n    background: #ffffff;\r\n    margin: 0px 10px 0px 10px;\r\n    padding: 0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.device-top-left{\r\n    width: 80%;\r\n    display:flex;\r\n    justify-content: space-around;\r\n}\r\n.device-top-left div{\r\n    flex: 1;\r\n    width: 0;\r\n}\r\n.device-top-right{\r\n    float: right;\r\n}\r\n.device-container{\r\n    background-color: #ffffff;\r\n    margin: 10px 10px 0 10px;\r\n    padding: 10px 10px;\r\n    height: calc(100% - 40px);\r\n    display: flex;\r\n}\r\n.container-top{\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}\r\n.container-left{\r\n    width: 60%;\r\n}\r\n.container-right{\r\n    width: 40%;\r\n    position: relative;\r\n}\r\n.container-left input,button{\r\n    display: inline-block;\r\n}\r\n.container-left input{\r\n    margin-right: 30px;\r\n}\r\n.container-left button{\r\n    margin-left: 10px;\r\n}\r\n#map{\r\n    width: 100%;\r\n    min-height: 100%;\r\n    position: absolute;\r\n}\r\n.addBtn{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.operate{\r\n    cursor: pointer;\r\n}\r\n.operate img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.ant-form-item{\r\n    margin-bottom: 3px!important;\r\n}\r\n.ant-form-item-control-wrapper .ant-form-item-control{\r\n    line-height: 20px!important;\r\n}\r\n.ant-form-item-label{\r\n    line-height: 20px!important;\r\n}\r\n.item-label{\r\n    text-align: right;\r\n    margin-right: 5px;\r\n    line-height: 30px;\r\n}\r\n.item-content{\r\n    line-height: 30px;\r\n}\r\n.heart-left{\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n.heart-right{\r\n    display: inline-block;\r\n    width: 50%;\r\n    margin-left: 5%;\r\n}\r\n.footer{\r\n    /*border-top: 1px solid #ccc;*/\r\n}\r\n/*高德点标注*/\r\n.info {\r\n    border: solid 1px silver;\r\n}\r\ndiv.info-top {\r\n    position: relative;\r\n    background: none repeat scroll 0 0 #F9F9F9;\r\n    border-bottom: 1px solid #CCC;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\ndiv.info-top div {\r\n    display: inline-block;\r\n    color: #333333;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding: 0 10px;\r\n}\r\ndiv.info-top img {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    transition-duration: 0.25s;\r\n}\r\ndiv.info-top img:hover {\r\n    box-shadow: 0px 0px 5px #000;\r\n}\r\ndiv.info-middle {\r\n    font-size: 12px;\r\n    padding: 6px;\r\n    line-height: 20px;\r\n}\r\ndiv.info-bottom {\r\n    height: 0px;\r\n    width: 100%;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\ndiv.info-bottom img {\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\nspan {\r\n    margin-left: 5px;\r\n    font-size: 11px;\r\n}\r\n.info-middle img {\r\n    float: left;\r\n    margin-right: 6px;\r\n}\r\n.info-top div{\r\n    display: inline-block;\r\n}\r\n.map-title{\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/device-list/device-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/device-list/device-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"device-top\">\n\t   <div class=\"device-top-left\">\n\t\t  <div>设备总数:{{deviceDetail.total}}</div>\n\t\t  <div>正常:{{deviceDetail.normal}}</div>\n\t\t  <div>工作中:{{deviceDetail.working}}</div>\n\t\t  <div>报警:{{deviceDetail.warning}}</div>\n\t\t  <div>离线:{{deviceDetail.offline}}</div>\n\t   </div>\n\t   <div class=\"device-top-right\">\n\t\t\t<button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"showAllDevice()\">显示所有设备</button>\n\t   </div>\n\t</div>\n\t<div class=\"device-container\">\n\t\t<div class=\"container-left\">\n\t\t\t<div class=\"container-top\">\n\t\t\t\t<input type=\"text\" nz-input nzSize=\"default\" placeholder=\"请输入名称或编号\" style=\"width:260px;\" [(ngModel)]=\"info.query\">\n\t\t\t\t<button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"clear()\">清空</button>\n\t\t\t\t<button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"search()\" *ngIf=\"auth.indexOf(950496708) !== -1\">搜索</button>\n\t\t\t</div>\n\t\t\t<nz-table #basicTable [nzData]=\"device_list\"\n\t\t\t\t\t\t\t\t  [nzPageSize]=\"20\" \n\t\t\t\t\t\t          [nzTotal]=\"info.total\" \n\t\t\t\t\t\t          [nzFrontPagination]=\"false\" \n\t\t\t\t\t\t          (nzPageIndexChange)=\"changePage($event)\"\n\t\t\t\t\t\t          [nzLoading]=\"info.loading\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>名称</th>\n\t\t\t\t\t\t<th>编号</th>\n\t\t\t\t\t\t<th>说明</th>\n\t\t\t\t\t\t<th>类型</th>\n\t\t\t\t\t\t<th>类型说明</th>\n\t\t\t\t\t\t<th>状态</th>\n\t\t\t\t\t\t<th *ngIf=\"auth.indexOf(118845992) !== -1 || auth.indexOf(141091281) !== -1\">操作</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n\t\t\t\t\t\t<td>{{data.device_name}}</td>\n\t\t\t\t\t\t<td>{{data.device_number}}</td>\n\t\t\t\t\t\t<td>{{data.provider}}</td>\n\t\t\t\t\t\t<td>{{data.device_type_name}}</td>\n\t\t\t\t\t\t<td>{{data.device_remarks}}</td>\n\t\t\t\t\t\t<td>{{data.status_name}}</td>\n\t\t\t\t\t\t<td class=\"operate\">\n\t\t\t\t\t\t\t<!-- <button nz-button nzType=\"primary\" nzSize=\"small\" [routerLink]=\"['/device/edit',data.id]\">编辑</button> -->\n\t\t\t\t\t\t\t<button type=\"button\" nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"operateDevice(data)\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"auth.indexOf(118845992) !== -1\"\n\t\t\t\t\t\t\t\t\t>编辑</button>\n\t\t\t\t\t\t\t<button type=\"button\" \n\t\t\t\t\t\t\t\t\tnz-button \n\t\t\t\t\t\t\t\t\tnzType=\"danger\" \n\t\t\t\t\t\t\t\t\tnzSize=\"small\" \n\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\tnzTitle=\"确认要删除吗?\"\n                        \t\t\t(nzOnConfirm)=\"deleteDevice(data)\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"auth.indexOf(141091281) !== -1\"\n\t\t\t\t\t\t\t\t\t>删除</button>\n\t\t\t\t\t\t\t<!-- <img src=\"../../../assets/img/cz.png\" alt=\"\" > -->\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</nz-table>\n\t\t</div>\n\t\t<div class=\"container-right\">\n\t\t\t<div id=\"map\">\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- 设备操作模态框 -->\n<nz-modal [(nzVisible)]=\"isOperate\" \n\t\t  nzTitle=\"操作\" \n\t\t  [nzBodyStyle] = \"bodyStyle\"\n    \t  nzWidth = '1000px'\n    \t  [nzFooter]=\"null\"\n    \t  (nzOnCancel) = \"operateCancel()\"\n\t\t  >\n    <nz-tabset>\n\t    <nz-tab nzTitle=\"操作日志\">\n\t        <nz-table #warningTable [nzData]=\"singleDevice.warning\"\n\t\t\t\t\t\t          [nzFrontPagination]=\"false\"\n\t\t\t\t\t\t          [nzSize]=\"'small'\"\n\t\t\t\t\t\t          [nzShowPagination]=\"false\"\n\t\t\t\t\t\t          >\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>日期</th>\n\t\t\t\t\t\t<th>设备号</th>\n\t\t\t\t\t\t<th>说明</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let data of warningTable.data\">\n\t\t\t\t\t\t<td>{{data.created_at}}</td>\n\t\t\t\t\t\t<td>{{data.device_id}}</td>\n\t\t\t\t\t\t<td>{{data.fault_type_name}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</nz-table>\n\t    </nz-tab>\n\t    <nz-tab nzTitle=\"添加工作计划\">\n\t        <div nz-row>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<span>{{singleDevice.device_name}}</span>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设&nbsp;&nbsp;备&nbsp;&nbsp;号:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<span>{{singleDevice.device_number}}</span>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<span>{{singleDevice.device_type_name}}</span>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备&nbsp;&nbsp;&nbsp;&nbsp;  注:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<span>{{singleDevice.device_remarks}}</span>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">心跳间隔:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<input type=\"number\" nz-input style=\"width: 200px\" [(ngModel)]=\"cur_interval\" placeholder=\"请输入心跳间隔\" min=\"0\">\n\t\t           \t\t<span>小时</span>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<!-- <div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">开始时间:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<nz-date-picker\n\t\t\t\t\t      nzShowTime\n\t\t\t\t\t      nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n\t\t\t\t\t      nzPlaceHolder=\"请选择开始时间\"\n\t\t\t\t\t      (ngModelChange)=\"onChange($event)\"\n\t\t\t\t\t      (nzOnOk)=\"onOk($event)\"\n\t\t\t\t\t    ></nz-date-picker>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">持续时间:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<nz-select style=\"width: 300px;\" [(ngModel)]=\"continuedValue\" nzAllowClear nzPlaceHolder=\"\">\n\t\t\t\t\t        <nz-option nzValue=\"5分钟\" nzLabel=\"5分钟\"></nz-option>\n\t\t\t\t\t        <nz-option nzValue=\"15分钟\" nzLabel=\"15分钟\"></nz-option>\n\t\t\t\t\t        <nz-option nzValue=\"半小时\" nzLabel=\"半小时\"></nz-option>\n\t\t\t\t\t        <nz-option nzValue=\"一小时\" nzLabel=\"一小时\"></nz-option>\n\t\t\t\t\t        <nz-option nzValue=\"一天\" nzLabel=\"一天\"></nz-option>\n\t\t\t\t\t    </nz-select>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">类&nbsp;&nbsp;&nbsp;&nbsp;  型:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<nz-select style=\"width: 300px;\" [(ngModel)]=\"typeValue\" nzAllowClear nzPlaceHolder=\"\">\n\t\t\t\t\t        <nz-option nzValue=\"单次\" nzLabel=\"单次\"></nz-option>\n\t\t\t\t\t        <nz-option nzValue=\"多次\" nzLabel=\"多次\"></nz-option>\n\t\t\t\t\t    </nz-select>\n\t        \t\t</div>\n\t        \t</div>\n\t        \t<div nz-col [nzXl]=\"24\">\n\t        \t\t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">计划说明:</label>\n\t        \t\t<div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n\t\t           \t\t<textarea rows=\"3\" nz-input [(ngModel)]=\"inputValue\" style=\"width: 300px;\" placeholder=\"请输入计划说明\"></textarea>\n\t        \t\t</div>\n\t        \t</div> -->\n\t        \t<div nz-col [nzXl]=\"24\" class=\"footer\">\n\t        \t\t<button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"addWorkPlan()\">确认</button>\n\t        \t\t<button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n\t        \t</div>\n\t        </div>\n\t    </nz-tab>\n\t    <nz-tab nzTitle=\"编辑设备\">\n\t      \t<div nz-col [nzXl]=\"24\">\n\t        \t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n\t        \t<div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n\t        \t\t<input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_name\">\n\t        \t</div>\n\t        </div>\n\t        <div nz-col [nzXl]=\"24\">\n\t        \t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n\t        \t<div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n\t        \t\t\t<input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_type_name\" readonly=\"readonly\">\n\t        \t</div>\n\t        </div>\n\t        <div nz-col [nzXl]=\"24\">\n\t        \t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备号:</label>\n\t        \t<div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n\t        \t\t\t<input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_number\">\n\t        \t</div>\n\t        </div>\n\t        <div nz-col [nzXl]=\"24\">\n\t        \t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">归属设备组:</label>\n\t        \t<div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n\t        \t\t<app-form-choose-enterprise [type]=\"'station'\" [(ngModel)]=\"singleDevice.station_id\"></app-form-choose-enterprise>\n\t        \t</div>\n\t        </div>\n\t        <div nz-col [nzXl]=\"24\">\n\t        \t<label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备注:</label>\n\t        \t<div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n\t        \t\t<input type=\"text\" nz-input [(ngModel)]=\"singleDevice.provider\" placeholder=\"请输入备注\">\n\t        \t</div>\n\t        </div>\n\t        <div nz-col [nzXl]=\"24\" class=\"footer\">\n\t        \t<button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirmEditDevice()\">确认</button>\n\t        \t<button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n\t        </div>\n\t    </nz-tab>\n\t    <nz-tab nzTitle=\"历史数据\">\n\t    \t<div style=\"display: flex;\">\n\t\t        <div class=\"heart-left\" style=\"height: 500px;\">\n\t\t        \t<h4>心跳记录</h4>\n\t\t        \t<nz-table #heartTable [nzData]=\"singleDevice.heart\"\n\t\t\t\t\t\t\t          [nzFrontPagination]=\"false\"\n\t\t\t\t\t\t\t          [nzSize]=\"'small'\"\n\t\t\t\t\t\t\t          [nzShowPagination]=\"false\"\n\t\t\t\t\t\t\t          >\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>日期</th>\n\t\t\t\t\t\t\t<th>温度(°C)</th>\n\t\t\t\t\t\t\t<th>光照度(lux)</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let data of heartTable.data\">\n\t\t\t\t\t\t\t<td>{{data.created_at}}</td>\n\t\t\t\t\t\t\t<td>{{data.temperature}}</td>\n\t\t\t\t\t\t\t<td>{{data.beam}}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</nz-table>\n\t\t        </div>\n\t\t        <div class=\"heart-right\">\n\t\t        \t<h4>历史数据</h4>\n\t\t        \t<div id=\"chart\">\n\t\t        \t\t\n\t\t        \t</div>\n\t\t        </div>\n\t    \t</div>\n\t    </nz-tab>\n    </nz-tabset>\n</nz-modal>\n<nz-modal [(nzVisible)]=\"bigMapVisible\" \n\t\t  nzTitle=\"显示全部设备\" \n\t\t  (nzOnCancel)=\"bigCancel()\" \n\t      [nzFooter]=\"null\"\n\t      [nzBodyStyle] = \"bigMapStyle\"\n\t      nzWidth=\"1200px\"\n\t      [nzMaskClosable]=\"false\"\n\t\t  >\n  \t<div id=\"bigMap\" style=\"height:60vh;\">\n  \t\t\n  \t</div>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/device-list/device-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/device-list/device-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4__);
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





Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_4___default.a);

var DeviceListComponent = /** @class */ (function () {
    function DeviceListComponent(deviceService, message) {
        this.deviceService = deviceService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.isOperate = false;
        // 心跳间隔
        this.cur_interval = '';
        this.singleDevice = {
            id: '',
            station_id: '',
            device_name: '',
            device_number: '',
            device_type_name: '',
            device_remarks: '',
            provider: '',
            warning: [],
            heart: []
        };
        this.continuedValue = '5分钟';
        this.typeValue = '单次';
        this.planValue = '';
        this.bodyStyle = { 'height': 'auto' };
        this.deviceDetail = {
            total: 0,
            normal: 0,
            working: 0,
            warning: 0,
            offline: 0
        };
        this.info = {
            query: '',
            type: 0,
            offset: 0,
            limit: 20,
            order_by: 'created_at',
            order: 'desc',
            total: 0,
            loading: false,
        };
        this.device_list = [];
        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.bigMapVisible = false;
        this.bigMapStyle = { height: 'auto' };
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        this.statistics();
        this.search();
    };
    DeviceListComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 2
        }); // 创建地图实例
    };
    DeviceListComponent.prototype.mapClick = function (Device) {
        var lng = Device.longitude;
        var lat = Device.latitude;
        this.map.setZoomAndCenter(13, [lng, lat]);
        var content;
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, [lng, lat]);
    };
    // 清空查询输入框
    DeviceListComponent.prototype.clear = function () {
        this.info.query = '';
    };
    // 查询设备
    DeviceListComponent.prototype.search = function () {
        var _this = this;
        var that = this;
        var condition = {
            query: this.info.query,
            type: this.info.type,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            for (var i = 0; i < _this.device_list.length; i++) {
                var marker = _this.addMarker(_this.device_list[i]);
                // AMap.event.addListener(marker, 'click', (e,i)=>{
                //     console.log(this.device_list[i])
                //      //实例化信息窗体
                //         const title = `${this.device_list[i].device_name}`;
                //         const content = [
                //               this.device_list[i].device_name,
                //               this.device_list[i].device_number
                //           ];
                //         const infoWindow = new AMap.InfoWindow({
                //             // isCustom: true, 
                //             // content: this.createInfoWindow(title, content.join("<br/>"),this),
                //             content:`${this.device_list[i].device_number}`,
                //             offset: new AMap.Pixel(16, -45)
                //         });
                //         infoWindow.open(this.map, this.marker.getPosition());
                // });
            }
        });
    };
    DeviceListComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 获取顶部数据
    DeviceListComponent.prototype.statistics = function () {
        var _this = this;
        var condition = {
            type: 0
        };
        this.deviceService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceDetail = res['data'];
        });
    };
    // 编辑设备
    DeviceListComponent.prototype.operateDevice = function (device) {
        this.singleDevice = JSON.parse(JSON.stringify(device));
        this.getWarning(device.id);
        this.getHeart(device.id);
        this.isOperate = true;
    };
    DeviceListComponent.prototype.operateCancel = function () {
        this.isOperate = false;
    };
    DeviceListComponent.prototype.operateOk = function () {
        this.isOperate = true;
    };
    // 删除设备
    DeviceListComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var condition = {
            id: device.id
        };
        this.deviceService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    DeviceListComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    DeviceListComponent.prototype.onOk = function (data) {
        console.log(data);
    };
    // 获取单个设备的报警记录
    DeviceListComponent.prototype.getWarning = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.singleDevice.warning = res['data']['list'];
        });
    };
    // 获取单个设备的心跳记录
    DeviceListComponent.prototype.getHeart = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.heartSearch(condition).subscribe(function (res) {
            _this.singleDevice.heart = res['data']['list'];
            // 获取设备心跳记录后 渲染图表
            _this.renderChart();
        });
    };
    DeviceListComponent.prototype.cancleDevice = function () {
        this.isOperate = false;
    };
    // 单个设备添加工作计划
    DeviceListComponent.prototype.addWorkPlan = function () {
        var _this = this;
        if (this.cur_interval === '') {
            this.message.warning('请输入心跳间隔');
            return false;
        }
        var condition = {
            id: this.singleDevice.id,
            cur_interval: this.cur_interval
        };
        this.deviceService.heart(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('设置成功');
                _this.isOperate = false;
            }
        });
    };
    // 编辑单个设备
    DeviceListComponent.prototype.confirmEditDevice = function () {
        var _this = this;
        if (this.singleDevice.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (this.singleDevice.device_number === '') {
            this.message.warning('请输入设备号');
            return false;
        }
        if (this.singleDevice.station_id === '') {
            this.message.warning('请选择设备组');
            return false;
        }
        var condition = this.singleDevice;
        this.deviceService.update(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('修改成功');
                _this.isOperate = false;
            }
        });
    };
    //添加点标记
    DeviceListComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.markerClick.bind(this));
    };
    DeviceListComponent.prototype.markerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    };
    //构建自定义信息窗体
    // createInfoWindow(title, content,that) {
    //      console.log(that)
    //      var info = document.createElement("div");
    //      info.className = "info";
    //      var top = document.createElement("div");
    //      var titleD = document.createElement("span");
    //      var closeX = document.createElement("img");
    //      top.className = "info-top";
    //      titleD.innerHTML = title;
    //      closeX.src = "https://webapi.amap.com/images/close2.gif";
    //      closeX.onclick = this.closeInfoWindow.bind(this);
    //      top.appendChild(titleD);
    //      top.appendChild(closeX);
    //      info.appendChild(top);
    //      // 定义中部内容
    //      var middle = document.createElement("div");
    //      middle.className = "info-middle";
    //      middle.style.backgroundColor = 'white';
    //      middle.innerHTML = content;
    //      info.appendChild(middle);
    //      // 定义底部内容
    //      var bottom = document.createElement("div");
    //      bottom.className = "info-bottom";
    //      bottom.style.position = 'relative';
    //      bottom.style.top = '0px';
    //      bottom.style.margin = '0 auto';
    //      var sharp = document.createElement("img");
    //      sharp.src = "https://webapi.amap.com/images/sharp.png";
    //      bottom.appendChild(sharp);
    //      info.appendChild(bottom);
    //      return info;
    //  }
    // 关闭信息窗体
    DeviceListComponent.prototype.closeInfoWindow = function (that) {
        console.log(this);
        this.map.clearInfoWindow();
    };
    DeviceListComponent.prototype.renderChart = function () {
        var heart = this.singleDevice.heart;
        var arr = [];
        for (var i = 0; i < heart.length; i++) {
            var obj = {
                date: heart[i].created,
                '光照度': heart[i].temperature,
                '温度': heart[i].beam
            };
            arr.push(obj);
        }
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_5___default.a.Chart({
            container: 'chart',
            forceFit: true,
            height: 500,
            padding: 'auto'
        });
        this.chart.source(arr, {
            beam: {
                min: 0,
                tickInterval: 50,
                alias: '光照度'
            },
            temperature: {
                // min: 5,
                tickInterval: 5,
                alias: '温度'
            }
        });
        // 左侧 Y 轴，即光照轴
        this.chart.axis('beam', {
            label: {
                formatter: function (val) {
                    return val + ' mm'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#95ceff'
                }
            },
            line: null,
            tickLine: null
        });
        // 右侧第一个 Y 轴，即温度轴
        this.chart.axis('temperature', {
            line: null,
            tickLine: null,
            label: {
                formatter: function (val) {
                    return val + ' °C'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#90ed7d'
                }
            }
        });
        this.chart.legend({
            position: 'top'
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('date*光照度').color('blue').size(2); // 光照
        this.chart.line().position('date*温度').color('red').size(2).shape('smooth'); // 温度
        // this.chart.point().position('date*temperature').color('#90ed7d').shape('diamond');
        this.chart.render();
    };
    DeviceListComponent.prototype.showAllDevice = function () {
        this.bigMapVisible = true;
        this.bigMap = new AMap.Map('bigMap', {
            resizeEnable: true,
            zoom: 2
        });
        for (var i = 0; i < this.device_list.length; i++) {
            var marker = this.bigMapAddMarker(this.device_list[i]);
        }
    };
    DeviceListComponent.prototype.bigCancel = function () {
        this.bigMapVisible = false;
    };
    //添加点标记
    DeviceListComponent.prototype.bigMapAddMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.bigMapMarkerClick.bind(this));
    };
    DeviceListComponent.prototype.bigMapMarkerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.bigMap, e.target.getPosition());
    };
    DeviceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-list',
            template: __webpack_require__(/*! ./device-list.component.html */ "./src/app/components/device-list/device-list.component.html"),
            styles: [__webpack_require__(/*! ./device-list.component.css */ "./src/app/components/device-list/device-list.component.css")],
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], DeviceListComponent);
    return DeviceListComponent;
}());



/***/ }),

/***/ "./src/app/components/device-monitor/device-monitor.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/device-monitor/device-monitor.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n  height: 100%;\r\n}\r\n\r\n.device-top {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: left;\r\n  background: #ffffff;\r\n  margin: 0px 10px 0px 10px;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.device-top-left {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.device-top-left div {\r\n  flex: 1;\r\n  width: 0;\r\n}\r\n\r\n.device-top-right {\r\n  float: right;\r\n}\r\n\r\n.device-container {\r\n  background-color: #ffffff;\r\n  margin: 10px 10px 0 10px;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  height: calc(100% - 40px);\r\n}\r\n\r\n.container-top {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.container-left {\r\n  width: 60%;\r\n}\r\n\r\n.container-right {\r\n  width: 40%;\r\n}\r\n\r\n.container-left input,\r\nbutton {\r\n  display: inline-block;\r\n}\r\n\r\n.container-left input {\r\n  margin-right: 30px;\r\n}\r\n\r\n.container-left button {\r\n  margin-left: 10px;\r\n}\r\n\r\n#map {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.addBtn{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.operate{\r\n    cursor: pointer;\r\n}\r\n\r\n.operate img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.ant-form-item{\r\n    margin-bottom: 3px!important;\r\n}\r\n\r\n.ant-form-item-control-wrapper .ant-form-item-control{\r\n    line-height: 20px!important;\r\n}\r\n\r\n.ant-form-item-label{\r\n    line-height: 20px!important;\r\n}\r\n\r\n.item-label{\r\n    text-align: right;\r\n    margin-right: 5px;\r\n    line-height: 30px;\r\n}\r\n\r\n.item-content{\r\n    line-height: 30px;\r\n}\r\n\r\n.heart-left{\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n\r\n.heart-right{\r\n    display: inline-block;\r\n    width: 50%;\r\n    margin-left: 5%;\r\n}\r\n\r\n.footer{\r\n    /*border-top: 1px solid #ccc;*/\r\n}\r\n\r\n.container-top{\r\n  position: relative;\r\n}\r\n\r\n/*高德点标注*/\r\n\r\n.info {\r\n    border: solid 1px silver;\r\n}\r\n\r\ndiv.info-top {\r\n    position: relative;\r\n    background: none repeat scroll 0 0 #F9F9F9;\r\n    border-bottom: 1px solid #CCC;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n\r\ndiv.info-top div {\r\n    display: inline-block;\r\n    color: #333333;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding: 0 10px;\r\n}\r\n\r\ndiv.info-top img {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    transition-duration: 0.25s;\r\n}\r\n\r\ndiv.info-top img:hover {\r\n    box-shadow: 0px 0px 5px #000;\r\n}\r\n\r\ndiv.info-middle {\r\n    font-size: 12px;\r\n    padding: 6px;\r\n    line-height: 20px;\r\n}\r\n\r\ndiv.info-bottom {\r\n    height: 0px;\r\n    width: 100%;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\n\r\ndiv.info-bottom img {\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\n\r\nspan {\r\n    margin-left: 5px;\r\n    font-size: 11px;\r\n}\r\n\r\n.info-middle img {\r\n    float: left;\r\n    margin-right: 6px;\r\n}\r\n\r\n.info-top div{\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/device-monitor/device-monitor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/device-monitor/device-monitor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"device-top\">\n     <div class=\"device-top-left\">\n      <div>设备总数:{{deviceDetail.total}}</div>\n      <div>正常:{{deviceDetail.normal}}</div>\n      <div>工作中:{{deviceDetail.working}}</div>\n      <div>报警:{{deviceDetail.warning}}</div>\n      <div>离线:{{deviceDetail.offline}}</div>\n     </div>\n     <div class=\"device-top-right\">\n      <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"showAllDevice()\">显示所有设备</button>\n     </div>\n  </div>\n  <div class=\"device-container\">\n    <div class=\"container-left\">\n      <div class=\"container-top\">\n        <input type=\"text\" nz-input nzSize=\"default\" placeholder=\"请输入名称或编号\" style=\"width:260px;\" [(ngModel)]=\"info.query\">\n        <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"clear()\">清空</button>\n        <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"search()\"    \n        *ngIf=\"auth.indexOf(125910060) !== -1\"\n        >搜索</button>\n        <button nz-button nzType=\"primary\" nzSize=\"small\" class=\"addBtn\" [routerLink]=\"['/device/add',5]\" \n        *ngIf=\"auth.indexOf(134608925) !== -1\"\n        >添加</button>\n      </div>\n      <nz-table #basicTable [nzData]=\"device_list\"\n                  [nzPageSize]=\"20\" \n                      [nzTotal]=\"info.total\" \n                      [nzFrontPagination]=\"false\" \n                      (nzPageIndexChange)=\"changePage($event)\"\n                      [nzLoading]=\"info.loading\">\n        <thead>\n          <tr>\n            <th>名称</th>\n            <th>编号</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>类型说明</th>\n            <th>状态</th>\n            <th *ngIf=\"auth.indexOf(141734343) !== -1 || auth.indexOf(149905186) !== -1\">操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n            <td>{{data.device_name}}</td>\n            <td>{{data.device_number}}</td>\n            <td>{{data.provider}}</td>\n            <td>{{data.device_type_name}}</td>\n            <td>{{data.device_remarks}}</td>\n            <td>{{data.status_name}}</td>\n            <td class=\"operate\">\n              <button type=\"button\" nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"operateDevice(data)\"\n              *ngIf=\"auth.indexOf(141734343) !== -1\"\n              >编辑</button>\n              <button type=\"button\" \n                  nz-button \n                  nzType=\"danger\" \n                  nzSize=\"small\" \n                  nz-popconfirm\n                  nzTitle=\"确认要删除吗?\"\n                  (nzOnConfirm)=\"deleteDevice(data)\"\n                  *ngIf=\"auth.indexOf(149905186) !== -1\"\n                  >删除</button>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n    <div class=\"container-right\">\n      <div id=\"map\">\n        \n      </div>\n    </div>\n  </div>\n</div>\n<!-- 设备操作模态框 -->\n<nz-modal [(nzVisible)]=\"isOperate\" \n      nzTitle=\"操作\" \n      [nzBodyStyle] = \"bodyStyle\"\n        nzWidth = '1000px'\n        [nzFooter]=\"null\"\n        (nzOnCancel) = \"operateCancel()\"\n      >\n    <nz-tabset>\n      <nz-tab nzTitle=\"操作日志\">\n          <nz-table #warningTable [nzData]=\"singleDevice.warning\"\n                      [nzFrontPagination]=\"false\"\n                      [nzSize]=\"'small'\"\n                      [nzShowPagination]=\"false\"\n                      >\n        <thead>\n          <tr>\n            <th>日期</th>\n            <th>设备号</th>\n            <th>说明</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of warningTable.data\">\n            <td>{{data.created_at}}</td>\n            <td>{{data.device_id}}</td>\n            <td>{{data.fault_type_name}}</td>\n          </tr>\n        </tbody>\n      </nz-table>\n      </nz-tab>\n      <nz-tab nzTitle=\"添加工作计划\">\n          <div nz-row>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设&nbsp;&nbsp;备&nbsp;&nbsp;号:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_number}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_type_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备&nbsp;&nbsp;&nbsp;&nbsp;  注:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_remarks}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">心跳间隔:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <input type=\"number\" nz-input style=\"width: 200px\" [(ngModel)]=\"cur_interval\" placeholder=\"请输入心跳间隔\" min=\"0\">\n                  <span>小时</span>\n              </div>\n            </div>\n            <!-- <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">开始时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-date-picker\n                nzShowTime\n                nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                nzPlaceHolder=\"请选择开始时间\"\n                (ngModelChange)=\"onChange($event)\"\n                (nzOnOk)=\"onOk($event)\"\n              ></nz-date-picker>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">持续时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"continuedValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"5分钟\" nzLabel=\"5分钟\"></nz-option>\n                  <nz-option nzValue=\"15分钟\" nzLabel=\"15分钟\"></nz-option>\n                  <nz-option nzValue=\"半小时\" nzLabel=\"半小时\"></nz-option>\n                  <nz-option nzValue=\"一小时\" nzLabel=\"一小时\"></nz-option>\n                  <nz-option nzValue=\"一天\" nzLabel=\"一天\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">类&nbsp;&nbsp;&nbsp;&nbsp;  型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"typeValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"单次\" nzLabel=\"单次\"></nz-option>\n                  <nz-option nzValue=\"多次\" nzLabel=\"多次\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">计划说明:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <textarea rows=\"3\" nz-input [(ngModel)]=\"inputValue\" style=\"width: 300px;\" placeholder=\"请输入计划说明\"></textarea>\n              </div>\n            </div> -->\n            <div nz-col [nzXl]=\"24\" class=\"footer\">\n              <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"addWorkPlan()\">确认</button>\n              <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n            </div>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"编辑设备\">\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_name\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_type_name\" readonly=\"readonly\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备号:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_number\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">归属设备组:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <app-form-choose-enterprise [type]=\"'station'\" [(ngModel)]=\"singleDevice.station_id\"></app-form-choose-enterprise>\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备注:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.provider\" placeholder=\"请输入备注\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\" class=\"footer\">\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirmEditDevice()\">确认</button>\n            <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"历史数据\">\n            <div style=\"display: flex;\">\n                <div class=\"heart-left\" style=\"height: 500px;\">\n                    <h4>心跳记录</h4>\n                    <nz-table #heartTable [nzData]=\"singleDevice.heart\"\n                                      [nzFrontPagination]=\"false\"\n                                      [nzSize]=\"'small'\"\n                                      [nzShowPagination]=\"false\"\n                                      >\n                    <thead>\n                        <tr>\n                            <th>日期</th>\n                            <th>温度(°C)</th>\n                            <th>光照度(lux)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of heartTable.data\">\n                            <td>{{data.created_at}}</td>\n                            <td>{{data.temperature}}</td>\n                            <td>{{data.beam}}</td>\n                        </tr>\n                    </tbody>\n                </nz-table>\n                </div>\n                <div class=\"heart-right\">\n                    <h4>历史数据</h4>\n                    <div id=\"chartLock\">\n                        \n                    </div>\n                </div>\n            </div>\n        </nz-tab>\n    </nz-tabset>\n</nz-modal>\n<nz-modal [(nzVisible)]=\"bigMapVisible\" \n      nzTitle=\"显示全部设备\" \n      (nzOnCancel)=\"bigCancel()\" \n        [nzFooter]=\"null\"\n        [nzBodyStyle] = \"bigMapStyle\"\n        nzWidth=\"1200px\"\n        [nzMaskClosable]=\"false\"\n      >\n    <div id=\"bigMap\" style=\"height:60vh;\">\n      \n    </div>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/device-monitor/device-monitor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/device-monitor/device-monitor.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeviceMonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMonitorComponent", function() { return DeviceMonitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceMonitorComponent = /** @class */ (function () {
    function DeviceMonitorComponent(deviceService, message) {
        this.deviceService = deviceService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.isOperate = false;
        // infoWindow;
        // 心跳间隔
        this.cur_interval = '';
        this.singleDevice = {
            id: '',
            station_id: '',
            device_name: '',
            device_number: '',
            device_type_name: '',
            device_remarks: '',
            provider: '',
            warning: [],
            heart: []
        };
        this.continuedValue = '5分钟';
        this.typeValue = '单次';
        this.planValue = '';
        this.bodyStyle = { 'height': 'auto' };
        this.deviceDetail = {
            total: 0,
            normal: 0,
            working: 0,
            warning: 0,
            offline: 0
        };
        this.info = {
            query: '',
            type: 5,
            offset: 0,
            limit: 20,
            order_by: 'created_at',
            order: 'desc',
            total: 0,
            loading: false,
        };
        this.device_list = [];
        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.bigMapVisible = false;
        this.bigMapStyle = { height: 'auto' };
    }
    DeviceMonitorComponent.prototype.ngOnInit = function () {
        var obj = {
            tem: 213123,
            name: '12321312',
            age: 18,
            sex: 'woman'
        };
        var content = '';
        for (var i in obj) {
            content += i;
            content += ':';
            content += obj[i];
            content += '<br />';
        }
        console.log(content);
        this.statistics();
        this.search();
    };
    DeviceMonitorComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 2
        }); // 创建地图实例
    };
    DeviceMonitorComponent.prototype.mapClick = function (Device) {
        var lng = Device.longitude;
        var lat = Device.latitude;
        this.map.setZoomAndCenter(17, [lng, lat]);
        var content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, [lng, lat]);
    };
    // 清空查询输入框
    DeviceMonitorComponent.prototype.clear = function () {
        this.info.query = '';
    };
    // 查询设备
    DeviceMonitorComponent.prototype.search = function () {
        var _this = this;
        var that = this;
        var condition = {
            query: this.info.query,
            type: this.info.type,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            for (var i = 0; i < _this.device_list.length; i++) {
                var device = _this.device_list[i];
                _this.addMarker(_this.device_list[i]);
                /*AMap.event.addListener(this.marker, 'click', (e) =>{
                    console.log(this.device_list[i])
                     //实例化信息窗体
                        const title = `${this.device_list[i].device_name}`;
                        const content = [
                              this.device_list[i].device_name,
                              this.device_list[i].device_number
                          ];
                        const infoWindow = new AMap.InfoWindow({
                            isCustom: true,  //使用自定义窗体
                            content: this.createInfoWindow(title, content.join("<br/>"),this),
                            offset: new AMap.Pixel(16, -45)
                        });
                        infoWindow.open(this.map, this.marker.getPosition());
                });*/
            }
        });
    };
    DeviceMonitorComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 获取顶部数据
    DeviceMonitorComponent.prototype.statistics = function () {
        var _this = this;
        var condition = {
            type: this.info.type
        };
        this.deviceService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceDetail = res['data'];
        });
    };
    // 编辑设备
    DeviceMonitorComponent.prototype.operateDevice = function (device) {
        this.singleDevice = JSON.parse(JSON.stringify(device));
        this.getWarning(device.id);
        this.getHeart(device.id);
        this.isOperate = true;
    };
    DeviceMonitorComponent.prototype.operateCancel = function () {
        this.isOperate = false;
    };
    DeviceMonitorComponent.prototype.operateOk = function () {
        this.isOperate = true;
    };
    // 删除设备
    DeviceMonitorComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var condition = {
            id: device.id
        };
        this.deviceService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    DeviceMonitorComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    DeviceMonitorComponent.prototype.onOk = function (data) {
        console.log(data);
    };
    // 获取单个设备的报警记录
    DeviceMonitorComponent.prototype.getWarning = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.singleDevice.warning = res['data']['list'];
        });
    };
    // 获取单个设备的心跳记录
    DeviceMonitorComponent.prototype.getHeart = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.heartSearch(condition).subscribe(function (res) {
            _this.singleDevice.heart = res['data']['list'];
            // 获取设备心跳记录后 渲染图表
            _this.renderChart();
        });
    };
    DeviceMonitorComponent.prototype.cancleDevice = function () {
        this.isOperate = false;
    };
    // 单个设备添加工作计划
    DeviceMonitorComponent.prototype.addWorkPlan = function () {
        var _this = this;
        if (this.cur_interval === '') {
            this.message.warning('请输入心跳间隔');
            return false;
        }
        var condition = {
            id: this.singleDevice.id,
            cur_interval: this.cur_interval
        };
        this.deviceService.heart(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('设置成功');
                _this.isOperate = false;
            }
        });
    };
    // 编辑单个设备
    DeviceMonitorComponent.prototype.confirmEditDevice = function () {
        var _this = this;
        if (this.singleDevice.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (this.singleDevice.device_number === '') {
            this.message.warning('请输入设备号');
            return false;
        }
        if (this.singleDevice.station_id === '') {
            this.message.warning('请选择设备组');
            return false;
        }
        var condition = this.singleDevice;
        this.deviceService.update(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('修改成功');
                _this.isOperate = false;
            }
        });
    };
    //添加点标记
    DeviceMonitorComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                    content: ''
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                    content: ''
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                    content: ''
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/suo_zc.png',
                    content: ''
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        marker.content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
        marker.on('click', this.markerClick.bind(this));
    };
    DeviceMonitorComponent.prototype.markerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    };
    //构建自定义信息窗体
    DeviceMonitorComponent.prototype.createInfoWindow = function (title, content, that) {
        console.log(that);
        var info = document.createElement("div");
        info.className = "info";
        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("span");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = this.closeInfoWindow.bind(this);
        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);
        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);
        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    };
    // 关闭信息窗体
    DeviceMonitorComponent.prototype.closeInfoWindow = function (that) {
        console.log(this);
        this.map.clearInfoWindow();
    };
    DeviceMonitorComponent.prototype.renderChart = function () {
        var heart = this.singleDevice.heart;
        var arr = [];
        for (var i = 0; i < heart.length; i++) {
            var obj = {
                date: heart[i].created,
                '光照度': heart[i].temperature,
                '温度': heart[i].beam
            };
            arr.push(obj);
        }
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_3___default.a.Chart({
            container: 'chart',
            forceFit: true,
            height: 500,
            padding: 'auto'
        });
        this.chart.source(arr, {
            beam: {
                min: 0,
                tickInterval: 50,
                alias: '光照度'
            },
            temperature: {
                // min: 5,
                tickInterval: 5,
                alias: '温度'
            }
        });
        // 左侧 Y 轴，即光照轴
        this.chart.axis('beam', {
            label: {
                formatter: function (val) {
                    return val + ' mm'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#95ceff'
                }
            },
            line: null,
            tickLine: null
        });
        // 右侧第一个 Y 轴，即温度轴
        this.chart.axis('temperature', {
            line: null,
            tickLine: null,
            label: {
                formatter: function (val) {
                    return val + ' °C'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#90ed7d'
                }
            }
        });
        this.chart.legend({
            position: 'top'
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('date*光照度').color('blue').size(2); // 光照
        this.chart.line().position('date*温度').color('red').size(2).shape('smooth'); // 温度
        // this.chart.point().position('date*temperature').color('#90ed7d').shape('diamond');
        this.chart.render();
    };
    DeviceMonitorComponent.prototype.showAllDevice = function () {
        this.bigMapVisible = true;
        this.bigMap = new AMap.Map('bigMap', {
            resizeEnable: true,
            zoom: 2
        });
        for (var i = 0; i < this.device_list.length; i++) {
            var marker = this.bigMapAddMarker(this.device_list[i]);
        }
    };
    DeviceMonitorComponent.prototype.bigCancel = function () {
        this.bigMapVisible = false;
    };
    //添加点标记
    DeviceMonitorComponent.prototype.bigMapAddMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.bigMapMarkerClick.bind(this));
    };
    DeviceMonitorComponent.prototype.bigMapMarkerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.bigMap, e.target.getPosition());
    };
    DeviceMonitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-monitor',
            template: __webpack_require__(/*! ./device-monitor.component.html */ "./src/app/components/device-monitor/device-monitor.component.html"),
            styles: [__webpack_require__(/*! ./device-monitor.component.css */ "./src/app/components/device-monitor/device-monitor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], DeviceMonitorComponent);
    return DeviceMonitorComponent;
}());



/***/ }),

/***/ "./src/app/components/lock/lock.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/lock/lock.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n  height: 100%;\r\n}\r\n.device-top {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: left;\r\n  background: #ffffff;\r\n  margin: 0px 10px 0px 10px;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.device-top-left {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.device-top-left div {\r\n  flex: 1;\r\n  width: 0;\r\n}\r\n.device-top-right {\r\n  float: right;\r\n}\r\n.device-container {\r\n  background-color: #ffffff;\r\n  margin: 10px 10px 0 10px;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  height: calc(100% - 40px);\r\n}\r\n.container-top {\r\n  margin-bottom: 10px;\r\n}\r\n.container-left {\r\n  width: 60%;\r\n}\r\n.container-right {\r\n  width: 40%;\r\n}\r\n.container-left input,button {\r\n  display: inline-block;\r\n}\r\n.container-left input {\r\n  margin-right: 30px;\r\n}\r\n.container-left button {\r\n  margin-left: 10px;\r\n}\r\n#map{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.addBtn{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.operate{\r\n    cursor: pointer;\r\n}\r\n.operate img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.ant-form-item{\r\n    margin-bottom: 3px!important;\r\n}\r\n.ant-form-item-control-wrapper .ant-form-item-control{\r\n    line-height: 20px!important;\r\n}\r\n.ant-form-item-label{\r\n    line-height: 20px!important;\r\n}\r\n.item-label{\r\n    text-align: right;\r\n    margin-right: 5px;\r\n    line-height: 30px;\r\n}\r\n.item-content{\r\n    line-height: 30px;\r\n}\r\n.heart-left{\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n.heart-right{\r\n    display: inline-block;\r\n    width: 50%;\r\n    margin-left: 5%;\r\n}\r\n.footer{\r\n    /*border-top: 1px solid #ccc;*/\r\n}\r\n.container-top{\r\n  position: relative;\r\n}\r\n/*高德点标注*/\r\n.info {\r\n    border: solid 1px silver;\r\n}\r\ndiv.info-top {\r\n    position: relative;\r\n    background: none repeat scroll 0 0 #F9F9F9;\r\n    border-bottom: 1px solid #CCC;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\ndiv.info-top div {\r\n    display: inline-block;\r\n    color: #333333;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding: 0 10px;\r\n}\r\ndiv.info-top img {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    transition-duration: 0.25s;\r\n}\r\ndiv.info-top img:hover {\r\n    box-shadow: 0px 0px 5px #000;\r\n}\r\ndiv.info-middle {\r\n    font-size: 12px;\r\n    padding: 6px;\r\n    line-height: 20px;\r\n}\r\ndiv.info-bottom {\r\n    height: 0px;\r\n    width: 100%;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\ndiv.info-bottom img {\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\nspan {\r\n    margin-left: 5px;\r\n    font-size: 11px;\r\n}\r\n.info-middle img {\r\n    float: left;\r\n    margin-right: 6px;\r\n}\r\n.info-top div{\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/lock/lock.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/lock/lock.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"device-top\">\n     <div class=\"device-top-left\">\n      <div>设备总数:{{deviceDetail.total}}</div>\n      <div>正常:{{deviceDetail.normal}}</div>\n      <div>工作中:{{deviceDetail.working}}</div>\n      <div>报警:{{deviceDetail.warning}}</div>\n      <div>离线:{{deviceDetail.offline}}</div>\n     </div>\n     <div class=\"device-top-right\">\n      <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"showAllDevice()\">显示所有设备</button>\n     </div>\n  </div>\n  <div class=\"device-container\">\n    <div class=\"container-left\">\n      <div class=\"container-top\">\n        <input type=\"text\" nz-input nzSize=\"default\" placeholder=\"请输入名称或编号\" style=\"width:260px;\" [(ngModel)]=\"info.query\">\n        <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"clear()\">清空</button>\n        <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"search()\" *ngIf=\"auth.indexOf(241456118) !== -1\">搜索</button>\n        <button nz-button nzType=\"primary\" nzSize=\"small\" class=\"addBtn\" [routerLink]=\"['/device/add',4]\" *ngIf=\"auth.indexOf(253308781) !== -1\">添加</button>\n      </div>\n      <nz-table #basicTable [nzData]=\"device_list\"\n                  [nzPageSize]=\"20\" \n                      [nzTotal]=\"info.total\" \n                      [nzFrontPagination]=\"false\" \n                      (nzPageIndexChange)=\"changePage($event)\"\n                      [nzLoading]=\"info.loading\">\n        <thead>\n          <tr>\n            <th>名称</th>\n            <th>编号</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>类型说明</th>\n            <th>状态</th>\n            <th *ngIf=\"auth.indexOf(262132022) !== -1 || auth.indexOf(273936048) !== -1\">操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n            <td>{{data.device_name}}</td>\n            <td>{{data.device_number}}</td>\n            <td>{{data.provider}}</td>\n            <td>{{data.device_type_name}}</td>\n            <td>{{data.device_remarks}}</td>\n            <td>{{data.status_name}}</td>\n            <td class=\"operate\">\n              <button type=\"button\" \n                      nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"operateDevice(data)\"\n                      *ngIf=\"auth.indexOf(262132022) !== -1\"\n                      >编辑</button>\n              <button type=\"button\" \n                  nz-button \n                  nzType=\"danger\" \n                  nzSize=\"small\" \n                  nz-popconfirm\n                  nzTitle=\"确认要删除吗?\"\n                  (nzOnConfirm)=\"deleteDevice(data)\"\n                  *ngIf=\"auth.indexOf(273936048) !== -1\"\n                  >删除</button>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n    <div class=\"container-right\">\n      <div id=\"map\">\n        \n      </div>\n    </div>\n  </div>\n</div>\n<!-- 设备操作模态框 -->\n<nz-modal [(nzVisible)]=\"isOperate\" \n      nzTitle=\"操作\" \n      [nzBodyStyle] = \"bodyStyle\"\n        nzWidth = '1000px'\n        [nzFooter]=\"null\"\n        (nzOnCancel) = \"operateCancel()\"\n      >\n    <nz-tabset>\n      <nz-tab nzTitle=\"操作日志\">\n          <nz-table #warningTable [nzData]=\"singleDevice.warning\"\n                      [nzFrontPagination]=\"false\"\n                      [nzSize]=\"'small'\"\n                      [nzShowPagination]=\"false\"\n                      >\n        <thead>\n          <tr>\n            <th>日期</th>\n            <th>设备号</th>\n            <th>说明</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of warningTable.data\">\n            <td>{{data.created_at}}</td>\n            <td>{{data.device_id}}</td>\n            <td>{{data.fault_type_name}}</td>\n          </tr>\n        </tbody>\n      </nz-table>\n      </nz-tab>\n      <nz-tab nzTitle=\"添加工作计划\">\n          <div nz-row>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设&nbsp;&nbsp;备&nbsp;&nbsp;号:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_number}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_type_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备&nbsp;&nbsp;&nbsp;&nbsp;  注:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_remarks}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">心跳间隔:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <input type=\"number\" nz-input style=\"width: 200px\" [(ngModel)]=\"cur_interval\" placeholder=\"请输入心跳间隔\" min=\"0\">\n                  <span>小时</span>\n              </div>\n            </div>\n            <!-- <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">开始时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-date-picker\n                nzShowTime\n                nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                nzPlaceHolder=\"请选择开始时间\"\n                (ngModelChange)=\"onChange($event)\"\n                (nzOnOk)=\"onOk($event)\"\n              ></nz-date-picker>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">持续时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"continuedValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"5分钟\" nzLabel=\"5分钟\"></nz-option>\n                  <nz-option nzValue=\"15分钟\" nzLabel=\"15分钟\"></nz-option>\n                  <nz-option nzValue=\"半小时\" nzLabel=\"半小时\"></nz-option>\n                  <nz-option nzValue=\"一小时\" nzLabel=\"一小时\"></nz-option>\n                  <nz-option nzValue=\"一天\" nzLabel=\"一天\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">类&nbsp;&nbsp;&nbsp;&nbsp;  型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"typeValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"单次\" nzLabel=\"单次\"></nz-option>\n                  <nz-option nzValue=\"多次\" nzLabel=\"多次\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">计划说明:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <textarea rows=\"3\" nz-input [(ngModel)]=\"inputValue\" style=\"width: 300px;\" placeholder=\"请输入计划说明\"></textarea>\n              </div>\n            </div> -->\n            <div nz-col [nzXl]=\"24\" class=\"footer\">\n              <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"addWorkPlan()\">确认</button>\n              <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n            </div>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"编辑设备\">\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_name\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_type_name\" readonly=\"readonly\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备号:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_number\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">归属设备组:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <app-form-choose-enterprise [type]=\"'station'\" [(ngModel)]=\"singleDevice.station_id\"></app-form-choose-enterprise>\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备注:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.provider\" placeholder=\"请输入备注\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\" class=\"footer\">\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirmEditDevice()\">确认</button>\n            <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"历史数据\">\n            <div style=\"display: flex;\">\n                <div class=\"heart-left\" style=\"height: 500px;\">\n                    <h4>心跳记录</h4>\n                    <nz-table #heartTable [nzData]=\"singleDevice.heart\"\n                                      [nzFrontPagination]=\"false\"\n                                      [nzSize]=\"'small'\"\n                                      [nzShowPagination]=\"false\"\n                                      >\n                    <thead>\n                        <tr>\n                            <th>日期</th>\n                            <th>温度(°C)</th>\n                            <th>光照度(lux)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of heartTable.data\">\n                            <td>{{data.created_at}}</td>\n                            <td>{{data.temperature}}</td>\n                            <td>{{data.beam}}</td>\n                        </tr>\n                    </tbody>\n                </nz-table>\n                </div>\n                <div class=\"heart-right\">\n                    <h4>历史数据</h4>\n                    <div id=\"chartLock\">\n                        \n                    </div>\n                </div>\n            </div>\n        </nz-tab>\n    </nz-tabset>\n</nz-modal>\n<nz-modal [(nzVisible)]=\"bigMapVisible\" \n      nzTitle=\"显示全部设备\" \n      (nzOnCancel)=\"bigCancel()\" \n        [nzFooter]=\"null\"\n        [nzBodyStyle] = \"bigMapStyle\"\n        nzWidth=\"1200px\"\n        [nzMaskClosable]=\"false\"\n      >\n    <div id=\"bigMap\" style=\"height:60vh;\">\n      \n    </div>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/lock/lock.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/lock/lock.component.ts ***!
  \***************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LockComponent = /** @class */ (function () {
    function LockComponent(deviceService, message) {
        this.deviceService = deviceService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.isOperate = false;
        // infoWindow;
        // 心跳间隔
        this.cur_interval = '';
        this.singleDevice = {
            id: '',
            station_id: '',
            device_name: '',
            device_number: '',
            device_type_name: '',
            device_remarks: '',
            provider: '',
            warning: [],
            heart: []
        };
        this.continuedValue = '5分钟';
        this.typeValue = '单次';
        this.planValue = '';
        this.bodyStyle = { 'height': 'auto' };
        this.deviceDetail = {
            total: 0,
            normal: 0,
            working: 0,
            warning: 0,
            offline: 0
        };
        this.info = {
            query: '',
            type: 4,
            offset: 0,
            limit: 20,
            order_by: 'created_at',
            order: 'desc',
            total: 0,
            loading: false,
        };
        this.device_list = [];
        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.bigMapVisible = false;
        this.bigMapStyle = { height: 'auto' };
    }
    LockComponent.prototype.ngOnInit = function () {
        var obj = {
            tem: 213123,
            name: '12321312',
            age: 18,
            sex: 'woman'
        };
        var content = '';
        for (var i in obj) {
            content += i;
            content += ':';
            content += obj[i];
            content += '<br />';
        }
        console.log(content);
        this.statistics();
        this.search();
    };
    LockComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 2
        }); // 创建地图实例
    };
    LockComponent.prototype.mapClick = function (Device) {
        var lng = Device.longitude;
        var lat = Device.latitude;
        this.map.setZoomAndCenter(17, [lng, lat]);
        var content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, [lng, lat]);
    };
    // 清空查询输入框
    LockComponent.prototype.clear = function () {
        this.info.query = '';
    };
    // 查询设备
    LockComponent.prototype.search = function () {
        var _this = this;
        var that = this;
        var condition = {
            query: this.info.query,
            type: this.info.type,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            for (var i = 0; i < _this.device_list.length; i++) {
                var device = _this.device_list[i];
                _this.addMarker(_this.device_list[i]);
                /*AMap.event.addListener(this.marker, 'click', (e) =>{
                    console.log(this.device_list[i])
                     //实例化信息窗体
                        const title = `${this.device_list[i].device_name}`;
                        const content = [
                              this.device_list[i].device_name,
                              this.device_list[i].device_number
                          ];
                        const infoWindow = new AMap.InfoWindow({
                            isCustom: true,  //使用自定义窗体
                            content: this.createInfoWindow(title, content.join("<br/>"),this),
                            offset: new AMap.Pixel(16, -45)
                        });
                        infoWindow.open(this.map, this.marker.getPosition());
                });*/
            }
        });
    };
    LockComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 获取顶部数据
    LockComponent.prototype.statistics = function () {
        var _this = this;
        var condition = {
            type: this.info.type
        };
        this.deviceService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceDetail = res['data'];
        });
    };
    // 编辑设备
    LockComponent.prototype.operateDevice = function (device) {
        this.singleDevice = JSON.parse(JSON.stringify(device));
        this.getWarning(device.id);
        this.getHeart(device.id);
        this.isOperate = true;
    };
    LockComponent.prototype.operateCancel = function () {
        this.isOperate = false;
    };
    LockComponent.prototype.operateOk = function () {
        this.isOperate = true;
    };
    // 删除设备
    LockComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var condition = {
            id: device.id
        };
        this.deviceService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    LockComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    LockComponent.prototype.onOk = function (data) {
        console.log(data);
    };
    // 获取单个设备的报警记录
    LockComponent.prototype.getWarning = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.singleDevice.warning = res['data']['list'];
        });
    };
    // 获取单个设备的心跳记录
    LockComponent.prototype.getHeart = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.heartSearch(condition).subscribe(function (res) {
            _this.singleDevice.heart = res['data']['list'];
            // 获取设备心跳记录后 渲染图表
            _this.renderChart();
        });
    };
    LockComponent.prototype.cancleDevice = function () {
        this.isOperate = false;
    };
    // 单个设备添加工作计划
    LockComponent.prototype.addWorkPlan = function () {
        var _this = this;
        if (this.cur_interval === '') {
            this.message.warning('请输入心跳间隔');
            return false;
        }
        var condition = {
            id: this.singleDevice.id,
            cur_interval: this.cur_interval
        };
        this.deviceService.heart(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('设置成功');
                _this.isOperate = false;
            }
        });
    };
    // 编辑单个设备
    LockComponent.prototype.confirmEditDevice = function () {
        var _this = this;
        if (this.singleDevice.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (this.singleDevice.device_number === '') {
            this.message.warning('请输入设备号');
            return false;
        }
        if (this.singleDevice.station_id === '') {
            this.message.warning('请选择设备组');
            return false;
        }
        var condition = this.singleDevice;
        this.deviceService.update(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('修改成功');
                _this.isOperate = false;
            }
        });
    };
    //添加点标记
    LockComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        // const marker = new AMap.Marker({
        //     position: longitude,
        //     map: this.map
        // });
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                    content: ''
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                    content: ''
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                    content: ''
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/suo_zc.png',
                    content: ''
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        marker.content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
        marker.on('click', this.markerClick.bind(this));
    };
    LockComponent.prototype.markerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    };
    //构建自定义信息窗体
    LockComponent.prototype.createInfoWindow = function (title, content, that) {
        console.log(that);
        var info = document.createElement("div");
        info.className = "info";
        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("span");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = this.closeInfoWindow.bind(this);
        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);
        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);
        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    };
    // 关闭信息窗体
    LockComponent.prototype.closeInfoWindow = function (that) {
        console.log(this);
        this.map.clearInfoWindow();
    };
    LockComponent.prototype.renderChart = function () {
        var heart = this.singleDevice.heart;
        var arr = [];
        for (var i = 0; i < heart.length; i++) {
            var obj = {
                date: heart[i].created,
                '光照度': heart[i].temperature,
                '温度': heart[i].beam
            };
            arr.push(obj);
        }
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_3___default.a.Chart({
            container: 'chartLock',
            forceFit: true,
            height: 500,
            padding: 'auto'
        });
        this.chart.source(arr, {
            beam: {
                min: 0,
                tickInterval: 50,
                alias: '光照度'
            },
            temperature: {
                // min: 5,
                tickInterval: 5,
                alias: '温度'
            }
        });
        // 左侧 Y 轴，即光照轴
        this.chart.axis('beam', {
            label: {
                formatter: function (val) {
                    return val + ' mm'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#95ceff'
                }
            },
            line: null,
            tickLine: null
        });
        // 右侧第一个 Y 轴，即温度轴
        this.chart.axis('temperature', {
            line: null,
            tickLine: null,
            label: {
                formatter: function (val) {
                    return val + ' °C'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#90ed7d'
                }
            }
        });
        this.chart.legend({
            position: 'top'
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('date*光照度').color('blue').size(2); // 光照
        this.chart.line().position('date*温度').color('red').size(2).shape('smooth'); // 温度
        // this.chart.point().position('date*temperature').color('#90ed7d').shape('diamond');
        this.chart.render();
    };
    LockComponent.prototype.showAllDevice = function () {
        this.bigMapVisible = true;
        this.bigMap = new AMap.Map('bigMap', {
            resizeEnable: true,
            zoom: 2
        });
        for (var i = 0; i < this.device_list.length; i++) {
            var marker = this.bigMapAddMarker(this.device_list[i]);
        }
    };
    LockComponent.prototype.bigCancel = function () {
        this.bigMapVisible = false;
    };
    //添加点标记
    LockComponent.prototype.bigMapAddMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.bigMapMarkerClick.bind(this));
    };
    LockComponent.prototype.bigMapMarkerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.bigMap, e.target.getPosition());
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/components/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.css */ "./src/app/components/lock/lock.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/components/smoke/smoke.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/smoke/smoke.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n  height: 100%;\r\n}\r\n\r\n.device-top {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: left;\r\n  background: #ffffff;\r\n  margin: 0px 10px 0px 10px;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.device-top-left {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.device-top-left div {\r\n  flex: 1;\r\n  width: 0;\r\n}\r\n\r\n.device-top-right {\r\n  float: right;\r\n}\r\n\r\n.device-container {\r\n  background-color: #ffffff;\r\n  margin: 10px 10px 0 10px;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  height: calc(100% - 40px);\r\n}\r\n\r\n.container-top {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.container-left {\r\n  width: 60%;\r\n}\r\n\r\n.container-right {\r\n  width: 40%;\r\n}\r\n\r\n.container-left input,\r\nbutton {\r\n  display: inline-block;\r\n}\r\n\r\n.container-left input {\r\n  margin-right: 30px;\r\n}\r\n\r\n.container-left button {\r\n  margin-left: 10px;\r\n}\r\n\r\n#map {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.addBtn{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n.operate{\r\n    cursor: pointer;\r\n}\r\n\r\n.operate img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.ant-form-item{\r\n    margin-bottom: 3px!important;\r\n}\r\n\r\n.ant-form-item-control-wrapper .ant-form-item-control{\r\n    line-height: 20px!important;\r\n}\r\n\r\n.ant-form-item-label{\r\n    line-height: 20px!important;\r\n}\r\n\r\n.item-label{\r\n    text-align: right;\r\n    margin-right: 5px;\r\n    line-height: 30px;\r\n}\r\n\r\n.item-content{\r\n    line-height: 30px;\r\n}\r\n\r\n.heart-left{\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n\r\n.heart-right{\r\n    display: inline-block;\r\n    width: 50%;\r\n    margin-left: 5%;\r\n}\r\n\r\n.footer{\r\n    /*border-top: 1px solid #ccc;*/\r\n}\r\n\r\n.container-top{\r\n  position: relative;\r\n}\r\n\r\n/*高德点标注*/\r\n\r\n.info {\r\n    border: solid 1px silver;\r\n}\r\n\r\ndiv.info-top {\r\n    position: relative;\r\n    background: none repeat scroll 0 0 #F9F9F9;\r\n    border-bottom: 1px solid #CCC;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n\r\ndiv.info-top div {\r\n    display: inline-block;\r\n    color: #333333;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding: 0 10px;\r\n}\r\n\r\ndiv.info-top img {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    transition-duration: 0.25s;\r\n}\r\n\r\ndiv.info-top img:hover {\r\n    box-shadow: 0px 0px 5px #000;\r\n}\r\n\r\ndiv.info-middle {\r\n    font-size: 12px;\r\n    padding: 6px;\r\n    line-height: 20px;\r\n}\r\n\r\ndiv.info-bottom {\r\n    height: 0px;\r\n    width: 100%;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\n\r\ndiv.info-bottom img {\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\n\r\nspan {\r\n    margin-left: 5px;\r\n    font-size: 11px;\r\n}\r\n\r\n.info-middle img {\r\n    float: left;\r\n    margin-right: 6px;\r\n}\r\n\r\n.info-top div{\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/components/smoke/smoke.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/smoke/smoke.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"device-top\">\n     <div class=\"device-top-left\">\n      <div>设备总数:{{deviceDetail.total}}</div>\n      <div>正常:{{deviceDetail.normal}}</div>\n      <div>工作中:{{deviceDetail.working}}</div>\n      <div>报警:{{deviceDetail.warning}}</div>\n      <div>离线:{{deviceDetail.offline}}</div>\n     </div>\n     <div class=\"device-top-right\">\n      <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"showAllDevice()\">显示所有设备</button>\n     </div>\n  </div>\n  <div class=\"device-container\">\n    <div class=\"container-left\">\n      <div class=\"container-top\">\n        <input type=\"text\" nz-input nzSize=\"default\" placeholder=\"请输入名称或编号\" style=\"width:260px;\" [(ngModel)]=\"info.query\">\n        <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"clear()\">清空</button>\n        <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"search()\" *ngIf=\"auth.indexOf(302831042) !== -1\">搜索</button>\n        <button nz-button nzType=\"primary\" nzSize=\"small\" class=\"addBtn\" [routerLink]=\"['/device/add',1]\"  \n        *ngIf=\"auth.indexOf(310887267) !== -1\"\n        >添加</button>\n      </div>\n      <nz-table #basicTable [nzData]=\"device_list\"\n                  [nzPageSize]=\"20\" \n                      [nzTotal]=\"info.total\" \n                      [nzFrontPagination]=\"false\" \n                      (nzPageIndexChange)=\"changePage($event)\"\n                      [nzLoading]=\"info.loading\">\n        <thead>\n          <tr>\n            <th>名称</th>\n            <th>编号</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>类型说明</th>\n            <th>状态</th>\n            <th *ngIf=\"auth.indexOf(320191621) !== -1 || auth.indexOf(557210465) !== -1\">操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n            <td>{{data.device_name}}</td>\n            <td>{{data.device_number}}</td>\n            <td>{{data.provider}}</td>\n            <td>{{data.device_type_name}}</td>\n            <td>{{data.device_remarks}}</td>\n            <td>{{data.status_name}}</td>\n            <td class=\"operate\">\n              <!-- <button nz-button nzType=\"primary\" nzSize=\"small\" [routerLink]=\"['/device/edit',data.id]\">编辑</button> -->\n              <button type=\"button\" \n                      nz-button nzType=\"primary\" \n                      nzSize=\"small\" \n                      (click)=\"operateDevice(data)\"\n                      *ngIf=\"auth.indexOf(320191621) !== -1\"\n                      >编辑</button>\n              <button type=\"button\" \n                  nz-button \n                  nzType=\"danger\" \n                  nzSize=\"small\" \n                  nz-popconfirm\n                  nzTitle=\"确认要删除吗?\"\n                  (nzOnConfirm)=\"deleteDevice(data)\"\n                  *ngIf=\"auth.indexOf(557210465) !== -1\"\n                  >删除</button>\n\n              <!-- <img src=\"../../../assets/img/cz.png\" alt=\"\" > -->\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n    <div class=\"container-right\">\n      <div id=\"map\">\n        \n      </div>\n    </div>\n  </div>\n</div>\n<!-- 设备操作模态框 -->\n<nz-modal [(nzVisible)]=\"isOperate\" \n      nzTitle=\"操作\" \n      [nzBodyStyle] = \"bodyStyle\"\n        nzWidth = '1000px'\n        [nzFooter]=\"null\"\n        (nzOnCancel) = \"operateCancel()\"\n      >\n    <nz-tabset>\n      <nz-tab nzTitle=\"操作日志\">\n          <nz-table #warningTable [nzData]=\"singleDevice.warning\"\n                      [nzFrontPagination]=\"false\"\n                      [nzSize]=\"'small'\"\n                      [nzShowPagination]=\"false\"\n                      >\n        <thead>\n          <tr>\n            <th>日期</th>\n            <th>设备号</th>\n            <th>说明</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of warningTable.data\">\n            <td>{{data.created_at}}</td>\n            <td>{{data.device_id}}</td>\n            <td>{{data.fault_type_name}}</td>\n          </tr>\n        </tbody>\n      </nz-table>\n      </nz-tab>\n      <nz-tab nzTitle=\"添加工作计划\">\n          <div nz-row>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设&nbsp;&nbsp;备&nbsp;&nbsp;号:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_number}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_type_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备&nbsp;&nbsp;&nbsp;&nbsp;  注:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_remarks}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">心跳间隔:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <input type=\"number\" nz-input style=\"width: 200px\" [(ngModel)]=\"cur_interval\" placeholder=\"请输入心跳间隔\" min=\"0\">\n                  <span>小时</span>\n              </div>\n            </div>\n            <!-- <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">开始时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-date-picker\n                nzShowTime\n                nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                nzPlaceHolder=\"请选择开始时间\"\n                (ngModelChange)=\"onChange($event)\"\n                (nzOnOk)=\"onOk($event)\"\n              ></nz-date-picker>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">持续时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"continuedValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"5分钟\" nzLabel=\"5分钟\"></nz-option>\n                  <nz-option nzValue=\"15分钟\" nzLabel=\"15分钟\"></nz-option>\n                  <nz-option nzValue=\"半小时\" nzLabel=\"半小时\"></nz-option>\n                  <nz-option nzValue=\"一小时\" nzLabel=\"一小时\"></nz-option>\n                  <nz-option nzValue=\"一天\" nzLabel=\"一天\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">类&nbsp;&nbsp;&nbsp;&nbsp;  型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"typeValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"单次\" nzLabel=\"单次\"></nz-option>\n                  <nz-option nzValue=\"多次\" nzLabel=\"多次\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">计划说明:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <textarea rows=\"3\" nz-input [(ngModel)]=\"inputValue\" style=\"width: 300px;\" placeholder=\"请输入计划说明\"></textarea>\n              </div>\n            </div> -->\n            <div nz-col [nzXl]=\"24\" class=\"footer\">\n              <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"addWorkPlan()\">确认</button>\n              <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n            </div>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"编辑设备\">\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_name\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_type_name\" readonly=\"readonly\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备号:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_number\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">归属设备组:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <app-form-choose-enterprise [type]=\"'station'\" [(ngModel)]=\"singleDevice.station_id\"></app-form-choose-enterprise>\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备注:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.provider\" placeholder=\"请输入备注\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\" class=\"footer\">\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirmEditDevice()\">确认</button>\n            <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"历史数据\">\n            <div style=\"display: flex;\">\n                <div class=\"heart-left\" style=\"height: 500px;\">\n                    <h4>心跳记录</h4>\n                    <nz-table #heartTable [nzData]=\"singleDevice.heart\"\n                                      [nzFrontPagination]=\"false\"\n                                      [nzSize]=\"'small'\"\n                                      [nzShowPagination]=\"false\"\n                                      >\n                    <thead>\n                        <tr>\n                            <th>日期</th>\n                            <th>温度(°C)</th>\n                            <th>光照度(lux)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of heartTable.data\">\n                            <td>{{data.created_at}}</td>\n                            <td>{{data.temperature}}</td>\n                            <td>{{data.beam}}</td>\n                        </tr>\n                    </tbody>\n                </nz-table>\n                </div>\n                <div class=\"heart-right\">\n                    <h4>历史数据</h4>\n                    <div id=\"chartSmoke\">\n                        \n                    </div>\n                </div>\n            </div>\n        </nz-tab>\n    </nz-tabset>\n</nz-modal>\n<nz-modal [(nzVisible)]=\"bigMapVisible\" \n        nzTitle=\"显示全部设备\" \n        (nzOnCancel)=\"bigCancel()\" \n        [nzFooter]=\"null\"\n        [nzBodyStyle] = \"bigMapStyle\"\n        nzWidth=\"1200px\"\n        [nzMaskClosable]=\"false\"\n      >\n    <div id=\"bigMap\" style=\"height:60vh;\">\n      \n    </div>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/smoke/smoke.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/smoke/smoke.component.ts ***!
  \*****************************************************/
/*! exports provided: SmokeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmokeComponent", function() { return SmokeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmokeComponent = /** @class */ (function () {
    function SmokeComponent(deviceService, message) {
        this.deviceService = deviceService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.isOperate = false;
        // infoWindow;
        // 心跳间隔
        this.cur_interval = '';
        this.singleDevice = {
            id: '',
            station_id: '',
            device_name: '',
            device_number: '',
            device_type_name: '',
            device_remarks: '',
            provider: '',
            warning: [],
            heart: []
        };
        this.continuedValue = '5分钟';
        this.typeValue = '单次';
        this.planValue = '';
        this.bodyStyle = { 'height': 'auto' };
        this.deviceDetail = {
            total: 0,
            normal: 0,
            working: 0,
            warning: 0,
            offline: 0
        };
        this.info = {
            query: '',
            type: 1,
            offset: 0,
            limit: 20,
            order_by: 'created_at',
            order: 'desc',
            total: 0,
            loading: false,
        };
        this.device_list = [];
        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.bigMapVisible = false;
        this.bigMapStyle = { height: 'auto' };
    }
    SmokeComponent.prototype.ngOnInit = function () {
        var obj = {
            tem: 213123,
            name: '12321312',
            age: 18,
            sex: 'woman'
        };
        var content = '';
        for (var i in obj) {
            content += i;
            content += ':';
            content += obj[i];
            content += '<br />';
        }
        console.log(content);
        this.statistics();
        this.search();
    };
    SmokeComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 2
        }); // 创建地图实例
    };
    SmokeComponent.prototype.mapClick = function (Device) {
        var lng = Device.longitude;
        var lat = Device.latitude;
        this.map.setZoomAndCenter(17, [lng, lat]);
        var content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, [lng, lat]);
    };
    // 清空查询输入框
    SmokeComponent.prototype.clear = function () {
        this.info.query = '';
    };
    // 查询设备
    SmokeComponent.prototype.search = function () {
        var _this = this;
        var that = this;
        var condition = {
            query: this.info.query,
            type: this.info.type,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            for (var i = 0; i < _this.device_list.length; i++) {
                var device = _this.device_list[i];
                _this.addMarker(_this.device_list[i]);
                /*AMap.event.addListener(this.marker, 'click', (e) =>{
                    console.log(this.device_list[i])
                     //实例化信息窗体
                        const title = `${this.device_list[i].device_name}`;
                        const content = [
                              this.device_list[i].device_name,
                              this.device_list[i].device_number
                          ];
                        const infoWindow = new AMap.InfoWindow({
                            isCustom: true,  //使用自定义窗体
                            content: this.createInfoWindow(title, content.join("<br/>"),this),
                            offset: new AMap.Pixel(16, -45)
                        });
                        infoWindow.open(this.map, this.marker.getPosition());
                });*/
            }
        });
    };
    SmokeComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 获取顶部数据
    SmokeComponent.prototype.statistics = function () {
        var _this = this;
        var condition = {
            type: this.info.type
        };
        this.deviceService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceDetail = res['data'];
        });
    };
    // 编辑设备
    SmokeComponent.prototype.operateDevice = function (device) {
        this.singleDevice = JSON.parse(JSON.stringify(device));
        this.getWarning(device.id);
        this.getHeart(device.id);
        this.isOperate = true;
    };
    SmokeComponent.prototype.operateCancel = function () {
        this.isOperate = false;
    };
    SmokeComponent.prototype.operateOk = function () {
        this.isOperate = true;
    };
    // 删除设备
    SmokeComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var condition = {
            id: device.id
        };
        this.deviceService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    SmokeComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    SmokeComponent.prototype.onOk = function (data) {
        console.log(data);
    };
    // 获取单个设备的报警记录
    SmokeComponent.prototype.getWarning = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.singleDevice.warning = res['data']['list'];
        });
    };
    // 获取单个设备的心跳记录
    SmokeComponent.prototype.getHeart = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.heartSearch(condition).subscribe(function (res) {
            _this.singleDevice.heart = res['data']['list'];
            // 获取设备心跳记录后 渲染图表
            _this.renderChart();
        });
    };
    SmokeComponent.prototype.cancleDevice = function () {
        this.isOperate = false;
    };
    // 单个设备添加工作计划
    SmokeComponent.prototype.addWorkPlan = function () {
        var _this = this;
        if (this.cur_interval === '') {
            this.message.warning('请输入心跳间隔');
            return false;
        }
        var condition = {
            id: this.singleDevice.id,
            cur_interval: this.cur_interval
        };
        this.deviceService.heart(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('设置成功');
                _this.isOperate = false;
            }
        });
    };
    // 编辑单个设备
    SmokeComponent.prototype.confirmEditDevice = function () {
        var _this = this;
        if (this.singleDevice.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (this.singleDevice.device_number === '') {
            this.message.warning('请输入设备号');
            return false;
        }
        if (this.singleDevice.station_id === '') {
            this.message.warning('请选择设备组');
            return false;
        }
        var condition = this.singleDevice;
        this.deviceService.update(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('修改成功');
                _this.isOperate = false;
            }
        });
    };
    //添加点标记
    SmokeComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                    content: ''
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                    content: ''
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                    content: ''
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/suo_zc.png',
                    content: ''
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        marker.content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
        marker.on('click', this.markerClick.bind(this));
    };
    SmokeComponent.prototype.markerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    };
    //构建自定义信息窗体
    SmokeComponent.prototype.createInfoWindow = function (title, content, that) {
        console.log(that);
        var info = document.createElement("div");
        info.className = "info";
        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("span");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = this.closeInfoWindow.bind(this);
        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);
        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);
        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    };
    // 关闭信息窗体
    SmokeComponent.prototype.closeInfoWindow = function (that) {
        console.log(this);
        this.map.clearInfoWindow();
    };
    SmokeComponent.prototype.renderChart = function () {
        var heart = this.singleDevice.heart;
        var arr = [];
        for (var i = 0; i < heart.length; i++) {
            var obj = {
                date: heart[i].created,
                '光照度': heart[i].temperature,
                '温度': heart[i].beam
            };
            arr.push(obj);
        }
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_3___default.a.Chart({
            container: 'chart',
            forceFit: true,
            height: 500,
            padding: 'auto'
        });
        this.chart.source(arr, {
            beam: {
                min: 0,
                tickInterval: 50,
                alias: '光照度'
            },
            temperature: {
                // min: 5,
                tickInterval: 5,
                alias: '温度'
            }
        });
        // 左侧 Y 轴，即光照轴
        this.chart.axis('beam', {
            label: {
                formatter: function (val) {
                    return val + ' mm'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#95ceff'
                }
            },
            line: null,
            tickLine: null
        });
        // 右侧第一个 Y 轴，即温度轴
        this.chart.axis('temperature', {
            line: null,
            tickLine: null,
            label: {
                formatter: function (val) {
                    return val + ' °C'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#90ed7d'
                }
            }
        });
        this.chart.legend({
            position: 'top'
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('date*光照度').color('blue').size(2); // 光照
        this.chart.line().position('date*温度').color('red').size(2).shape('smooth'); // 温度
        // this.chart.point().position('date*temperature').color('#90ed7d').shape('diamond');
        this.chart.render();
    };
    SmokeComponent.prototype.showAllDevice = function () {
        this.bigMapVisible = true;
        this.bigMap = new AMap.Map('bigMap', {
            resizeEnable: true,
            zoom: 2
        });
        for (var i = 0; i < this.device_list.length; i++) {
            var marker = this.bigMapAddMarker(this.device_list[i]);
        }
    };
    SmokeComponent.prototype.bigCancel = function () {
        this.bigMapVisible = false;
    };
    //添加点标记
    SmokeComponent.prototype.bigMapAddMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.bigMapMarkerClick.bind(this));
    };
    SmokeComponent.prototype.bigMapMarkerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.bigMap, e.target.getPosition());
    };
    SmokeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smoke',
            template: __webpack_require__(/*! ./smoke.component.html */ "./src/app/components/smoke/smoke.component.html"),
            styles: [__webpack_require__(/*! ./smoke.component.css */ "./src/app/components/smoke/smoke.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], SmokeComponent);
    return SmokeComponent;
}());



/***/ }),

/***/ "./src/app/components/well-cover/well-cover.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/well-cover/well-cover.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\r\n  height: 100%!important;\r\n}\r\n.device-top {\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: left;\r\n  background: #ffffff;\r\n  margin: 0px 10px 0px 10px;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.device-top-left {\r\n  width: 80%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n.device-top-left div {\r\n  flex: 1;\r\n  width: 0;\r\n}\r\n.device-top-right {\r\n  float: right;\r\n}\r\n.device-container {\r\n  background-color: #ffffff;\r\n  margin: 10px 10px 0 10px;\r\n  padding: 10px 10px;\r\n  height: calc(100% - 40px);\r\n  display: flex;\r\n}\r\n.container-top {\r\n  margin-bottom: 10px;\r\n}\r\n.container-left {\r\n  width: 55%;\r\n}\r\n.container-right {\r\n  width: 45%;\r\n  position: relative;\r\n}\r\n.container-left input,button {\r\n  display: inline-block;\r\n}\r\n.container-left input {\r\n  margin-right: 30px;\r\n}\r\n.container-left button {\r\n  margin-left: 10px;\r\n}\r\n#map {\r\n  width: 100%;\r\n  /*height: 100%;*/\r\n  position: absolute;\r\n  min-height: 100%;\r\n}\r\n.addBtn{\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 15px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.operate{\r\n    cursor: pointer;\r\n}\r\n.operate img{\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.ant-form-item{\r\n    margin-bottom: 3px!important;\r\n}\r\n.ant-form-item-control-wrapper .ant-form-item-control{\r\n    line-height: 20px!important;\r\n}\r\n.ant-form-item-label{\r\n    line-height: 20px!important;\r\n}\r\n.item-label{\r\n    text-align: right;\r\n    margin-right: 5px;\r\n    line-height: 30px;\r\n}\r\n.item-content{\r\n    line-height: 30px;\r\n}\r\n.heart-left{\r\n    display: inline-block;\r\n    width: 45%;\r\n}\r\n.heart-right{\r\n    display: inline-block;\r\n    width: 50%;\r\n    margin-left: 5%;\r\n}\r\n.footer{\r\n    /*border-top: 1px solid #ccc;*/\r\n}\r\n.container-top{\r\n  position: relative;\r\n}\r\n/*高德点标注*/\r\n.info {\r\n    border: solid 1px silver;\r\n}\r\ndiv.info-top {\r\n    position: relative;\r\n    background: none repeat scroll 0 0 #F9F9F9;\r\n    border-bottom: 1px solid #CCC;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\ndiv.info-top div {\r\n    display: inline-block;\r\n    color: #333333;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding: 0 10px;\r\n}\r\ndiv.info-top img {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    transition-duration: 0.25s;\r\n}\r\ndiv.info-top img:hover {\r\n    box-shadow: 0px 0px 5px #000;\r\n}\r\ndiv.info-middle {\r\n    font-size: 12px;\r\n    padding: 6px;\r\n    line-height: 20px;\r\n}\r\ndiv.info-bottom {\r\n    height: 0px;\r\n    width: 100%;\r\n    clear: both;\r\n    text-align: center;\r\n}\r\ndiv.info-bottom img {\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\nspan {\r\n    margin-left: 5px;\r\n    font-size: 11px;\r\n}\r\n.info-middle img {\r\n    float: left;\r\n    margin-right: 6px;\r\n}\r\n.info-top div{\r\n    display: inline-block;\r\n}\r\n.map-title{\r\n  font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/well-cover/well-cover.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/well-cover/well-cover.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"device-top\">\n     <div class=\"device-top-left\">\n      <div>设备总数:{{deviceDetail.total}}</div>\n      <div>正常:{{deviceDetail.normal}}</div>\n      <div>工作中:{{deviceDetail.working}}</div>\n      <div>报警:{{deviceDetail.warning}}</div>\n      <div>离线:{{deviceDetail.offline}}</div>\n     </div>\n     <div class=\"device-top-right\">\n      <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"showAllDevice()\">显示所有设备</button>\n     </div>\n  </div>\n  <div class=\"device-container\">\n    <div class=\"container-left\">\n      <div class=\"container-top\">\n        <input type=\"text\" nz-input nzSize=\"default\" placeholder=\"请输入名称或编号\" style=\"width:260px;\" [(ngModel)]=\"info.query\">\n        <button nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"clear()\">清空</button>\n        <button nz-button nzType=\"default\" nzSize=\"small\" (click)=\"search()\" *ngIf=\"auth.indexOf(175849342) !== -1\">搜索</button>\n        <button nz-button nzType=\"primary\" nzSize=\"small\" class=\"addBtn\" [routerLink]=\"['/device/add',2]\" *ngIf=\"auth.indexOf(188094106) !== -1\">添加</button>\n      </div>\n      <nz-table #basicTable [nzData]=\"device_list\"\n                  [nzPageSize]=\"20\" \n                      [nzTotal]=\"info.total\" \n                      [nzFrontPagination]=\"false\" \n                      (nzPageIndexChange)=\"changePage($event)\"\n                      [nzLoading]=\"info.loading\">\n        <thead>\n          <tr>\n            <th>名称</th>\n            <th>编号</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>类型说明</th>\n            <th>状态</th>\n            <th *ngIf=\"auth.indexOf(199235301) !== -1 || auth.indexOf(454765506) !== -1\">操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of basicTable.data\" (click)=\"mapClick(data)\">\n            <td>{{data.device_name}}</td>\n            <td>{{data.device_number}}</td>\n            <td>{{data.provider}}</td>\n            <td>{{data.device_type_name}}</td>\n            <td>{{data.device_remarks}}</td>\n            <td>{{data.status_name}}</td>\n            <td class=\"operate\">\n              <button type=\"button\" \n                      nz-button nzType=\"primary\" nzSize=\"small\" (click)=\"operateDevice(data)\"\n                      *ngIf=\"auth.indexOf(199235301) !== -1\"\n                      >编辑</button>\n              <button type=\"button\" \n                  nz-button \n                  nzType=\"danger\" \n                  nzSize=\"small\" \n                  nz-popconfirm\n                  nzTitle=\"确认要删除吗?\"\n                  (nzOnConfirm)=\"deleteDevice(data)\"\n                  *ngIf=\"auth.indexOf(454765506) !== -1\"\n                  >删除</button>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n    <div class=\"container-right\">\n      <div id=\"map\">\n        \n      </div>\n    </div>\n  </div>\n</div>\n<!-- 设备操作模态框 -->\n<nz-modal [(nzVisible)]=\"isOperate\" \n      nzTitle=\"操作\" \n      [nzBodyStyle] = \"bodyStyle\"\n        nzWidth = '1000px'\n        [nzFooter]=\"null\"\n        (nzOnCancel) = \"operateCancel()\"\n      >\n    <nz-tabset>\n      <nz-tab nzTitle=\"操作日志\">\n          <nz-table #warningTable [nzData]=\"singleDevice.warning\"\n                      [nzFrontPagination]=\"false\"\n                      [nzSize]=\"'small'\"\n                      [nzShowPagination]=\"false\"\n                      >\n        <thead>\n          <tr>\n            <th>日期</th>\n            <th>设备号</th>\n            <th>说明</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of warningTable.data\">\n            <td>{{data.created_at}}</td>\n            <td>{{data.device_id}}</td>\n            <td>{{data.fault_type_name}}</td>\n          </tr>\n        </tbody>\n      </nz-table>\n      </nz-tab>\n      <nz-tab nzTitle=\"添加工作计划\">\n          <div nz-row>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设&nbsp;&nbsp;备&nbsp;&nbsp;号:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_number}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_type_name}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备&nbsp;&nbsp;&nbsp;&nbsp;  注:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <span>{{singleDevice.device_remarks}}</span>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">心跳间隔:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <input type=\"number\" nz-input style=\"width: 200px\" [(ngModel)]=\"cur_interval\" placeholder=\"请输入心跳间隔\" min=\"0\">\n                  <span>小时</span>\n              </div>\n            </div>\n            <!-- <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">开始时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-date-picker\n                nzShowTime\n                nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                nzPlaceHolder=\"请选择开始时间\"\n                (ngModelChange)=\"onChange($event)\"\n                (nzOnOk)=\"onOk($event)\"\n              ></nz-date-picker>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">持续时间:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"continuedValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"5分钟\" nzLabel=\"5分钟\"></nz-option>\n                  <nz-option nzValue=\"15分钟\" nzLabel=\"15分钟\"></nz-option>\n                  <nz-option nzValue=\"半小时\" nzLabel=\"半小时\"></nz-option>\n                  <nz-option nzValue=\"一小时\" nzLabel=\"一小时\"></nz-option>\n                  <nz-option nzValue=\"一天\" nzLabel=\"一天\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">类&nbsp;&nbsp;&nbsp;&nbsp;  型:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <nz-select style=\"width: 300px;\" [(ngModel)]=\"typeValue\" nzAllowClear nzPlaceHolder=\"\">\n                  <nz-option nzValue=\"单次\" nzLabel=\"单次\"></nz-option>\n                  <nz-option nzValue=\"多次\" nzLabel=\"多次\"></nz-option>\n              </nz-select>\n              </div>\n            </div>\n            <div nz-col [nzXl]=\"24\">\n              <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">计划说明:</label>\n              <div nz-col [nzSm]=\"14\" [nzXs]=\"24\" class=\"item-content\">\n                  <textarea rows=\"3\" nz-input [(ngModel)]=\"inputValue\" style=\"width: 300px;\" placeholder=\"请输入计划说明\"></textarea>\n              </div>\n            </div> -->\n            <div nz-col [nzXl]=\"24\" class=\"footer\">\n              <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"addWorkPlan()\">确认</button>\n              <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n            </div>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"编辑设备\">\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备名称:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_name\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备类型:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_type_name\" readonly=\"readonly\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">设备号:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n                <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.device_number\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">归属设备组:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <app-form-choose-enterprise [type]=\"'station'\" [(ngModel)]=\"singleDevice.station_id\"></app-form-choose-enterprise>\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\">\n            <label nz-col [nzSm]=\"3\" [nzXs]=\"24\" class=\"item-label\">备注:</label>\n            <div nz-col [nzSm]=\"6\" [nzXs]=\"24\" class=\"item-content\">\n              <input type=\"text\" nz-input [(ngModel)]=\"singleDevice.provider\" placeholder=\"请输入备注\">\n            </div>\n          </div>\n          <div nz-col [nzXl]=\"24\" class=\"footer\">\n            <button type=\"button\" nz-button nzType=\"primary\" class=\"pull-right\" (click)=\"confirmEditDevice()\">确认</button>\n            <button type=\"button\" nz-button nzType=\"default\" class=\"pull-right\" style=\"margin-right:10px;\" (click)=\"cancleDevice()\">取消</button>\n          </div>\n      </nz-tab>\n      <nz-tab nzTitle=\"历史数据\">\n            <div style=\"display: flex;\">\n                <div class=\"heart-left\" style=\"height: 500px;\">\n                    <h4>心跳记录</h4>\n                    <nz-table #heartTable [nzData]=\"singleDevice.heart\"\n                                      [nzFrontPagination]=\"false\"\n                                      [nzSize]=\"'small'\"\n                                      [nzShowPagination]=\"false\"\n                                      >\n                    <thead>\n                        <tr>\n                            <th>日期</th>\n                            <th>温度(°C)</th>\n                            <th>光照度(lux)</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let data of heartTable.data\">\n                            <td>{{data.created_at}}</td>\n                            <td>{{data.temperature}}</td>\n                            <td>{{data.beam}}</td>\n                        </tr>\n                    </tbody>\n                </nz-table>\n                </div>\n                <div class=\"heart-right\">\n                    <h4>历史数据</h4>\n                    <div id=\"chart\">\n                        \n                    </div>\n                </div>\n            </div>\n        </nz-tab>\n    </nz-tabset>\n</nz-modal>\n<nz-modal [(nzVisible)]=\"bigMapVisible\" \n        nzTitle=\"显示全部设备\" \n        (nzOnCancel)=\"bigCancel()\" \n        [nzFooter]=\"null\"\n        [nzBodyStyle] = \"bigMapStyle\"\n        nzWidth=\"1200px\"\n        [nzMaskClosable]=\"false\"\n      >\n    <div id=\"bigMap\" style=\"height:60vh;\">\n      \n    </div>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/components/well-cover/well-cover.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/well-cover/well-cover.component.ts ***!
  \***************************************************************/
/*! exports provided: WellCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellCoverComponent", function() { return WellCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WellCoverComponent = /** @class */ (function () {
    function WellCoverComponent(deviceService, message) {
        this.deviceService = deviceService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.isOperate = false;
        // infoWindow;
        // 心跳间隔
        this.cur_interval = '';
        this.singleDevice = {
            id: '',
            station_id: '',
            device_name: '',
            device_number: '',
            device_type_name: '',
            device_remarks: '',
            provider: '',
            warning: [],
            heart: []
        };
        this.continuedValue = '5分钟';
        this.typeValue = '单次';
        this.planValue = '';
        this.bodyStyle = { 'height': 'auto' };
        this.deviceDetail = {
            total: 0,
            normal: 0,
            working: 0,
            warning: 0,
            offline: 0
        };
        this.info = {
            query: '',
            type: 2,
            offset: 0,
            limit: 20,
            order_by: 'created_at',
            order: 'desc',
            total: 0,
            loading: false,
        };
        this.device_list = [];
        this.infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
        this.bigMapVisible = false;
        this.bigMapStyle = { height: 'auto' };
    }
    WellCoverComponent.prototype.ngOnInit = function () {
        var obj = {
            tem: 213123,
            name: '12321312',
            age: 18,
            sex: 'woman'
        };
        var content = '';
        for (var i in obj) {
            content += i;
            content += ':';
            content += obj[i];
            content += '<br />';
        }
        console.log(content);
        this.statistics();
        this.search();
    };
    WellCoverComponent.prototype.ngAfterViewInit = function () {
        this.map = new AMap.Map('map', {
            resizeEnable: true,
            zoom: 2
        }); // 创建地图实例
    };
    WellCoverComponent.prototype.mapClick = function (Device) {
        var lng = Device.longitude;
        var lat = Device.latitude;
        this.map.setZoomAndCenter(17, [lng, lat]);
        var content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
        this.infoWindow.setContent(content);
        this.infoWindow.open(this.map, [lng, lat]);
    };
    // 清空查询输入框
    WellCoverComponent.prototype.clear = function () {
        this.info.query = '';
    };
    // 查询设备
    WellCoverComponent.prototype.search = function () {
        var _this = this;
        var that = this;
        var condition = {
            query: this.info.query,
            type: this.info.type,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.deviceService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.device_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            for (var i = 0; i < _this.device_list.length; i++) {
                var device = _this.device_list[i];
                _this.addMarker(_this.device_list[i]);
                /*AMap.event.addListener(this.marker, 'click', (e) =>{
                    console.log(this.device_list[i])
                     //实例化信息窗体
                        const title = `${this.device_list[i].device_name}`;
                        const content = [
                              this.device_list[i].device_name,
                              this.device_list[i].device_number
                          ];
                        const infoWindow = new AMap.InfoWindow({
                            isCustom: true,  //使用自定义窗体
                            content: this.createInfoWindow(title, content.join("<br/>"),this),
                            offset: new AMap.Pixel(16, -45)
                        });
                        infoWindow.open(this.map, this.marker.getPosition());
                });*/
            }
        });
    };
    WellCoverComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    // 获取顶部数据
    WellCoverComponent.prototype.statistics = function () {
        var _this = this;
        var condition = {
            type: this.info.type
        };
        this.deviceService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.deviceDetail = res['data'];
        });
    };
    // 编辑设备
    WellCoverComponent.prototype.operateDevice = function (device) {
        this.singleDevice = JSON.parse(JSON.stringify(device));
        this.getWarning(device.id);
        this.getHeart(device.id);
        this.isOperate = true;
    };
    WellCoverComponent.prototype.operateCancel = function () {
        this.isOperate = false;
    };
    WellCoverComponent.prototype.operateOk = function () {
        this.isOperate = true;
    };
    // 删除设备
    WellCoverComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var condition = {
            id: device.id
        };
        this.deviceService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    WellCoverComponent.prototype.onChange = function ($event) {
        console.log($event);
    };
    WellCoverComponent.prototype.onOk = function (data) {
        console.log(data);
    };
    // 获取单个设备的报警记录
    WellCoverComponent.prototype.getWarning = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.singleDevice.warning = res['data']['list'];
        });
    };
    // 获取单个设备的心跳记录
    WellCoverComponent.prototype.getHeart = function (id) {
        var _this = this;
        var condition = {
            id: id
        };
        this.deviceService.heartSearch(condition).subscribe(function (res) {
            _this.singleDevice.heart = res['data']['list'];
            // 获取设备心跳记录后 渲染图表
            _this.renderChart();
        });
    };
    WellCoverComponent.prototype.cancleDevice = function () {
        this.isOperate = false;
    };
    // 单个设备添加工作计划
    WellCoverComponent.prototype.addWorkPlan = function () {
        var _this = this;
        if (this.cur_interval === '') {
            this.message.warning('请输入心跳间隔');
            return false;
        }
        var condition = {
            id: this.singleDevice.id,
            cur_interval: this.cur_interval
        };
        this.deviceService.heart(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('设置成功');
                _this.isOperate = false;
            }
        });
    };
    // 编辑单个设备
    WellCoverComponent.prototype.confirmEditDevice = function () {
        var _this = this;
        if (this.singleDevice.device_name === '') {
            this.message.warning('请输入设备名称');
            return false;
        }
        if (this.singleDevice.device_number === '') {
            this.message.warning('请输入设备号');
            return false;
        }
        if (this.singleDevice.station_id === '') {
            this.message.warning('请选择设备组');
            return false;
        }
        var condition = this.singleDevice;
        this.deviceService.update(condition).subscribe(function (res) {
            if (res['code'] === 0) {
                _this.message.success('修改成功');
                _this.isOperate = false;
            }
        });
    };
    //添加点标记
    WellCoverComponent.prototype.addMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        // const marker = new AMap.Marker({
        //     position: longitude,
        //     map: this.map
        // });
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                    content: ''
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                    content: ''
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                    content: ''
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/suo_zc.png',
                    content: ''
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.map,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        // marker.content = `<div style="min-width:200px;font-size:13px;">
        //                       <p class="map-title">${Device.device_name}</p>
        //                       <p>类型:${Device.device_type_name}</p>
        //                       <p>名称:${Device.device_name}</p>
        //                       <p>设备号:${Device.device_number}</p>
        //                       <p>电压:${Device.real_voltage}</p>
        //                       <p>状态:${Device.status_name}</p>
        //                       <p>最后上报时间:${Device.uploaded_at}</p>
        //                       <p>温度:${Device.temperature}</p>
        //                       <p>湿度:${Device.dampness}</p>
        //                       <p>光照:${Device.beam}</p>
        //                       <p>浸水:${Device.inundate}</p>
        //                    </div>
        //                   `
        marker.content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
        // <p>温度:${Device.temperature}</p>
        // <p>湿度:${Device.dampness}</p>
        // <p>光照:${Device.beam}</p>
        // <p>浸水:${Device.inundate}</p>
        marker.on('click', this.markerClick.bind(this));
    };
    WellCoverComponent.prototype.markerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.map, e.target.getPosition());
    };
    //构建自定义信息窗体
    WellCoverComponent.prototype.createInfoWindow = function (title, content, that) {
        console.log(that);
        var info = document.createElement("div");
        info.className = "info";
        //可以通过下面的方式修改自定义窗体的宽高
        //info.style.width = "400px";
        // 定义顶部标题
        var top = document.createElement("div");
        var titleD = document.createElement("span");
        var closeX = document.createElement("img");
        top.className = "info-top";
        titleD.innerHTML = title;
        closeX.src = "https://webapi.amap.com/images/close2.gif";
        closeX.onclick = this.closeInfoWindow.bind(this);
        top.appendChild(titleD);
        top.appendChild(closeX);
        info.appendChild(top);
        // 定义中部内容
        var middle = document.createElement("div");
        middle.className = "info-middle";
        middle.style.backgroundColor = 'white';
        middle.innerHTML = content;
        info.appendChild(middle);
        // 定义底部内容
        var bottom = document.createElement("div");
        bottom.className = "info-bottom";
        bottom.style.position = 'relative';
        bottom.style.top = '0px';
        bottom.style.margin = '0 auto';
        var sharp = document.createElement("img");
        sharp.src = "https://webapi.amap.com/images/sharp.png";
        bottom.appendChild(sharp);
        info.appendChild(bottom);
        return info;
    };
    // 关闭信息窗体
    WellCoverComponent.prototype.closeInfoWindow = function (that) {
        console.log(this);
        this.map.clearInfoWindow();
    };
    WellCoverComponent.prototype.renderChart = function () {
        var heart = this.singleDevice.heart;
        var arr = [];
        for (var i = 0; i < heart.length; i++) {
            var obj = {
                date: heart[i].created,
                '光照度': heart[i].temperature,
                '温度': heart[i].beam
            };
            arr.push(obj);
        }
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_3___default.a.Chart({
            container: 'chart',
            forceFit: true,
            height: 500,
            padding: 'auto'
        });
        this.chart.source(arr, {
            beam: {
                min: 0,
                tickInterval: 50,
                alias: '光照度'
            },
            temperature: {
                // min: 5,
                tickInterval: 5,
                alias: '温度'
            }
        });
        // 左侧 Y 轴，即光照轴
        this.chart.axis('beam', {
            label: {
                formatter: function (val) {
                    return val + ' mm'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#95ceff'
                }
            },
            line: null,
            tickLine: null
        });
        // 右侧第一个 Y 轴，即温度轴
        this.chart.axis('temperature', {
            line: null,
            tickLine: null,
            label: {
                formatter: function (val) {
                    return val + ' °C'; // 格式化坐标轴显示
                },
                textStyle: {
                    fill: '#90ed7d'
                }
            }
        });
        this.chart.legend({
            position: 'top'
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('date*光照度').color('blue').size(2); // 光照
        this.chart.line().position('date*温度').color('red').size(2).shape('smooth'); // 温度
        // this.chart.point().position('date*temperature').color('#90ed7d').shape('diamond');
        this.chart.render();
    };
    WellCoverComponent.prototype.showAllDevice = function () {
        this.bigMapVisible = true;
        this.bigMap = new AMap.Map('bigMap', {
            resizeEnable: true,
            zoom: 2
        });
        for (var i = 0; i < this.device_list.length; i++) {
            var marker = this.bigMapAddMarker(this.device_list[i]);
        }
    };
    WellCoverComponent.prototype.bigCancel = function () {
        this.bigMapVisible = false;
    };
    //添加点标记
    WellCoverComponent.prototype.bigMapAddMarker = function (device) {
        var longitude = [device.longitude, device.latitude];
        var Device = device;
        var marker;
        switch (device.device_type_name) {
            case "烟感":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/smoke_gj.png' : '../../../assets/img/smoke_zc.png',
                });
                break;
            case "智能节点":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/jinggai_gj.png' : '../../../assets/img/jinggai_zc.png',
                });
                break;
            case "门磁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: device.status === '报警' ? '../../../assets/img/mc_gj.png' : '../../../assets/img/mc_zc.png',
                });
                break;
            case "智能锁":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/suo_zc.png',
                });
                break;
            case "断路监测仪":
                marker = new AMap.Marker({
                    position: longitude,
                    map: this.bigMap,
                    icon: '../../../assets/img/dljcy.png',
                });
                break;
        }
        var content = '';
        switch (Device.device_type_name) {
            case "烟感":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u6E29\u5EA6:" + Device.temperature + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                           </div>\n                          ";
                break;
            case "智能节点":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "门磁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                           </div>\n                          ";
                break;
            case "智能锁":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">" + Device.device_name + "</p>\n                              <p>\u7C7B\u578B:" + Device.device_type_name + "</p>\n                              <p>\u540D\u79F0:" + Device.device_name + "</p>\n                              <p>\u8BBE\u5907\u53F7:" + Device.device_number + "</p>\n                              <p>\u7535\u538B:" + Device.real_voltage + "</p>\n                              <p>\u72B6\u6001:" + Device.status_name + "</p>\n                              <p>\u6700\u540E\u4E0A\u62A5\u65F6\u95F4:" + Device.uploaded_at + "</p>\n                              <p>\u4FE1\u53F7:" + Device.signal + "</p>\n                              <p>\u6E7F\u5EA6:" + Device.dampness + "</p>\n                              <p>\u95E8\u72B6\u6001:" + Device.door_status + "</p>\n                              <p>\u9501\u72B6\u6001:" + Device.lock_status + "</p>\n                              <p><button>\u5F00\u542F</button></p>\n                           </div>\n                          ";
                break;
            case "断路监测仪":
                content = "<div style=\"min-width:200px;font-size:13px;color:black;\">\n                              <p class=\"map-title\" style=\"font-weight:bold\">\u914D\u53D8\u53CA\u505C\u7535\u4FE1\u606F</p>\n                              <p>\u914D\u53D8\u540D\u79F0:" + Device.device_type_name + "</p>\n                              <p>\u6240\u5C5E\u7EBF\u8DEF:" + Device.device_name + "</p>\n                              <p>\u505C\u7535\u65F6\u95F4:" + Device.device_number + "</p>\n                              <p>\u505C\u7535\u7C7B\u578B:" + Device.warning_type + "</p>\n                              <p>\u505C\u7535\u539F\u56E0:" + Device.warning_content + "</p>\n                              <p>\u7535\u6C60\u7535\u91CF:" + Device.real_quantity + "</p>\n                           </div>\n                          ";
                break;
        }
        marker.content = content;
        marker.on('click', this.bigMapMarkerClick.bind(this));
    };
    WellCoverComponent.prototype.bigMapMarkerClick = function (e) {
        this.infoWindow.setContent(e.target.content);
        this.infoWindow.open(this.bigMap, e.target.getPosition());
    };
    WellCoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-well-cover',
            template: __webpack_require__(/*! ./well-cover.component.html */ "./src/app/components/well-cover/well-cover.component.html"),
            styles: [__webpack_require__(/*! ./well-cover.component.css */ "./src/app/components/well-cover/well-cover.component.css")]
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], WellCoverComponent);
    return WellCoverComponent;
}());



/***/ }),

/***/ "./src/app/modules/device/device.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/device/device.module.ts ***!
  \*************************************************/
/*! exports provided: DeviceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceModule", function() { return DeviceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/mycommon/mycommon.module */ "./src/app/modules/mycommon/mycommon.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/lock/lock.component */ "./src/app/components/lock/lock.component.ts");
/* harmony import */ var _components_smoke_smoke_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/smoke/smoke.component */ "./src/app/components/smoke/smoke.component.ts");
/* harmony import */ var _components_device_door_device_door_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/device-door/device-door.component */ "./src/app/components/device-door/device-door.component.ts");
/* harmony import */ var _components_well_cover_well_cover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/well-cover/well-cover.component */ "./src/app/components/well-cover/well-cover.component.ts");
/* harmony import */ var _components_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/device-list/device-list.component */ "./src/app/components/device-list/device-list.component.ts");
/* harmony import */ var _components_device_add_device_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/device-add/device-add.component */ "./src/app/components/device-add/device-add.component.ts");
/* harmony import */ var _components_device_edit_device_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/device-edit/device-edit.component */ "./src/app/components/device-edit/device-edit.component.ts");
/* harmony import */ var _components_device_monitor_device_monitor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/device-monitor/device-monitor.component */ "./src/app/components/device-monitor/device-monitor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _components_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__["DeviceListComponent"] },
    { path: 'wellCover', component: _components_well_cover_well_cover_component__WEBPACK_IMPORTED_MODULE_7__["WellCoverComponent"] },
    { path: 'lock', component: _components_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__["LockComponent"] },
    { path: 'smoke', component: _components_smoke_smoke_component__WEBPACK_IMPORTED_MODULE_5__["SmokeComponent"] },
    { path: 'door', component: _components_device_door_device_door_component__WEBPACK_IMPORTED_MODULE_6__["DeviceDoorComponent"] },
    { path: 'add/:type', component: _components_device_add_device_add_component__WEBPACK_IMPORTED_MODULE_9__["DeviceAddComponent"] },
    { path: 'edit/:id/', component: _components_device_edit_device_edit_component__WEBPACK_IMPORTED_MODULE_10__["DeviceEditComponent"] },
    { path: 'monitor', component: _components_device_monitor_device_monitor_component__WEBPACK_IMPORTED_MODULE_11__["DeviceMonitorComponent"] }
];
var DeviceModule = /** @class */ (function () {
    function DeviceModule() {
    }
    DeviceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__["MycommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_8__["DeviceListComponent"],
                _components_well_cover_well_cover_component__WEBPACK_IMPORTED_MODULE_7__["WellCoverComponent"],
                _components_lock_lock_component__WEBPACK_IMPORTED_MODULE_4__["LockComponent"],
                _components_smoke_smoke_component__WEBPACK_IMPORTED_MODULE_5__["SmokeComponent"],
                _components_device_door_device_door_component__WEBPACK_IMPORTED_MODULE_6__["DeviceDoorComponent"],
                _components_device_add_device_add_component__WEBPACK_IMPORTED_MODULE_9__["DeviceAddComponent"],
                _components_device_edit_device_edit_component__WEBPACK_IMPORTED_MODULE_10__["DeviceEditComponent"],
                _components_device_monitor_device_monitor_component__WEBPACK_IMPORTED_MODULE_11__["DeviceMonitorComponent"]
            ]
        })
    ], DeviceModule);
    return DeviceModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-device-device-module.js.map
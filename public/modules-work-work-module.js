(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-work-work-module"],{

/***/ "./src/app/components/work-detail/work-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/work-detail/work-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/work-detail/work-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/work-detail/work-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  work-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/work-detail/work-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/work-detail/work-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorkDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkDetailComponent", function() { return WorkDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkDetailComponent = /** @class */ (function () {
    function WorkDetailComponent() {
    }
    WorkDetailComponent.prototype.ngOnInit = function () {
    };
    WorkDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-detail',
            template: __webpack_require__(/*! ./work-detail.component.html */ "./src/app/components/work-detail/work-detail.component.html"),
            styles: [__webpack_require__(/*! ./work-detail.component.css */ "./src/app/components/work-detail/work-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkDetailComponent);
    return WorkDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/work-order/work-order.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/work-order/work-order.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".export{\r\n    text-align: right;\r\n}\r\n.content{\r\n    padding: 20px;\r\n    background-color:#ffffff;\r\n}\r\n#chart{\r\n    margin: 0 auto;\r\n    width: 800px;\r\n    height: 400px;\r\n}"

/***/ }),

/***/ "./src/app/components/work-order/work-order.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/work-order/work-order.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"content\">\n    <p class=\"export\">\n      <!-- <button nz-button nzType=\"default\">导出</button> -->\n    </p>\n    <div>\n       <div id=\"chart\">\n\n       </div>\n    </div>\n    <!-- <div ng-row>\n        <div nz-col nzXl=\"6\">\n            <input type=\"text\" nz-input placeholder=\"请输入设备串号\">\n        </div>\n    </div> -->\n    <nz-table [nzData]=\"push_list\" \n              [nzShowPagination]=\"true\"\n              [nzTotal]=\"info.total\"\n              (nzPageIndexChange)=\"changePage($event)\"\n              >\n      <thead>\n        <tr>\n          <th>微信用户标识</th>\n          <th>平台账户</th>\n          <th>报警时间</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of push_list\">\n          <td>{{data.open_id}}</td>\n          <td>{{data.user_name}}</td>\n          <td>{{data.uploaded_at}}</td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/work-order/work-order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/work-order/work-order.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderComponent", function() { return WorkOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_work_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/work.service */ "./src/app/services/work.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkOrderComponent = /** @class */ (function () {
    function WorkOrderComponent(workService) {
        this.workService = workService;
        this.info = {
            query: '',
            offset: 0,
            limit: 20,
            order_by: 'uploaded_at',
            order: 'desc',
            total: 0
        };
        this.top_lsit = [];
        this.push_list = [];
        this.dataSet = [];
    }
    // 上面图表的数据
    WorkOrderComponent.prototype.searchStatistics = function () {
        var _this = this;
        this.workService.statistics().subscribe(function (res) {
            console.log(res);
            _this.top_lsit = res['data'];
            _this.info.total = res['data'].length;
            var arr = [];
            for (var i = 0; i < _this.top_lsit.length; i++) {
                var obj = { name: _this.top_lsit[i].name, '推送次数': _this.top_lsit[i].value };
                arr.push(obj);
            }
            console.log(arr);
            _this.chart.changeData(arr);
        });
    };
    // 下面列表的数据
    WorkOrderComponent.prototype.search = function () {
        var _this = this;
        var condition = {
            query: this.info.query,
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
            total: this.info.total
        };
        this.workService.push(condition).subscribe(function (res) {
            console.log(res);
            _this.push_list = res['data']['list'];
            _this.info.total = res['data']['total'];
        });
    };
    WorkOrderComponent.prototype.ngOnInit = function () {
        this.searchStatistics();
        this.search();
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_2___default.a.Chart({
            container: 'chart',
            forceFit: true,
            height: 400,
            width: 800
        });
        this.chart.source(this.top_lsit);
        this.chart.scale('sales', {
            nice: true
        });
        this.chart.interval().position('name*推送次数');
        // .tooltip('未处理');
        this.chart.render();
    };
    WorkOrderComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    WorkOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-order',
            template: __webpack_require__(/*! ./work-order.component.html */ "./src/app/components/work-order/work-order.component.html"),
            styles: [__webpack_require__(/*! ./work-order.component.css */ "./src/app/components/work-order/work-order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]])
    ], WorkOrderComponent);
    return WorkOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/worker/worker.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/worker/worker.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    border-bottom: 1px solid #dedede;\r\n}\r\n.title{\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n.work-content{\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n}\r\n.second-header{\r\n    padding: 10px 0;\r\n    border-bottom: 1px solid #dedede;\r\n}\r\n.item-left p{\r\n    margin-bottom: 0!important;\r\n}\r\n.item-left p:last-child{\r\n    margin-bottom: 10px!important;\r\n}\r\n.item-right{\r\n    text-align: center;\r\n}\r\n.work-item{\r\n    text-align: left;\r\n    border-bottom: 1px solid #dedede;\r\n    /*padding: 10px;*/\r\n    padding: 20px 10px;\r\n}\r\n.work-item:hover{\r\n    background-color: #f8f8f8;\r\n}"

/***/ }),

/***/ "./src/app/components/worker/worker.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/worker/worker.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n\t<div class=\"work-content\">\n\t\t<div class=\"header\" nz-row>\n\t\t\t<div nz-col nzMd=\"22\">\n\t\t\t\t<p class=\"title\">报警详情</p>\n\t\t   </div>\n\t\t   <div nz-col nzMd=\"2\">\n\t\t\t\t<!-- <button nz-button nzType=\"danger\" nzSize=\"default\"  (click)=\"showModal()\">添加工单</button> -->\n\t\t   </div>\n\t\t</div>\n\t\t<!-- <div class=\"second-header\">\n\t\t\t请选择工作状态:\n\t\t\t<nz-select style=\"width: 120px;\" [(ngModel)]=\"selectWorkStatus\" nzPlaceHolder=\"Choose\">\n\t\t\t\t<nz-option nzValue=\"0\" nzLabel=\"全部\"></nz-option>\n\t\t\t\t<nz-option nzValue=\"1\" nzLabel=\"已创建\"></nz-option>\n\t\t\t\t<nz-option nzValue=\"2\" nzLabel=\"已确认\"></nz-option>\n\t\t\t\t<nz-option nzValue=\"3\" nzLabel=\"处理中\"></nz-option>\n\t\t\t\t<nz-option nzValue=\"4\" nzLabel=\"已完成\"></nz-option>\n\t\t\t\t<nz-option nzValue=\"5\" nzLabel=\"已取消\"></nz-option>\n\t\t\t\t<nz-option nzValue=\"6\" nzLabel=\"已删除\"></nz-option>\n\t\t\t</nz-select>\n\t\t</div> -->\n\t\t<div class=\"content\">\n\t\t\t<div class=\"work-item\" nz-row *ngFor=\"let item of warning_list;let i = index\"  (click)=\"goDetail(item)\">\n\t\t\t\t<div class=\"item-top\" >\n\t\t\t\t\t<div class=\"item-left\" nz-col nzMd=\"18\">\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<p>{{item.type_name}}</p>\n\t\t\t\t\t\t\t<p>{{item.warning_content}}</p>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-right\" nz-col nzMd=\"3\">\n\t\t\t\t\t\t<div>{{item.uploaded_at}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"item-right\" nz-col nzMd=\"3\">\n\t\t\t\t\t\t<div>已创建</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item-bottom\" nz-col nzMd=\"24\">\n\t\t\t\t\t<!-- <p>当前0条维护记录</p> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"footer clearfix\" style=\"margin-top: 20px;\">\n\t\t\t<nz-pagination [nzPageIndex]=\"1\" [nzTotal]=\"info.total\" [nzPageSize]=\"20\" (nzPageIndexChange)=\"changePage($event)\" class=\"pull-right\"></nz-pagination>\n\t\t</div>\n\t</div>\n</div>\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"添加工单\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"submitForm()\">\n\t\t<form nz-form [formGroup]=\"addForm\" nz-row (ngSubmit)=\"submitForm()\">\n\t\t\t<nz-form-item>\n\t\t\t\t<nz-form-label nzMd=\"6\">选择设备</nz-form-label>\n\t\t\t\t<nz-form-control nzMd=\"14\">\n\t\t\t\t\t<nz-select style=\"width: 100%;\" [(ngModel)]=\"selectedValue\" nzMd=\"24\" formControlName=\"selectDevice\" nzPlaceHolder=\"选择设备\">\n\t\t\t\t\t\t<nz-option nzValue=\"空\" nzLabel=\"空\"></nz-option>\n\t\t\t\t\t\t<nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\n\t\t\t\t\t\t<nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\n\t\t\t\t\t\t<nz-option nzValue=\"disabled\" nzLabel=\"Disabled\" nzDisabled></nz-option>\n\t\t\t\t\t</nz-select>\n\t\t\t\t</nz-form-control>\n\t\t\t</nz-form-item>\n\t\t\t<nz-form-item>\n\t\t\t\t<nz-form-label nzMd=\"6\">指派人员</nz-form-label>\n\t\t\t\t<nz-form-control nzMd=\"14\">\n\t\t\t\t\t<nz-select style=\"width: 100%;\" [(ngModel)]=\"selectAssign\" nzMd=\"24\" formControlName=\"selectAssign\" nzPlaceHolder=\"选择指派人员\" >\n\t\t\t\t\t\t<nz-option nzValue=\"山西电网\" nzLabel=\"山西电网\"></nz-option>\n\t\t\t\t\t\t<nz-option nzValue=\"销售001\" nzLabel=\"销售001\"></nz-option>\n\t\t\t\t\t\t<nz-option nzValue=\"销售002\" nzLabel=\"销售002\"></nz-option>\n\t\t\t\t\t</nz-select>\n\t\t\t\t</nz-form-control>\n\t\t\t</nz-form-item>\n\t\t\t<nz-form-item>\n\t\t\t\t<nz-form-label nzMd=\"6\">标题</nz-form-label>\n\t\t\t\t<nz-form-control nzMd=\"14\">\n\t\t\t\t\t<input type=\"text\" nz-input formControlName=\"title\" nzPlaceHolder=\"请输入标题 \">\n\t\t\t\t</nz-form-control>\n\t\t\t</nz-form-item>\n\t\t\t<nz-form-item>\n\t\t\t\t<nz-form-label nzMd=\"6\">内容</nz-form-label>\n\t\t\t\t<nz-form-control nzMd=\"14\">\n\t\t\t\t\t<textarea name=\"\" id=\"\" rows=\"4\" nz-input formControlName=\"content\" nzPlaceHolder=\"请输入内容\"></textarea>\n\t\t\t\t</nz-form-control>\n\t\t\t</nz-form-item>\n\t\t</form>\n</nz-modal>"

/***/ }),

/***/ "./src/app/components/worker/worker.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/worker/worker.component.ts ***!
  \*******************************************************/
/*! exports provided: WorkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerComponent", function() { return WorkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/work.service */ "./src/app/services/work.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkerComponent = /** @class */ (function () {
    function WorkerComponent(fb, workService) {
        this.fb = fb;
        this.workService = workService;
        this.info = {
            offset: 0,
            limit: 20,
            order_by: 'uploaded_at',
            order: 'desc',
            total: 0
        };
        this.warning_list = [];
        this.selectWorkStatus = '0';
        this.selectedValue = '空';
        this.selectAssign = '山西电网';
        this.isVisible = false;
    }
    WorkerComponent.prototype.searchManage = function () {
        var _this = this;
        var condition = {
            offset: this.info.offset,
            limit: this.info.limit,
            order_by: this.info.order_by,
            order: this.info.order,
        };
        this.workService.manage(condition).subscribe(function (res) {
            console.log(res);
            _this.warning_list = res['data']['list'];
            _this.info.total = res['data']['total'];
        });
    };
    WorkerComponent.prototype.showModal = function () {
        this.isVisible = true;
    };
    WorkerComponent.prototype.handleCancel = function () {
        this.isVisible = false;
    };
    WorkerComponent.prototype.handleOk = function () {
        console.log('123');
    };
    WorkerComponent.prototype.submitForm = function () {
        console.log(this.addForm.value);
    };
    WorkerComponent.prototype.ngOnInit = function () {
        this.searchManage();
        this.addForm = this.fb.group({
            selectDevice: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            selectAssign: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            title: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            content: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    WorkerComponent.prototype.changePage = function ($event) {
        console.log($event);
        this.info.offset = ($event - 1) * this.info.limit;
        this.searchManage();
    };
    WorkerComponent.prototype.goDetail = function (item) {
        // [routerLink]="['/work/detail',item.id]"
        var id = item.id;
    };
    WorkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worker',
            template: __webpack_require__(/*! ./worker.component.html */ "./src/app/components/worker/worker.component.html"),
            styles: [__webpack_require__(/*! ./worker.component.css */ "./src/app/components/worker/worker.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"]])
    ], WorkerComponent);
    return WorkerComponent;
}());



/***/ }),

/***/ "./src/app/modules/work/work.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/work/work.module.ts ***!
  \*********************************************/
/*! exports provided: WorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_worker_worker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/worker/worker.component */ "./src/app/components/worker/worker.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/work-order/work-order.component */ "./src/app/components/work-order/work-order.component.ts");
/* harmony import */ var _components_work_detail_work_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/work-detail/work-detail.component */ "./src/app/components/work-detail/work-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _components_worker_worker_component__WEBPACK_IMPORTED_MODULE_3__["WorkerComponent"] },
    { path: 'detail/:id', component: _components_work_detail_work_detail_component__WEBPACK_IMPORTED_MODULE_7__["WorkDetailComponent"] },
    { path: 'Order', component: _components_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_6__["WorkOrderComponent"] },
];
var WorkModule = /** @class */ (function () {
    function WorkModule() {
    }
    WorkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_worker_worker_component__WEBPACK_IMPORTED_MODULE_3__["WorkerComponent"],
                _components_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_6__["WorkOrderComponent"],
                _components_work_detail_work_detail_component__WEBPACK_IMPORTED_MODULE_7__["WorkDetailComponent"]
            ]
        })
    ], WorkModule);
    return WorkModule;
}());



/***/ }),

/***/ "./src/app/services/work.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/work.service.ts ***!
  \******************************************/
/*! exports provided: WorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkService", function() { return WorkService; });
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



var WorkService = /** @class */ (function () {
    function WorkService(http) {
        this.http = http;
    }
    // 工单下的报警管理
    WorkService.prototype.manage = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/work/warn/manage', { content: JSON.stringify(condition) });
    };
    // 工单下的推送管理列表
    WorkService.prototype.push = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/work/push/manage', { content: JSON.stringify(condition) });
    };
    // 工单下的推送管理顶部的柱状图
    WorkService.prototype.statistics = function () {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/work/push/statistics', null);
    };
    WorkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WorkService);
    return WorkService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-work-work-module.js.map
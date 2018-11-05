(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-statistics-statistics-module"],{

/***/ "./src/app/components/alarm-statistics/alarm-statistics.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/alarm-statistics/alarm-statistics.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n}\r\n.header{\r\n    text-align: right;\r\n}\r\n#chart{\r\n    height: 500px;\r\n    width: 900px;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/alarm-statistics/alarm-statistics.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/alarm-statistics/alarm-statistics.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"content\">\n      <div class=\"header\">\n        <!-- <button nz-button nzType=\"default\">导出</button> -->\n      </div>\n      <div class=\"content\">\n        <div id=\"chart\">\n            \n        </div>\n      </div>\n      <div class=\"search\">\n          <div nz-row>\n              <div nz-col nzXl=\"16\" [nzOffset]=\"3\">\n                <label>时间选择:&nbsp;&nbsp;&nbsp;</label>\n                <nz-range-picker nzFormat=\"yyyy/MM/dd\" [(ngModel)]=\"search_date\"></nz-range-picker>\n                <button nz-button type=\"button\" (click)=\"searchWarning()\" class=\"pull-right\">搜索</button>\n            </div>\n          </div>\n      </div>\n      <div style=\"margin-top: 20px;\">\n          <nz-table #basicTable [nzData]=\"warning_list\"\n                                  [nzPageSize]=\"20\" \n                                  [nzTotal]=\"info.total\" \n                                  [nzFrontPagination]=\"false\" \n                                  (nzPageIndexChange)=\"changePage($event)\"\n                                  [nzLoading]=\"info.loading\">\n                <thead>\n                    <tr>\n                        <th>序号</th>\n                        <th>日期</th>\n                        <th>报警数量</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of basicTable.data;let i = index\">\n                        <td>{{i+1}}</td>\n                        <td>{{data.uploaded_at}}</td>\n                        <td>{{data.value}}</td>\n                    </tr>\n                </tbody>\n            </nz-table>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/alarm-statistics/alarm-statistics.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/alarm-statistics/alarm-statistics.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlarmStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmStatisticsComponent", function() { return AlarmStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index.service */ "./src/app/services/index.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlarmStatisticsComponent = /** @class */ (function () {
    function AlarmStatisticsComponent(indexService) {
        this.indexService = indexService;
        this.info = {
            total: 0,
            loading: false,
            offset: 0,
            limit: 20
        };
        this.search_date = [moment__WEBPACK_IMPORTED_MODULE_3__().month(moment__WEBPACK_IMPORTED_MODULE_3__().month()).startOf('month').format(), moment__WEBPACK_IMPORTED_MODULE_3__().format()];
        this.warning_list = [];
    }
    //
    AlarmStatisticsComponent.prototype.searchWarning = function () {
        var _this = this;
        var condition = {
            order: 'desc',
            created_st: moment__WEBPACK_IMPORTED_MODULE_3__(this.search_date[0]).format('YYYY-MM-DD'),
            created_et: moment__WEBPACK_IMPORTED_MODULE_3__(this.search_date[1]).format('YYYY-MM-DD')
        };
        this.indexService.warning(condition).subscribe(function (res) {
            console.log(res);
            _this.warning_list = res['data'];
            _this.info.total = res['data'].length;
            var arr = [];
            for (var i = 0; i < _this.warning_list.length; i++) {
                var obj = { year: _this.warning_list[i].uploaded_at, '报警数量': _this.warning_list[i].value };
                arr.push(obj);
            }
            console.log(arr);
            _this.chart.changeData(arr);
        });
    };
    AlarmStatisticsComponent.prototype.onChange = function (data) {
        console.log(data);
    };
    AlarmStatisticsComponent.prototype.ngOnInit = function () {
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_2___default.a.Chart({
            container: 'chart',
            forceFit: true,
            padding: 'auto'
        });
        this.chart.source(this.warning_list);
        this.chart.scale('value', {
            min: 0
        });
        this.chart.scale('year', {
            type: 'cat',
            range: [0, 1]
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('year*报警数量');
        this.chart.point().position('year*报警数量').size(4).shape('circle').style({
            stroke: '#fff',
            lineWidth: 1
        });
        this.chart.render();
        this.searchWarning();
    };
    AlarmStatisticsComponent.prototype.changePage = function ($event) {
        console.log($event);
        this.info.offset = ($event - 1) * this.info.limit;
        this.searchWarning();
    };
    AlarmStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alarm-statistics',
            template: __webpack_require__(/*! ./alarm-statistics.component.html */ "./src/app/components/alarm-statistics/alarm-statistics.component.html"),
            styles: [__webpack_require__(/*! ./alarm-statistics.component.css */ "./src/app/components/alarm-statistics/alarm-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_1__["IndexService"]])
    ], AlarmStatisticsComponent);
    return AlarmStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/components/push-statistics/push-statistics.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/push-statistics/push-statistics.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n}\r\n.header{\r\n    text-align: right;\r\n}\r\n#chart{\r\n    height: 500px;\r\n    width: 900px;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/push-statistics/push-statistics.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/push-statistics/push-statistics.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"content\">\n      <div class=\"header\">\n        <!-- <button nz-button nzType=\"default\">导出</button> -->\n      </div>\n      <div class=\"content\">\n        <div id=\"chart\">\n            \n        </div>\n      </div>\n      <div class=\"search\">\n          <div nz-row>\n              <div nz-col nzXl=\"16\" [nzOffset]=\"3\">\n                <label>时间选择:&nbsp;&nbsp;&nbsp;</label>\n                <nz-range-picker nzFormat=\"yyyy/MM/dd\" [(ngModel)]=\"search_date\"></nz-range-picker>\n                <button nz-button type=\"button\" (click)=\"searchPush()\" class=\"pull-right\">搜索</button>\n            </div>\n          </div>\n      </div>\n      <div style=\"margin-top: 20px;\">\n          <nz-table #basicTable [nzData]=\"push_list\"\n                                  [nzPageSize]=\"20\" \n                                  [nzTotal]=\"info.total\" \n                                  [nzFrontPagination]=\"false\" \n                                  (nzPageIndexChange)=\"changePage($event)\"\n                                  [nzLoading]=\"info.loading\">\n                <thead>\n                    <tr>\n                        <th>序号</th>\n                        <th>日期</th>\n                        <th>推送数量</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let data of basicTable.data;let i = index\">\n                        <td>{{i+1}}</td>\n                        <td>{{data.uploaded_at}}</td>\n                        <td>{{data.value}}</td>\n                    </tr>\n                </tbody>\n            </nz-table>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/push-statistics/push-statistics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/push-statistics/push-statistics.component.ts ***!
  \*************************************************************************/
/*! exports provided: PushStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushStatisticsComponent", function() { return PushStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/index.service */ "./src/app/services/index.service.ts");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PushStatisticsComponent = /** @class */ (function () {
    function PushStatisticsComponent(indexService) {
        this.indexService = indexService;
        this.info = {
            total: 0,
            loading: false,
            offset: 0,
            limit: 20,
            bind_user_id: JSON.parse(window.localStorage.getItem('systemInfo'))
        };
        this.search_date = [moment__WEBPACK_IMPORTED_MODULE_3__().month(moment__WEBPACK_IMPORTED_MODULE_3__().month()).startOf('month').format(), moment__WEBPACK_IMPORTED_MODULE_3__().format()];
        this.push_list = [];
    }
    PushStatisticsComponent.prototype.searchPush = function () {
        var _this = this;
        var condition = {
            created_st: moment__WEBPACK_IMPORTED_MODULE_3__(this.search_date[0]).format('YYYY-MM-DD'),
            created_et: moment__WEBPACK_IMPORTED_MODULE_3__(this.search_date[1]).format('YYYY-MM-DD'),
            order: 'desc',
            bind_user_id: this.info.bind_user_id
        };
        this.indexService.statistics(condition).subscribe(function (res) {
            console.log(res);
            _this.push_list = res['data'];
            _this.info.total = res['data'].length;
            var arr = [];
            for (var i = 0; i < _this.push_list.length; i++) {
                var obj = { year: _this.push_list[i].uploaded_at, '推送数量': _this.push_list[i].value };
                arr.push(obj);
            }
            console.log(arr);
            _this.chart.changeData(arr);
        });
    };
    PushStatisticsComponent.prototype.ngOnInit = function () {
        this.chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_2___default.a.Chart({
            container: 'chart',
            forceFit: true,
            padding: 'auto'
        });
        this.chart.source(this.push_list);
        this.chart.scale('value', {
            min: 0
        });
        this.chart.scale('year', {
            type: 'cat',
            range: [0, 1]
        });
        this.chart.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        this.chart.line().position('year*推送数量');
        this.chart.point().position('year*推送数量').size(4).shape('circle').style({
            stroke: '#fff',
            lineWidth: 1
        });
        this.chart.render();
        this.searchPush();
    };
    PushStatisticsComponent.prototype.changePage = function ($event) {
        console.log($event);
        this.info.offset = ($event - 1) * this.info.limit;
        this.searchPush();
    };
    PushStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-push-statistics',
            template: __webpack_require__(/*! ./push-statistics.component.html */ "./src/app/components/push-statistics/push-statistics.component.html"),
            styles: [__webpack_require__(/*! ./push-statistics.component.css */ "./src/app/components/push-statistics/push-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_1__["IndexService"]])
    ], PushStatisticsComponent);
    return PushStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/modules/statistics/statistics.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/statistics/statistics.module.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mycommon/mycommon.module */ "./src/app/modules/mycommon/mycommon.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_alarm_statistics_alarm_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/alarm-statistics/alarm-statistics.component */ "./src/app/components/alarm-statistics/alarm-statistics.component.ts");
/* harmony import */ var _components_push_statistics_push_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/push-statistics/push-statistics.component */ "./src/app/components/push-statistics/push-statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_alarm_statistics_alarm_statistics_component__WEBPACK_IMPORTED_MODULE_4__["AlarmStatisticsComponent"] },
    { path: 'pushStatistics', component: _components_push_statistics_push_statistics_component__WEBPACK_IMPORTED_MODULE_5__["PushStatisticsComponent"] }
];
var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__["MycommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_alarm_statistics_alarm_statistics_component__WEBPACK_IMPORTED_MODULE_4__["AlarmStatisticsComponent"],
                _components_push_statistics_push_statistics_component__WEBPACK_IMPORTED_MODULE_5__["PushStatisticsComponent"]
            ]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-statistics-statistics-module.js.map
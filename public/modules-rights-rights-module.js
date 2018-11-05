(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-rights-rights-module"],{

/***/ "./src/app/components/rights-add/rights-add.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/rights-add/rights-add.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n    display: flex;\r\n    justify-content: center;\r\n    /*align-items: center;*/\r\n}"

/***/ }),

/***/ "./src/app/components/rights-add/rights-add.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/rights-add/rights-add.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div nz-row style=\"margin-top: 10%;\">\n        <div nz-col nzSm=\"24\" class=\"add-form\">\n            <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">权限级别</label>\n            <div nz-col nz-col nzLg=\"12\" nzXl=\"12\">\n                <nz-select style=\"width: 100%;\" [(ngModel)]=\"info.level\" (ngModelChange)=\"levelChange($event)\">\n                    <nz-option nzValue=\"1\" nzLabel=\"一级\"></nz-option>\n                    <nz-option nzValue=\"2\" nzLabel=\"二级\"></nz-option>\n                    <nz-option nzValue=\"3\" nzLabel=\"三级\"></nz-option>\n                    <nz-option nzValue=\"4\" nzLabel=\"四级\"></nz-option>\n                </nz-select>\n            </div>\n        </div>\n        <div nz-col nzSm=\"24\" class=\"add-form\" *ngIf=\"info.level != '1'\">\n            <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">上级权限</label>\n            <div nz-col nz-col nzLg=\"12\" nzXl=\"12\">\n                <nz-select style=\"width: 100%;\" [(ngModel)]=\"info.parent_id\">\n                    <nz-option *ngFor=\"let item of parent_list\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n                </nz-select>\n            </div>\n        </div>\n        <div nz-col nzSm=\"24\" class=\"add-form\">\n            <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">权限类型</label>\n            <div nz-col nz-col nzLg=\"12\" nzXl=\"12\">\n                <nz-select style=\"width: 100%;\" [(ngModel)]=\"info.module_type\">\n                    <nz-option nzValue=\"1\" nzLabel=\"菜单\" *ngIf=\"info.level != '4'\"></nz-option>\n                    <nz-option nzValue=\"2\" nzLabel=\"按钮\" *ngIf=\"info.level == '4'\"></nz-option>\n                </nz-select>\n            </div>\n        </div>\n        <div nz-col nzSm=\"24\" class=\"add-form\">\n            <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">权限计费参数</label>\n            <div nz-col nz-col nzLg=\"12\" nzXl=\"12\">\n                <nz-select style=\"width: 100%;\" [(ngModel)]=\"info.purchase_type\">\n                    <nz-option nzValue=\"0\" nzLabel=\"全部\"></nz-option>\n                    <nz-option nzValue=\"1\" nzLabel=\"免费\"></nz-option>\n                    <nz-option nzValue=\"2\" nzLabel=\"收费\"></nz-option>\n                    <nz-option nzValue=\"3\" nzLabel=\"试用\"></nz-option>\n                </nz-select>\n            </div>\n        </div>\n        <div nz-col nzSm=\"24\" class=\"add-form\">\n            <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">权限名称</label>\n            <div nz-col nz-col nzLg=\"12\" nzXl=\"12\">\n                <input type=\"text\" nz-input [(ngModel)]=\"info.name\" style=\"width: 100%;\" placeholder=\"请输入权限名称\">\n            </div>\n        </div>\n        <div nz-col nzSm=\"24\" class=\"add-form\">\n            <label nz-col nzLg=\"8\" nzXL=\"4\" class=\"text-right add-label\">权限标识</label>\n            <div nz-col nz-col nzLg=\"12\" nzXl=\"12\">\n                <input type=\"text\" nz-input [(ngModel)]=\"info.key\" placeholder=\"请输入权限标识\">\n            </div>\n        </div>\n        <div nz-col nzSm=\"24\" class=\"text-center add-form\">\n            <button nz-button nzType=\"default\" [routerLink]=\"['/index']\">取消</button>\n            <button nz-button nzType=\"primary\" style=\"margin-left:15px;\" (click)=\"confirm()\">确认</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/rights-add/rights-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/rights-add/rights-add.component.ts ***!
  \***************************************************************/
/*! exports provided: RightsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightsAddComponent", function() { return RightsAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rights.service */ "./src/app/services/rights.service.ts");
/* harmony import */ var _services_dict_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dict.service */ "./src/app/services/dict.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RightsAddComponent = /** @class */ (function () {
    function RightsAddComponent(rightService, message, dictService) {
        this.rightService = rightService;
        this.message = message;
        this.dictService = dictService;
        this.info = {
            level: '',
            purchase_type: '1',
            module_type: '',
            name: '',
            key: '',
            parent_id: ''
        };
        this.parent_list = [];
    }
    RightsAddComponent.prototype.ngOnInit = function () {
        this.RightsFrommat();
    };
    RightsAddComponent.prototype.confirm = function () {
        var _this = this;
        if (this.info.level == '') {
            this.message.warning('请选择权限级别');
            return false;
        }
        if (this.info.level != '1' && this.info.parent_id == '') {
            this.message.warning('请选择上级权限');
            return false;
        }
        if (this.info.module_type == '') {
            this.message.warning('请选择权限类型');
            return false;
        }
        if (this.info.purchase_type == '0') {
            this.message.warning('请选择计费参数');
            return false;
        }
        if (this.info.name == '') {
            this.message.warning('请输入权限名称');
            return false;
        }
        if (this.info.key == '') {
            this.message.warning('请输入权限标识');
            return false;
        }
        var condition = {
            name: this.info.name,
            key: this.info.key,
            purchase_type: this.info.purchase_type,
            module_type: this.info.module_type,
            parent_id: this.info.parent_id,
            level: this.info.level
        };
        console.log(condition);
        this.rightService.add(condition).subscribe(function (res) {
            if (res['code'] == 0) {
                _this.message.success('添加成功');
                _this.info = {
                    level: '',
                    purchase_type: '1',
                    module_type: '',
                    name: '',
                    key: '',
                    parent_id: ''
                };
                _this.RightsFrommat();
            }
        });
    };
    RightsAddComponent.prototype.levelChange = function ($event) {
        switch ($event) {
            case "2":
                this.parent_list = this.level_one;
                break;
            case "3":
                this.parent_list = this.level_two;
                break;
            case "4":
                this.parent_list = this.level_two;
                break;
        }
    };
    // 重新封装权限
    RightsAddComponent.prototype.RightsFrommat = function () {
        var _this = this;
        this.level_one = [];
        this.level_two = [];
        this.level_three = [];
        this.level_four = [];
        var condition = {
            type: 'system_modules_new'
        };
        this.dictService.search(condition).subscribe(function (res) {
            var rights = res['data'];
            for (var i in rights) {
                switch (rights[i].level) {
                    case "1":
                        _this.level_one.push(rights[i]);
                        break;
                    case "2":
                        _this.level_two.push(rights[i]);
                        break;
                    case "3":
                        _this.level_three.push(rights[i]);
                        break;
                    case "4":
                        _this.level_four.push(rights[i]);
                }
            }
        });
    };
    RightsAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rights-add',
            template: __webpack_require__(/*! ./rights-add.component.html */ "./src/app/components/rights-add/rights-add.component.html"),
            styles: [__webpack_require__(/*! ./rights-add.component.css */ "./src/app/components/rights-add/rights-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rights_service__WEBPACK_IMPORTED_MODULE_1__["RightsService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _services_dict_service__WEBPACK_IMPORTED_MODULE_2__["DictService"]])
    ], RightsAddComponent);
    return RightsAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/rights/rights.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/rights/rights.module.ts ***!
  \*************************************************/
/*! exports provided: RightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightsModule", function() { return RightsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/mycommon/mycommon.module */ "./src/app/modules/mycommon/mycommon.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_rights_add_rights_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/rights-add/rights-add.component */ "./src/app/components/rights-add/rights-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'add', component: _components_rights_add_rights_add_component__WEBPACK_IMPORTED_MODULE_4__["RightsAddComponent"] }
];
var RightsModule = /** @class */ (function () {
    function RightsModule() {
    }
    RightsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__["MycommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_rights_add_rights_add_component__WEBPACK_IMPORTED_MODULE_4__["RightsAddComponent"]
            ]
        })
    ], RightsModule);
    return RightsModule;
}());



/***/ }),

/***/ "./src/app/services/rights.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/rights.service.ts ***!
  \********************************************/
/*! exports provided: RightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightsService", function() { return RightsService; });
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



var RightsService = /** @class */ (function () {
    function RightsService(http) {
        this.http = http;
    }
    // 后台添加权限模块入口
    RightsService.prototype.add = function (condition) {
        return this.http.post(_global__WEBPACK_IMPORTED_MODULE_2__["API"] + '/system/purchased/add', { content: JSON.stringify(condition) });
    };
    RightsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RightsService);
    return RightsService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-rights-rights-module.js.map
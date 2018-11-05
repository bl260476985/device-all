(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-system-user-group-system-user-group-module"],{

/***/ "./src/app/components/system-user-group-add/system-user-group-add.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/system-user-group-add/system-user-group-add.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n    background-color: #fff;\r\n}\r\n.title{\r\n    background-color: #ccc;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.level_one_checbox{\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 5px;\r\n}\r\n.level_one{\r\n    border: 1px solid #ddd;\r\n    border-bottom: none;\r\n    border-radius: 5px;\r\n    padding: 5px 0;\r\n    padding-top: 0;\r\n}\r\n.level_two{\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px 0px 5px 5px;\r\n    /*padding-left: 24px;*/\r\n}\r\n.level_four{\r\n    margin-left: 24px;\r\n    padding: 5px 0;\r\n}\r\n.submit-right{\r\n    margin-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/system-user-group-add/system-user-group-add.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/system-user-group-add/system-user-group-add.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" nz-row>\n    <div style=\"padding: 10px 10px;\">\n        <div nz-row [nzGutter]=\"16\" class=\"add-form\" nzOffset=\"1\">\n            <span nz-col nzLg=\"4\" nzXL=\"4\" class=\"text-left add-label\">系统用户组名称</span>\n            <div nz-col nzLg=\"10\" nzXl=\"9\" nzXXl=\"7\">\n                <input type=\"text\" nz-input placeholder=\"请输入系统用户组名称\" [(ngModel)]=\"info.name\">\n            </div>\n        </div>\n        <div nz-row [nzGutter]=\"16\" class=\"add-form\" nzOffset=\"1\">\n            <span nz-col nzLg=\"4\" nzXL=\"4\" class=\"text-left add-label\">归属公司</span>\n            <div nz-col nzLg=\"10\" nzXl=\"9\" nzXXl=\"7\">\n                <app-form-choose-enterprise [(ngModel)]=\"info.enterprise_id\" name=\"enterprise_id\" [type]=\"'enterprise'\"></app-form-choose-enterprise>\n            </div>\n        </div>\n        <div nz-row [nzGutter]=\"16\" class=\"add-form\" nzOffset=\"1\">\n            <span nz-col nzLg=\"4\" nzXL=\"4\" class=\"text-left add-label\">备注</span>\n            <div nz-col nzLg=\"10\" nzXl=\"9\" nzXXl=\"7\">\n                <input type=\"text\" nz-input placeholder=\"请输入备注\" [(ngModel)]=\"info.remarks\">\n            </div>\n        </div>\n        <div nz-row>\n            <div nz-col class=\"text-center\">\n                <a [routerLink]=\"['../']\">\n                    <button nz-button nzType=\"default\">取消</button>\n                </a>\n                <button nz-button nzType=\"primary\" type=\"button\" class=\"submit-right\" style=\"margin-left: 5px;\"(click)=\"submit()\">确认</button>\n            </div>\n        </div>\n    </div>\n    <div *ngFor=\"let item of auth;let i = index;\" class=\"module\" nz-col nzSm=\"3\" nzOffset=\"1\" class=\"level_one\">\n        <div class=\"title\">\n            <label nz-checkbox [(ngModel)]=\"item.checked\" (ngModelChange)=\"levelOneChange($event,item)\"\n            class=\"level_one_checbox\"></label>\n            {{item.name}}\n        </div>\n        <div *ngFor=\"let level_two of item.child\" class=\"level_two\">\n            <label nz-checkbox [(ngModel)]=\"level_two.checked\" (ngModelChange)=\"levelTwoChange($event,level_two)\">{{level_two.name}}</label>\n            <div *ngFor=\"let level_four of level_two.buttonRights\" class=\"level_four\">\n                <label nz-checkbox [(ngModel)]=\"level_four.checked\" (ngModelChange)=\"levelFourChange($event,level_four)\">{{level_four.name}}</label>\n            </div>\n        </div>\n        <!-- <nz-tree\n          #tree`i`\n          [nzData]=\"item\"\n          nzCheckable=\"true\"\n          nzMultiple=\"true\"\n          (nzClick)=\"nzEvent($event)\"\n          (nzExpandChange)=\"nzEvent($event)\"\n          (nzCheckBoxChange)=\"nzEvent($event)\"\n          [nzDefaultExpandAll]=\"true\"\n          [nzCheckStrictly]=\"false\"\n          [nzExpandAll]=\"true\">\n        </nz-tree> -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/system-user-group-add/system-user-group-add.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/system-user-group-add/system-user-group-add.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SystemUserGroupAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemUserGroupAddComponent", function() { return SystemUserGroupAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_system_user_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/system-user-group.service */ "./src/app/services/system-user-group.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemUserGroupAddComponent = /** @class */ (function () {
    function SystemUserGroupAddComponent(message, systemUserGroupService) {
        this.message = message;
        this.systemUserGroupService = systemUserGroupService;
        this.info = {
            enterprise_id: '',
            name: '',
            remarks: '',
        };
        // 重新封装权限
        this.auth = [];
        this.level_one = [];
        this.level_two = [];
        this.level_four = [];
    }
    SystemUserGroupAddComponent.prototype.ngOnInit = function () {
        this.renderAuth();
    };
    SystemUserGroupAddComponent.prototype.renderAuth = function () {
        var auth = JSON.parse(window.localStorage.getItem('auth'));
        for (var i = 0; i < auth.length; i++) {
            auth[i].checked = false;
            this.level_one.push(auth[i]);
            if (auth[i].child.length > 0) {
                for (var j = 0; j < auth[i].child.length; j++) {
                    this.level_two.push(auth[i].child[j]);
                    auth[i].child[j].checked = false;
                    var item = auth[i].child[j];
                    if (item.buttonRights.length > 0) {
                        for (var k = 0; k < item.buttonRights.length; k++) {
                            this.level_four.push(item.buttonRights[k]);
                            item.buttonRights[k].checked = false;
                        }
                    }
                }
            }
        }
        this.auth = auth;
        console.log(auth);
        /*let arr = []
        // 1级
        for(var i = 0;i < auth.length; i++){
             let arr1 = [];
             let item = auth[i]
             let obj_one:any = {}
             obj_one.title = auth[i].name;
             obj_one.key = auth[i].key;
             obj_one.children = [];
             obj_one.module_id = auth[i].module_id;
             obj_one.purchase_type = auth[i].purchase_type;
             // 2级
             for(var j = 0; j < item.child.length; j++ ){
                 console.log(item.child[j])
                 let obj_two:any = {};
                 // 如果2级有按钮权限
                 if(item.child[j].buttonRights.length > 0){
                     obj_two.isLeaf = false;
                     obj_two.children = [];
                     for(var k =0; k < item.child[j].buttonRights.length;k++){
                         let btn_obj:any = {}
                         btn_obj.title = item.child[j].buttonRights[k].name;
                         btn_obj.key = item.child[j].buttonRights[k].key;
                         btn_obj.module_id = item.child[j].buttonRights[k].module_id;
                         btn_obj.purchase_type = item.child[j].buttonRights[k].purchase_type;
                         btn_obj.isLeaf = true
                         obj_two.children.push(btn_obj)
                     }
                 }else{
                     obj_two.isLeaf = true;
                 }
                 obj_two.title = item.child[j].name;
                 obj_two.key = item.child[j].key;
                 obj_two.module_id = item.child[j].module_id;
                 obj_two.purchase_type = item.child[j].purchase_type;
                 obj_one.children.push(obj_two)
             }
             arr1.push(obj_one)
             arr.push(arr1)
        }
        console.log(arr)
        this.auth = arr;*/
    };
    // nzEvent(event: NzFormatEmitEvent): void {
    //   console.log(event);
    //   console.log(this.auth)
    // }
    SystemUserGroupAddComponent.prototype.levelOneChange = function ($event, item) {
        console.log($event);
        console.log(item);
        if ($event) {
            for (var i = 0; i < this.level_two.length; i++) {
                if (this.level_two[i].parent_id == item.module_id) {
                    this.level_two[i].checked = true;
                    for (var j = 0; j < this.level_four.length; j++) {
                        if (this.level_four[j].parent_id == this.level_two[i].module_id) {
                            this.level_four[j].checked = true;
                        }
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.level_two.length; i++) {
                if (this.level_two[i].parent_id == item.module_id) {
                    this.level_two[i].checked = false;
                    for (var j = 0; j < this.level_four.length; j++) {
                        if (this.level_four[j].parent_id == this.level_two[i].module_id) {
                            this.level_four[j].checked = false;
                        }
                    }
                }
            }
        }
    };
    SystemUserGroupAddComponent.prototype.levelTwoChange = function ($event, item) {
        console.log($event);
        console.log(item);
        // 选择的是2级
        if (item.level == 2) {
            for (var i = 0; i < this.level_one.length; i++) {
                if (item.parent_id == this.level_one[i].module_id) {
                    this.level_one[i].checked = true;
                }
            }
            if ($event) {
                for (var k = 0; k < item.buttonRights.length; k++) {
                    item.buttonRights[k].checked = true;
                }
            }
            else {
                for (var k = 0; k < item.buttonRights.length; k++) {
                    item.buttonRights[k].checked = false;
                }
            }
        }
    };
    SystemUserGroupAddComponent.prototype.levelFourChange = function ($event, item) {
        console.log($event);
        console.log(item);
        // 4级的话
        if (item.level == 4) {
            for (var k = 0; k < this.level_two.length; k++) {
                if (item.parent_id == this.level_two[k].module_id) {
                    this.level_two[k].checked = true;
                    if ($event) {
                        for (var l = 0; l < this.level_one.length; l++) {
                            if (this.level_two[k].parent_id == this.level_one[l].module_id) {
                                this.level_one[l].checked = true;
                            }
                        }
                    }
                }
            }
        }
    };
    SystemUserGroupAddComponent.prototype.submit = function () {
        var _this = this;
        var auth = this.auth;
        var arr = [];
        if (this.info.name == '') {
            this.message.warning("请输入系统用户组名称");
            return false;
        }
        if (this.info.enterprise_id == '') {
            this.message.warning('请选择归属公司');
            return false;
        }
        if (this.info.remarks == '') {
            this.message.warning('请输入备注');
            return false;
        }
        for (var i = 0; i < this.level_one.length; i++) {
            if (this.level_one[i].checked == true) {
                var obj = { module_id: this.level_one[i].module_id, purchase_type: this.level_one[i].purchase_type };
                arr.push(obj);
            }
        }
        for (var j = 0; j < this.level_two.length; j++) {
            if (this.level_two[j].checked == true) {
                var obj = { module_id: this.level_two[j].module_id, purchase_type: this.level_two[j].purchase_type };
                arr.push(obj);
            }
        }
        for (var k = 0; k < this.level_four.length; k++) {
            if (this.level_four[k].checked == true) {
                var obj = { module_id: this.level_four[k].module_id, purchase_type: this.level_four[k].purchase_type };
                arr.push(obj);
            }
        }
        console.log(arr);
        if (arr.length == 0) {
            this.message.warning('请选择权限');
            return false;
        }
        var condition = {
            enterprise_id: this.info.enterprise_id,
            name: this.info.name,
            detail_module: arr,
            remarks: this.info.remarks
        };
        this.systemUserGroupService.add(condition).subscribe(function (res) {
            if (res['code'] == 0) {
                _this.message.success('添加成功');
                return false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tree'),
        __metadata("design:type", Object)
    ], SystemUserGroupAddComponent.prototype, "tree", void 0);
    SystemUserGroupAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-system-user-group-add',
            template: __webpack_require__(/*! ./system-user-group-add.component.html */ "./src/app/components/system-user-group-add/system-user-group-add.component.html"),
            styles: [__webpack_require__(/*! ./system-user-group-add.component.css */ "./src/app/components/system-user-group-add/system-user-group-add.component.css")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"], _services_system_user_group_service__WEBPACK_IMPORTED_MODULE_2__["SystemUserGroupService"]])
    ], SystemUserGroupAddComponent);
    return SystemUserGroupAddComponent;
}());



/***/ }),

/***/ "./src/app/components/system-user-group-edit/system-user-group-edit.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/system-user-group-edit/system-user-group-edit.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\r\n    background-color: #fff;\r\n}\r\n.title{\r\n    background-color: #ccc;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n.level_one_checbox{\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 5px;\r\n}\r\n.level_one{\r\n    border: 1px solid #ddd;\r\n    border-bottom: none;\r\n    border-radius: 5px;\r\n    padding: 5px 0;\r\n    padding-top: 0;\r\n}\r\n.level_two{\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px 0px 5px 5px;\r\n    /*padding-left: 24px;*/\r\n}\r\n.level_four{\r\n    margin-left: 24px;\r\n    padding: 5px 0;\r\n}\r\n.submit-right{\r\n    margin-bottom: 50px;\r\n}"

/***/ }),

/***/ "./src/app/components/system-user-group-edit/system-user-group-edit.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/system-user-group-edit/system-user-group-edit.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\" nz-row>\n    <div style=\"padding: 10px;\">\n        <div nz-row [nzGutter]=\"16\" class=\"add-form\">\n            <label nz-col nzLg=\"4\" nzXL=\"4\" class=\"text-left add-label\">系统用户组名称</label>\n            <div nz-col nzLg=\"10\" nzXl=\"9\" nzXXl=\"7\">\n                <input type=\"text\" nz-input placeholder=\"请输入系统用户组名称\" [(ngModel)]=\"info.name\">\n            </div>\n        </div>\n        <div nz-row [nzGutter]=\"16\" class=\"add-form\">\n            <label nz-col nzLg=\"4\" nzXL=\"4\" class=\"text-left add-label\">归属公司</label>\n            <div nz-col nzLg=\"10\" nzXl=\"9\" nzXXl=\"7\">\n                <app-form-choose-enterprise [(ngModel)]=\"info.enterprise_id\" name=\"enterprise_id\" [type]=\"'enterprise'\"></app-form-choose-enterprise>\n            </div>\n        </div>\n        <div nz-row [nzGutter]=\"16\" class=\"add-form\">\n            <label nz-col nzLg=\"4\" nzXL=\"4\" class=\"text-left add-label\">备注</label>\n            <div nz-col nzLg=\"10\" nzXl=\"9\" nzXXl=\"7\">\n                <input type=\"text\" nz-input placeholder=\"请输入备注\" [(ngModel)]=\"info.remarks\">\n            </div>\n        </div>\n        <div nz-row>\n            <div nz-col class=\"text-center\">\n                <a [routerLink]=\"['/systemUserGroup']\">\n                    <button nz-button nzType=\"default\">取消</button>\n                </a>\n                <button nz-button nzType=\"primary\" type=\"button\" class=\"submit-right\" style=\"margin-left: 5px;\"(click)=\"submit()\">确认</button>\n            </div>\n        </div>\n    </div>\n    <div *ngFor=\"let item of auth;let i = index;\" class=\"module\" nz-col nzSm=\"3\" nzOffset=\"1\" class=\"level_one\">\n        <div class=\"title\">\n            <label nz-checkbox [(ngModel)]=\"item.checked\" (ngModelChange)=\"levelOneChange($event,item)\"\n            class=\"level_one_checbox\"></label>\n            {{item.name}}\n        </div>\n        <div *ngFor=\"let level_two of item.child\" class=\"level_two\">\n            <label nz-checkbox [(ngModel)]=\"level_two.checked\" (ngModelChange)=\"levelTwoChange($event,level_two)\">{{level_two.name}}</label>\n            <div *ngFor=\"let level_four of level_two.buttonRights\" class=\"level_four\">\n                <label nz-checkbox [(ngModel)]=\"level_four.checked\" (ngModelChange)=\"levelFourChange($event,level_four)\">{{level_four.name}}</label>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/system-user-group-edit/system-user-group-edit.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/system-user-group-edit/system-user-group-edit.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SystemUserGroupEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemUserGroupEditComponent", function() { return SystemUserGroupEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _services_system_user_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/system-user-group.service */ "./src/app/services/system-user-group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SystemUserGroupEditComponent = /** @class */ (function () {
    function SystemUserGroupEditComponent(message, systemUserGroupService, routerInfo, router) {
        this.message = message;
        this.systemUserGroupService = systemUserGroupService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.info = {
            enterprise_id: '',
            name: '',
            remarks: '',
        };
        // get接口获取的module数组
        this.modules = [];
        // 重新封装权限
        this.auth = [];
        this.level_one = [];
        this.level_two = [];
        this.level_four = [];
    }
    SystemUserGroupEditComponent.prototype.ngOnInit = function () {
        this.renderAuth();
    };
    SystemUserGroupEditComponent.prototype.getDetail = function () {
        var _this = this;
        var condition = {
            id: this.routerInfo.snapshot.params.id
        };
        this.systemUserGroupService.get(condition).subscribe(function (res) {
            console.log(res);
            _this.info = res['data']['group'];
            _this.modules = res['data']['modules'];
            var arr = [];
            for (var i = 0; i < _this.level_one.length; i++) {
                for (var j = 0; j < _this.modules.length; j++) {
                    if (_this.level_one[i].module_id == _this.modules[j].module_id) {
                        _this.level_one[i].checked = true;
                        break;
                    }
                }
            }
            for (var i = 0; i < _this.level_two.length; i++) {
                for (var j = 0; j < _this.modules.length; j++) {
                    if (_this.level_two[i].module_id == _this.modules[j].module_id) {
                        _this.level_two[i].checked = true;
                        break;
                    }
                }
            }
            for (var i = 0; i < _this.level_four.length; i++) {
                for (var j = 0; j < _this.modules.length; j++) {
                    if (_this.level_four[i].module_id == _this.modules[j].module_id) {
                        _this.level_four[i].checked = true;
                        break;
                    }
                }
            }
            // for(var i = 0; i < this.modules.length; i++){
            //     for(var j = 0; j < this.auth.length; j++){
            //         if(this.auth[j].module_id == this.modules[i].module_id){
            //             this.auth[j].checked = true;
            //             if(this.auth[j].child.length > 0){
            //                 const item = this.auth[j].child;
            //                 for(var k = 0; k < item.length; k++){
            //                     console.log(item[k].module_id)
            //                     console.log(this.modules[i].module_id)
            //                     if(item[k].module_id == this.modules[i].module_id){
            //                         item[k].checked = true
            //                     }
            //                     if(item[k].buttonRights.length > 0){
            //                         const item2 = item[k].buttonRights;
            //                         for(var l = 0; l <item2.length; l++){
            //                             if(item2[l].module_id == this.modules[i].module_id){
            //                                 item2[l].checked = true
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }
        });
    };
    SystemUserGroupEditComponent.prototype.renderAuth = function () {
        var auth = JSON.parse(window.localStorage.getItem('auth'));
        for (var i = 0; i < auth.length; i++) {
            auth[i].checked = false;
            this.level_one.push(auth[i]);
            if (auth[i].child.length > 0) {
                for (var j = 0; j < auth[i].child.length; j++) {
                    this.level_two.push(auth[i].child[j]);
                    auth[i].child[j].checked = false;
                    var item = auth[i].child[j];
                    if (item.buttonRights.length > 0) {
                        for (var k = 0; k < item.buttonRights.length; k++) {
                            this.level_four.push(item.buttonRights[k]);
                            item.buttonRights[k].checked = false;
                        }
                    }
                }
            }
        }
        this.auth = auth;
        console.log(auth);
        this.getDetail();
    };
    SystemUserGroupEditComponent.prototype.levelOneChange = function ($event, item) {
        console.log($event);
        console.log(item);
        if ($event) {
            for (var i = 0; i < this.level_two.length; i++) {
                if (this.level_two[i].parent_id == item.module_id) {
                    this.level_two[i].checked = true;
                    for (var j = 0; j < this.level_four.length; j++) {
                        if (this.level_four[j].parent_id == this.level_two[i].module_id) {
                            this.level_four[j].checked = true;
                        }
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.level_two.length; i++) {
                if (this.level_two[i].parent_id == item.module_id) {
                    this.level_two[i].checked = false;
                    for (var j = 0; j < this.level_four.length; j++) {
                        if (this.level_four[j].parent_id == this.level_two[i].module_id) {
                            this.level_four[j].checked = false;
                        }
                    }
                }
            }
        }
    };
    SystemUserGroupEditComponent.prototype.levelTwoChange = function ($event, item) {
        console.log($event);
        console.log(item);
        // 选择的是2级
        if (item.level == 2) {
            for (var i = 0; i < this.level_one.length; i++) {
                if (item.parent_id == this.level_one[i].module_id) {
                    this.level_one[i].checked = true;
                }
            }
            if ($event) {
                for (var k = 0; k < item.buttonRights.length; k++) {
                    item.buttonRights[k].checked = true;
                }
            }
            else {
                for (var k = 0; k < item.buttonRights.length; k++) {
                    item.buttonRights[k].checked = false;
                }
            }
        }
    };
    SystemUserGroupEditComponent.prototype.levelFourChange = function ($event, item) {
        console.log($event);
        console.log(item);
        // 4级的话
        if (item.level == 4) {
            for (var k = 0; k < this.level_two.length; k++) {
                if (item.parent_id == this.level_two[k].module_id) {
                    this.level_two[k].checked = true;
                    if ($event) {
                        for (var l = 0; l < this.level_one.length; l++) {
                            if (this.level_two[k].parent_id == this.level_one[l].module_id) {
                                this.level_one[l].checked = true;
                            }
                        }
                    }
                }
            }
        }
    };
    SystemUserGroupEditComponent.prototype.submit = function () {
        var _this = this;
        var auth = this.auth;
        var arr = [];
        if (this.info.name == '') {
            this.message.warning("请输入系统用户组名称");
            return false;
        }
        if (this.info.enterprise_id == '') {
            this.message.warning('请选择归属公司');
            return false;
        }
        if (this.info.remarks == '') {
            this.message.warning('请输入备注');
            return false;
        }
        for (var i = 0; i < this.level_one.length; i++) {
            if (this.level_one[i].checked == true) {
                var obj = { module_id: this.level_one[i].module_id, purchase_type: this.level_one[i].purchase_type };
                arr.push(obj);
            }
        }
        for (var j = 0; j < this.level_two.length; j++) {
            if (this.level_two[j].checked == true) {
                var obj = { module_id: this.level_two[j].module_id, purchase_type: this.level_two[j].purchase_type };
                arr.push(obj);
            }
        }
        for (var k = 0; k < this.level_four.length; k++) {
            if (this.level_four[k].checked == true) {
                var obj = { module_id: this.level_four[k].module_id, purchase_type: this.level_four[k].purchase_type };
                arr.push(obj);
            }
        }
        console.log(arr);
        if (arr.length == 0) {
            this.message.warning('请选择权限');
            return false;
        }
        var condition = {
            id: this.routerInfo.snapshot.params.id,
            enterprise_id: this.info.enterprise_id,
            name: this.info.name,
            detail_module: arr,
            remarks: this.info.remarks
        };
        console.log(condition.detail_module);
        this.systemUserGroupService.update(condition).subscribe(function (res) {
            if (res['code'] == 0) {
                _this.message.success('修改成功');
                _this.router.navigate(['/systemUserGroup']);
            }
        });
    };
    SystemUserGroupEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-system-user-group-edit',
            template: __webpack_require__(/*! ./system-user-group-edit.component.html */ "./src/app/components/system-user-group-edit/system-user-group-edit.component.html"),
            styles: [__webpack_require__(/*! ./system-user-group-edit.component.css */ "./src/app/components/system-user-group-edit/system-user-group-edit.component.css")]
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _services_system_user_group_service__WEBPACK_IMPORTED_MODULE_2__["SystemUserGroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SystemUserGroupEditComponent);
    return SystemUserGroupEditComponent;
}());



/***/ }),

/***/ "./src/app/components/system-user-group-list/system-user-group-list.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/system-user-group-list/system-user-group-list.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/system-user-group-list/system-user-group-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/system-user-group-list/system-user-group-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-breadcrumb style=\"margin:16px 0;\">\n  <nz-breadcrumb-item>管理中心</nz-breadcrumb-item>\n  <nz-breadcrumb-item>系统用户组</nz-breadcrumb-item>\n</nz-breadcrumb>\n<div style=\"padding:24px; background: #fff;\">\n        <!-- <div nz-row>\n                <div nz-col nzSpan=\"24\" class=\"filter-group\">\n                  <div nz-col nzSpan=\"8\" class=\"filter-input\">\n                    <span nz-col nzSpan=\"4\">系统用户组</span>\n                    <div nz-col nzSpan=\"12\">\n                        <app-fuzzy-search [type]=\"'systemgroup'\" [(ngModel)]=\"systemUserGroupObj\"></app-fuzzy-search>\n                    </div>\n                  </div>\n                </div>\n        </div> -->\n        <div style=\"margin-top:15px;background: #fff;padding: 24px; min-height: 360px;\">\n                <div nz-row style=\"margin-bottom: 15px;\">\n                    <div nz-col>\n                        <a [routerLink]=\"['/systemUserGroup/add']\" class=\"pull-right clearfix\">\n                            <button nz-button nzType=\"default\" [routerLink]=\"['/systemUserGroup/add']\"\n                            *ngIf=\"auth.indexOf(228517892) !== -1\"\n                            >添加</button>\n                        </a>\n                        <button nz-button nzType=\"primary\" class=\"pull-right clearfix\" (click)=\"search()\" style=\"margin-right: 10px\"\n                        *ngIf=\"auth.indexOf(220949346) !== -1\"\n                        >查询</button>\n                    </div>\n                </div>\n                    <div nz-row>\n                        <nz-table \n                            #systemGroupTable [nzData]=\"systemUserGroup_list\" \n                            [nzPageSize]=\"20\"  \n                            [nzTotal]=\"info.total\" \n                            [nzFrontPagination]=\"false\" \n                            (nzPageIndexChange)=\"changePage($event)\"\n                            [nzLoading]=\"info.loading\"\n                            >\n                            <thead>\n                              <tr>\n                                <th>名称</th>\n                                <th \n                                *ngIf=\"auth.indexOf(244244974) !== -1 || auth.indexOf(237531665) !== -1\"\n                                >操作</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let data of systemGroupTable.data\">\n                                <td>{{data.name}}</td>\n                                <td \n                                *ngIf=\"auth.indexOf(244244974) !== -1 || auth.indexOf(237531665) !== -1\"\n                                >\n                                   <button type=\"button\" \n                                          nz-button nzType=\"primary\" \n                                          nzSize=\"small\"\n                                          [routerLink] = \"['/systemUserGroup/edit',data.id]\"\n                                          *ngIf=\"auth.indexOf(237531665) !== -1\"\n                                          >编辑</button>\n                                   <button type=\"button\" \n                                          nz-button nzType=\"danger\" \n                                          nzSize=\"small\"\n                                          nz-popconfirm\n                                          nzTitle=\"确认要删除吗?\"\n                                          (nzOnConfirm)=\"delete(data)\"\n                                          *ngIf=\"auth.indexOf(244244974) !== -1\"\n                                          style=\"margin-left: 5px\" \n                                          >删除</button>\n                                </td>\n                              </tr>\n                            </tbody>\n                        </nz-table>\n                    </div>\n                </div>\n</div>"

/***/ }),

/***/ "./src/app/components/system-user-group-list/system-user-group-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/system-user-group-list/system-user-group-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SystemUserGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemUserGroupListComponent", function() { return SystemUserGroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_system_user_group_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/system-user-group.service */ "./src/app/services/system-user-group.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemUserGroupListComponent = /** @class */ (function () {
    function SystemUserGroupListComponent(systemUserGroupService, message) {
        this.systemUserGroupService = systemUserGroupService;
        this.message = message;
        this.auth = JSON.parse(window.localStorage.getItem('authId')) || [];
        this.systemUserGroupObj = { id: 0, name: '' };
        this.info = {
            loading: false,
            group_obj: { id: 0, name: '' },
            user_obj: { id: 0, name: '' },
            order_by: 'created_at',
            order: 'desc',
            offset: 0,
            limit: 20,
            total: 0,
        };
        this.systemUserGroup_list = [];
    }
    SystemUserGroupListComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SystemUserGroupListComponent.prototype.search = function () {
        var _this = this;
        var condition = {
            system_group_obj: { id: this.systemUserGroupObj.id, name: this.systemUserGroupObj.name },
            order_by: this.info.order_by,
            order: this.info.order,
            offset: this.info.offset,
            limit: this.info.limit
        };
        this.info.loading = true;
        this.systemUserGroupService.search(condition).subscribe(function (res) {
            console.log(res);
            _this.systemUserGroup_list = res['data']['list'];
            _this.info.total = res['data']['total'];
            _this.info.loading = false;
        });
    };
    // 删除
    SystemUserGroupListComponent.prototype.delete = function (data) {
        var _this = this;
        console.log(data);
        var condition = {
            id: data.id
        };
        this.systemUserGroupService.delete(condition).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 0) {
                _this.message.success('删除成功');
                _this.search();
            }
        });
    };
    SystemUserGroupListComponent.prototype.changePage = function ($event) {
        this.info.offset = ($event - 1) * this.info.limit;
        this.search();
    };
    SystemUserGroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-system-user-group-list',
            template: __webpack_require__(/*! ./system-user-group-list.component.html */ "./src/app/components/system-user-group-list/system-user-group-list.component.html"),
            styles: [__webpack_require__(/*! ./system-user-group-list.component.css */ "./src/app/components/system-user-group-list/system-user-group-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_system_user_group_service__WEBPACK_IMPORTED_MODULE_1__["SystemUserGroupService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], SystemUserGroupListComponent);
    return SystemUserGroupListComponent;
}());



/***/ }),

/***/ "./src/app/modules/system-user-group/system-user-group.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/system-user-group/system-user-group.module.ts ***!
  \***********************************************************************/
/*! exports provided: SystemUserGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemUserGroupModule", function() { return SystemUserGroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/mycommon/mycommon.module */ "./src/app/modules/mycommon/mycommon.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_system_user_group_add_system_user_group_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/system-user-group-add/system-user-group-add.component */ "./src/app/components/system-user-group-add/system-user-group-add.component.ts");
/* harmony import */ var _components_system_user_group_list_system_user_group_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/system-user-group-list/system-user-group-list.component */ "./src/app/components/system-user-group-list/system-user-group-list.component.ts");
/* harmony import */ var _components_system_user_group_edit_system_user_group_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/system-user-group-edit/system-user-group-edit.component */ "./src/app/components/system-user-group-edit/system-user-group-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _components_system_user_group_list_system_user_group_list_component__WEBPACK_IMPORTED_MODULE_5__["SystemUserGroupListComponent"] },
    { path: 'add', component: _components_system_user_group_add_system_user_group_add_component__WEBPACK_IMPORTED_MODULE_4__["SystemUserGroupAddComponent"] },
    { path: 'edit/:id', component: _components_system_user_group_edit_system_user_group_edit_component__WEBPACK_IMPORTED_MODULE_6__["SystemUserGroupEditComponent"] }
];
var SystemUserGroupModule = /** @class */ (function () {
    function SystemUserGroupModule() {
    }
    SystemUserGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modules_mycommon_mycommon_module__WEBPACK_IMPORTED_MODULE_2__["MycommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _components_system_user_group_add_system_user_group_add_component__WEBPACK_IMPORTED_MODULE_4__["SystemUserGroupAddComponent"],
                _components_system_user_group_list_system_user_group_list_component__WEBPACK_IMPORTED_MODULE_5__["SystemUserGroupListComponent"],
                _components_system_user_group_edit_system_user_group_edit_component__WEBPACK_IMPORTED_MODULE_6__["SystemUserGroupEditComponent"]
            ]
        })
    ], SystemUserGroupModule);
    return SystemUserGroupModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-system-user-group-system-user-group-module.js.map
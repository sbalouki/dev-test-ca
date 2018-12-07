(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angularjs/angularjs.component.css":
/*!***************************************************!*\
  !*** ./src/app/angularjs/angularjs.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXJqcy9hbmd1bGFyanMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/angularjs/angularjs.component.html":
/*!****************************************************!*\
  !*** ./src/app/angularjs/angularjs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div *ngIf=\"question.answer_type == 'code'; else text_only\">\n        <p>\n        <code>\n            <span [innerHTML]=\"question.answer\"></span>\n        </code>\n        </p>\n    </div>\n    <ng-template #text_only>\n        <p class=\"lead\"><strong>Réponse</strong> : <span [innerHTML]=\"question.answer\"></span> </p>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/angularjs/angularjs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/angularjs/angularjs.component.ts ***!
  \**************************************************/
/*! exports provided: AngularjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularjsComponent", function() { return AngularjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_angularjs_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-angularjs-datas */ "./src/app/test-angularjs-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AngularjsComponent = /** @class */ (function () {
    function AngularjsComponent(titleService) {
        this.titleService = titleService;
        this.title = "ANGULARJS - QUESTIONS SUR LE FRAMEWORK";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "angularjs"; });
        this.questions = _test_angularjs_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "connaissance"; }).test;
        this.titleService.setTitle(this.title);
    }
    AngularjsComponent.prototype.ngOnInit = function () {
    };
    AngularjsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angularjs',
            template: __webpack_require__(/*! ./angularjs.component.html */ "./src/app/angularjs/angularjs.component.html"),
            styles: [__webpack_require__(/*! ./angularjs.component.css */ "./src/app/angularjs/angularjs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AngularjsComponent);
    return AngularjsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
    // { path: '', component: AngularjsComponent},
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<main role=\"main\" class=\"container\">\n  <div class=\"starter-template\">\n    <router-outlet></router-outlet>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _js_connaissance_js_connaissance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-connaissance/js-connaissance.component */ "./src/app/js-connaissance/js-connaissance.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _js_modelisation_js_modelisation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js-modelisation/js-modelisation.component */ "./src/app/js-modelisation/js-modelisation.component.ts");
/* harmony import */ var _js_problemes_js_problemes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js-problemes/js-problemes.component */ "./src/app/js-problemes/js-problemes.component.ts");
/* harmony import */ var _php_connaissance_php_connaissance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./php-connaissance/php-connaissance.component */ "./src/app/php-connaissance/php-connaissance.component.ts");
/* harmony import */ var _php_modelisation_php_modelisation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./php-modelisation/php-modelisation.component */ "./src/app/php-modelisation/php-modelisation.component.ts");
/* harmony import */ var _php_problemes_php_problemes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./php-problemes/php-problemes.component */ "./src/app/php-problemes/php-problemes.component.ts");
/* harmony import */ var _sql_connaissance_sql_connaissance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sql-connaissance/sql-connaissance.component */ "./src/app/sql-connaissance/sql-connaissance.component.ts");
/* harmony import */ var _sql_modelisation_sql_modelisation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sql-modelisation/sql-modelisation.component */ "./src/app/sql-modelisation/sql-modelisation.component.ts");
/* harmony import */ var _sql_problemes_sql_problemes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sql-problemes/sql-problemes.component */ "./src/app/sql-problemes/sql-problemes.component.ts");
/* harmony import */ var _c_sharp_c_sharp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./c-sharp/c-sharp.component */ "./src/app/c-sharp/c-sharp.component.ts");
/* harmony import */ var _angularjs_angularjs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./angularjs/angularjs.component */ "./src/app/angularjs/angularjs.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'js-connaissance', component: _js_connaissance_js_connaissance_component__WEBPACK_IMPORTED_MODULE_5__["JsConnaissanceComponent"] },
    { path: 'js-modelisation', component: _js_modelisation_js_modelisation_component__WEBPACK_IMPORTED_MODULE_7__["JsModelisationComponent"] },
    { path: 'js-problemes', component: _js_problemes_js_problemes_component__WEBPACK_IMPORTED_MODULE_8__["JsProblemesComponent"] },
    { path: 'php-connaissance', component: _php_connaissance_php_connaissance_component__WEBPACK_IMPORTED_MODULE_9__["PhpConnaissanceComponent"] },
    { path: 'php-modelisation', component: _php_modelisation_php_modelisation_component__WEBPACK_IMPORTED_MODULE_10__["PhpModelisationComponent"] },
    { path: 'php-problemes', component: _php_problemes_php_problemes_component__WEBPACK_IMPORTED_MODULE_11__["PhpProblemesComponent"] },
    { path: 'sql-connaissance', component: _sql_connaissance_sql_connaissance_component__WEBPACK_IMPORTED_MODULE_12__["SqlConnaissanceComponent"] },
    { path: 'sql-modelisation', component: _sql_modelisation_sql_modelisation_component__WEBPACK_IMPORTED_MODULE_13__["SqlModelisationComponent"] },
    { path: 'sql-problemes', component: _sql_problemes_sql_problemes_component__WEBPACK_IMPORTED_MODULE_14__["SqlProblemesComponent"] },
    { path: 'angularjs', component: _angularjs_angularjs_component__WEBPACK_IMPORTED_MODULE_16__["AngularjsComponent"] },
    { path: 'c-sharp', component: _c_sharp_c_sharp_component__WEBPACK_IMPORTED_MODULE_15__["CSharpComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _js_connaissance_js_connaissance_component__WEBPACK_IMPORTED_MODULE_5__["JsConnaissanceComponent"],
                _js_modelisation_js_modelisation_component__WEBPACK_IMPORTED_MODULE_7__["JsModelisationComponent"],
                _js_problemes_js_problemes_component__WEBPACK_IMPORTED_MODULE_8__["JsProblemesComponent"],
                _php_connaissance_php_connaissance_component__WEBPACK_IMPORTED_MODULE_9__["PhpConnaissanceComponent"],
                _php_modelisation_php_modelisation_component__WEBPACK_IMPORTED_MODULE_10__["PhpModelisationComponent"],
                _php_problemes_php_problemes_component__WEBPACK_IMPORTED_MODULE_11__["PhpProblemesComponent"],
                _sql_connaissance_sql_connaissance_component__WEBPACK_IMPORTED_MODULE_12__["SqlConnaissanceComponent"],
                _sql_modelisation_sql_modelisation_component__WEBPACK_IMPORTED_MODULE_13__["SqlModelisationComponent"],
                _sql_problemes_sql_problemes_component__WEBPACK_IMPORTED_MODULE_14__["SqlProblemesComponent"],
                _c_sharp_c_sharp_component__WEBPACK_IMPORTED_MODULE_15__["CSharpComponent"],
                _angularjs_angularjs_component__WEBPACK_IMPORTED_MODULE_16__["AngularjsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: true
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/c-sharp/c-sharp.component.css":
/*!***********************************************!*\
  !*** ./src/app/c-sharp/c-sharp.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Mtc2hhcnAvYy1zaGFycC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/c-sharp/c-sharp.component.html":
/*!************************************************!*\
  !*** ./src/app/c-sharp/c-sharp.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div *ngIf=\"question.answer_type == 'code'\"> \n        <p class=\"lead\"><strong>Réponse</strong> : <code><span [innerHTML]=\"question.answer\"></span> </code></p>\n    </div>\n    <ng-template #text_only>\n        <p class=\"lead\"><strong>Réponse</strong> : <span [innerHTML]=\"question.answer\"></span> </p>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/c-sharp/c-sharp.component.ts":
/*!**********************************************!*\
  !*** ./src/app/c-sharp/c-sharp.component.ts ***!
  \**********************************************/
/*! exports provided: CSharpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSharpComponent", function() { return CSharpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_csharp_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-csharp-datas */ "./src/app/test-csharp-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CSharpComponent = /** @class */ (function () {
    function CSharpComponent(titleService) {
        this.titleService = titleService;
        this.title = "C# - QUESTIONS SUR C#";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "c-sharp"; });
        this.questions = _test_csharp_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "connaissance"; }).test;
        this.titleService.setTitle(this.title);
    }
    CSharpComponent.prototype.ngOnInit = function () {
    };
    CSharpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-c-sharp',
            template: __webpack_require__(/*! ./c-sharp.component.html */ "./src/app/c-sharp/c-sharp.component.html"),
            styles: [__webpack_require__(/*! ./c-sharp.component.css */ "./src/app/c-sharp/c-sharp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], CSharpComponent);
    return CSharpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 15px;\n    margin-top: 15px;\n    width: 18rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgd2lkdGg6IDE4cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n        <a href=\"/js-connaissance\">\n          <img class=\"card-img-top\" src=\"{{logo_js.img}}\" alt=\"card {{logo_js.alt}}\">\n        </a>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a href=\"/js-connaissance\" class=\"card-link\">Connaissance du langage</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"/js-connaissance\" class=\"card-link\">Modélisation</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"/js-connaissance\" class=\"card-link\">Problèmes</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n        <a href=\"/php-connaissance\">\n          <img class=\"card-img-top\" src=\"{{logo_php.img}}\" alt=\"card {{logo_php.alt}}\">\n        </a>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a href=\"/php-connaissance\" class=\"card-link\">Connaissance du langage</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"/php-connaissance\" class=\"card-link\">Modélisation</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"/php-connaissance\" class=\"card-link\">Problèmes</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n        <a href=\"/sql-connaissance\">\n          <img class=\"card-img-top\" src=\"{{logo_sql.img}}\" alt=\"card {{logo_sql.alt}}\">\n        </a>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a href=\"/sql-connaissance\" class=\"card-link\">Connaissance du langage</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"/sql-connaissance\" class=\"card-link\">Modélisation</a>\n        </li>\n        <li class=\"list-group-item\">\n          <a href=\"/sql-connaissance\" class=\"card-link\">Problèmes</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <a href=\"/angularjs\">\n        <img class=\"card-img-top\" src=\"{{logo_angularjs.img}}\" alt=\"card {{logo_angularjs.alt}}\">\n      </a>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a href=\"/angularjs\" class=\"card-link\">Connaissance du langage</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n        <a href=\"/c-sharp\">\n          <img class=\"card-img-top\" src=\"{{logo_csharp.img}}\" alt=\"card {{logo_csharp.alt}}\">\n        </a>\n      <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\">\n          <a href=\"/c-sharp\" class=\"card-link\">Connaissance du langage</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
        this.logo_js = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "js"; });
        this.logo_php = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "php"; });
        this.logo_csharp = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "c-sharp"; });
        this.logo_sql = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "sql"; });
        this.logo_angularjs = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "angularjs"; });
        this.title = "Test de Développement - Crédit Agricole d'Aquitaine";
        this.titleService.setTitle(this.title);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/js-connaissance/js-connaissance.component.css":
/*!***************************************************************!*\
  !*** ./src/app/js-connaissance/js-connaissance.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pzLWNvbm5haXNzYW5jZS9qcy1jb25uYWlzc2FuY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/js-connaissance/js-connaissance.component.html":
/*!****************************************************************!*\
  !*** ./src/app/js-connaissance/js-connaissance.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div *ngIf=\"question.answer_type == 'code'; else text_only\">\n        <p>\n        <code>\n            <span [innerHTML]=\"question.answer\"></span>\n        </code>\n        </p>\n    </div>\n    <ng-template #text_only>\n        <p class=\"lead\"><strong>Réponse</strong> : <span [innerHTML]=\"question.answer\"></span> </p>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/js-connaissance/js-connaissance.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/js-connaissance/js-connaissance.component.ts ***!
  \**************************************************************/
/*! exports provided: JsConnaissanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsConnaissanceComponent", function() { return JsConnaissanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_js_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-js-datas */ "./src/app/test-js-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsConnaissanceComponent = /** @class */ (function () {
    function JsConnaissanceComponent(titleService) {
        this.titleService = titleService;
        this.title = "JAVASCRIPT - CONNAISSANCE DU LANGAGE";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "js"; });
        this.questions = _test_js_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "connaissance"; }).test;
        this.titleService.setTitle(this.title);
    }
    JsConnaissanceComponent.prototype.ngOnInit = function () {
    };
    JsConnaissanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-js-connaissance',
            template: __webpack_require__(/*! ./js-connaissance.component.html */ "./src/app/js-connaissance/js-connaissance.component.html"),
            styles: [__webpack_require__(/*! ./js-connaissance.component.css */ "./src/app/js-connaissance/js-connaissance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], JsConnaissanceComponent);
    return JsConnaissanceComponent;
}());



/***/ }),

/***/ "./src/app/js-modelisation/js-modelisation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/js-modelisation/js-modelisation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pzLW1vZGVsaXNhdGlvbi9qcy1tb2RlbGlzYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/js-modelisation/js-modelisation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/js-modelisation/js-modelisation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div>\n        <pre><code><p [innerHTML]=\"question.answer\"></p></code></pre>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/js-modelisation/js-modelisation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/js-modelisation/js-modelisation.component.ts ***!
  \**************************************************************/
/*! exports provided: JsModelisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsModelisationComponent", function() { return JsModelisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_js_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-js-datas */ "./src/app/test-js-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsModelisationComponent = /** @class */ (function () {
    function JsModelisationComponent(titleService) {
        this.titleService = titleService;
        this.title = "JAVASCRIPT - MODELISATION";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "js"; });
        this.questions = _test_js_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "modelisation"; }).test;
        this.titleService.setTitle(this.title);
    }
    JsModelisationComponent.prototype.ngOnInit = function () {
    };
    JsModelisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-js-modelisation',
            template: __webpack_require__(/*! ./js-modelisation.component.html */ "./src/app/js-modelisation/js-modelisation.component.html"),
            styles: [__webpack_require__(/*! ./js-modelisation.component.css */ "./src/app/js-modelisation/js-modelisation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], JsModelisationComponent);
    return JsModelisationComponent;
}());



/***/ }),

/***/ "./src/app/js-problemes/js-problemes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/js-problemes/js-problemes.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pzLXByb2JsZW1lcy9qcy1wcm9ibGVtZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/js-problemes/js-problemes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/js-problemes/js-problemes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div *ngIf=\"question.answer_type == 'code'; else text_only\">\n        <code>\n            <span [innerHTML]=\"question.answer\"></span>\n        </code>\n    </div>\n    <ng-template #text_only>\n        <p class=\"lead\"><strong>Réponse</strong> : <span [innerHTML]=\"question.answer\"></span> </p>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/js-problemes/js-problemes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/js-problemes/js-problemes.component.ts ***!
  \********************************************************/
/*! exports provided: JsProblemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsProblemesComponent", function() { return JsProblemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_js_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-js-datas */ "./src/app/test-js-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsProblemesComponent = /** @class */ (function () {
    function JsProblemesComponent(titleService) {
        this.titleService = titleService;
        this.title = "JAVASCRIPT - RESOLUTION DE PROBLEMES";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "js"; });
        this.questions = _test_js_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "problemes"; }).test;
        this.titleService.setTitle(this.title);
    }
    JsProblemesComponent.prototype.ngOnInit = function () {
    };
    JsProblemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-js-problemes',
            template: __webpack_require__(/*! ./js-problemes.component.html */ "./src/app/js-problemes/js-problemes.component.html"),
            styles: [__webpack_require__(/*! ./js-problemes.component.css */ "./src/app/js-problemes/js-problemes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], JsProblemesComponent);
    return JsProblemesComponent;
}());



/***/ }),

/***/ "./src/app/link_img.ts":
/*!*****************************!*\
  !*** ./src/app/link_img.ts ***!
  \*****************************/
/*! exports provided: LOGOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOS", function() { return LOGOS; });
var LOGOS = [
    {
        type: "php",
        alt: "logo php",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/PHP_Logo%2C_text_only.svg/640px-PHP_Logo%2C_text_only.svg.png"
    },
    {
        type: "js",
        alt: "logo js",
        img: "https://www.nuimedia.com/wp-content/uploads/2017/01/javascript-logo.png"
    },
    {
        type: "c-sharp",
        alt: "logo c-sharp",
        img: "https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg"
    },
    {
        type: "angularjs",
        alt: "logo angularjs",
        img: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg"
    },
    {
        type: "sql",
        alt: "logo sql",
        img: "https://cdn.macworld.co.uk/cmsdata/features/3638150/setup_learn_sql_mac_thumb800.jpg"
    },
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"/\">Test CA d'Aquitaine</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            JavaScript\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/js-connaissance\" routerLinkActive=\"active\">Connaissance du langage</a>\n            <a class=\"dropdown-item\" routerLink=\"/js-modelisation\">Modelisation</a>\n            <a class=\"dropdown-item\" routerLink=\"/js-problemes\">Résolution de problèmes</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            PHP\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/php-connaissance\">Connaissance du langage</a>\n            <a class=\"dropdown-item\" routerLink=\"/php-modelisation\">Modelisation</a>\n            <a class=\"dropdown-item\" routerLink=\"/php-problemes\">Résolution de problèmes</a>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            SQL\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" routerLink=\"/sql-connaissance\">Connaissance du langage</a>\n            <a class=\"dropdown-item\" routerLink=\"/sql-modelisation\">Modelisation</a>\n            <a class=\"dropdown-item\" routerLink=\"/sql-problemes\">Résolution de problèmes</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/angularjs\">AngularJS</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/c-sharp\">C#</a>\n        </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/php-connaissance/php-connaissance.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/php-connaissance/php-connaissance.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BocC1jb25uYWlzc2FuY2UvcGhwLWNvbm5haXNzYW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/php-connaissance/php-connaissance.component.html":
/*!******************************************************************!*\
  !*** ./src/app/php-connaissance/php-connaissance.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div *ngIf=\"question.answer_type == 'code'; else text_only\">\n      <p>\n        <code>\n          <span [innerHTML]=\"question.answer\"></span>\n        </code>\n      </p>\n    </div>\n    <ng-template #text_only>\n        <p class=\"lead\"><strong>Réponse</strong> :<span [innerHTML]=\"question.answer\"></span> </p>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/php-connaissance/php-connaissance.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/php-connaissance/php-connaissance.component.ts ***!
  \****************************************************************/
/*! exports provided: PhpConnaissanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhpConnaissanceComponent", function() { return PhpConnaissanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_php_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-php-datas */ "./src/app/test-php-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhpConnaissanceComponent = /** @class */ (function () {
    function PhpConnaissanceComponent(titleService) {
        this.titleService = titleService;
        this.title = "PHP - CONNAISSANCE DU LANGAGE";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "php"; });
        this.questions = _test_php_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "connaissance"; }).test;
        this.titleService.setTitle(this.title);
    }
    PhpConnaissanceComponent.prototype.ngOnInit = function () {
    };
    PhpConnaissanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-php-connaissance',
            template: __webpack_require__(/*! ./php-connaissance.component.html */ "./src/app/php-connaissance/php-connaissance.component.html"),
            styles: [__webpack_require__(/*! ./php-connaissance.component.css */ "./src/app/php-connaissance/php-connaissance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], PhpConnaissanceComponent);
    return PhpConnaissanceComponent;
}());



/***/ }),

/***/ "./src/app/php-modelisation/php-modelisation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/php-modelisation/php-modelisation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BocC1tb2RlbGlzYXRpb24vcGhwLW1vZGVsaXNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/php-modelisation/php-modelisation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/php-modelisation/php-modelisation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.answer\"></span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/php-modelisation/php-modelisation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/php-modelisation/php-modelisation.component.ts ***!
  \****************************************************************/
/*! exports provided: PhpModelisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhpModelisationComponent", function() { return PhpModelisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_php_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-php-datas */ "./src/app/test-php-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhpModelisationComponent = /** @class */ (function () {
    function PhpModelisationComponent(titleService) {
        this.titleService = titleService;
        this.title = "PHP - MODELISATION";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "php"; });
        this.questions = _test_php_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "modelisation"; }).test;
        this.titleService.setTitle(this.title);
    }
    PhpModelisationComponent.prototype.ngOnInit = function () {
    };
    PhpModelisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-php-modelisation',
            template: __webpack_require__(/*! ./php-modelisation.component.html */ "./src/app/php-modelisation/php-modelisation.component.html"),
            styles: [__webpack_require__(/*! ./php-modelisation.component.css */ "./src/app/php-modelisation/php-modelisation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], PhpModelisationComponent);
    return PhpModelisationComponent;
}());



/***/ }),

/***/ "./src/app/php-problemes/php-problemes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/php-problemes/php-problemes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BocC1wcm9ibGVtZXMvcGhwLXByb2JsZW1lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/php-problemes/php-problemes.component.html":
/*!************************************************************!*\
  !*** ./src/app/php-problemes/php-problemes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n    </div>\n    <div>\n        <pre><code><p [innerHTML]=\"question.answer\"></p></code></pre>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/php-problemes/php-problemes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/php-problemes/php-problemes.component.ts ***!
  \**********************************************************/
/*! exports provided: PhpProblemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhpProblemesComponent", function() { return PhpProblemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_php_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-php-datas */ "./src/app/test-php-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhpProblemesComponent = /** @class */ (function () {
    function PhpProblemesComponent(titleService) {
        this.titleService = titleService;
        this.title = "PHP - PROBLEMES";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "php"; });
        this.questions = _test_php_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "problemes"; }).test;
        this.titleService.setTitle(this.title);
    }
    PhpProblemesComponent.prototype.ngOnInit = function () {
    };
    PhpProblemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-php-problemes',
            template: __webpack_require__(/*! ./php-problemes.component.html */ "./src/app/php-problemes/php-problemes.component.html"),
            styles: [__webpack_require__(/*! ./php-problemes.component.css */ "./src/app/php-problemes/php-problemes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], PhpProblemesComponent);
    return PhpProblemesComponent;
}());



/***/ }),

/***/ "./src/app/sql-connaissance/sql-connaissance.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sql-connaissance/sql-connaissance.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbC1jb25uYWlzc2FuY2Uvc3FsLWNvbm5haXNzYW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sql-connaissance/sql-connaissance.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sql-connaissance/sql-connaissance.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n        <p [innerHTML]=\"question.answer\"></p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sql-connaissance/sql-connaissance.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sql-connaissance/sql-connaissance.component.ts ***!
  \****************************************************************/
/*! exports provided: SqlConnaissanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlConnaissanceComponent", function() { return SqlConnaissanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_sql_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-sql-datas */ "./src/app/test-sql-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqlConnaissanceComponent = /** @class */ (function () {
    function SqlConnaissanceComponent(titleService) {
        this.titleService = titleService;
        this.title = "SQL - CONNAISSANCE DU LANGAGE";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "sql"; });
        this.questions = _test_sql_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "connaissance"; }).test;
        this.titleService.setTitle(this.title);
    }
    SqlConnaissanceComponent.prototype.ngOnInit = function () {
    };
    SqlConnaissanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sql-connaissance',
            template: __webpack_require__(/*! ./sql-connaissance.component.html */ "./src/app/sql-connaissance/sql-connaissance.component.html"),
            styles: [__webpack_require__(/*! ./sql-connaissance.component.css */ "./src/app/sql-connaissance/sql-connaissance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SqlConnaissanceComponent);
    return SqlConnaissanceComponent;
}());



/***/ }),

/***/ "./src/app/sql-modelisation/sql-modelisation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/sql-modelisation/sql-modelisation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbC1tb2RlbGlzYXRpb24vc3FsLW1vZGVsaXNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sql-modelisation/sql-modelisation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sql-modelisation/sql-modelisation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div class=\"lead\">\n        <strong>\n            {{question.number}} :\n        </strong>\n        <span [innerHTML]=\"question.question\"></span>\n        <p [innerHTML]=\"question.answer\"></p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sql-modelisation/sql-modelisation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sql-modelisation/sql-modelisation.component.ts ***!
  \****************************************************************/
/*! exports provided: SqlModelisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlModelisationComponent", function() { return SqlModelisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_sql_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-sql-datas */ "./src/app/test-sql-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqlModelisationComponent = /** @class */ (function () {
    function SqlModelisationComponent(titleService) {
        this.titleService = titleService;
        this.title = "SQL - MODELISATION";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "sql"; });
        this.questions = _test_sql_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "modelisation"; }).test;
        this.titleService.setTitle(this.title);
    }
    SqlModelisationComponent.prototype.ngOnInit = function () {
    };
    SqlModelisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sql-modelisation',
            template: __webpack_require__(/*! ./sql-modelisation.component.html */ "./src/app/sql-modelisation/sql-modelisation.component.html"),
            styles: [__webpack_require__(/*! ./sql-modelisation.component.css */ "./src/app/sql-modelisation/sql-modelisation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SqlModelisationComponent);
    return SqlModelisationComponent;
}());



/***/ }),

/***/ "./src/app/sql-problemes/sql-problemes.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sql-problemes/sql-problemes.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbC1wcm9ibGVtZXMvc3FsLXByb2JsZW1lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sql-problemes/sql-problemes.component.html":
/*!************************************************************!*\
  !*** ./src/app/sql-problemes/sql-problemes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <img width=\"300\" alt=\"{{logo.src}}\" src=\"{{logo.img}}\">\n</div>\n<h1>{{title}}</h1>\n\n<div *ngFor=\"let question of questions\">\n    <div>\n        <strong>\n            <span class=\"lead\"><strong>{{question.number}}</strong> : {{question.question}}</span>\n        </strong>\n        <p class=\"lead\"><strong>Réponse</strong> : <span [innerHTML]=\"question.answer\"></span> </p>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/sql-problemes/sql-problemes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sql-problemes/sql-problemes.component.ts ***!
  \**********************************************************/
/*! exports provided: SqlProblemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlProblemesComponent", function() { return SqlProblemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _link_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link_img */ "./src/app/link_img.ts");
/* harmony import */ var _test_sql_datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-sql-datas */ "./src/app/test-sql-datas.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SqlProblemesComponent = /** @class */ (function () {
    function SqlProblemesComponent(titleService) {
        this.titleService = titleService;
        this.title = "SQL - PROBLEMES";
        this.logo = _link_img__WEBPACK_IMPORTED_MODULE_2__["LOGOS"].find(function (x) { return x.type == "sql"; });
        this.questions = _test_sql_datas__WEBPACK_IMPORTED_MODULE_3__["DATAS"].find(function (x) { return x.type == "problemes"; }).test;
        this.titleService.setTitle(this.title);
    }
    SqlProblemesComponent.prototype.ngOnInit = function () {
    };
    SqlProblemesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sql-problemes',
            template: __webpack_require__(/*! ./sql-problemes.component.html */ "./src/app/sql-problemes/sql-problemes.component.html"),
            styles: [__webpack_require__(/*! ./sql-problemes.component.css */ "./src/app/sql-problemes/sql-problemes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], SqlProblemesComponent);
    return SqlProblemesComponent;
}());



/***/ }),

/***/ "./src/app/test-angularjs-datas.ts":
/*!*****************************************!*\
  !*** ./src/app/test-angularjs-datas.ts ***!
  \*****************************************/
/*! exports provided: DATAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAS", function() { return DATAS; });
var DATAS = [
    {
        type: "connaissance",
        test: [
            {
                number: "Q1",
                question: "",
                answer: "&",
                answer_type: "code"
            },
            {
                number: "Q2",
                question: "Qu'est ce qui est vrai \u00E0 propos de l'expression <code>track by</code> de la directive\n              <code>ng-repeat</code> ?",
                answer: "<ul><li>Quand aucune expression <code>track by</code> n'est fournie, l'expression par d\u00E9faut utilis\u00E9e est la \n              fonction built-in <code>$id</code>.</li>\n              <li>On ne peut pas r\u00E9f\u00E9rencer une fonction du scope dans une expression <code>track by</code>.</li>\n              </ul>",
                answer_type: "text"
            },
            {
                number: "Q3",
                question: "Parmi les propositions [...], l'une [...] n'est pas un service interne d'AngularJS. Laquelle ?",
                answer: "$cookies",
                answer_type: "code"
            },
            {
                number: "Q4",
                question: "",
                answer: "deferred.reject('Invalid data')",
                answer_type: "code"
            },
            {
                number: "Q5",
                question: "",
                answer: "<ul>\n                <li>\n                  Une modification de <code>custName</code> modifie la valeur de <code>myName</code> dans le scope parent.\n                </li>\n                <li>\n                  Une modification de <code>custCountry</code> ne modifie <strong>pas</strong> la valeur de <code>myCountry</code> dans le scope parent.\n                </li>\n              </ul>",
                answer_type: "text"
            },
            {
                number: "Q6",
                question: "Par quelle fa\u00E7on peut-on afficher un montant exprim\u00E9 dans la monnaie locale ?",
                answer: "{{100 | currency}}",
                answer_type: "code"
            },
            {
                number: "Q7",
                question: "Parmis ces propositions, quelles sont celles qui d\u00E9signent des directives du framework AngularJS ?",
                answer: "<ul>\n              <li>\n                ng-app\n              </li>\n              <li>\n                ng-model\n              </li>\n              <li>\n                ng-bind\n              </li>\n            </ul>",
                answer_type: "code"
            },
            {
                number: "Q8",
                question: "Qu'est ce qui est vrai \u00E0 propos de la directive <code>ngRequired</code> ?",
                answer: "<ul>\n              <li>\n                Elle fonctionne sur des champs input et select et ne peut pas \u00EAtre appliqu\u00E9e sur un champs personnalis\u00E9.\n              </li>\n              <li>\n                Elle ajoute au <code>ngModel</code> la validation des donn\u00E9es requises.\n              </li>\n              <li>\n                Elle ajoute l'attribut <code>required</code> sur son \u00E9l\u00E9ment si l'expression du <code>ngRequired</code> est \u00E9valu\u00E9e \u00E0 <code>true</code>.\n              </li>\n            </ul>",
                answer_type: "text"
            },
            {
                number: "Q9",
                question: "[...]Quelle valeur de l'option <code>restrict</code> permet de restreindre l'usage d'une directive au niveau d'une classe, d'un \u00E9l\u00E9ment \n              ou d'un attribut ?",
                answer: "ACE",
                answer_type: "text"
            },
            {
                number: "Q10",
                question: "Quel est le remplacement AngularJS de la fonction <code>window.setInterval</code> ?",
                answer: "$setInterval",
                answer_type: "code"
            },
            {
                number: "Q11",
                question: "Que fait le service <code>$location</code> ?",
                answer: "<ul>\n              <li>\n                Il parse l'URL de la barre d'adresse du navigateur et la rend disponible au niveau de l'application.\n              </li>\n              <li>\n                Il s'assure que les changements effectu\u00E9s au niveau de <code>$location</code> sont refl\u00E9t\u00E9s au niveau de l'URL du navigateur.\n              </li>\n            </ul>",
                answer_type: "text"
            },
            {
                number: "Q12",
                question: "",
                answer: "$scope.apply();",
                answer_type: "code"
            },
            {
                number: "Q13",
                question: "Parmi ces expressions, l'une d'elle est repr\u00E9sente une expression AngularJS valide. Laquelle ?",
                answer: "{{ 2 + 2 }}",
                answer_type: "text"
            },
            {
                number: "Q14",
                question: "Quelle valeur de propri\u00E9t\u00E9 d'un scope isol\u00E9 permet de cr\u00E9er une association bidirectionnelle entre le scope local de la directive\n              et le scope parent ?",
                answer: "=",
                answer_type: "code"
            },
            {
                number: "Q15",
                question: "Quel service AngularJS utiliseriez-vous si vous souhaitez ex\u00E9cuter une fonction de mani\u00E8re asynchrone ? ",
                answer: "$q",
                answer_type: "code"
            },
            {
                number: "Q16",
                question: "S\u00E9lectionnez les requ\u00EAtes <code>$http</code> valides parmi les propositions [...]",
                answer: "<ul>\n              <li>\n                $http.get('/someUrl', config).then(successCallback, errorCallback);\n              </li>\n              <li>\n                $http.post('/someUrl', data, config).then(successCallback, errorCallback);\n              </li>\n            </ul>",
                answer_type: "code"
            },
            {
                number: "Q17",
                question: "",
                answer: "Le code 2",
                answer_type: "text"
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/test-csharp-datas.ts":
/*!**************************************!*\
  !*** ./src/app/test-csharp-datas.ts ***!
  \**************************************/
/*! exports provided: DATAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAS", function() { return DATAS; });
var DATAS = [
    {
        type: "connaissance",
        test: [
            {
                number: "Q1",
                question: "Une classe abstraite peut contenir des m\u00E9thodes concr\u00E8tes.",
                answer: "Vrai",
                answer_type: "text"
            },
            {
                number: "Q2",
                question: "<code>public class A{}</code>. Quelle est la classe parente de A ?",
                answer: "Vrai",
                answer_type: "text"
            },
            {
                number: "Q3",
                question: "Quelle est la valeur de i3 ?<code><br>\n              int i1 = 5;<br>\n              int i2 = 2;<br>\n              int i3 = i1 / i2;</code>.",
                answer: "2",
                answer_type: "code"
            },
            {
                number: "Q4",
                question: "Quelle propri\u00E9t\u00E9 permet d'obtenir le nombre de caract\u00E8res dans une cha\u00EEne ?",
                answer: "Length",
                answer_type: "code"
            },
            {
                number: "Q5",
                question: "Quelle est la valeur retourn\u00E9e par <code>list.Count</code> ?",
                answer: "3",
                answer_type: "code"
            },
            {
                number: "Q6",
                question: "Quelle est la valeur retourn\u00E9e par <code>m[o1]</code> ?",
                answer: "2",
                answer_type: "code"
            },
            {
                number: "Q7",
                question: "Parmi ces types primitifs, le(s)quel(s) existe(nt) en C#?",
                answer: "<ul><li>boolean</li><li>float</li><li>int</li></ul>",
                answer_type: "text"
            },
            {
                number: "Q8",
                question: "Quelle est la valeur retourn\u00E9e par hashSet.Count ?",
                answer: "2",
                answer_type: "code"
            },
            {
                number: "Q9",
                question: "Quelle(s) exception(s) fait/font partie de l'API .Net pour C# ?",
                answer: "<ul><li>NullReferenceException</li><li>IndexOutOfRangeException</li></ul>",
                answer_type: "text"
            },
            {
                number: "Q10",
                question: "Saisissez le r\u00E9sultat qu'affiche ce bout de code.\n              ",
                answer: "1",
                answer_type: "code"
            },
            {
                number: "Q11",
                question: "Le garbage collector garantit qu'il y a suffisamment de m\u00E9moire pour ex\u00E9cuter un programme .Net.",
                answer: "Vrai",
                answer_type: "text"
            },
            {
                number: "Q12",
                question: "Une classe C# peut avoir plusieurs classes parentes.",
                answer: "Faux",
                answer_type: "code"
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/test-js-datas.ts":
/*!**********************************!*\
  !*** ./src/app/test-js-datas.ts ***!
  \**********************************/
/*! exports provided: DATAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAS", function() { return DATAS; });
var DATAS = [
    {
        type: 'connaissance',
        test: [
            {
                number: "Q1",
                question: "En JS, laquelle des instructions suivantes permet de sortir d'une boucle ?",
                answer: "break;",
                answer_type: "code"
            },
            {
                number: "Q2",
                question: "En CSS, quel symbole est utilis\u00E9 pour le pr\u00E9fixe d'un s\u00E9lecteur par <strong>id</strong> ?",
                answer: "#",
                answer_type: "code"
            },
            {
                number: "Q3",
                question: "En HTML, quel est le nom de l'\u00E9l\u00E9ment utili\u00E9 pour afficher un champs d'\u00E9dition de texte multiline ?",
                answer: "\n            <div>\n                <p>\n                    <code>\n                            &lt;textarea&gt;&lt;/textarea&gt;\n                    </code>\n                </p>\n                <textarea placeholder=\"Textarea, multiline text editor...\"></textarea>\n            </div>",
                answer_type: ""
            },
            {
                number: "Q4",
                question: "En Javascript avec <strong>jquery</strong>, quel est le meilleur s\u00E9lecteur qui permet de s\u00E9lectionner l'\u00E9l\u00E9ment suivant :",
                answer: "$('#content');",
                answer_type: "code"
            },
            {
                number: "Q5",
                question: "Parmi ces propositions, quelle est la bonne fa\u00E7on de d\u00E9clarer un tableau en Javascript",
                answer: "var a = [1,2,3]",
                answer_type: "code"
            },
            {
                number: "Q6",
                question: "En HTML, que faut-il ajouter \u00E0 un champs de formulaire pour le d\u00E9sactiver ?",
                answer: "\n            <p class=\"lead\">Un attribut disabled : \n            <code>&lt;input type=\"button\" disabled&gt;</code></p>\n            <p><input type=\"button\" value=\"Bouton d\u00E9sactiv\u00E9\" disabled></p>",
                answer_type: "text"
            },
            {
                number: "Q7",
                question: "En JavaScript, comment d\u00E9clare-t-on une variable ?",
                answer: "var x = 7;",
                answer_type: "code"
            },
            {
                number: "Q8",
                question: " Quand vous ouvrez une page web \u00E0 partir d'une URL, \n                quelle m\u00E9thode HTTP est utilis\u00E9e par votre navigateur pour envoyer \n                la requ\u00EAte initiale au serveur ?",
                answer: "GET ",
                answer_type: "text"
            },
            {
                number: "Q9",
                question: " Quand vous ouvrez une page web \u00E0 partir d'une URL, \n                quelle m\u00E9thode HTTP est utilis\u00E9e par votre navigateur pour envoyer \n                la requ\u00EAte initiale au serveur ?",
                answer: "GET ",
                answer_type: "text"
            },
            {
                number: "Q10",
                question: " En CSS, \u00E0 quoi correspondent les valeurs ci-dessous : \n        <code>margin: 10px 20px 15px -10px</code>",
                answer: "top right bottom left",
                answer_type: "text"
            },
            {
                number: "Q11",
                question: "Parmi les expressions suivantes, lesquelles sont \u00E9valu\u00E9es \u00E0 true ?",
                answer: " \n        <pre><code>\"a\"==='a' //true\n4.0===4  //true\n\"1\"==1  //true</code></pre>",
                answer_type: "pre_code"
            },
            {
                number: "Q12",
                question: "Parmi les propositions suivantes, laquelle affiche 2 ?",
                answer: "myjson.cities[0].pop",
                answer_type: "code"
            },
            {
                number: "Q13",
                question: "En JavaScript, quel est le r\u00E9sultat de l'expression suivantte :\",\"2\"===2;",
                answer: "false",
                answer_type: "code"
            },
            {
                number: "Q14",
                question: "Parmi les propositions suivantes, lesquelles sont des m\u00E9thodes HTTP valides ?",
                answer: "POST, GET, PUT",
                answer_type: "text"
            }
        ]
    },
    {
        type: 'modelisation',
        test: [
            {
                number: "Q19",
                answer: "function scanChar(str)\n{\n    var printLetters = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\",\n        asciiArt = null,\n        i = 0;\n\n    while (i < printLetters.length) {\n        if(printChar(printLetters[i]) === str)\n            return printLetters[i];\n        i++;\n    }\n    return \"?\";\n}\n// Fake printChar pour test\nfunction printChar(letter)\n{\n    return letter+\"-je_suis_une_representation_graphique\";\n}\n// POUR TEST //\nconsole.log(scanChar(printChar(\"g\")));"
            },
            {
                number: "Q20",
                answer: "?"
            },
            {
                number: "Q21",
                answer: "function helloProperties(o)\n{\n    var hello_array = [];\n    for(var i = 0; i < Object.keys(o).length; i++)\n        hello_array.push(\"Hello-\"+Object.keys(o)[i]);\n    return hello_array;\n}\nvar o = {\n    john: 12,\n    brian:true,\n    doe:'hi',\n    fred:false\n};\n// POUR TEST //\nconsole.log(helloProperties(o));"
            },
            {
                number: "Q22",
                answer: "function isOnEvenPosition(table, value)\n{\n    if(table.indexOf(value) % 2 == 0)\n        return true;\n    return false;\n}\n// POUR TEST //\nvar t = [9,8,7,6,5,4,3,2,1,0];\nconsole.log(isOnEvenPosition(t, 6));\nconsole.log(isOnEvenPosition(t, 7));\nconsole.log(isOnEvenPosition(t, 9));"
            },
            {
                number: "Q23",
                answer: "function reshape(n, str)\n{\n    var res = [];\n    // Deletion of spaces in str\n    shaped_str = str.replace(/s/g, \"\");\n    for(var i = 0; i < shaped_str.length; i++)\n    {\n        if(i % n == 0 && i > 0)\n            res.push(\"\n\");\n        res.push(shaped_str[i]);\n    }\n    // Conversion of res[] content to string\n    return res.join(\"\");\n}\n// POUR TEST //\nconsole.log(reshape(6, \"1 23 456\"));\nconsole.log(reshape(1, \"ABC DEFG H\"));"
            },
        ]
    },
    {
        type: 'problemes',
        test: [
            {
                number: "Q24",
                question: "",
                answer: "<pre><code>function calc(array, n1, n2)\n{\n    var sub_array = array.slice(n1, n2+1);\n    const add = (a,b) => a + b;\n    return sub_array.reduce(add);\n}\n// POUR TEST //\nvar array = [0,1,2,3,4,5,3];\nconsole.log(calc(array, 0, 1));</code></pre>",
                answer_type: "pre_code"
            },
            {
                number: "Q25",
                question: "JavaScript est multithread\u00E9 ?",
                answer: "Faux",
                answer_type: "text"
            },
            {
                number: "Q26",
                question: "Soit un objet obj d\u00E9finit par le code suivant : [...]. <br>\n              Parmi les propositions [...], cochez celles qui sont vraies.",
                answer: "<ul>\n                        <li>obj.c s'\u00E9value \u00E0 12</li>\n                        <li>obj.a s'\u00E9value \u00E0 'hello'</li>\n                        <li>obj.b s'\u00E9value \u00E0 'world'</li>\n                      </ul>",
                answer_type: "text"
            },
            {
                number: "Q27",
                question: "JavaScript est ...",
                answer: "sans rapport avec Java.",
                answer_type: "text"
            },
            {
                number: "Q28",
                question: "",
                answer: "Singleton",
                answer_type: "text"
            },
            {
                number: "Q29",
                question: "Vous r\u00E9alisez une biblioth\u00E8que en JavaScript. Parmi ces options, laquelle priviligez-vous pour traiter un comportement inattendu ?",
                answer: "throw \"Comportement inattendu\";",
                answer_type: "code"
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/test-php-datas.ts":
/*!***********************************!*\
  !*** ./src/app/test-php-datas.ts ***!
  \***********************************/
/*! exports provided: DATAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAS", function() { return DATAS; });
var DATAS = [
    {
        type: 'connaissance',
        test: [
            {
                number: "Q1",
                question: "Si la variable $a est \u00E9gale \u00E0 7 et la variable $b est \u00E9gale au caract\u00E8re a, quelle est la valeur de la variable $$b ?",
                answer: "echo $$b; // 7",
                answer_type: "code"
            },
            {
                number: "Q2",
                question: "Saisissez le nom de la structure de langage, alias de la fonction exit() qui est couramment utilis\u00E9e dans les scripts.",
                answer: "die();",
                answer_type: "code"
            },
            {
                number: "Q3",
                question: "Saisissez le nom de la 'superglobale' correspondant au tableau associatif des param\u00E8tres d'url.",
                answer: "$_GET",
                answer_type: "code"
            },
            {
                number: "Q4",
                question: "Saisissez le nom de la fonction qui permet d'afficher le type et le contenu d'une variable.",
                answer: "var_dump();",
                answer_type: "code"
            },
            {
                number: "Q5",
                question: "Saisissez le r\u00E9sultat de ce bout de code : $i = 0; echo $i++;",
                answer: "",
                answer_type: "code"
            },
            {
                number: "Q6",
                question: "Saisissez le nom de la fonction qui convertit tous les caract\u00E8res \u00E9ligibles en entit\u00E9s HTML.",
                answer: "",
                answer_type: "code"
            },
            {
                number: "Q7",
                question: "Quelle fonction retourne le nombre de caract\u00E8res d'une cha\u00EEne ASCII ?",
                answer: "strlen();",
                answer_type: "code"
            },
            {
                number: "Q8",
                question: "Quelle est la taille du tableau $a ?",
                answer: "count($a); // 1      ",
                answer_type: "code"
            },
            {
                number: "Q9",
                question: "Saisissez le nom de la fonction qui \u00E9value une cha\u00EEne de caract\u00E8res comme un script php.",
                answer: "eval();",
                answer_type: "code"
            },
            {
                number: "Q10",
                question: "Saisissez le nom de la fonction qui donne la taille d'un tableau.",
                answer: "count();",
                answer_type: "code"
            },
            {
                number: "Q11",
                question: "Pour que le code ne g\u00E9n\u00E9\u00E8re plus d'erreur, il faudrait...",
                answer: "...d\u00E9placer le tag html apr\u00E8s l'appel de la fonction header.",
                answer_type: "text"
            },
            {
                number: "Q12",
                question: "Saisissez le nom de la fonction qui supprime les espaces en d\u00E9but et en fin d'une cha\u00EEne de caract\u00E8res.",
                answer: "trim();",
                answer_type: "code"
            },
            {
                number: "Q13",
                question: "Saisissez le nom de la fonction qui sert \u00E0 retourner une partie d'une cha\u00EEne de caract\u00E8res \n              \u00E0 partir de l'index de d\u00E9but et d'une longueur.",
                answer: "substr($string, $index, $longueur);",
                answer_type: "code"
            },
            {
                number: "Q14",
                question: "Quelle d\u00E9claration est une constante valide en PHP ?",
                answer: "define(\"MAXSIZE\", 100);",
                answer_type: "code"
            },
        ]
    },
    {
        type: 'modelisation',
        test: [
            {
                number: "Q17",
                answer: ""
            },
            {
                number: "Q18",
                answer: "Iterator"
            },
            {
                number: "Q19",
                answer: "Vrai"
            },
            {
                number: "Q20",
                answer: "Proposition #1"
            },
        ]
    },
    {
        type: 'problemes',
        test: [
            {
                number: "Q15",
                answer: "???"
            },
            {
                number: "Q15",
                answer: "function calc($array, $n1,$n2){\n    $res = 0;\n    for($i = $n1; $i < $n2+1; $i++)\n    {\n        $res+=$array[$i];\n    }\n    return $res;\n}"
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/test-sql-datas.ts":
/*!***********************************!*\
  !*** ./src/app/test-sql-datas.ts ***!
  \***********************************/
/*! exports provided: DATAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAS", function() { return DATAS; });
var DATAS = [
    {
        type: 'connaissance',
        test: [
            {
                number: "Q1",
                question: "",
                answer: "SELECT count(*) FROM customer GROUP BY city HAVING COUNT (customer_id)"
            },
            {
                number: "Q2",
                question: "Quelle commande permet d'ajouter une ligne dans une table d'une base de donn\u00E9es ?",
                answer: "INSERT -- INSERT INTO table (column1, column2) VALUES ('value1', 'value2')"
            },
            {
                number: "Q3",
                question: "(il manque sans doute une partie des instructions)",
                answer: "SELECT firstname, lastname FROM customer"
            },
            {
                number: "Q4",
                question: "Quelle commande permet d'effacer des lignes dans une table ?",
                answer: "DELETE FROM table WHERE ..."
            },
            {
                number: "Q5",
                question: "Quelle commande est utilis\u00E9e pour supprimer une table d'une base de donn\u00E9es ?",
                answer: "DROP table"
            },
            {
                number: "Q6",
                question: "instructions manquantes...",
                answer: ""
            },
            {
                number: "Q7",
                question: "instructions manquantes...",
                answer: ""
            },
            {
                number: "Q8",
                question: "",
                answer: "Select * from customer where zip_code IS NOT NULL"
            },
            {
                number: "Q9",
                question: "instructions manquantes...",
                answer: ""
            },
            {
                number: "Q10",
                question: "",
                answer: "SELECT * FROM product join product_category on product.product_category_id = product_category.product_category_id"
            },
        ]
    },
    {
        type: 'modelisation',
        test: [
            {
                number: "Q11",
                question: "instructions manquantes...",
                answer: ""
            },
            {
                number: "Q12",
                question: "D'apr\u00E8s le sch\u00E9ma de base de donn\u00E9es [...], indiquer ce qui qualifie le mieux la colonn \"customer_id\" de la table PURCHASE_ORDER.",
                answer: "Cl\u00E9 \u00E9trang\u00E8re."
            },
        ]
    },
    {
        type: "problemes",
        test: [
            {
                number: "Q13",
                question: "Indiquer quelles propositions sont vraies pour une colonne déclarée en tant que clé primaire.",
                answer: "\n              <ul>\n                  <li>Elle ne peut pas \u00EAtre en plus une cl\u00E9 \u00E9trang\u00E8re.</li>\n                  <li>Elle ne peut pas contenir de doublons.</li>\n                  <li>Elle peut \u00EAtre d\u00E9clar\u00E9e avec un type de 'caract\u00E8res' tel que VARCHAR.</li>\n              </ul>"
            }
        ]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rebenga3/Desktop/dev-test-ca/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
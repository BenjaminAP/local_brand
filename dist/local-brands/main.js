(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7qI":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-bar/filter-bar.component */ "nrif");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop/shop.component */ "yD4g");





class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
    sideBarMode() {
        if (window.innerWidth <= 1440) {
            return 'over';
        }
        return 'side';
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], hostBindings: function SidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) { return ctx.sideBarMode($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { sideNavPosition: "sideNavPosition" }, decls: 6, vars: 3, consts: [[1, "drawer-container", 3, "hasBackdrop"], [3, "opened", "mode"], [1, "filter-container"], [2, "color", "whitesmoke"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-filter-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("opened", ctx.sideNavPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("mode", ctx.sideBarMode());
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawer"], _filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_2__["FilterBarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatDrawerContent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"]], styles: [".drawer-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: auto;\r\n  min-height: 100%;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.filter-container[_ngcontent-%COMP%] {\r\n  padding-right: 16px;\r\n  padding-left: 16px;\r\n  padding-top: 1em\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUEsdUJBQXVCOztBQUN2QixtQkFBbUI7O0FBQ25CLG1CQUFtQjs7QUFDbkIsNEJBQTRCOztBQUM1Qiw2QkFBNkI7O0FBQzdCLElBQUkiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZmlsdGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDFlbVxyXG59XHJcblxyXG4vKm1hdC1kcmF3ZXItY29udGVudCB7Ki9cclxuLyogIHBhZGRpbmc6IDEycHg7Ki9cclxuLyogIGRpc3BsYXk6IGZsZXg7Ki9cclxuLyogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cclxuLyogIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyovXHJcbi8qfSovXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.css']
            }]
    }], function () { return []; }, { sideNavPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sideBarMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "/Er4":
/*!*********************************************************!*\
  !*** ./src/app/components/filter-bar/filter.service.ts ***!
  \*********************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_shops_shop_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/shops/shop.selector */ "empt");
/* harmony import */ var _store_shops_shop_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/shops/shop.action */ "uzqv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class FilterService {
    constructor(store) {
        this.store = store;
        this.allFilters$ = this.store.select(_store_shops_shop_selector__WEBPACK_IMPORTED_MODULE_1__["allFilters"]);
    }
    toggleFilter(filterType) {
        this.store.dispatch(new _store_shops_shop_action__WEBPACK_IMPORTED_MODULE_2__["ToggleFilter"](filterType));
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\paton\WebstormProjects\local-brands\src\main.ts */"zUnb");


/***/ }),

/***/ "2csg":
/*!***********************************************************************!*\
  !*** ./src/app/components/header-toolbar/header-toolbar.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderToolbarComponent", function() { return HeaderToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_dialog_user_profile_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-profile-dialog/user-profile-dialog.component */ "Stuo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _header_toolbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-toolbar.service */ "S+k0");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










function HeaderToolbarComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderToolbarComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r2.userDetails$)) == null ? null : tmp_0_0.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HeaderToolbarComponent {
    constructor(dialog, headerService) {
        this.dialog = dialog;
        this.headerService = headerService;
        this.toggleSideNavEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.USER_DIALOG_CONFIG = {
            position: {
                top: '5em',
                right: '2em'
            }
        };
    }
    ngOnInit() {
        this.userDetails$ = this.headerService.userProfile$;
        this.userConnected$ = this.headerService.userConnected$;
    }
    toggleSideNav() {
        this.toggleSideNavEvent.emit();
    }
    openDialog() {
        this.dialog.open(_user_profile_dialog_user_profile_dialog_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileDialogComponent"], this.USER_DIALOG_CONFIG);
    }
}
HeaderToolbarComponent.ɵfac = function HeaderToolbarComponent_Factory(t) { return new (t || HeaderToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_toolbar_service__WEBPACK_IMPORTED_MODULE_3__["HeaderToolbarService"])); };
HeaderToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderToolbarComponent, selectors: [["app-header-toolbar"]], inputs: { userConnected$: "userConnected$" }, outputs: { toggleSideNavEvent: "toggleSideNavEvent" }, decls: 15, vars: 4, consts: [["color", "primary", "role", "heading", 1, "header-bar"], ["mat-icon-button", "", "aria-label", "Menu"], [3, "click"], [1, "spacer"], ["mat-icon-button", "", 3, "click"], [4, "ngIf", "ngIfElse"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon"], ["userProfileImage", ""], [1, "material-icons"], ["mat-card-avatar", "", 1, "avatar-image", 3, "src"]], template: function HeaderToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderToolbarComponent_Template_mat_icon_click_2_listener() { return ctx.toggleSideNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Local Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderToolbarComponent_Template_button_click_7_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderToolbarComponent_mat_icon_8_Template, 3, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderToolbarComponent_ng_template_13_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, ctx.userConnected$))("ngIfElse", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardAvatar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".header-bar[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  position: sticky;\r\n  position: -webkit-sticky;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.avatar-image[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItdG9vbGJhci9oZWFkZXItdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItdG9vbGJhci9oZWFkZXItdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iYXIge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uYXZhdGFyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-toolbar',
                templateUrl: './header-toolbar.component.html',
                styleUrls: ['./header-toolbar.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _header_toolbar_service__WEBPACK_IMPORTED_MODULE_3__["HeaderToolbarService"] }]; }, { toggleSideNavEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], userConnected$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "3mgE":
/*!****************************************!*\
  !*** ./src/app/service/app.service.ts ***!
  \****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/auth */ "VxBl");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");







class AppService {
    constructor(db, store, afAuth) {
        this.db = db;
        this.store = store;
        this.afAuth = afAuth;
        this.authDetails$ = this.store.select(_store_auth__WEBPACK_IMPORTED_MODULE_2__["authDetails"]);
        // this.temp = db.list('shops').valueChanges();
        // this.temp.subscribe(shops => console.log(shops));
        this.shopList = new Array();
        this.shopList.push({
            name: 'Jam',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://www.shopjampr.com',
            powered_by: 'Shopify',
            store_type: 'Boutique',
            attire_type: [
                'Clothing',
                null
            ],
            social_media_tag: '@shopjampr',
            country: [
                'Puerto Rico',
                null
            ],
            state: '',
            city: [
                '',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/43129923_159952481610871_8152921480653438976_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=X6PU7B-FvUYAX-MF0kY&oh=807bac9c573565a915ac0d00bf7ad395&oe=5FB775F3'
        }, {
            name: 'Aloha Sandals',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://www.alohas.io',
            powered_by: 'Shopify',
            store_type: 'Brand',
            attire_type: [
                'Shoes',
                null
            ],
            social_media_tag: '@alohas',
            country: [
                'España',
                null
            ],
            state: '',
            city: [
                'Barcelona',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/103940817_279911593201294_4936711103091584414_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=al2Jb_wd-LUAX_F7K9i&oh=4733214c5263743cc3d792c5a5717582&oe=5FB8EDB9'
        }, {
            name: 'Gypsy Beach',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://snapppt.com/gypsy_beach',
            powered_by: 'SNPT',
            store_type: 'Store',
            attire_type: [
                'Swimwear',
                'Beachwear'
            ],
            social_media_tag: '@gypsy_beach',
            country: [
                'Unknown',
                null
            ],
            state: '',
            city: [
                '',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/11351670_1683952935171599_932888717_a.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=bp9cGe-Nh30AX9KIqKI&oh=acacfc5a50bb7cfc4b7c7d98eaa215c5&oe=5FB6A7CA'
        }, {
            name: 'Fleur of England',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://www.fleurofengland.com',
            powered_by: '',
            store_type: 'Brand',
            attire_type: [
                'Lingerie',
                null
            ],
            social_media_tag: '@fleurofengland',
            country: [
                'England',
                null
            ],
            state: '',
            city: [
                '',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/83115241_168213011081837_1429592118015295488_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=Oy6qwL2xirIAX839VJh&oh=899438233f6d526b30acb15dfb25c44f&oe=5FB6DA8A'
        }, {
            name: 'Costa Jewelry',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://costajewelrypr.com',
            powered_by: 'Shopify',
            store_type: 'Brand',
            attire_type: [
                'Jewelry',
                null
            ],
            social_media_tag: '@costajewelry_bytmt',
            country: [
                'Puerto Rico',
                null
            ],
            state: '',
            city: [
                'San Juan',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/95369548_593729811501415_3630767289621544960_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=eMH3a23P4rAAX_TqkTm&oh=299b43fd0576d74b390e30aee0190741&oe=5FB6F2D3'
        }, {
            name: 'Baghsu Jewels',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://bahgsujewels.com',
            powered_by: '',
            store_type: 'Brand',
            attire_type: [
                'Jewelry',
                null
            ],
            social_media_tag: '@bahgsujewels',
            country: [
                'Unknown',
                null
            ],
            state: '',
            city: [
                '',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/69945956_388679942079871_7946652343368417280_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=x-B2lgvazXgAX-tn4lw&oh=39dc43ece191cef20d592a0cd7843e2b&oe=5FB6A3F1'
        }, {
            name: 'BuDhaGirl',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://budhagirl.com',
            powered_by: '',
            store_type: 'Brand',
            attire_type: [
                'Jewelry',
                null
            ],
            social_media_tag: '@budhagirl',
            country: [
                'United States',
                null
            ],
            state: 'Texas',
            city: [
                '',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/98478419_2948542595236015_418847654542311424_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=IyVgyUa3FcgAX94K_q_&oh=1d673c3a814aad663e3e70cfa8c1dae8&oe=5FB5E094'
        }, {
            name: 'Stillo Boutique ny Camille',
            social_media: [
                'Instagram',
                null
            ],
            url: 'https://sttilobtq.com',
            powered_by: 'Shopify',
            store_type: 'Boutique',
            attire_type: [
                'Cloth/Designer',
                null
            ],
            social_media_tag: '@sttilobtq',
            country: [
                'Puerto Rico',
                null
            ],
            state: '',
            city: [
                'San Juan',
                null
            ],
            email: '',
            image: 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s320x320/120908816_688417291776996_488417178551617383_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=KqqB72Q3F5EAX8i6tCL&oh=3f8680096791b7bac4e6dd40a8e182b7&oe=5FB7E541'
        });
    }
    loadShops() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.shopList.sort(() => .5 - Math.random()));
        // return this.temp;
    }
    initiateLogin() {
        this.store.dispatch(new _store_auth__WEBPACK_IMPORTED_MODULE_2__["InitiateLogin"]());
    }
    logout() {
        this.afAuth.signOut()
            .then(() => this.store.dispatch(new _store_auth__WEBPACK_IMPORTED_MODULE_2__["Logout"]()));
    }
    checkForLoginUser() {
        this.afAuth.onAuthStateChanged((userCredentials) => {
            if (userCredentials === null) {
                this.afAuth.signOut();
            }
            else {
                const userObj = {
                    email: userCredentials.email,
                    family_name: null,
                    name: null,
                    full_name: userCredentials.displayName,
                    picture: userCredentials.photoURL,
                    uid: userCredentials.uid,
                };
                const authObj = {
                    access_token: null,
                    provider_id: null,
                    refresh_token: userCredentials.refreshToken,
                    verified_email: userCredentials.emailVerified,
                    isNewUser: null,
                    connected: true
                };
                const payload = {
                    user: userObj,
                    authDetails: authObj
                };
                this.store.dispatch(new _store_auth__WEBPACK_IMPORTED_MODULE_2__["CheckForUserLogin"](payload));
            }
        })
            .catch(error => error);
    }
    checkUserConnection() {
        return this.store.select(_store_auth__WEBPACK_IMPORTED_MODULE_2__["userConnected"]);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "7gbW":
/*!******************************************************************!*\
  !*** ./src/app/components/user-profile-dialog/dialog.service.ts ***!
  \******************************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/auth */ "VxBl");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/app.service */ "3mgE");





class DialogService {
    constructor(store, appService) {
        this.store = store;
        this.appService = appService;
        this.userData$ = store.select(_store_auth__WEBPACK_IMPORTED_MODULE_1__["userDetails"]);
    }
    login() {
        this.appService.initiateLogin();
    }
    logout() {
        this.appService.logout();
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _service_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAaVgvtFxivNr2YR06RpakeVq0K8xTbxrQ',
        authDomain: 'localbrands-966b6.firebaseapp.com',
        databaseURL: 'https://localbrands-966b6.firebaseio.com',
        projectId: 'localbrands-966b6',
        storageBucket: 'localbrands-966b6.appspot.com',
        messagingSenderId: '337062502694',
        appId: '1:337062502694:web:45270a8e5443a32bab21e7',
        measurementId: 'G-JDKE6KZLMR'
    }
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

/***/ "CCAb":
/*!*********************************************!*\
  !*** ./src/app/store/shops/shop.reducer.ts ***!
  \*********************************************/
/*! exports provided: initialState, shopReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopReducer", function() { return shopReducer; });
/* harmony import */ var _shop_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.action */ "uzqv");

const initialState = {
    filters: [
        { type: 'Boutique', active: false },
        { type: 'Brand', active: true },
        { type: 'Shoes', active: false },
        { type: 'Beachwear', active: false },
        { type: 'Store', active: false },
        { type: 'Lingerie', active: false },
        { type: 'Jewelry', active: false },
        { type: 'Designer', active: false },
        { type: 'Clothing', active: false },
        { type: 'Swimwear', active: false }
    ],
    shops: [],
};
function shopReducer(state = initialState, action) {
    switch (action.type) {
        case _shop_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_SHOPS_COMPLETED"]: {
            return Object.assign(Object.assign({}, state), { shops: action.payload });
        }
        case _shop_action__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_FILTER"]: {
            const newFilters = state.filters.map((filter) => {
                if (filter.type === action.payload) {
                    return {
                        type: filter.type,
                        active: !filter.active
                    };
                }
                return filter;
            });
            return Object.assign(Object.assign({}, state), { filters: newFilters });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "K4Lh":
/*!********************************************!*\
  !*** ./src/app/store/shops/shop.effect.ts ***!
  \********************************************/
/*! exports provided: ShopEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopEffects", function() { return ShopEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shop_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop.action */ "uzqv");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/app.service */ "3mgE");









class ShopEffects {
    constructor(actions$, appService) {
        this.actions$ = actions$;
        this.appService = appService;
        this.loadAllShops$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_shop_action__WEBPACK_IMPORTED_MODULE_5__["LOAD_SHOPS_STARTED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return this.appService.loadShops().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(shops => new _shop_action__WEBPACK_IMPORTED_MODULE_5__["LoadShopsCompleted"](shops)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]));
        }));
    }
}
ShopEffects.ɵfac = function ShopEffects_Factory(t) { return new (t || ShopEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"])); };
ShopEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShopEffects, factory: ShopEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ShopEffects.prototype, "loadAllShops$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _service_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] }]; }, { loadAllShops$: [] }); })();


/***/ }),

/***/ "S+k0":
/*!*********************************************************************!*\
  !*** ./src/app/components/header-toolbar/header-toolbar.service.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderToolbarService", function() { return HeaderToolbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/auth */ "VxBl");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class HeaderToolbarService {
    constructor(store) {
        this.store = store;
        this.userProfile$ = this.store.select(_store_auth__WEBPACK_IMPORTED_MODULE_1__["userDetails"]);
        this.userConnected$ = this.store.select(_store_auth__WEBPACK_IMPORTED_MODULE_1__["userConnected"]);
    }
}
HeaderToolbarService.ɵfac = function HeaderToolbarService_Factory(t) { return new (t || HeaderToolbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
HeaderToolbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderToolbarService, factory: HeaderToolbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderToolbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "Stuo":
/*!*********************************************************************************!*\
  !*** ./src/app/components/user-profile-dialog/user-profile-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserProfileDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDialogComponent", function() { return UserProfileDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.service */ "7gbW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function UserProfileDialogComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileDialogComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LogIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileDialogComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileDialogComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LogOut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserProfileDialogComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.userDetails$ = this.dialogService.userData$;
    }
    ngOnInit() {
    }
    login() {
        this.dialogService.login();
    }
    logout() {
        this.dialogService.logout();
    }
}
UserProfileDialogComponent.ɵfac = function UserProfileDialogComponent_Factory(t) { return new (t || UserProfileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
UserProfileDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileDialogComponent, selectors: [["app-user-profile-dialog"]], decls: 7, vars: 4, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-raised-button", "", 3, "click", 4, "ngIf", "ngIfElse"], ["logoutTemplate", ""], ["mat-raised-button", "", 3, "click"]], template: function UserProfileDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favorite Animal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserProfileDialogComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileDialogComponent_ng_template_5_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx.userDetails$) == undefined)("ngIfElse", _r1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".dialog-content[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  \r\n}\r\n\r\n[_nghost-%COMP%]     .mat-dialog-container {\r\n  max-width: 80vw;\r\n  pointer-events: auto;\r\n  position: absolute;\r\n  top: 5em;\r\n  right: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUtZGlhbG9nL3VzZXItcHJvZmlsZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlLWRpYWxvZy91c2VyLXByb2ZpbGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRlbnQge1xyXG4gIC8qcG9zaXRpb246IGFic29sdXRlOyovXHJcbiAgLyp0b3A6IDA7Ki9cclxuICAvKnJpZ2h0OiAwOyovXHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogODB2dztcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1ZW07XHJcbiAgcmlnaHQ6IDJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile-dialog',
                templateUrl: './user-profile-dialog.component.html',
                styleUrls: ['./user-profile-dialog.component.css']
            }]
    }], function () { return [{ type: _dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/app.service */ "3mgE");
/* harmony import */ var _components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header-toolbar/header-toolbar.component */ "2csg");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");





class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'Local Brands';
        this.sideNavPosition = false;
        this.appService.checkForLoginUser();
        this.userConnected$ = this.appService.checkUserConnection();
    }
    receiveSideNavEvent() {
        this.sideNavPosition = !this.sideNavPosition;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], inputs: { sideNavPosition: "sideNavPosition" }, outputs: { userConnected$: "userConnected$" }, decls: 4, vars: 2, consts: [[1, "app"], [3, "userConnected$", "toggleSideNavEvent"], [1, "app-content"], [3, "sideNavPosition"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideNavEvent", function AppComponent_Template_app_header_toolbar_toggleSideNavEvent_1_listener() { return ctx.receiveSideNavEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidenav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userConnected$", ctx.userConnected$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sideNavPosition", ctx.sideNavPosition);
    } }, directives: [_components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["HeaderToolbarComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]], styles: ["[_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.2s ease-in-out;\r\n  line-height: 24px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0;\r\n}\r\n\r\n.card.card-small[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n\r\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 60px;\r\n}\r\n\r\nsvg#rocket[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  position: absolute;\r\n  left: -10px;\r\n  top: -24px;\r\n}\r\n\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 95px);\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 180px;\r\n  z-index: -10;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 80%;\r\n  max-width: 600px;\r\n  border-radius: 6px;\r\n  padding-top: 45px;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  background-color: rgb(15, 15, 16);\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]::before {\r\n  content: \"\\2022 \\2022 \\2022\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 4px;\r\n  background: rgb(58, 58, 58);\r\n  color: #c2c3c4;\r\n  width: 100%;\r\n  font-size: 2rem;\r\n  line-height: 0;\r\n  padding: 14px 0;\r\n  text-indent: 4px;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n  color: white;\r\n  padding: 0 1rem 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%] {\r\n  color: #24292e;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgba(27,31,35,.2);\r\n  border-radius: 3px;\r\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n  margin-left: 4px;\r\n  font-weight: 600;\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]:hover {\r\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n  border-color: rgba(27,31,35,.35);\r\n  background-position: -.5em;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 16px;\r\n  margin-right: 4px;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: -160px;\r\n  left: -230px;\r\n  z-index: -10;\r\n  width: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n.app[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.app-content[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  min-height: 92%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwSkFBMEo7RUFDMUosZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQzs7QUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrSUFBa0k7QUFDcEk7O0FBRUE7RUFDRSw4REFBOEQ7RUFDOUQsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFHQSxzQkFBc0I7O0FBQ3RCOztFQUVFOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzMzMztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b29sYmFyIGltZyB7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbn1cclxuXHJcbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6ICM4ODg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNjhweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxODBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICBjb2xvcjogI2MyYzNjNDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMTRweCAwO1xyXG4gIHRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluayB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuICBjb2xvcjogIzI0MjkyZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5zdmcjY2xvdWRzIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAtMTYwcHg7XHJcbiAgbGVmdDogLTIzMHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxuICB3aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIHJpZ2h0OiAxMjBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuLmFwcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hcHAtY29udGVudCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtaW4taGVpZ2h0OiA5MiU7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _service_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, { sideNavPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userConnected$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "VxBl":
/*!*************************************!*\
  !*** ./src/app/store/auth/index.ts ***!
  \*************************************/
/*! exports provided: INITIATE_LOGIN, LOGIN_COMPLETED, LOGOUT, CHECK_USER_LOGIN, InitiateLogin, LoginCompleted, CheckForUserLogin, Logout, initialState, authReducer, authFeaturesSelector, authDetails, userDetails, userConnected, AuthEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.action */ "pgBp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INITIATE_LOGIN", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["INITIATE_LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_COMPLETED", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["LOGIN_COMPLETED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHECK_USER_LOGIN", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["CHECK_USER_LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitiateLogin", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["InitiateLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginCompleted", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["LoginCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckForUserLogin", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["CheckForUserLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "pja6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"]; });

/* harmony import */ var _auth_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.selector */ "hFkT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authFeaturesSelector", function() { return _auth_selector__WEBPACK_IMPORTED_MODULE_2__["authFeaturesSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authDetails", function() { return _auth_selector__WEBPACK_IMPORTED_MODULE_2__["authDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userDetails", function() { return _auth_selector__WEBPACK_IMPORTED_MODULE_2__["userDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userConnected", function() { return _auth_selector__WEBPACK_IMPORTED_MODULE_2__["userConnected"]; });

/* harmony import */ var _auth_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.effect */ "byUI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthEffect", function() { return _auth_effect__WEBPACK_IMPORTED_MODULE_3__["AuthEffect"]; });







/***/ }),

/***/ "WceB":
/*!**************************************!*\
  !*** ./src/app/store/shops/index.ts ***!
  \**************************************/
/*! exports provided: LOAD_SHOPS_STARTED, LOAD_SHOPS_COMPLETED, TOGGLE_FILTER, LoadAllShops, LoadShopsCompleted, ToggleFilter, initialState, shopReducer, shopFeaturesSelector, allShops, filteredShops, allFilters, ShopEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.action */ "uzqv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPS_STARTED", function() { return _shop_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_SHOPS_STARTED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPS_COMPLETED", function() { return _shop_action__WEBPACK_IMPORTED_MODULE_0__["LOAD_SHOPS_COMPLETED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_FILTER", function() { return _shop_action__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_FILTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadAllShops", function() { return _shop_action__WEBPACK_IMPORTED_MODULE_0__["LoadAllShops"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadShopsCompleted", function() { return _shop_action__WEBPACK_IMPORTED_MODULE_0__["LoadShopsCompleted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleFilter", function() { return _shop_action__WEBPACK_IMPORTED_MODULE_0__["ToggleFilter"]; });

/* harmony import */ var _shop_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.reducer */ "CCAb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _shop_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopReducer", function() { return _shop_reducer__WEBPACK_IMPORTED_MODULE_1__["shopReducer"]; });

/* harmony import */ var _shop_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.selector */ "empt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopFeaturesSelector", function() { return _shop_selector__WEBPACK_IMPORTED_MODULE_2__["shopFeaturesSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allShops", function() { return _shop_selector__WEBPACK_IMPORTED_MODULE_2__["allShops"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredShops", function() { return _shop_selector__WEBPACK_IMPORTED_MODULE_2__["filteredShops"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allFilters", function() { return _shop_selector__WEBPACK_IMPORTED_MODULE_2__["allFilters"]; });

/* harmony import */ var _shop_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.effect */ "K4Lh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopEffects", function() { return _shop_effect__WEBPACK_IMPORTED_MODULE_3__["ShopEffects"]; });







/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "VxBl");
/* harmony import */ var _shops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shops */ "WceB");


const reducers = {
    auth: _auth__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    shops: _shops__WEBPACK_IMPORTED_MODULE_1__["shopReducer"]
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shop/shop.component */ "yD4g");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_shops__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/shops */ "WceB");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/filter-bar/filter-bar.component */ "nrif");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/auth */ "VxBl");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/header-toolbar/header-toolbar.component */ "2csg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_user_profile_dialog_user_profile_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/user-profile-dialog/user-profile-dialog.component */ "Stuo");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"].enablePersistence(),
            _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_store_shops__WEBPACK_IMPORTED_MODULE_5__["ShopEffects"], _store_auth__WEBPACK_IMPORTED_MODULE_21__["AuthEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_22__["reducers"]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"],
        _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_13__["FilterBarComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__["SidenavComponent"],
        _components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_29__["HeaderToolbarComponent"],
        _components_user_profile_dialog_user_profile_dialog_component__WEBPACK_IMPORTED_MODULE_31__["UserProfileDialogComponent"]], imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"],
                    _components_filter_bar_filter_bar_component__WEBPACK_IMPORTED_MODULE_13__["FilterBarComponent"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_23__["SidenavComponent"],
                    _components_header_toolbar_header_toolbar_component__WEBPACK_IMPORTED_MODULE_29__["HeaderToolbarComponent"],
                    _components_user_profile_dialog_user_profile_dialog_component__WEBPACK_IMPORTED_MODULE_31__["UserProfileDialogComponent"]
                ],
                imports: [
                    _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"].enablePersistence(),
                    _angular_common__WEBPACK_IMPORTED_MODULE_33__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_store_shops__WEBPACK_IMPORTED_MODULE_5__["ShopEffects"], _store_auth__WEBPACK_IMPORTED_MODULE_21__["AuthEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_22__["reducers"]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_32__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_30__["RouterModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aNjW":
/*!*************************************************!*\
  !*** ./src/app/components/shop/shop.service.ts ***!
  \*************************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_shops_shop_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/shops/shop.selector */ "empt");
/* harmony import */ var _store_shops_shop_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/shops/shop.action */ "uzqv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class ShopService {
    constructor(store) {
        this.store = store;
        this.allShops$ = this.store.select(_store_shops_shop_selector__WEBPACK_IMPORTED_MODULE_1__["allShops"]);
        this.filteredShops$ = this.store.select(_store_shops_shop_selector__WEBPACK_IMPORTED_MODULE_1__["filteredShops"]);
        this.store.dispatch(new _store_shops_shop_action__WEBPACK_IMPORTED_MODULE_2__["LoadAllShops"]());
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "byUI":
/*!*******************************************!*\
  !*** ./src/app/store/auth/auth.effect.ts ***!
  \*******************************************/
/*! exports provided: AuthEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffect", function() { return AuthEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.action */ "pgBp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");











class AuthEffect {
    constructor(actions$, afAuth) {
        this.actions$ = actions$;
        this.afAuth = afAuth;
        this.initLogIn$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_action__WEBPACK_IMPORTED_MODULE_3__["INITIATE_LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.popupLogin()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((userCredentials) => {
                // console.log(userCredentials);
                const user = {
                    email: userCredentials.user.email,
                    family_name: userCredentials.additionalUserInfo.profile['family_name'],
                    name: userCredentials.additionalUserInfo.profile['given_name'],
                    full_name: userCredentials.user.displayName,
                    picture: userCredentials.user.photoURL,
                    uid: userCredentials.user.uid,
                };
                const authDetails = {
                    access_token: userCredentials.credential['accessToken'],
                    provider_id: userCredentials.credential.providerId,
                    refresh_token: userCredentials.user.refreshToken,
                    verified_email: userCredentials.user.emailVerified,
                    isNewUser: userCredentials.additionalUserInfo.isNewUser,
                    connected: true
                };
                const payload = {
                    user: user,
                    authDetails: authDetails
                };
                return new _auth_action__WEBPACK_IMPORTED_MODULE_3__["LoginCompleted"](payload);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"]));
        }));
    }
    popupLogin() {
        return this.afAuth.setPersistence(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].Auth.Persistence.LOCAL)
            .then(() => this.afAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider()))
            .catch(error => error);
    }
}
AuthEffect.ɵfac = function AuthEffect_Factory(t) { return new (t || AuthEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"])); };
AuthEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthEffect, factory: AuthEffect.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], AuthEffect.prototype, "initLogIn$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }]; }, { initLogIn$: [] }); })();


/***/ }),

/***/ "empt":
/*!**********************************************!*\
  !*** ./src/app/store/shops/shop.selector.ts ***!
  \**********************************************/
/*! exports provided: shopFeaturesSelector, allShops, filteredShops, allFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopFeaturesSelector", function() { return shopFeaturesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allShops", function() { return allShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredShops", function() { return filteredShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allFilters", function() { return allFilters; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const shopFeaturesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('shops');
const allShops = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(shopFeaturesSelector, (state) => state.shops);
const filteredShops = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(shopFeaturesSelector, (state) => {
    const activeFilters = [];
    const filteredShopsList = new Set();
    state.filters.forEach(f => {
        if (f.active) {
            activeFilters.push(f.type);
        }
    });
    if (activeFilters.length !== 0) {
        state.shops.forEach(shop => {
            activeFilters.forEach(filterType => {
                if (filterType === shop.store_type || shop.attire_type.find((attire) => filterType === attire)) {
                    filteredShopsList.add(shop);
                }
            });
        });
        return filteredShopsList;
    }
    return state.shops;
});
const allFilters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(shopFeaturesSelector, (state) => state.filters);


/***/ }),

/***/ "hFkT":
/*!*********************************************!*\
  !*** ./src/app/store/auth/auth.selector.ts ***!
  \*********************************************/
/*! exports provided: authFeaturesSelector, authDetails, userDetails, userConnected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFeaturesSelector", function() { return authFeaturesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authDetails", function() { return authDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userDetails", function() { return userDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userConnected", function() { return userConnected; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const authFeaturesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
const authDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeaturesSelector, (state) => state);
const userDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeaturesSelector, (state) => state.user);
const userConnected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeaturesSelector, (state) => state.authDetails.connected);


/***/ }),

/***/ "nrif":
/*!***************************************************************!*\
  !*** ./src/app/components/filter-bar/filter-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: FilterBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBarComponent", function() { return FilterBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.service */ "/Er4");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FilterBarComponent_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterBarComponent_mat_chip_8_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const chip_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleFilter(chip_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chip_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", ctx_r0.chipColor.get(chip_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chip_r1.type, " ");
} }
class FilterBarComponent {
    constructor(filterService) {
        this.filterService = filterService;
        this.panelOpenState = false;
        this.chipColor = new Map([
            [true, 'primary'],
            [false, 'accent']
        ]);
        this.filterChips$ = this.filterService.allFilters$;
    }
    ngOnInit() {
    }
    toggleFilter(chip) {
        this.filterService.toggleFilter(chip.type);
    }
}
FilterBarComponent.ɵfac = function FilterBarComponent_Factory(t) { return new (t || FilterBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"])); };
FilterBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterBarComponent, selectors: [["app-filter-bar"]], decls: 10, vars: 3, consts: [[1, "expansion-panel", 3, "opened", "closed"], ["aria-label", "Fish selection"], [1, "chips-container"], ["selected", "", 3, "color", "click", 4, "ngFor", "ngForOf"], ["selected", "", 3, "color", "click"]], template: function FilterBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FilterBarComponent_Template_mat_expansion_panel_opened_1_listener() { return ctx.panelOpenState = true; })("closed", function FilterBarComponent_Template_mat_expansion_panel_closed_1_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Filter By: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilterBarComponent_mat_chip_8_Template, 2, 2, "mat-chip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx.filterChips$));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__["MatChip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".expansion-panel[_ngcontent-%COMP%] {\r\n  max-width: 25em;\r\n}\r\n\r\n.chips-container[_ngcontent-%COMP%] {\r\n  padding-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItYmFyL2ZpbHRlci1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci1iYXIvZmlsdGVyLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWF4LXdpZHRoOiAyNWVtO1xyXG59XHJcblxyXG4uY2hpcHMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMWVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-bar',
                templateUrl: './filter-bar.component.html',
                styleUrls: ['./filter-bar.component.css']
            }]
    }], function () { return [{ type: _filter_service__WEBPACK_IMPORTED_MODULE_1__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "pgBp":
/*!*******************************************!*\
  !*** ./src/app/store/auth/auth.action.ts ***!
  \*******************************************/
/*! exports provided: INITIATE_LOGIN, LOGIN_COMPLETED, LOGOUT, CHECK_USER_LOGIN, InitiateLogin, LoginCompleted, CheckForUserLogin, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIATE_LOGIN", function() { return INITIATE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_COMPLETED", function() { return LOGIN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USER_LOGIN", function() { return CHECK_USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiateLogin", function() { return InitiateLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCompleted", function() { return LoginCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckForUserLogin", function() { return CheckForUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
const INITIATE_LOGIN = '[Auth] Initiate Login';
const LOGIN_COMPLETED = '[Auth] Login Completed';
const LOGOUT = '[Auth] Logout';
const CHECK_USER_LOGIN = '[Auth] Check User Login';
class InitiateLogin {
    constructor() {
        this.type = INITIATE_LOGIN;
    }
}
class LoginCompleted {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_COMPLETED;
    }
}
class CheckForUserLogin {
    constructor(payload) {
        this.payload = payload;
        this.type = CHECK_USER_LOGIN;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}


/***/ }),

/***/ "pja6":
/*!********************************************!*\
  !*** ./src/app/store/auth/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.action */ "pgBp");

const initialState = {
    user: undefined,
    authDetails: {
        isNewUser: null,
        verified_email: null,
        access_token: null,
        provider_id: null,
        refresh_token: null,
        connected: false
    }
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _auth_action__WEBPACK_IMPORTED_MODULE_0__["LOGIN_COMPLETED"]:
            return Object.assign(Object.assign({}, state), { user: action.payload.user, authDetails: action.payload.authDetails });
        case _auth_action__WEBPACK_IMPORTED_MODULE_0__["CHECK_USER_LOGIN"]:
            if (action.payload.authDetails.refresh_token === undefined) {
                return state;
            }
            return Object.assign(Object.assign({}, state), { user: action.payload.user, authDetails: action.payload.authDetails });
        case _auth_action__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
            return Object.assign(Object.assign({}, state), { user: initialState.user, authDetails: initialState.authDetails });
        default:
            return state;
    }
}


/***/ }),

/***/ "uzqv":
/*!********************************************!*\
  !*** ./src/app/store/shops/shop.action.ts ***!
  \********************************************/
/*! exports provided: LOAD_SHOPS_STARTED, LOAD_SHOPS_COMPLETED, TOGGLE_FILTER, LoadAllShops, LoadShopsCompleted, ToggleFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPS_STARTED", function() { return LOAD_SHOPS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPS_COMPLETED", function() { return LOAD_SHOPS_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_FILTER", function() { return TOGGLE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllShops", function() { return LoadAllShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadShopsCompleted", function() { return LoadShopsCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFilter", function() { return ToggleFilter; });
const LOAD_SHOPS_STARTED = '[Shops] Load Shops';
const LOAD_SHOPS_COMPLETED = '[Shops] Load Shops Successful';
const TOGGLE_FILTER = '[Shops] TOGGLE FILTER';
class LoadAllShops {
    constructor() {
        this.type = LOAD_SHOPS_STARTED;
    }
}
class LoadShopsCompleted {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SHOPS_COMPLETED;
    }
}
class ToggleFilter {
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_FILTER;
    }
}


/***/ }),

/***/ "yD4g":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.service */ "aNjW");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function ShopComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Country: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Merchandise: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shop_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", shop_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", shop_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", shop_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", shop_r1.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", shop_r1.attire_type, "/", shop_r1.store_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://instagram.com/", shop_r1.social_media_tag.replace("@", ""), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", shop_r1.social_media);
} }
class ShopComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.shops$ = this.shopService.allShops$;
        this.filteredShops$ = this.shopService.filteredShops$;
    }
    ngOnInit() {
        this.columns = this.columnNumber();
    }
    columnNumber() {
        let columnNumber;
        const windowWidth = window.innerWidth;
        if (windowWidth <= 525) {
            columnNumber = 1;
        }
        else if (windowWidth <= 800) {
            columnNumber = 2;
        }
        else if (windowWidth <= 1320) {
            columnNumber = 3;
        }
        else if (windowWidth <= 2560) {
            columnNumber = 5;
        }
        else {
            columnNumber = 4;
        }
        return columnNumber;
    }
    onResize() {
        this.columns = this.columnNumber();
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], hostBindings: function ShopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ShopComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 4, consts: [["rowHeight", "1:1.5", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "content"], ["matRipple", "", 1, "mat-elevation-z4"], ["target", "_blank", 3, "href"], [1, "shop_image", 3, "src"], ["mat-icon-button", "", "target", "_blank", 3, "href"], ["src", "../../../assets/images/instagram_icon.png", 1, "insta_img", 3, "alt"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_mat_grid_tile_1_Template, 21, 8, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("cols", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.filteredShops$));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["span[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\n.shop_image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.insta_img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n  height: auto;\r\n}\r\n\r\nmat-card-content[_ngcontent-%COMP%] {\r\n  padding-top: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2hvcF9pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5zdGFfaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.css']
            }]
    }], function () { return [{ type: _shop_service__WEBPACK_IMPORTED_MODULE_1__["ShopService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
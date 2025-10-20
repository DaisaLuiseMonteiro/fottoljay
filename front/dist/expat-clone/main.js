"use strict";
(self["webpackChunkexpat_clone"] = self["webpackChunkexpat_clone"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/register/register.component */ 6698);
/* harmony import */ var _pages_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard-admin/dashboard-admin.component */ 1534);
/* harmony import */ var _pages_dashboard_vendeur_dashboard_vendeur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard-vendeur/dashboard-vendeur.component */ 3418);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_admin_vendeurs_admin_vendeurs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin-vendeurs/admin-vendeurs.component */ 252);
/* harmony import */ var _pages_admin_produits_admin_produits_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/admin-produits/admin-produits.component */ 1480);
/* harmony import */ var _pages_admin_notifications_admin_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/admin-notifications/admin-notifications.component */ 7991);
/* harmony import */ var _pages_buy_credits_buy_credits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/buy-credits/buy-credits.component */ 4119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [{
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: 'admin/dashboard',
  component: _pages_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__.DashboardAdminComponent
}, {
  path: 'admin/vendeurs',
  component: _pages_admin_vendeurs_admin_vendeurs_component__WEBPACK_IMPORTED_MODULE_5__.AdminVendeursComponent
}, {
  path: 'admin/produits',
  component: _pages_admin_produits_admin_produits_component__WEBPACK_IMPORTED_MODULE_6__.AdminProduitsComponent
}, {
  path: 'admin/notifications',
  component: _pages_admin_notifications_admin_notifications_component__WEBPACK_IMPORTED_MODULE_7__.AdminNotificationsComponent
}, {
  path: 'vendeur/dashboard',
  component: _pages_dashboard_vendeur_dashboard_vendeur_component__WEBPACK_IMPORTED_MODULE_3__.DashboardVendeurComponent
}, {
  path: 'buy-credits',
  component: _pages_buy_credits_buy_credits_component__WEBPACK_IMPORTED_MODULE_8__.BuyCreditsComponent
}, {
  path: 'home',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'expat-clone';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register/register.component */ 6698);
/* harmony import */ var _pages_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard-admin/dashboard-admin.component */ 1534);
/* harmony import */ var _pages_dashboard_vendeur_dashboard_vendeur_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard-vendeur/dashboard-vendeur.component */ 3418);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_admin_vendeurs_admin_vendeurs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/admin-vendeurs/admin-vendeurs.component */ 252);
/* harmony import */ var _pages_admin_produits_admin_produits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin-produits/admin-produits.component */ 1480);
/* harmony import */ var _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/admin-navbar/admin-navbar.component */ 9210);
/* harmony import */ var _pages_admin_notifications_admin_notifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/admin-notifications/admin-notifications.component */ 7991);
/* harmony import */ var _pages_buy_credits_buy_credits_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/buy-credits/buy-credits.component */ 4119);




















(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_13__["default"]);
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_14__.LOCALE_ID,
        useValue: 'fr-FR'
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _pages_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_4__.DashboardAdminComponent, _pages_dashboard_vendeur_dashboard_vendeur_component__WEBPACK_IMPORTED_MODULE_5__.DashboardVendeurComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _pages_admin_vendeurs_admin_vendeurs_component__WEBPACK_IMPORTED_MODULE_7__.AdminVendeursComponent, _pages_admin_produits_admin_produits_component__WEBPACK_IMPORTED_MODULE_8__.AdminProduitsComponent, _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_9__.AdminNavbarComponent, _pages_admin_notifications_admin_notifications_component__WEBPACK_IMPORTED_MODULE_10__.AdminNotificationsComponent, _pages_buy_credits_buy_credits_component__WEBPACK_IMPORTED_MODULE_11__.BuyCreditsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_18__.NgChartsModule]
  });
})();

/***/ }),

/***/ 1454:
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_CATEGORIES": () => (/* binding */ PRODUCT_CATEGORIES)
/* harmony export */ });
const PRODUCT_CATEGORIES = [{
  value: 'AGROALIMENTAIRE',
  label: 'Agroalimentaire'
}, {
  value: 'ANIMAUX',
  label: 'Animaux'
}, {
  value: 'IMMOBILIER',
  label: 'Immobilier'
}, {
  value: 'MAISON',
  label: 'Maison'
}, {
  value: 'EQUIPEMENT',
  label: 'Équipement'
}, {
  value: 'MODE_BEAUTE',
  label: 'Mode & Beauté'
}, {
  value: 'MULTIMEDIA',
  label: 'Multimédia'
}, {
  value: 'SPORT_LOISIRS',
  label: 'Sport & Loisirs'
}, {
  value: 'VEHICULES',
  label: 'Véhicules'
}, {
  value: 'AUTRE',
  label: 'Autre'
}];

/***/ }),

/***/ 7991:
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin-notifications/admin-notifications.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminNotificationsComponent": () => (/* binding */ AdminNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/admin-navbar/admin-navbar.component */ 9210);








const _c0 = function (a0, a1) {
  return {
    "border-l-blue-500": a0,
    "border-l-orange-500": a1
  };
};
const _c1 = function (a0, a1) {
  return {
    "bg-blue-100 text-blue-600": a0,
    "bg-orange-100 text-orange-600": a1
  };
};
function AdminNotificationsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "div", 33)(4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 35)(7, "div", 36)(8, "div")(9, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, notification_r4.type === "new_seller", notification_r4.type === "new_product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c1, notification_r4.type === "new_seller", notification_r4.type === "new_product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r4.type === "new_seller" ? "\uD83D\uDC64" : "\uD83D\uDCE6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](notification_r4.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 6, notification_r4.createdAt, "dd/MM/yyyy \u00E0 HH:mm"));
  }
}
function AdminNotificationsComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDD14");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "aucune notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Vous serez notifi\u00E9 des nouvelles activit\u00E9s sur la plateforme.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminNotificationsComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Chargement des notifications...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminNotificationsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNotificationsComponent_div_50_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNotificationsComponent_div_50_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.currentPage, " / ", ctx_r3.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.currentPage === ctx_r3.totalPages);
  }
}
class AdminNotificationsComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.currentUser = null;
    this.notifications = [];
    this.loading = false;
    this.currentPage = 1;
    this.totalPages = 1;
    this.routerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  resetNavbarUnreadCount() {
    // Reset the unread count in the navbar by calling the service
    this.userService.resetUnreadNotificationsCount().subscribe({
      next: () => {
        // Count will be reset to 0 in the navbar via route change listener
      },
      error: error => {
        console.error('Error resetting unread notifications count:', error);
      }
    });
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.loadNotifications();
    // Listen to route changes to reload notifications when navigating to this page
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      if (event.url === '/admin/notifications') {
        this.loadNotifications();
        // Reset unread count in navbar when entering notifications page
        this.resetNavbarUnreadCount();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
  loadNotifications(page = 1) {
    this.loading = true;
    this.userService.getNotifications(page, 4).subscribe({
      next: response => {
        this.notifications = response.notifications.map(notification => ({
          id: notification.id,
          type: notification.type === 'NEW_SELLER' ? 'new_seller' : 'new_product',
          title: notification.title,
          message: notification.message,
          createdAt: new Date(notification.createdAt),
          read: notification.read,
          sellerId: notification.sellerId,
          productId: notification.productId
        }));
        this.currentPage = response.pagination.page;
        this.totalPages = response.pagination.totalPages;
        this.loading = false;
      },
      error: error => {
        console.error('Error loading notifications:', error);
        this.loading = false;
      }
    });
  }
  markAsRead(notification) {
    this.userService.markNotificationAsRead(notification.id.toString()).subscribe({
      next: () => {
        notification.read = true;
      },
      error: error => {
        console.error('Error marking notification as read:', error);
      }
    });
  }
  approveProduct(notification) {
    if (notification.productId) {
      this.userService.updateProductStatus(notification.productId.toString(), 'APPROVED').subscribe({
        next: () => {
          this.markAsRead(notification);
          alert('Produit approuvé avec succès!');
          this.loadNotifications(); // Refresh notifications
        },

        error: error => {
          console.error('Error approving product:', error);
          alert('Erreur lors de l\'approbation du produit');
        }
      });
    }
  }
  rejectProduct(notification) {
    if (notification.productId) {
      this.userService.updateProductStatus(notification.productId.toString(), 'REJECTED').subscribe({
        next: () => {
          this.markAsRead(notification);
          alert('Produit rejeté!');
          this.loadNotifications(); // Refresh notifications
        },

        error: error => {
          console.error('Error rejecting product:', error);
          alert('Erreur lors du rejet du produit');
        }
      });
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadNotifications(this.currentPage + 1);
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.loadNotifications(this.currentPage - 1);
    }
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: error => {
        console.error('Logout error:', error);
        this.router.navigate(['/login']);
      }
    });
  }
  static {
    this.ɵfac = function AdminNotificationsComponent_Factory(t) {
      return new (t || AdminNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminNotificationsComponent,
      selectors: [["app-admin-notifications"]],
      decls: 51,
      vars: 4,
      consts: [[1, "flex", "h-screen", "bg-gray-100"], [1, "w-56", "bg-orange-500", "text-white", "flex", "flex-col", "fixed", "h-full", "z-10"], [1, "p-5", "border-b", "border-orange-400"], [1, "text-xl", "font-bold", "text-center"], [1, "flex-1", "py-5"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "ml-3"], ["routerLink", "/admin/vendeurs", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], ["routerLink", "/admin/produits", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["routerLink", "/admin/notifications", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["routerLink", "/admin/parametres", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "py-5", "border-t", "border-orange-400"], [1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors", "w-full", "text-left", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "ml-56", "flex", "flex-col"], [1, "flex-1", "p-8", "pt-20"], [1, "mb-6"], [1, "text-3xl", "font-bold", "mb-2"], [1, "text-gray-600"], [1, "space-y-4"], ["class", "bg-white rounded-lg shadow-md p-4 border-l-4", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-center py-12", 4, "ngIf"], ["class", "flex justify-center mt-6", 4, "ngIf"], [1, "bg-white", "rounded-lg", "shadow-md", "p-4", "border-l-4", 3, "ngClass"], [1, "flex", "items-start", "space-x-4"], [1, "flex-shrink-0"], [1, "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", 3, "ngClass"], [1, "text-xl"], [1, "flex-1"], [1, "flex", "items-start", "justify-between"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "text-gray-600", "mt-1"], [1, "text-sm", "text-gray-500", "mt-2"], [1, "flex", "items-center", "space-x-2"], [1, "text-center", "py-12"], [1, "text-gray-400", "text-6xl", "mb-4"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-gray-500"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-orange-500", "mx-auto"], [1, "text-gray-500", "mt-4"], [1, "flex", "justify-center", "mt-6"], [1, "px-4", "py-2", "mx-1", "bg-gray-300", "text-gray-700", "rounded", "hover:bg-gray-400", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], [1, "px-4", "py-2", "mx-1"]],
      template: function AdminNotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 4)(6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Tableau de bord");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Vendeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 16)(29, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminNotificationsComponent_Template_button_click_33_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-admin-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22)(41, "div", 23)(42, "h1", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Restez inform\u00E9 de l'activit\u00E9 de la plateforme");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AdminNotificationsComponent_div_47_Template, 17, 15, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AdminNotificationsComponent_div_48_Template, 7, 0, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AdminNotificationsComponent_div_49_Template, 4, 0, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, AdminNotificationsComponent_div_50_Template, 7, 4, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.notifications);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.notifications.length === 0 && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__.AdminNavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4tbm90aWZpY2F0aW9ucy9hZG1pbi1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1480:
/*!******************************************************************!*\
  !*** ./src/app/pages/admin-produits/admin-produits.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminProduitsComponent": () => (/* binding */ AdminProduitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/admin-navbar/admin-navbar.component */ 9210);









function AdminProduitsComponent_tr_77_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function AdminProduitsComponent_tr_77_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onImageError($event, product_r4.photos == null ? null : product_r4.photos[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r4.mainPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r4.name);
  }
}
function AdminProduitsComponent_tr_77_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminProduitsComponent_tr_77_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 58)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDC51");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " VIP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProduitsComponent_tr_77_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "bg-yellow-100 text-yellow-800": a0,
    "bg-green-100 text-green-800": a1,
    "bg-red-100 text-red-800": a2
  };
};
function AdminProduitsComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AdminProduitsComponent_tr_77_img_2_Template, 1, 2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AdminProduitsComponent_tr_77_div_3_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 43)(11, "div", 46)(12, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 43)(15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AdminProduitsComponent_tr_77_span_16_Template, 4, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AdminProduitsComponent_tr_77_span_17_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td", 51)(19, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_tr_77_Template_button_click_19_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.openProductModal(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 17)(22, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r4.mainPhoto && product_r4.mainPhoto !== "http://localhost:4200/assets/images/no-image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !product_r4.mainPhoto || product_r4.mainPhoto === "http://localhost:4200/assets/images/no-image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", product_r4.price, " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", product_r4.seller == null ? null : product_r4.seller.firstName, " ", product_r4.seller == null ? null : product_r4.seller.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](10, _c0, product_r4.status === "PENDING", product_r4.status === "APPROVED", product_r4.status === "REJECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r4.status === "PENDING" ? "En attente" : product_r4.status === "APPROVED" ? "Approuv\u00E9" : "Rejet\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r4.vipStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r4.vipStatus !== 1);
  }
}
function AdminProduitsComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61)(1, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_78_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_78_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.currentPage, " / ", ctx_r1.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function AdminProduitsComponent_div_79_div_12_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_79_div_12_img_1_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const photo_r25 = restoredCtx.$implicit;
      const i_r26 = restoredCtx.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.openPhotoModal(ctx_r27.getPhotoUrl(photo_r25.url), ctx_r27.selectedProduct.name + " - " + (i_r26 + 2)));
    })("error", function AdminProduitsComponent_div_79_div_12_img_1_Template_img_error_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const photo_r25 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.onImageError($event, photo_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r24.getPhotoUrl(photo_r25.url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r24.selectedProduct.name + " - " + (i_r26 + 2));
  }
}
function AdminProduitsComponent_div_79_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminProduitsComponent_div_79_div_12_img_1_Template, 1, 2, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r18.selectedProduct.photos.slice(1, 5));
  }
}
function AdminProduitsComponent_div_79_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 96)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCF7 Aucune photo secondaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Ce produit n'a que sa photo principale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AdminProduitsComponent_div_79_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 86)(1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r20.selectedProduct.seller.phone);
  }
}
function AdminProduitsComponent_div_79_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 86)(1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.selectedProduct.seller.city);
  }
}
function AdminProduitsComponent_div_79_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_79_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r30.approveProduct(ctx_r30.selectedProduct.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.closeProductModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u2713 Approuver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProduitsComponent_div_79_button_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_79_button_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      ctx_r32.rejectProduct(ctx_r32.selectedProduct.id);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.closeProductModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u2717 Rejeter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AdminProduitsComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "div", 67)(4, "h2", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "D\u00E9tails du produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_79_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.closeProductModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 70)(9, "div", 71)(10, "div", 72)(11, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function AdminProduitsComponent_div_79_Template_img_error_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.onImageError($event, ctx_r36.selectedProduct.photos == null ? null : ctx_r36.selectedProduct.photos[0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AdminProduitsComponent_div_79_div_12_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AdminProduitsComponent_div_79_div_13_Template, 5, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 76)(15, "div")(16, "h3", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "h4", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "h4", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 83)(35, "h4", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Informations du vendeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 85)(38, "div", 86)(39, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 86)(44, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\uD83D\uDCE7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AdminProduitsComponent_div_79_div_48_Template, 5, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AdminProduitsComponent_div_79_div_49_Template, 5, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, AdminProduitsComponent_div_79_button_51_Template, 2, 0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, AdminProduitsComponent_div_79_button_52_Template, 2, 0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.selectedProduct.mainPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r2.selectedProduct.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedProduct.photos && ctx_r2.selectedProduct.photos.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.selectedProduct.photos || ctx_r2.selectedProduct.photos.length <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedProduct.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedProduct.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](23, 17, ctx_r2.selectedProduct.price, "", "fr-FR"), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedProduct.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](21, _c0, ctx_r2.selectedProduct.status === "PENDING", ctx_r2.selectedProduct.status === "APPROVED", ctx_r2.selectedProduct.status === "REJECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedProduct.status === "PENDING" ? "En attente" : ctx_r2.selectedProduct.status === "APPROVED" ? "Approuv\u00E9" : "Rejet\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r2.selectedProduct.seller.firstName, " ", ctx_r2.selectedProduct.seller.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.selectedProduct.seller.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedProduct.seller.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedProduct.seller.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedProduct.status === "PENDING");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedProduct.status === "PENDING");
  }
}
function AdminProduitsComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 100)(1, "div", 101)(2, "div", 102)(3, "div", 103)(4, "h3", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_div_80_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.closePhotoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.selectedPhotoAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.selectedPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r3.selectedPhotoAlt);
  }
}
class AdminProduitsComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.currentUser = null;
    this.products = [];
    this.allProducts = [];
    this.loadingProducts = false;
    this.loading = false;
    this.routerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    // Search and filter properties
    this.searchQuery = '';
    this.selectedFilter = 'all';
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalPages = 1;
    this.totalProducts = 0;
    // Modal methods
    this.showProductModal = false;
    this.selectedProduct = null;
    // Photo modal properties
    this.showPhotoModal = false;
    this.selectedPhotoUrl = null;
    this.selectedPhotoAlt = '';
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.loadProducts();
    // Listen to route changes to reload data when navigating to this page
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      if (event.url === '/admin/produits') {
        this.loadProducts();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
  loadProducts() {
    console.log('🔄 Début du chargement des produits...');
    this.loadingProducts = true;
    this.userService.getPendingProducts().subscribe({
      next: response => {
        this.loadingProducts = false;
        this.allProducts = response.products || [];
        // Apply filters
        this.applyFilters();
        console.log('✅ Produits chargés avec succès:', this.products.length, 'produits affichés sur', this.totalProducts, 'total');
        console.log('📋 Détails des produits:', this.products);
      },
      error: error => {
        this.loadingProducts = false;
        console.error('❌ Erreur lors du chargement des produits:', error);
        console.error('🔍 Détails de l\'erreur:', error.error || error.message);
        this.products = [];
        this.allProducts = [];
      }
    });
  }
  isActiveRoute(route) {
    return this.router.url === route;
  }
  getPhotoUrl(url) {
    if (!url) return 'assets/images/no-image.png';
    // If URL already starts with http/https, return as is (Cloudinary URL)
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // Otherwise, prepend localhost for local uploads
    return `http://localhost:3000${url}`;
  }
  onImageError(event, photo) {
    console.log('Image failed to load:', photo?.url || 'No photo data');
    // Prevent infinite loop by checking if we're already trying to load the fallback
    if (!event.target.src.includes('no-image.png')) {
      event.target.src = 'assets/images/no-image.png'; // Fallback image
    }
  }

  applyFilters() {
    let filteredProducts = [...this.allProducts];
    // Apply search filter
    if (this.searchQuery && this.searchQuery.length >= 2) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || product.seller?.firstName?.toLowerCase().includes(this.searchQuery.toLowerCase()) || product.seller?.lastName?.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    // Apply status filter
    if (this.selectedFilter !== 'all') {
      if (this.selectedFilter === 'VIP') {
        filteredProducts = filteredProducts.filter(product => product.vipStatus === 1);
      } else {
        filteredProducts = filteredProducts.filter(product => product.status === this.selectedFilter);
      }
    }
    // Calculate pagination
    this.totalProducts = filteredProducts.length;
    this.totalPages = Math.ceil(this.totalProducts / this.itemsPerPage);
    // Reset to first page if current page is out of bounds
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
    // Get products for current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.products = filteredProducts.slice(startIndex, endIndex);
  }
  // Search method
  onSearchInput() {
    this.currentPage = 1; // Reset to first page when searching
    this.applyFilters();
  }
  // Filter method
  onFilterChange() {
    this.currentPage = 1; // Reset to first page when filtering
    this.applyFilters();
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: error => {
        console.error('Logout error:', error);
        this.router.navigate(['/login']);
      }
    });
  }
  openProductModal(product) {
    this.selectedProduct = product;
    this.showProductModal = true;
  }
  closeProductModal() {
    this.showProductModal = false;
    this.selectedProduct = null;
  }
  // Photo modal methods
  openPhotoModal(photoUrl, alt) {
    this.selectedPhotoUrl = photoUrl;
    this.selectedPhotoAlt = alt;
    this.showPhotoModal = true;
  }
  closePhotoModal() {
    this.showPhotoModal = false;
    this.selectedPhotoUrl = null;
    this.selectedPhotoAlt = '';
  }
  // Pagination methods
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilters();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilters();
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyFilters();
    }
  }
  approveProduct(productId) {
    this.loading = true;
    this.userService.updateProductStatus(productId, 'APPROVED').subscribe({
      next: () => {
        this.loading = false;
        // Update the product status in the local array immediately
        const productIndex = this.allProducts.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
          this.allProducts[productIndex].status = 'APPROVED';
          this.applyFilters(); // Re-apply filters to update the displayed list
        }
        // Update the selected product status to hide buttons
        if (this.selectedProduct && this.selectedProduct.id === productId) {
          this.selectedProduct.status = 'APPROVED';
        }
      },
      error: error => {
        this.loading = false;
        console.error('Erreur lors de l\'approbation du produit');
      }
    });
  }
  rejectProduct(productId) {
    this.loading = true;
    this.userService.updateProductStatus(productId, 'REJECTED').subscribe({
      next: () => {
        this.loading = false;
        // Update the product status in the local array immediately
        const productIndex = this.allProducts.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
          this.allProducts[productIndex].status = 'REJECTED';
          this.applyFilters(); // Re-apply filters to update the displayed list
        }
        // Update the selected product status to hide buttons
        if (this.selectedProduct && this.selectedProduct.id === productId) {
          this.selectedProduct.status = 'REJECTED';
        }
      },
      error: error => {
        this.loading = false;
        console.error('Erreur lors du rejet du produit');
      }
    });
  }
  toggleFeatured(productId, event) {
    const isFeatured = event.target.checked;
    this.userService.updateProductStatus(productId, 'APPROVED', isFeatured).subscribe({
      next: () => {
        // Update the product featured status in the local array
        const productIndex = this.allProducts.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
          this.allProducts[productIndex].isFeatured = isFeatured;
        }
        // Update the selected product status
        if (this.selectedProduct && this.selectedProduct.id === productId) {
          this.selectedProduct.isFeatured = isFeatured;
        }
      },
      error: error => {
        console.error('Erreur lors de la mise à jour du statut mis en avant');
        // Revert checkbox on error
        event.target.checked = !isFeatured;
      }
    });
  }
  static {
    this.ɵfac = function AdminProduitsComponent_Factory(t) {
      return new (t || AdminProduitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminProduitsComponent,
      selectors: [["app-admin-produits"]],
      decls: 81,
      vars: 6,
      consts: [[1, "flex", "h-screen", "bg-gray-100"], [1, "w-56", "bg-orange-500", "text-white", "flex", "flex-col", "fixed", "h-full", "z-10"], [1, "p-5", "border-b", "border-orange-400"], [1, "text-xl", "font-bold", "text-center"], [1, "flex-1", "py-5"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "ml-3"], ["routerLink", "/admin/vendeurs", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], ["routerLink", "/admin/produits", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["routerLink", "/admin/notifications", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["routerLink", "/admin/parametres", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "py-5", "border-t", "border-orange-400"], [1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors", "w-full", "text-left", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "ml-56", "flex", "flex-col"], [1, "flex-1", "p-8"], [1, "text-2xl", "font-bold", "mb-6"], [1, "bg-white", "p-4", "rounded-lg", "shadow-md", "mb-6"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["type", "text", "placeholder", "Rechercher un produit par nom ou vendeur...", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", 3, "ngModel", "ngModelChange", "input"], [1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", 3, "ngModel", "ngModelChange", "change"], ["value", "all"], ["value", "PENDING"], ["value", "APPROVED"], ["value", "REJECTED"], ["value", "VIP"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden"], [1, "w-full"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf"], ["class", "flex justify-center mt-6", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4", "style", "z-index: 9999;", 4, "ngIf"], [1, "px-6", "py-4", "whitespace-nowrap"], ["class", "w-16 h-16 object-cover rounded", 3, "src", "alt", "error", 4, "ngIf"], ["class", "w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-500 rounded", 4, "ngIf"], [1, "flex", "flex-col", "space-y-1"], [1, "px-2", "inline-flex", "text-xs", "leading-5", "font-semibold", "rounded-full", 3, "ngClass"], [1, "flex", "items-center"], ["class", "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-white", 4, "ngIf"], ["class", "text-gray-400 text-xs", 4, "ngIf"], [1, "px-6", "py-4", "whitespace-nowrap", "text-sm", "font-medium"], [1, "text-blue-600", "hover:text-blue-900", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "inline"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "w-16", "h-16", "object-cover", "rounded", 3, "src", "alt", "error"], [1, "w-16", "h-16", "bg-gray-200", "flex", "items-center", "justify-center", "text-gray-500", "rounded"], [1, "text-xs"], [1, "inline-flex", "items-center", "px-2", "py-1", "rounded-full", "text-xs", "font-medium", "bg-gradient-to-r", "from-yellow-400", "to-yellow-600", "text-white"], [1, "mr-1"], [1, "text-gray-400", "text-xs"], [1, "flex", "justify-center", "mt-6"], [1, "px-4", "py-2", "mx-1", "bg-gray-300", "text-gray-700", "rounded", "hover:bg-gray-400", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], [1, "px-4", "py-2", "mx-1"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-lg", "shadow-xl", "max-w-4xl", "w-full", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "text-gray-500", "hover:text-gray-700", "text-2xl", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], [1, "space-y-4"], [1, "aspect-w-4", "aspect-h-3", "bg-gray-100", "rounded-lg", "overflow-hidden"], [1, "w-full", "h-64", "object-cover", 3, "src", "alt", "error"], ["class", "grid grid-cols-4 gap-2", 4, "ngIf"], ["class", "text-center py-4 text-gray-500 bg-gray-50 rounded", 4, "ngIf"], [1, "space-y-6"], [1, "text-xl", "font-semibold", "text-gray-800", "mb-2"], [1, "text-sm", "text-blue-600", "bg-blue-50", "px-3", "py-1", "rounded-full", "inline-block"], [1, "text-3xl", "font-bold", "text-orange-500", "mb-2"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-2"], [1, "text-gray-600", "leading-relaxed"], [1, "px-3", "py-1", "text-sm", "font-semibold", "rounded-full", 3, "ngClass"], [1, "bg-gray-50", "p-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-4"], [1, "space-y-3"], [1, "flex", "items-center", "space-x-3"], [1, "text-gray-500"], [1, "font-medium"], ["class", "flex items-center space-x-3", 4, "ngIf"], [1, "flex", "space-x-3"], ["class", "flex-1 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium", 3, "click", 4, "ngIf"], ["class", "flex-1 bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium", 3, "click", 4, "ngIf"], [1, "grid", "grid-cols-4", "gap-2"], ["class", "w-full h-16 object-cover rounded cursor-pointer border-2 hover:border-blue-500", 3, "src", "alt", "click", "error", 4, "ngFor", "ngForOf"], [1, "w-full", "h-16", "object-cover", "rounded", "cursor-pointer", "border-2", "hover:border-blue-500", 3, "src", "alt", "click", "error"], [1, "text-center", "py-4", "text-gray-500", "bg-gray-50", "rounded"], [1, "text-sm"], [1, "flex-1", "bg-green-500", "text-white", "px-4", "py-3", "rounded-lg", "hover:bg-green-600", "transition-colors", "font-medium", 3, "click"], [1, "flex-1", "bg-red-500", "text-white", "px-4", "py-3", "rounded-lg", "hover:bg-red-600", "transition-colors", "font-medium", 3, "click"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-75", "flex", "items-center", "justify-center", "z-50", "p-4", 2, "z-index", "9999"], [1, "bg-white", "rounded-lg", "shadow-xl", "max-w-4xl", "w-full", "max-h-[90vh]", "overflow-hidden"], [1, "p-4"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-lg", "font-semibold", "text-gray-800"], [1, "flex", "justify-center"], [1, "max-w-full", "max-h-[70vh]", "object-contain", "rounded", 3, "src", "alt"]],
      template: function AdminProduitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 4)(6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Tableau de bord");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Vendeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 16)(29, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminProduitsComponent_Template_button_click_33_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-admin-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22)(41, "h2", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Liste des produits en attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 24)(44, "div", 25)(45, "div", 26)(46, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminProduitsComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.searchQuery = $event;
          })("input", function AdminProduitsComponent_Template_input_input_46_listener() {
            return ctx.onSearchInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminProduitsComponent_Template_select_ngModelChange_47_listener($event) {
            return ctx.selectedFilter = $event;
          })("change", function AdminProduitsComponent_Template_select_change_47_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Tous les produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "En attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Approuv\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Rejet\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Produits VIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 34)(59, "table", 35)(60, "thead", 36)(61, "tr")(62, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Prix");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Vendeur");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Statut");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "VIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "th", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "D\u00E9tails");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tbody", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, AdminProduitsComponent_tr_77_Template, 23, 14, "tr", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, AdminProduitsComponent_div_78_Template, 7, 4, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, AdminProduitsComponent_div_79_Template, 53, 25, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, AdminProduitsComponent_div_80_Template, 10, 3, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showProductModal && ctx.selectedProduct);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPhotoModal && ctx.selectedPhotoUrl);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__.AdminNavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 252:
/*!******************************************************************!*\
  !*** ./src/app/pages/admin-vendeurs/admin-vendeurs.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminVendeursComponent": () => (/* binding */ AdminVendeursComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/admin-navbar/admin-navbar.component */ 9210);









function AdminVendeursComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const seller_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](seller_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](seller_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](seller_r2.phone || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](seller_r2.city || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](seller_r2.credits);
  }
}
function AdminVendeursComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminVendeursComponent_div_70_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminVendeursComponent_div_70_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.currentPage, " / ", ctx_r1.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
class AdminVendeursComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.currentUser = null;
    this.sellers = [];
    this.allSellers = []; // Store all sellers for filtering
    this.loadingSellers = false;
    this.routerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 8;
    this.totalPages = 1;
    this.totalSellers = 0;
    // Search properties
    this.searchQuery = '';
    this.selectedFilter = 'all'; // 'all', 'vip', 'simple'
  }

  ngOnInit() {
    this.loadCurrentUser();
    this.loadSellers();
    // Listen to route changes to reload sellers when navigating to this page
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      if (event.url === '/admin/vendeurs') {
        this.loadSellers();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
  loadSellers(page = 1) {
    console.log('🔄 Début du chargement des vendeurs - Page:', page, 'Limit:', this.itemsPerPage);
    this.loadingSellers = true;
    this.userService.getAllSellers(page, this.itemsPerPage).subscribe({
      next: response => {
        this.loadingSellers = false;
        this.sellers = response.sellers || [];
        this.allSellers = response.sellers || []; // For frontend filtering
        // Update pagination info from backend
        this.currentPage = response.pagination?.page || 1;
        this.totalSellers = response.pagination?.total || 0;
        this.totalPages = response.pagination?.totalPages || 1;
        console.log('✅ Vendeurs chargés avec succès:', this.sellers.length, 'vendeurs affichés sur', this.totalSellers, 'total');
        console.log('📄 Pagination - Page:', this.currentPage, 'Total pages:', this.totalPages, 'Total vendeurs:', this.totalSellers);
        console.log('� Détails des vendeurs:', this.sellers);
      },
      error: error => {
        this.loadingSellers = false;
        console.error('❌ Erreur lors du chargement des vendeurs:', error);
        console.error('🔍 Détails de l\'erreur:', error.error || error.message);
        this.sellers = [];
        this.allSellers = [];
      }
    });
  }
  applyFilters() {
    let filteredSellers = [...this.allSellers];
    // Apply type filter
    if (this.selectedFilter === 'vip') {
      filteredSellers = filteredSellers.filter(seller => seller.credits > 0);
    } else if (this.selectedFilter === 'simple') {
      filteredSellers = filteredSellers.filter(seller => seller.credits === 0);
    }
    // 'all' shows all sellers
    // Apply search filter
    if (this.searchQuery && this.searchQuery.length >= 2) {
      filteredSellers = filteredSellers.filter(seller => seller.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    // Calculate pagination
    this.totalSellers = filteredSellers.length;
    this.totalPages = Math.ceil(this.totalSellers / this.itemsPerPage);
    // Reset to first page if current page is out of bounds
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
    // Get sellers for current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.sellers = filteredSellers.slice(startIndex, endIndex);
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: error => {
        console.error('Logout error:', error);
        this.router.navigate(['/login']);
      }
    });
  }
  // Search method
  onSearchInput() {
    this.currentPage = 1; // Reset to first page when searching
    this.applyFilters();
  }
  // Filter method
  onFilterChange() {
    this.currentPage = 1; // Reset to first page when filtering
    this.applyFilters();
  }
  // Pagination methods
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadSellers(this.currentPage);
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadSellers(this.currentPage);
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadSellers(this.currentPage);
    }
  }
  static {
    this.ɵfac = function AdminVendeursComponent_Factory(t) {
      return new (t || AdminVendeursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminVendeursComponent,
      selectors: [["app-admin-vendeurs"]],
      decls: 71,
      vars: 4,
      consts: [[1, "flex", "h-screen", "bg-gray-100"], [1, "w-56", "bg-orange-500", "text-white", "flex", "flex-col", "fixed", "h-full", "z-10"], [1, "p-5", "border-b", "border-orange-400"], [1, "text-xl", "font-bold", "text-center"], [1, "flex-1", "py-5"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "ml-3"], ["routerLink", "/admin/vendeurs", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], ["routerLink", "/admin/produits", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["routerLink", "/admin/notifications", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["routerLink", "/admin/parametres", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "py-5", "border-t", "border-orange-400"], [1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors", "w-full", "text-left", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "ml-56", "flex", "flex-col"], [1, "flex-1", "p-8"], [1, "text-2xl", "font-bold", "mb-6"], [1, "bg-white", "p-4", "rounded-lg", "shadow-md", "mb-6"], [1, "flex", "items-center", "space-x-4"], [1, "flex-1"], ["type", "text", "placeholder", "Rechercher un vendeur par nom...", 1, "w-full", "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", 3, "ngModel", "ngModelChange", "input"], [1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", 3, "ngModel", "ngModelChange", "change"], ["value", "all"], ["value", "vip"], ["value", "simple"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden"], [1, "w-full"], [1, "bg-gray-50"], [1, "px-6", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "bg-white", "divide-y", "divide-gray-200"], [4, "ngFor", "ngForOf"], ["class", "flex justify-center mt-6", 4, "ngIf"], [1, "px-6", "py-4", "whitespace-nowrap"], [1, "px-6", "py-4", "whitespace-nowrap", "text-center"], [1, "flex", "justify-center", "mt-6"], [1, "px-4", "py-2", "mx-1", "bg-gray-300", "text-gray-700", "rounded", "hover:bg-gray-400", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], [1, "px-4", "py-2", "mx-1"]],
      template: function AdminVendeursComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 4)(6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Tableau de bord");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Vendeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 16)(29, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminVendeursComponent_Template_button_click_33_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-admin-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22)(41, "h2", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Liste des vendeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 24)(44, "div", 25)(45, "div", 26)(46, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminVendeursComponent_Template_input_ngModelChange_46_listener($event) {
            return ctx.searchQuery = $event;
          })("input", function AdminVendeursComponent_Template_input_input_46_listener() {
            return ctx.onSearchInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "select", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminVendeursComponent_Template_select_ngModelChange_47_listener($event) {
            return ctx.selectedFilter = $event;
          })("change", function AdminVendeursComponent_Template_select_change_47_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Tous les vendeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Vendeurs VIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Vendeurs simples");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 32)(55, "table", 33)(56, "thead", 34)(57, "tr")(58, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Nom");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "T\u00E9l\u00E9phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Cr\u00E9dits VIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "tbody", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, AdminVendeursComponent_tr_69_Template, 11, 5, "tr", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, AdminVendeursComponent_div_70_Template, 7, 4, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sellers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__.AdminNavbarComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4119:
/*!************************************************************!*\
  !*** ./src/app/pages/buy-credits/buy-credits.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyCreditsComponent": () => (/* binding */ BuyCreditsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function BuyCreditsComponent_div_51_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Statut: ", product_r3.status === "PENDING" ? "En attente" : "Refus\u00E9", " ");
  }
}
function BuyCreditsComponent_div_51_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_div_51_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const product_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](product_r3.status === "APPROVED" ? ctx_r6.selectProduct(product_r3) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29)(4, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, BuyCreditsComponent_div_51_div_6_div_12_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opacity-50", product_r3.status !== "APPROVED")("cursor-not-allowed", product_r3.status !== "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (product_r3.photos[0] == null ? null : product_r3.photos[0].url) || "/assets/images/no-image.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 12, product_r3.description, 0, 50), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](11, 16, product_r3.price, "XOF", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r3.status !== "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", (ctx_r1.selectedProduct == null ? null : ctx_r1.selectedProduct.id) === product_r3.id)("disabled", product_r3.status !== "APPROVED");
  }
}
function BuyCreditsComponent_div_51_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_div_51_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.cancelSelection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_div_51_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.purchaseCredits());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Acheter les Cr\u00E9dits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BuyCreditsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20)(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "S\u00E9lectionner un Produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BuyCreditsComponent_div_51_div_6_Template, 14, 21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BuyCreditsComponent_div_51_div_7_Template, 5, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Vous avez s\u00E9lectionn\u00E9 ", ctx_r0.selectedPlan.credits, " cr\u00E9dits pour ", ctx_r0.selectedPlan.duration, " mois. Choisissez le produit que vous souhaitez mettre en avant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.userProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selectedProduct);
  }
}
class BuyCreditsComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.userProducts = [];
    this.selectedPlan = null;
    this.selectedProduct = null;
    this.currentUserCredits = 0;
  }
  ngOnInit() {
    this.loadUserProducts();
    this.loadCurrentUserCredits();
  }
  loadUserProducts() {
    this.userService.getSellerProducts().subscribe({
      next: response => {
        this.userProducts = response.products || [];
      },
      error: error => {
        console.error('Error loading user products:', error);
        this.userProducts = [];
      }
    });
  }
  loadCurrentUserCredits() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUserCredits = response.user?.credits || 0;
      },
      error: error => {
        console.error('Error loading user credits:', error);
        this.currentUserCredits = 0;
      }
    });
  }
  selectPlan(credits, duration) {
    this.selectedPlan = {
      credits,
      duration
    };
    this.selectedProduct = null; // Reset product selection
  }

  selectProduct(product) {
    this.selectedProduct = product;
  }
  cancelSelection() {
    this.selectedPlan = null;
    this.selectedProduct = null;
  }
  purchaseCredits() {
    if (!this.selectedPlan || !this.selectedProduct) {
      return;
    }
    // Call the buy credits API with product selection
    this.userService.buyCredits(this.selectedPlan.credits, this.selectedProduct.id).subscribe({
      next: response => {
        alert(`Crédits achetés avec succès! ${this.selectedPlan.credits} crédits pour le produit "${this.selectedProduct.name}"`);
        // Update current credits
        this.currentUserCredits = response.user.credits;
        // Reset selections
        this.selectedPlan = null;
        this.selectedProduct = null;
        // Reload products to reflect changes
        this.loadUserProducts();
      },
      error: error => {
        console.error('Error purchasing credits:', error);
        alert(`Erreur: ${error.error?.error || 'Erreur lors de l\'achat des crédits'}`);
      }
    });
  }
  static {
    this.ɵfac = function BuyCreditsComponent_Factory(t) {
      return new (t || BuyCreditsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BuyCreditsComponent,
      selectors: [["app-buy-credits"]],
      decls: 52,
      vars: 2,
      consts: [[1, "container", "mx-auto", "px-4", "py-8"], [1, "text-3xl", "font-bold", "text-center", "mb-8"], [1, "bg-gradient-to-r", "from-purple-600", "to-blue-600", "text-white", "rounded-lg", "p-6", "mb-8", "text-center"], [1, "text-2xl", "font-bold", "mb-2"], [1, "text-4xl", "font-bold"], [1, "text-purple-100"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6", "border", "border-gray-200", "hover:shadow-lg", "transition-shadow"], [1, "text-center"], [1, "text-4xl", "font-bold", "text-blue-600", "mb-2"], [1, "text-lg", "font-semibold", "mb-2"], [1, "text-gray-600", "mb-4"], [1, "w-full", "bg-blue-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "text-4xl", "font-bold", "text-green-600", "mb-2"], [1, "w-full", "bg-green-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-green-700", "transition-colors", 3, "click"], [1, "text-4xl", "font-bold", "text-purple-600", "mb-2"], [1, "w-full", "bg-purple-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-purple-700", "transition-colors", 3, "click"], [1, "text-4xl", "font-bold", "text-red-600", "mb-2"], [1, "w-full", "bg-red-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-red-700", "transition-colors", 3, "click"], ["class", "bg-white rounded-lg shadow-md p-6", 4, "ngIf"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6"], [1, "text-2xl", "font-bold", "mb-4"], [1, "text-gray-600", "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4"], ["class", "border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors", 3, "opacity-50", "cursor-not-allowed", "click", 4, "ngFor", "ngForOf"], ["class", "mt-6 flex justify-end space-x-4", 4, "ngIf"], [1, "border", "rounded-lg", "p-4", "cursor-pointer", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "flex", "items-center", "space-x-4"], [1, "w-16", "h-16", "object-cover", "rounded-md", 3, "src", "alt"], [1, "flex-1"], [1, "font-semibold"], [1, "text-sm", "text-gray-600"], [1, "text-sm", "font-medium", "text-green-600"], ["class", "text-xs text-red-600 mt-1", 4, "ngIf"], ["type", "radio", 1, "w-4", "h-4", "text-blue-600", 3, "checked", "disabled"], [1, "text-xs", "text-red-600", "mt-1"], [1, "mt-6", "flex", "justify-end", "space-x-4"], [1, "px-6", "py-2", "border", "border-gray-300", "rounded-md", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-blue-600", "text-white", "rounded-md", "hover:bg-blue-700", "transition-colors", 3, "click"]],
      template: function BuyCreditsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Acheter des Cr\u00E9dits VIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Vos Cr\u00E9dits Actuels");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Cr\u00E9dits disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cr\u00E9dits");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "1 semaine");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_Template_button_click_19_listener() {
            return ctx.selectPlan(5, 1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Souscrire ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7)(22, "div", 8)(23, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "10");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Cr\u00E9dits");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "1 mois");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_Template_button_click_29_listener() {
            return ctx.selectPlan(10, 1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Souscrire ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "20");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cr\u00E9dits");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "1 mois 15 jours");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_Template_button_click_39_listener() {
            return ctx.selectPlan(20, 1.5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Souscrire ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7)(42, "div", 8)(43, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "40");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Cr\u00E9dits");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "2 mois");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCreditsComponent_Template_button_click_49_listener() {
            return ctx.selectPlan(40, 2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Souscrire ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, BuyCreditsComponent_div_51_Template, 8, 4, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentUserCredits);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedPlan);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXktY3JlZGl0cy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYnV5LWNyZWRpdHMvYnV5LWNyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1534:
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-admin/dashboard-admin.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardAdminComponent": () => (/* binding */ DashboardAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/admin-navbar/admin-navbar.component */ 9210);









function DashboardAdminComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total Annonces");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 27)(7, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 27)(12, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Valid\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 27)(17, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Refus\u00E9es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 27)(22, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Vendeurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.totalProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.pendingProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.approvedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.rejectedProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.stats.totalSellers);
  }
}
function DashboardAdminComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "canvas", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "canvas", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.barChartData)("options", ctx_r1.barChartOptions)("type", "bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r1.pieChartData)("options", ctx_r1.pieChartOptions)("type", "pie");
  }
}
function DashboardAdminComponent_div_43_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Aucun vendeur trouv\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardAdminComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Liste des vendeurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardAdminComponent_div_43_div_3_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.loadingSellers && ctx_r2.sellers.length === 0);
  }
}
function DashboardAdminComponent_div_44_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Aucun produit en attente de validation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardAdminComponent_div_44_div_4_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function DashboardAdminComponent_div_44_div_4_div_1_img_4_Template_img_error_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const photo_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onImageError($event, photo_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.getPhotoUrl(photo_r13.url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r8.name + " - " + (i_r14 + 1));
  }
}
function DashboardAdminComponent_div_44_div_4_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65)(1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardAdminComponent_div_44_div_4_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardAdminComponent_div_44_div_4_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.showAllPhotos(product_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Voir toutes les photos (", product_r8.photos.length, ") ");
  }
}
function DashboardAdminComponent_div_44_div_4_div_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r8.seller.phone);
  }
}
function DashboardAdminComponent_div_44_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 46)(3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DashboardAdminComponent_div_44_div_4_div_1_img_4_Template, 1, 2, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashboardAdminComponent_div_44_div_4_div_1_div_5_Template, 3, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DashboardAdminComponent_div_44_div_4_div_1_button_6_Template, 2, 1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 51)(8, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 56)(18, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Vendeur:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DashboardAdminComponent_div_44_div_4_div_1_p_24_Template, 2, 1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 61)(26, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardAdminComponent_div_44_div_4_div_1_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const product_r8 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.approveProduct(product_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u2713 Approuver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardAdminComponent_div_44_div_4_div_1_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const product_r8 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.rejectProduct(product_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " \u2717 Rejeter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", product_r8.photos.slice(0, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r8.photos.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r8.photos.length > 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cat\u00E9gorie: ", product_r8.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](16, 13, product_r8.price, "", "fr-FR"), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", product_r8.seller.firstName, " ", product_r8.seller.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r8.seller.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r8.seller.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.loading);
  }
}
function DashboardAdminComponent_div_44_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardAdminComponent_div_44_div_4_div_1_Template, 30, 17, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.pendingProducts);
  }
}
function DashboardAdminComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "h2", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Produits en attente de validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardAdminComponent_div_44_div_3_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DashboardAdminComponent_div_44_div_4_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.pendingProducts.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.pendingProducts.length > 0);
  }
}
class DashboardAdminComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.currentUser = null;
    this.stats = {
      totalProducts: 0,
      pendingProducts: 0,
      approvedProducts: 0,
      rejectedProducts: 0,
      totalSellers: 0,
      vipProducts: 0
    };
    this.pendingProducts = [];
    this.showPendingProducts = false;
    this.loading = false;
    this.sellers = [];
    this.loadingSellers = false;
    this.routerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    // Chart data
    this.barChartData = {
      labels: ['En attente', 'Validées', 'Refusées'],
      datasets: [{
        data: [0, 0, 0],
        backgroundColor: ['#fbbf24', '#10b981', '#ef4444'],
        borderColor: ['#f59e0b', '#059669', '#dc2626'],
        borderWidth: 1
      }]
    };
    this.barChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Statut des Produits'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
    this.pieChartData = {
      labels: ['Produits Ajoutés', 'Produits VIP'],
      datasets: [{
        data: [0, 0],
        backgroundColor: ['#3b82f6', '#eab308'],
        borderColor: ['#2563eb', '#ca8a04'],
        borderWidth: 1
      }]
    };
    this.pieChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Répartition des Produits'
        }
      }
    };
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.loadStats();
    this.loadPendingProducts();
    this.loadSellers();
    // Listen to route changes to reload sellers when navigating to /admin/vendeurs
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(event => {
      if (event.url === '/admin/vendeurs') {
        this.loadSellers();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
  loadStats() {
    // Calculate stats from all products in the database
    this.userService.getPendingProducts().subscribe({
      next: response => {
        const allProducts = response.products;
        this.stats.totalProducts = allProducts.length;
        this.stats.pendingProducts = allProducts.filter(p => p.status === 'PENDING').length;
        this.stats.approvedProducts = allProducts.filter(p => p.status === 'APPROVED').length;
        this.stats.rejectedProducts = allProducts.filter(p => p.status === 'REJECTED').length;
        this.stats.vipProducts = allProducts.filter(p => p.vipStatus === 1).length;
        this.stats.totalSellers = this.sellers.length;
        // Update charts with new data
        this.updateCharts();
      },
      error: error => {
        console.error('Error loading stats:', error);
        // Fallback values
        this.stats.pendingProducts = this.pendingProducts.length;
        this.stats.totalProducts = this.pendingProducts.length;
        this.stats.approvedProducts = 0;
        this.stats.rejectedProducts = 0;
        this.stats.vipProducts = 0;
        this.stats.totalSellers = this.sellers.length;
        this.updateCharts();
      }
    });
  }
  updateCharts() {
    // Update bar chart data
    this.barChartData = {
      ...this.barChartData,
      datasets: [{
        ...this.barChartData.datasets[0],
        data: [this.stats.pendingProducts, this.stats.approvedProducts, this.stats.rejectedProducts]
      }]
    };
    // Update pie chart data
    this.pieChartData = {
      ...this.pieChartData,
      datasets: [{
        ...this.pieChartData.datasets[0],
        data: [this.stats.totalProducts - this.stats.vipProducts, this.stats.vipProducts]
      }]
    };
  }
  loadPendingProducts() {
    this.userService.getPendingProducts().subscribe({
      next: response => {
        this.pendingProducts = response.products;
        this.loadStats();
      },
      error: error => {
        console.error('Error loading pending products:', error);
      }
    });
  }
  loadSellers() {
    console.log('🔄 Début du chargement des vendeurs...');
    this.loadingSellers = true;
    this.userService.getAllSellers().subscribe({
      next: response => {
        this.loadingSellers = false;
        this.sellers = response.sellers || [];
        console.log('✅ Vendeurs chargés avec succès:', this.sellers.length, 'vendeurs trouvés');
        console.log('📋 Détails des vendeurs:', this.sellers);
      },
      error: error => {
        this.loadingSellers = false;
        console.error('❌ Erreur lors du chargement des vendeurs:', error);
        console.error('🔍 Détails de l\'erreur:', error.error || error.message);
        this.sellers = [];
      }
    });
  }
  approveProduct(productId) {
    this.loading = true;
    this.userService.updateProductStatus(productId, 'APPROVED').subscribe({
      next: () => {
        this.loading = false;
        this.loadPendingProducts(); // Refresh the list
        alert('Produit approuvé avec succès!');
      },
      error: error => {
        this.loading = false;
        alert('Erreur lors de l\'approbation du produit');
      }
    });
  }
  rejectProduct(productId) {
    this.loading = true;
    this.userService.updateProductStatus(productId, 'REJECTED').subscribe({
      next: () => {
        this.loading = false;
        this.loadPendingProducts(); // Refresh the list
        alert('Produit rejeté!');
      },
      error: error => {
        this.loading = false;
        alert('Erreur lors du rejet du produit');
      }
    });
  }
  getPhotoUrl(url) {
    return `http://localhost:3000${url}`;
  }
  onImageError(event, photo) {
    console.log('Image failed to load:', photo.url);
    // Prevent infinite loop by checking if we're already trying to load the fallback
    if (!event.target.src.includes('no-image.png')) {
      event.target.src = 'assets/images/no-image.png'; // Fallback image
    }
  }

  showAllPhotos(product) {
    // For now, just show an alert. In a real app, you'd open a modal
    alert(`Produit "${product.name}" a ${product.photos.length} photos`);
  }
  isActiveRoute(route) {
    return this.router.url === route;
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: error => {
        console.error('Logout error:', error);
        // Even if logout fails, navigate to login
        this.router.navigate(['/login']);
      }
    });
  }
  static {
    this.ɵfac = function DashboardAdminComponent_Factory(t) {
      return new (t || DashboardAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardAdminComponent,
      selectors: [["app-dashboard-admin"]],
      decls: 45,
      vars: 4,
      consts: [[1, "flex", "h-screen", "bg-gray-100"], [1, "w-56", "bg-orange-500", "text-white", "flex", "flex-col", "fixed", "h-full", "z-10"], [1, "p-5", "border-b", "border-orange-400"], [1, "text-xl", "font-bold", "text-center"], [1, "flex-1", "py-5"], ["routerLink", "/admin/dashboard", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], [1, "ml-3"], ["routerLink", "/admin/vendeurs", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"], ["routerLink", "/admin/produits", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"], ["routerLink", "/admin/notifications", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["routerLink", "/admin/parametres", "routerLinkActive", "bg-orange-600", 1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "py-5", "border-t", "border-orange-400"], [1, "flex", "items-center", "px-5", "py-3", "text-white", "hover:bg-orange-600", "transition-colors", "w-full", "text-left", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"], [1, "flex-1", "ml-56", "flex", "flex-col"], [1, "flex-1", "p-8", "mt-16", "overflow-y-auto"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8", 4, "ngIf"], ["class", "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-md p-6 mb-8", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-5", "gap-6", "mb-8"], [1, "bg-white", "p-6", "rounded-lg", "shadow-md", "text-center", "hover:shadow-lg", "transition-shadow"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-2"], [1, "text-3xl", "font-bold", "text-orange-500"], [1, "text-3xl", "font-bold", "text-yellow-500"], [1, "text-3xl", "font-bold", "text-green-500"], [1, "text-3xl", "font-bold", "text-red-500"], [1, "text-3xl", "font-bold", "text-blue-500"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8", "mb-8"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6"], ["baseChart", "", 3, "data", "options", "type"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6", "mb-8"], [1, "text-xl", "font-bold", "mb-6"], ["class", "text-center py-8 text-gray-500", 4, "ngIf"], [1, "text-center", "py-8", "text-gray-500"], ["class", "space-y-6", 4, "ngIf"], [1, "space-y-6"], ["class", "border border-gray-200 rounded-lg p-6", 4, "ngFor", "ngForOf"], [1, "border", "border-gray-200", "rounded-lg", "p-6"], [1, "flex", "flex-col", "lg:flex-row", "gap-6"], [1, "flex-shrink-0"], [1, "grid", "grid-cols-2", "gap-2"], ["class", "w-20 h-20 object-cover rounded border", 3, "src", "alt", "error", 4, "ngFor", "ngForOf"], ["class", "w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500 rounded border", 4, "ngIf"], ["class", "mt-2 text-sm text-blue-600 hover:text-blue-800 underline", 3, "click", 4, "ngIf"], [1, "flex-grow"], [1, "text-xl", "font-semibold", "mb-2"], [1, "text-gray-600", "mb-2"], [1, "text-sm", "text-blue-600", "mb-2"], [1, "text-lg", "font-bold", "text-orange-500", "mb-2"], [1, "bg-gray-50", "p-3", "rounded", "mb-4"], [1, "font-medium", "mb-1"], [1, "text-sm"], [1, "text-sm", "text-gray-600"], ["class", "text-sm text-gray-600", 4, "ngIf"], [1, "flex", "space-x-3"], [1, "px-4", "py-2", "bg-green-500", "text-white", "rounded", "hover:bg-green-600", "transition-colors", 3, "disabled", "click"], [1, "px-4", "py-2", "bg-red-500", "text-white", "rounded", "hover:bg-red-600", "transition-colors", 3, "disabled", "click"], [1, "w-20", "h-20", "object-cover", "rounded", "border", 3, "src", "alt", "error"], [1, "w-20", "h-20", "bg-gray-200", "flex", "items-center", "justify-center", "text-gray-500", "rounded", "border"], [1, "text-xs"], [1, "mt-2", "text-sm", "text-blue-600", "hover:text-blue-800", "underline", 3, "click"]],
      template: function DashboardAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 4)(6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Tableau de bord");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Vendeurs");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "path", 16)(29, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Param\u00E8tres");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardAdminComponent_Template_button_click_33_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "D\u00E9connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "app-admin-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, DashboardAdminComponent_div_41_Template, 26, 5, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DashboardAdminComponent_div_42_Template, 5, 6, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DashboardAdminComponent_div_43_Template, 4, 1, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, DashboardAdminComponent_div_44_Template, 5, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/dashboard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/dashboard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/vendeurs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPendingProducts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.BaseChartDirective, _shared_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_1__.AdminNavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3418:
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard-vendeur/dashboard-vendeur.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardVendeurComponent": () => (/* binding */ DashboardVendeurComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/product.model */ 1454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function DashboardVendeurComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.currentUser.firstName, " ", ctx_r0.currentUser.lastName, "");
  }
}
function DashboardVendeurComponent_div_40_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le nom du produit est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cat_r20.label);
  }
}
function DashboardVendeurComponent_div_40_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La cat\u00E9gorie est requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " La description est requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_p_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le prix est requis et doit \u00EAtre positif ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_32_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.startCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \uD83D\uDCF7 Prendre une photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardVendeurComponent_div_40_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 59)(3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_33_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.startCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \uD83D\uDD04 Changer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_33_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.removeCapturedImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u274C Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r13.capturedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function DashboardVendeurComponent_div_40_div_34_video_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 73);
  }
}
function DashboardVendeurComponent_div_40_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_34_div_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.removeCapturedImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u274C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r27.capturedImage, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function DashboardVendeurComponent_div_40_div_34_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Chargement de la cam\u00E9ra... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_div_34_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_34_div_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.capturePhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \uD83D\uDCF8 Prendre la photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_34_div_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.stopCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r29.cameraStream);
  }
}
function DashboardVendeurComponent_div_40_div_34_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 78)(1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_34_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.stopCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u2705 Utiliser cette photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_34_div_11_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r38.removeCapturedImage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \uD83D\uDD04 Reprendre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardVendeurComponent_div_40_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "div", 64)(3, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Prendre une photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DashboardVendeurComponent_div_40_div_34_video_6_Template, 1, 0, "video", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DashboardVendeurComponent_div_40_div_34_div_7_Template, 4, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "canvas", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DashboardVendeurComponent_div_40_div_34_div_9_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DashboardVendeurComponent_div_40_div_34_div_10_Template, 5, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DashboardVendeurComponent_div_40_div_34_div_11_Template, 5, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 72)(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.photoCaptured);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.photoCaptured && ctx_r14.capturedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.cameraStream);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.photoCaptured);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.photoCaptured);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Stream actif: ", ctx_r14.cameraStream ? "Oui" : "Non", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Dimensions vid\u00E9o: ", ctx_r14.getVideoDimensions(), "");
  }
}
function DashboardVendeurComponent_div_40_div_35_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Chargement de la cam\u00E9ra... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "div", 64)(3, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Prendre une photo secondaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "video", 83)(7, "canvas", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DashboardVendeurComponent_div_40_div_35_div_8_Template, 2, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 78)(10, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_35_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r40.captureSecondaryPhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \uD83D\uDCF8 Prendre la photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_35_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.stopSecondaryCamera());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.secondaryCameraStream);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r15.secondaryCameraStream);
  }
}
function DashboardVendeurComponent_div_40_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r43.addSecondaryPhoto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 87)(3, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83D\uDCF7 Ajouter une photo secondaire (", ctx_r16.secondaryPhotos.length, "/3) ");
  }
}
function DashboardVendeurComponent_div_40_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_div_41_div_1_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const i_r47 = restoredCtx.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r48.removeSecondaryPhoto(i_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "Photo secondaire ", i_r47 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", photo_r46, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function DashboardVendeurComponent_div_40_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardVendeurComponent_div_40_div_41_div_1_Template, 4, 2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r17.secondaryPhotos);
  }
}
function DashboardVendeurComponent_div_40_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ajout en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ajouter le produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DashboardVendeurComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "h2", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ajouter un nouveau produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function DashboardVendeurComponent_div_40_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.onSubmitProduct());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30)(5, "div")(6, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Nom du produit *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DashboardVendeurComponent_div_40_p_9_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Cat\u00E9gorie *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 35)(14, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "S\u00E9lectionner une cat\u00E9gorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DashboardVendeurComponent_div_40_option_16_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DashboardVendeurComponent_div_40_p_17_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Description *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, DashboardVendeurComponent_div_40_p_22_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Prix *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DashboardVendeurComponent_div_40_p_27_Template, 2, 0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Photo principale *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, DashboardVendeurComponent_div_40_div_32_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DashboardVendeurComponent_div_40_div_33_Template, 7, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, DashboardVendeurComponent_div_40_div_34_Template, 17, 7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, DashboardVendeurComponent_div_40_div_35_Template, 14, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div")(37, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Photos secondaires (max 3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, DashboardVendeurComponent_div_40_button_40_Template, 5, 1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, DashboardVendeurComponent_div_40_div_41_Template, 2, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 50)(43, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, DashboardVendeurComponent_div_40_span_44_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, DashboardVendeurComponent_div_40_span_45_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_40_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.showAddProductForm = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.productForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-red-500", ((tmp_1_0 = ctx_r1.productForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r1.productForm.get("name")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.productForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.productForm.get("name")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-red-500", ((tmp_3_0 = ctx_r1.productForm.get("category")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.productForm.get("category")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.productCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.productForm.get("category")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r1.productForm.get("category")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-red-500", ((tmp_6_0 = ctx_r1.productForm.get("description")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx_r1.productForm.get("description")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r1.productForm.get("description")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.productForm.get("description")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-red-500", ((tmp_8_0 = ctx_r1.productForm.get("price")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx_r1.productForm.get("price")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r1.productForm.get("price")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx_r1.productForm.get("price")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showCamera && !ctx_r1.capturedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.capturedImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showCamera);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showSecondaryCamera);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.secondaryPhotos.length < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.secondaryPhotos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.productForm.invalid || ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function DashboardVendeurComponent_div_41_div_42_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" D\u00E9j\u00E0 VIP (", ctx_r56.getDaysRemaining(product_r55.featuredUntil), "j restants) ");
  }
}
function DashboardVendeurComponent_div_41_div_42_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_div_42_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59);
      const product_r55 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r58.selectProductForCredits(product_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 115)(4, "h4", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, DashboardVendeurComponent_div_41_div_42_div_4_div_12_Template, 2, 1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r55 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-blue-500", (ctx_r54.selectedProductForCredits == null ? null : ctx_r54.selectedProductForCredits.id) === product_r55.id)("opacity-50", product_r55.vipStatus === 1 && product_r55.featuredUntil && ctx_r54.isCurrentlyFeatured(product_r55));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (product_r55.photos[0] == null ? null : product_r55.photos[0].url) || "/assets/images/no-image.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 12, product_r55.description, 0, 50), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](11, 16, product_r55.price, "XOF", "symbol", "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r54.isProductCurrentlyFeatured(product_r55));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", (ctx_r54.selectedProductForCredits == null ? null : ctx_r54.selectedProductForCredits.id) === product_r55.id)("disabled", ctx_r54.isProductCurrentlyFeatured(product_r55));
  }
}
function DashboardVendeurComponent_div_41_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 106)(1, "h3", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "S\u00E9lectionner un produit \u00E0 mettre en avant");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DashboardVendeurComponent_div_41_div_42_div_4_Template, 14, 21, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 110)(6, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_div_42_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r60.cancelCreditsPurchase());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_div_42_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r61);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r62.purchaseCredits());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Acheter les Cr\u00E9dits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r53.sellerProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r53.selectedProductForCredits);
  }
}
function DashboardVendeurComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 9)(2, "div", 93)(3, "div", 94)(4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Cr\u00E9dits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "1 semaine");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r63.selectCreditPlan({
        credits: 5,
        duration: 1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 93)(13, "div", 94)(14, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Cr\u00E9dits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "1 mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r65.selectCreditPlan({
        credits: 10,
        duration: 1
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 93)(23, "div", 94)(24, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Cr\u00E9dits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "1 mois 15 jours");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r66.selectCreditPlan({
        credits: 20,
        duration: 1.5
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 93)(33, "div", 94)(34, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "40");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Cr\u00E9dits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "2 mois");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_41_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r67.selectCreditPlan({
        credits: 40,
        duration: 2
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DashboardVendeurComponent_div_41_div_42_Template, 10, 2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-gray-400", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 5 ? "S\u00E9lectionn\u00E9" : "Souscrire", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-gray-400", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 10 ? "S\u00E9lectionn\u00E9" : "Souscrire", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-gray-400", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 20 ? "S\u00E9lectionn\u00E9" : "Souscrire", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-gray-400", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r2.selectedPlan == null ? null : ctx_r2.selectedPlan.credits) === 40 ? "S\u00E9lectionn\u00E9" : "Souscrire", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedPlan);
  }
}
function DashboardVendeurComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 122)(1, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Refus\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "En attente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Valid\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardVendeurComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 126)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Chargement des produits...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardVendeurComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 126)(1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Aucun produit trouv\u00E9. Ajoutez votre premier produit !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardVendeurComponent_div_45_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83D\uDCF7 ", product_r69.photos.length, " ");
  }
}
function DashboardVendeurComponent_div_45_div_1_div_10_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", ctx_r76.getDaysRemaining(product_r69.featuredUntil), "j) ");
  }
}
function DashboardVendeurComponent_div_45_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 144)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDC51");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "VIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DashboardVendeurComponent_div_45_div_1_div_10_span_5_Template, 2, 1, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r69.featuredUntil);
  }
}
function DashboardVendeurComponent_div_45_div_1_div_19_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function DashboardVendeurComponent_div_45_div_1_div_19_img_1_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r83.onImageError($event));
    })("click", function DashboardVendeurComponent_div_45_div_1_div_19_img_1_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84);
      const photo_r81 = restoredCtx.$implicit;
      const i_r82 = restoredCtx.index;
      const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r85.openPhotoModal(photo_r81.url, product_r69.name + " - photo " + (i_r82 + 2)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const photo_r81 = ctx.$implicit;
    const i_r82 = ctx.index;
    const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", photo_r81.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r69.name + " - photo " + (i_r82 + 2));
  }
}
function DashboardVendeurComponent_div_45_div_1_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" +", product_r69.photos.length - 4, " ");
  }
}
function DashboardVendeurComponent_div_45_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardVendeurComponent_div_45_div_1_div_19_img_1_Template, 1, 2, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DashboardVendeurComponent_div_45_div_1_div_19_div_2_Template, 2, 1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", product_r69.photos.slice(1, 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r69.photos.length > 4);
  }
}
function DashboardVendeurComponent_div_45_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 152)(1, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_45_div_1_div_20_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r90.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 154)(4, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_45_div_1_div_20_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r91);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r92.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r73.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r73.currentPage, " / ", ctx_r73.totalPages, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r73.currentPage === ctx_r73.totalPages);
  }
}
function DashboardVendeurComponent_div_45_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 156)(1, "div", 157)(2, "div", 132)(3, "div", 158)(4, "h3", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_div_45_div_1_div_21_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r93.closePhotoModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r74.selectedPhotoAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r74.selectedPhotoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r74.selectedPhotoAlt);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "bg-green-100 text-green-800": a0,
    "bg-yellow-100 text-yellow-800": a1,
    "bg-red-100 text-red-800": a2
  };
};
function DashboardVendeurComponent_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 129)(1, "div", 74)(2, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function DashboardVendeurComponent_div_45_div_1_Template_img_error_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r95.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DashboardVendeurComponent_div_45_div_1_div_3_Template, 2, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 132)(5, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 133)(8, "p", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DashboardVendeurComponent_div_45_div_1_div_10_Template, 6, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 137)(14, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DashboardVendeurComponent_div_45_div_1_div_19_Template, 3, 2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DashboardVendeurComponent_div_45_div_1_div_20_Template, 8, 4, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DashboardVendeurComponent_div_45_div_1_div_21_Template, 10, 3, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r69.mainPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r69.photos && product_r69.photos.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r69.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r69.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r69.vipStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r69.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](16, 13, product_r69.price, "", "fr-FR"), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](17, _c0, product_r69.status === "APPROVED", product_r69.status === "PENDING", product_r69.status === "REJECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r69.status === "APPROVED" ? "Valid\u00E9" : product_r69.status === "PENDING" ? "En attente" : "Refus\u00E9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r69.photos && product_r69.photos.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r68.totalPages > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r68.showPhotoModal && ctx_r68.selectedPhotoUrl);
  }
}
function DashboardVendeurComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardVendeurComponent_div_45_div_1_Template, 22, 21, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.sellerProducts);
  }
}
class DashboardVendeurComponent {
  constructor(userService, router, fb) {
    this.userService = userService;
    this.router = router;
    this.fb = fb;
    this.currentUser = null;
    this.showAddProductForm = false;
    this.productCategories = _models_product_model__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_CATEGORIES;
    this.loading = false;
    this.sellerProducts = [];
    this.allSellerProducts = [];
    this.loadingProducts = false;
    // Pagination properties
    this.currentPage = 1;
    this.itemsPerPage = 6;
    this.totalPages = 1;
    this.totalProducts = 0;
    // Camera properties
    this.showCamera = false;
    this.capturedImage = null;
    this.cameraStream = null;
    this.photoCaptured = false;
    // Secondary photos properties
    this.secondaryPhotos = [];
    this.secondaryPhotoFiles = [];
    // Secondary camera properties
    this.showSecondaryCamera = false;
    this.secondaryCameraStream = null;
    // Photo modal properties
    this.showPhotoModal = false;
    this.selectedPhotoUrl = null;
    this.selectedPhotoAlt = '';
    // Credits view properties
    this.showCreditsView = false;
    this.selectedPlan = null;
    this.selectedProductForCredits = null;
    this.productForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)]],
      mainPhoto: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      secondaryPhotos: [null]
    });
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.loadSellerProducts();
  }
  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if logout fails, clear local state
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      }
    });
  }
  buyCredits() {
    this.showCreditsView = true;
    this.showAddProductForm = false; // Hide add product form if open
  }

  selectCreditPlan(plan) {
    this.selectedPlan = plan;
  }
  selectProductForCredits(product) {
    this.selectedProductForCredits = product;
  }
  purchaseCredits() {
    if (!this.selectedPlan || !this.selectedProductForCredits) {
      alert('Veuillez sélectionner un plan et un produit');
      return;
    }
    this.userService.buyCredits(this.selectedPlan.credits, this.selectedProductForCredits.id).subscribe({
      next: response => {
        // Update credits locally
        if (this.currentUser) {
          this.currentUser.credits = response.user.credits;
        }
        alert(`Crédits achetés avec succès! ${this.selectedPlan.credits} crédits pour le produit "${this.selectedProductForCredits.name}"`);
        this.showCreditsView = false;
        this.selectedPlan = null;
        this.selectedProductForCredits = null;
        // Refresh products to show VIP status
        this.loadSellerProducts();
      },
      error: error => {
        console.error('Error purchasing credits:', error);
        alert('Erreur lors de l\'achat des crédits');
      }
    });
  }
  cancelCreditsPurchase() {
    this.showCreditsView = false;
    this.selectedPlan = null;
    this.selectedProductForCredits = null;
  }
  loadSellerProducts() {
    this.loadingProducts = true;
    this.userService.getSellerProducts().subscribe({
      next: response => {
        this.loadingProducts = false;
        this.allSellerProducts = response.products || [];
        this.applyPagination();
      },
      error: error => {
        this.loadingProducts = false;
        console.error('Error loading seller products:', error);
        this.allSellerProducts = [];
        this.sellerProducts = [];
      }
    });
  }
  applyPagination() {
    this.totalProducts = this.allSellerProducts.length;
    this.totalPages = Math.ceil(this.totalProducts / this.itemsPerPage);
    // Reset to first page if current page is out of bounds
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
    // Get products for current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.sellerProducts = this.allSellerProducts.slice(startIndex, endIndex);
  }
  onSubmitProduct() {
    if (this.productForm.valid) {
      this.loading = true;
      const formData = new FormData();
      formData.append('name', this.productForm.value.name);
      formData.append('description', this.productForm.value.description);
      formData.append('price', this.productForm.value.price);
      formData.append('category', this.productForm.value.category);
      // Add main photo
      if (this.productForm.value.mainPhoto) {
        formData.append('photos', this.productForm.value.mainPhoto);
      }
      // Add secondary photos from camera captures
      if (this.secondaryPhotoFiles.length > 0) {
        for (let i = 0; i < this.secondaryPhotoFiles.length; i++) {
          formData.append('photos', this.secondaryPhotoFiles[i]);
        }
      }
      this.userService.createProduct(formData).subscribe({
        next: response => {
          this.loading = false;
          this.showAddProductForm = false;
          this.productForm.reset();
          this.capturedImage = null;
          this.photoCaptured = false;
          this.showCamera = false;
          this.secondaryPhotos = [];
          this.secondaryPhotoFiles = [];
          // Stop all cameras if still running
          if (this.cameraStream) {
            this.cameraStream.getTracks().forEach(track => track.stop());
            this.cameraStream = null;
          }
          if (this.secondaryCameraStream) {
            this.secondaryCameraStream.getTracks().forEach(track => track.stop());
            this.secondaryCameraStream = null;
          }
          this.loadSellerProducts(); // Refresh products list
        },

        error: error => {
          this.loading = false;
          console.error('Product creation error:', error);
          if (error.error && error.error.errors && Array.isArray(error.error.errors)) {
            // Validation errors from express-validator
            const errorMessages = error.error.errors.map(err => err.message).join(', ');
            alert('Erreurs de validation: ' + errorMessages);
          } else if (error.error && error.error.error) {
            // Other backend errors
            alert('Erreur: ' + error.error.error);
          } else {
            alert('Erreur lors de l\'ajout du produit: ' + (error.message || 'Erreur inconnue'));
          }
        }
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires correctement.');
    }
  }
  getProductsByStatus(status) {
    return this.sellerProducts.filter(product => product.status === status).length;
  }
  getVipProductsCount() {
    return this.sellerProducts.filter(product => product.isFeatured).length;
  }
  getDaysRemaining(featuredUntil) {
    if (!featuredUntil) return 0;
    const endDate = new Date(featuredUntil);
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  }
  isProductCurrentlyFeatured(product) {
    return !!(product.vipStatus === 1 && product.featuredUntil && new Date(product.featuredUntil) > new Date());
  }
  isCurrentlyFeatured(product) {
    return !!(product.featuredUntil && new Date(product.featuredUntil) > new Date());
  }
  onImageError(event) {
    console.error('Image failed to load:', event.target.src);
    event.target.src = 'https://via.placeholder.com/300x200?text=Image+non+disponible';
  }
  // Camera methods
  startCamera() {
    this.showCamera = true;
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(stream => {
      this.cameraStream = stream;
      const videoElement = document.getElementById('cameraVideo');
      if (videoElement) {
        videoElement.srcObject = stream;
      }
    }).catch(error => {
      console.error('Error accessing camera:', error);
      alert('Erreur lors de l\'accès à la caméra');
      this.showCamera = false;
    });
  }
  stopCamera() {
    this.showCamera = false;
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
    // Don't reset capturedImage and photoCaptured here - keep the photo for display
  }

  capturePhoto() {
    const videoElement = document.getElementById('cameraVideo');
    const canvasElement = document.getElementById('cameraCanvas');
    if (videoElement && canvasElement && videoElement.readyState >= 2) {
      // HAVE_CURRENT_DATA or higher
      console.log('Video dimensions:', videoElement.videoWidth, 'x', videoElement.videoHeight);
      console.log('Video ready state:', videoElement.readyState);
      const context = canvasElement.getContext('2d');
      if (context) {
        // Set canvas size to match video
        canvasElement.width = videoElement.videoWidth || 640;
        canvasElement.height = videoElement.videoHeight || 480;
        // Draw the current video frame to canvas
        try {
          context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
          console.log('Image drawn to canvas');
          // Create data URL for immediate preview
          this.capturedImage = canvasElement.toDataURL('image/jpeg');
          this.photoCaptured = true;
          // Convert canvas to blob and create file
          canvasElement.toBlob(blob => {
            if (blob) {
              console.log('Blob created, size:', blob.size);
              const file = new File([blob], 'captured-photo.jpg', {
                type: 'image/jpeg'
              });
              // Update form control
              this.productForm.patchValue({
                mainPhoto: file
              });
              console.log('Photo captured successfully');
            } else {
              console.error('Failed to create blob from canvas');
            }
          }, 'image/jpeg', 0.9); // High quality JPEG
        } catch (error) {
          console.error('Error drawing to canvas:', error);
        }
      }
    } else {
      console.error('Video not ready or elements not found. Ready state:', videoElement?.readyState);
    }
  }
  confirmPhoto() {
    this.showCamera = false;
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
  }
  retakePhoto() {
    this.capturedImage = null;
  }
  removeCapturedImage() {
    this.capturedImage = null;
    this.photoCaptured = false;
    this.productForm.patchValue({
      mainPhoto: null
    });
  }
  getVideoDimensions() {
    const videoElement = document.getElementById('cameraVideo');
    if (videoElement) {
      return `${videoElement.videoWidth || 0} x ${videoElement.videoHeight || 0}`;
    }
    return 'N/A';
  }
  // Secondary photos methods
  addSecondaryPhoto() {
    this.startSecondaryCamera();
  }
  startSecondaryCamera() {
    this.showSecondaryCamera = true;
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(stream => {
      this.secondaryCameraStream = stream;
      const videoElement = document.getElementById('secondaryCameraVideo');
      if (videoElement) {
        videoElement.srcObject = stream;
      }
    }).catch(error => {
      console.error('Error accessing camera:', error);
      alert('Erreur lors de l\'accès à la caméra');
      this.showSecondaryCamera = false;
    });
  }
  captureSecondaryPhoto() {
    const videoElement = document.getElementById('secondaryCameraVideo');
    const canvasElement = document.getElementById('secondaryCameraCanvas');
    if (videoElement && canvasElement && this.secondaryPhotos.length < 3) {
      const context = canvasElement.getContext('2d');
      if (context) {
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        context.drawImage(videoElement, 0, 0);
        const imageUrl = canvasElement.toDataURL('image/jpeg');
        const file = new File([this.dataURLToBlob(imageUrl)], `secondary-photo-${this.secondaryPhotos.length + 1}.jpg`, {
          type: 'image/jpeg'
        });
        this.secondaryPhotos.push(imageUrl);
        this.secondaryPhotoFiles.push(file);
      }
    }
    this.stopSecondaryCamera();
  }
  stopSecondaryCamera() {
    this.showSecondaryCamera = false;
    if (this.secondaryCameraStream) {
      this.secondaryCameraStream.getTracks().forEach(track => track.stop());
      this.secondaryCameraStream = null;
    }
  }
  removeSecondaryPhoto(index) {
    this.secondaryPhotos.splice(index, 1);
    this.secondaryPhotoFiles.splice(index, 1);
  }
  dataURLToBlob(dataURL) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime
    });
  }
  // Photo modal methods
  openPhotoModal(photoUrl, alt) {
    this.selectedPhotoUrl = photoUrl;
    this.selectedPhotoAlt = alt;
    this.showPhotoModal = true;
  }
  closePhotoModal() {
    this.showPhotoModal = false;
    this.selectedPhotoUrl = null;
    this.selectedPhotoAlt = '';
  }
  // Pagination methods
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyPagination();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyPagination();
    }
  }
  goToPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyPagination();
    }
  }
  static {
    this.ɵfac = function DashboardVendeurComponent_Factory(t) {
      return new (t || DashboardVendeurComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardVendeurComponent,
      selectors: [["app-dashboard-vendeur"]],
      decls: 46,
      vars: 12,
      consts: [[1, "min-h-screen", "bg-gray-100"], [1, "bg-white", "shadow-md", "px-8", "py-4", "flex", "justify-between", "items-center"], [1, "flex", "items-center"], [1, "text-2xl", "font-bold", "text-orange-500"], [1, "flex", "items-center", "space-x-6"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "p-2", "text-gray-600", "hover:text-orange-500", "transition-colors"], [1, "p-2", "text-gray-600", "hover:text-red-500", "transition-colors", 3, "click"], [1, "p-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-4", "gap-6", "mb-8"], [1, "bg-white", "p-6", "rounded-lg", "shadow-md", "text-center", "hover:shadow-lg", "transition-shadow"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-2"], [1, "text-3xl", "font-bold", "text-orange-500"], [1, "text-sm", "text-gray-500", "mt-1"], [1, "text-3xl", "font-bold", "text-yellow-500"], [1, "text-3xl", "font-bold", "text-green-500"], [1, "text-3xl", "font-bold", "text-blue-500"], [1, "flex", "space-x-4", "mb-8"], [1, "px-6", "py-3", "bg-orange-500", "text-white", "rounded-lg", "hover:bg-orange-600", "transition-colors", "font-medium", 3, "click"], [1, "px-6", "py-3", "bg-purple-600", "text-white", "rounded-lg", "hover:bg-purple-700", "transition-colors", "font-medium", 3, "click"], ["class", "bg-white p-6 rounded-lg shadow-md mb-8", 4, "ngIf"], ["class", "flex space-x-4 mb-6", 4, "ngIf"], ["class", "text-center py-8", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], [1, "text-gray-600"], [1, "font-medium"], [1, "bg-white", "p-6", "rounded-lg", "shadow-md", "mb-8"], [1, "text-xl", "font-bold", "mb-4"], [1, "space-y-4", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["for", "name", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Nom du produit", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["class", "mt-1 text-sm text-red-600", 4, "ngIf"], ["for", "category", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "category", "formControlName", "category", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Description du produit", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "price", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "0.00", "min", "0", "step", "0.01", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "mainPhoto", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1"], ["class", "flex items-center space-x-4", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50", "style", "z-index: 9999;", 4, "ngIf"], ["for", "secondaryPhotos", 1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1", "space-y-2"], ["type", "button", "class", "inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500", 3, "click", 4, "ngIf"], ["class", "grid grid-cols-2 md:grid-cols-3 gap-2", 4, "ngIf"], [1, "flex", "space-x-4"], ["type", "submit", 1, "px-6", "py-2", "bg-orange-500", "text-white", "rounded-lg", "hover:bg-orange-600", "transition-colors", "font-medium", "disabled:opacity-50", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "px-6", "py-2", "bg-gray-500", "text-white", "rounded-lg", "hover:bg-gray-600", "transition-colors", "font-medium", 3, "click"], [1, "mt-1", "text-sm", "text-red-600"], [3, "value"], [1, "flex", "items-center", "space-x-4"], ["type", "button", 1, "px-4", "py-2", "bg-blue-500", "text-white", "rounded", "hover:bg-blue-600", "transition-colors", 3, "click"], ["alt", "Photo captur\u00E9e", 1, "w-18", "h-16", "object-cover", "rounded", "border", 3, "src"], [1, "flex", "flex-col", "space-y-1"], ["type", "button", 1, "px-3", "py-1", "bg-blue-500", "text-white", "text-xs", "rounded", "hover:bg-blue-600", "transition-colors", 3, "click"], ["type", "button", 1, "px-3", "py-1", "bg-red-500", "text-white", "text-xs", "rounded", "hover:bg-red-600", "transition-colors", 3, "click"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-75", "flex", "items-center", "justify-center", "z-50", 2, "z-index", "9999"], [1, "bg-white", "rounded-lg", "p-6", "w-full", "max-w-md", "mx-4", 2, "width", "90%", "max-width", "500px"], [1, "text-center", "mb-4"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "relative", "bg-gray-100", "p-2", "rounded"], ["id", "cameraVideo", "class", "w-full h-64 object-cover border rounded bg-black", "autoplay", "", "playsinline", "", "muted", "", "style", "display: block;", 4, "ngIf"], ["class", "relative", 4, "ngIf"], ["id", "cameraCanvas", 1, "w-full", "h-64", "object-cover", "border", "rounded", 2, "display", "none"], ["class", "absolute inset-0 flex items-center justify-center text-gray-500", 4, "ngIf"], ["class", "flex justify-center space-x-4", 4, "ngIf"], [1, "mt-4", "text-xs", "text-gray-500", "text-center"], ["id", "cameraVideo", "autoplay", "", "playsinline", "", "muted", "", 1, "w-full", "h-64", "object-cover", "border", "rounded", "bg-black", 2, "display", "block"], [1, "relative"], ["alt", "Photo captur\u00E9e", 1, "w-full", "h-64", "object-cover", "border", "rounded", 3, "src"], ["type", "button", "title", "Supprimer cette photo", 1, "absolute", "top-2", "right-2", "bg-red-500", "text-white", "rounded-full", "w-8", "h-8", "flex", "items-center", "justify-center", "hover:bg-red-600", 3, "click"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center", "text-gray-500"], [1, "flex", "justify-center", "space-x-4"], ["type", "button", 1, "px-6", "py-2", "bg-green-500", "text-white", "rounded", "hover:bg-green-600", "transition-colors", 3, "disabled", "click"], ["type", "button", 1, "px-6", "py-2", "bg-red-500", "text-white", "rounded", "hover:bg-red-600", "transition-colors", 3, "click"], ["type", "button", 1, "px-6", "py-2", "bg-green-500", "text-white", "rounded", "hover:bg-green-600", "transition-colors", 3, "click"], ["type", "button", 1, "px-6", "py-2", "bg-blue-500", "text-white", "rounded", "hover:bg-blue-600", "transition-colors", 3, "click"], ["id", "secondaryCameraVideo", "autoplay", "", "playsinline", "", "muted", "", 1, "w-full", "h-64", "object-cover", "border", "rounded", "bg-black", 2, "display", "block"], ["id", "secondaryCameraCanvas", 1, "w-full", "h-64", "object-cover", "border", "rounded", 2, "display", "none"], ["type", "button", 1, "inline-flex", "items-center", "px-4", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "text-sm", "font-medium", "text-gray-700", "bg-white", "hover:bg-gray-50", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-orange-500", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 13a3 3 0 11-6 0 3 3 0 016 0z"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-2"], ["class", "relative", 4, "ngFor", "ngForOf"], [1, "w-full", "h-20", "object-cover", "rounded", "border", 3, "src", "alt"], ["type", "button", 1, "absolute", "top-1", "right-1", "bg-red-500", "text-white", "rounded-full", "w-5", "h-5", "flex", "items-center", "justify-center", "text-xs", "hover:bg-red-600", 3, "click"], [1, "bg-white", "rounded-lg", "shadow-md", "p-6", "border", "border-gray-200", "hover:shadow-lg", "transition-shadow"], [1, "text-center"], [1, "text-4xl", "font-bold", "text-blue-600", "mb-2"], [1, "text-lg", "font-semibold", "mb-2"], [1, "text-gray-600", "mb-4"], [1, "w-full", "bg-blue-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "text-4xl", "font-bold", "text-green-600", "mb-2"], [1, "w-full", "bg-green-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-green-700", "transition-colors", 3, "click"], [1, "text-4xl", "font-bold", "text-purple-600", "mb-2"], [1, "w-full", "bg-purple-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-purple-700", "transition-colors", 3, "click"], [1, "text-4xl", "font-bold", "text-red-600", "mb-2"], [1, "w-full", "bg-red-600", "text-white", "py-2", "px-4", "rounded-md", "hover:bg-red-700", "transition-colors", 3, "click"], ["class", "border-t pt-6", 4, "ngIf"], [1, "border-t", "pt-6"], [1, "text-lg", "font-semibold", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4", "mb-6"], ["class", "border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors", 3, "border-blue-500", "opacity-50", "click", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-4"], [1, "px-6", "py-2", "border", "border-gray-300", "rounded-md", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "px-6", "py-2", "bg-blue-600", "text-white", "rounded-md", "hover:bg-blue-700", "transition-colors", 3, "disabled", "click"], [1, "border", "rounded-lg", "p-4", "cursor-pointer", "hover:bg-gray-50", "transition-colors", 3, "click"], [1, "w-16", "h-16", "object-cover", "rounded-md", 3, "src", "alt"], [1, "flex-1"], [1, "font-semibold"], [1, "text-sm", "text-gray-600"], [1, "text-sm", "font-medium", "text-green-600"], ["class", "text-xs text-orange-600 mt-1", 4, "ngIf"], ["type", "radio", 1, "w-4", "h-4", "text-blue-600", 3, "checked", "disabled"], [1, "text-xs", "text-orange-600", "mt-1"], [1, "flex", "space-x-4", "mb-6"], [1, "px-4", "py-2", "bg-red-100", "text-red-700", "rounded-lg", "hover:bg-red-200", "transition-colors"], [1, "px-4", "py-2", "bg-yellow-100", "text-yellow-700", "rounded-lg", "hover:bg-yellow-200", "transition-colors"], [1, "px-4", "py-2", "bg-green-100", "text-green-700", "rounded-lg", "hover:bg-green-200", "transition-colors"], [1, "text-center", "py-8"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6", "mb-6"], ["class", "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-lg", "transition-shadow"], [1, "w-full", "h-48", "object-cover", 3, "src", "alt", "error"], ["class", "absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded", 4, "ngIf"], [1, "p-4"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-sm", "text-gray-500"], ["class", "flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs px-2 py-1 rounded-full font-bold", 4, "ngIf"], [1, "text-gray-600", "mb-2"], [1, "flex", "justify-between", "items-center", "mb-2"], [1, "text-xl", "font-bold", "text-orange-500"], [1, "px-2", "py-1", "text-xs", "rounded-full", 3, "ngClass"], ["class", "flex space-x-2 mt-2", 4, "ngIf"], ["class", "flex justify-center items-center space-x-4", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4", "style", "z-index: 9999;", 4, "ngIf"], [1, "absolute", "top-2", "right-2", "bg-black", "bg-opacity-50", "text-white", "text-xs", "px-2", "py-1", "rounded"], [1, "flex", "items-center", "space-x-1", "bg-gradient-to-r", "from-yellow-400", "to-yellow-600", "text-white", "text-xs", "px-2", "py-1", "rounded-full", "font-bold"], ["class", "ml-1 text-xs", 4, "ngIf"], [1, "ml-1", "text-xs"], [1, "flex", "space-x-2", "mt-2"], ["class", "w-16 h-16 object-cover rounded border border-gray-200 cursor-pointer hover:border-orange-300 transition-colors", 3, "src", "alt", "error", "click", 4, "ngFor", "ngForOf"], ["class", "w-16 h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-500", 4, "ngIf"], [1, "w-16", "h-16", "object-cover", "rounded", "border", "border-gray-200", "cursor-pointer", "hover:border-orange-300", "transition-colors", 3, "src", "alt", "error", "click"], [1, "w-16", "h-16", "bg-gray-100", "border", "border-gray-200", "rounded", "flex", "items-center", "justify-center", "text-xs", "text-gray-500"], [1, "flex", "justify-center", "items-center", "space-x-4"], [1, "px-4", "py-2", "bg-gray-300", "text-gray-700", "rounded", "hover:bg-gray-400", "disabled:opacity-50", "disabled:cursor-not-allowed", "transition-colors", 3, "disabled", "click"], [1, "flex", "space-x-2"], [1, "px-3", "py-2", "bg-orange-100", "text-orange-700", "rounded"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-75", "flex", "items-center", "justify-center", "z-50", "p-4", 2, "z-index", "9999"], [1, "bg-white", "rounded-lg", "shadow-xl", "max-w-4xl", "w-full", "max-h-[90vh]", "overflow-hidden"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-lg", "font-semibold", "text-gray-800"], [1, "text-gray-500", "hover:text-gray-700", "text-2xl", 3, "click"], [1, "flex", "justify-center"], [1, "max-w-full", "max-h-[70vh]", "object-contain", "rounded", 3, "src", "alt"]],
      template: function DashboardVendeurComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DashboardVendeurComponent_div_6_Template, 5, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u2699\uFE0F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_Template_button_click_9_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \uD83D\uDEAA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cr\u00E9dits VIP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10)(21, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "En attente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10)(26, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Valid\u00E9s");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10)(31, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Total produits");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17)(36, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_Template_button_click_36_listener() {
            return ctx.showAddProductForm = !ctx.showAddProductForm;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " \u2795 Ajouter un produit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardVendeurComponent_Template_button_click_38_listener() {
            return ctx.buyCredits();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " \uD83D\uDC8E Acheter des cr\u00E9dits VIP ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, DashboardVendeurComponent_div_40_Template, 48, 23, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, DashboardVendeurComponent_div_41_Template, 43, 13, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DashboardVendeurComponent_div_42_Template, 7, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DashboardVendeurComponent_div_43_Template, 3, 0, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, DashboardVendeurComponent_div_44_Template, 3, 0, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, DashboardVendeurComponent_div_45_Template, 2, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.credits) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total produits VIP: ", ctx.getVipProductsCount(), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getProductsByStatus("PENDING"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getProductsByStatus("APPROVED"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sellerProducts.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAddProductForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCreditsView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showCreditsView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingProducts && !ctx.showCreditsView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadingProducts && ctx.sellerProducts.length === 0 && !ctx.showCreditsView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadingProducts && ctx.sellerProducts.length > 0 && !ctx.showCreditsView);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function HomeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\uD83D\uDEAA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Bienvenue, ", ctx_r0.currentUser.firstName, " ", ctx_r0.currentUser.lastName, "");
  }
}
function HomeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " vendre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "button", 57)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Acheter Cr\u00E9dits VIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_div_92_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 75)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDC51");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "VIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_92_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function HomeComponent_div_92_img_2_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r9.mainPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r9.name);
  }
}
function HomeComponent_div_92_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCF7 Image non disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_92_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDC51");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "VIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_92_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_92_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.callSeller(product_r9.seller.phone));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \uD83D\uDCDE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_92_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_92_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const product_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.whatsappSeller(product_r9.seller.whatsappLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_92_div_1_Template, 5, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_92_img_2_Template, 1, 2, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_92_div_3_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 62)(5, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 64)(8, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_div_92_div_10_Template, 5, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 67)(12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_div_92_button_16_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_div_92_button_17_Template, 3, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_92_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const product_r9 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.emailSeller(product_r9.seller.email));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u2709\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_92_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const product_r9 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.openProductModal(product_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Voir d\u00E9tails ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r9.isFeatured);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r9.mainPhoto && product_r9.mainPhoto !== "http://localhost:4200/assets/images/no-image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !product_r9.mainPhoto || product_r9.mainPhoto === "http://localhost:4200/assets/images/no-image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r9.vipStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](14, 9, product_r9.price, "", "fr-FR"), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r9.seller.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r9.seller.whatsappLink);
  }
}
function HomeComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Appeler le vendeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 86)(7, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_93_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.closeCallModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Veuillez appeler sur ", ctx_r4.callPhoneNumber, "");
  }
}
function HomeComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88)(1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_94_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Pr\u00E9c\u00E9dent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_94_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Suivant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r5.currentPage, " / ", ctx_r5.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.currentPage === ctx_r5.totalPages);
  }
}
function HomeComponent_div_95_img_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function HomeComponent_div_95_img_11_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r38.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r33.selectedProduct.mainPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r33.selectedProduct.name);
  }
}
function HomeComponent_div_95_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 122)(1, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCF7 Image non disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_95_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 125)(1, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function HomeComponent_div_95_div_13_div_1_Template_img_error_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.onImageError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", photo_r41.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r40.selectedProduct.name);
  }
}
function HomeComponent_div_95_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_95_div_13_div_1_Template, 2, 2, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r35.selectedProduct.photos.slice(0, 3));
  }
}
function HomeComponent_div_95_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 127)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDC51");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "VIP");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_95_button_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_95_button_56_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.whatsappSeller(ctx_r44.selectedProduct.seller.whatsappLink));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contacter via WhatsApp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "div", 93)(3, "div", 94)(4, "h2", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "D\u00E9tails du produit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_95_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.closeProductModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 97)(9, "div", 98)(10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomeComponent_div_95_img_11_Template, 1, 2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomeComponent_div_95_div_12_Template, 3, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_div_95_div_13_Template, 2, 1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 103)(15, "div")(16, "h3", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 105)(19, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_div_95_div_21_Template, 5, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div")(27, "h4", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 111)(32, "h4", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Informations du vendeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 113)(35, "div", 114)(36, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 114)(41, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\uD83D\uDCCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 114)(46, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\uD83D\uDCDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 114)(51, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u2709\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, HomeComponent_div_95_button_56_Template, 5, 0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 119)(58, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_95_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r48.closeProductModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Fermer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedProduct.mainPhoto && ctx_r6.selectedProduct.mainPhoto !== "http://localhost:3000/uploads/no-image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.selectedProduct.mainPhoto || ctx_r6.selectedProduct.mainPhoto === "http://localhost:3000/uploads/no-image.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedProduct.photos && ctx_r6.selectedProduct.photos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedProduct.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedProduct.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedProduct.vipStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](25, 14, ctx_r6.selectedProduct.price, "", "fr-FR"), " FCFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedProduct.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r6.selectedProduct.seller.firstName, " ", ctx_r6.selectedProduct.seller.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedProduct.seller.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedProduct.seller.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedProduct.seller.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedProduct.seller.whatsappLink);
  }
}
class HomeComponent {
  constructor(http, userService, router) {
    this.http = http;
    this.userService = userService;
    this.router = router;
    this.products = [];
    this.currentPage = 1;
    this.totalPages = 1;
    this.currentUser = null;
    this.isLoggedIn = false;
    this.showCallModal = false;
    this.callPhoneNumber = '';
    this.searchQuery = '';
    this.selectedCategory = '';
    this.selectedCity = '';
    this.selectedPriceRange = '';
    this.showProductModal = false;
    this.selectedProduct = null;
    this.API_URL = 'http://localhost:3000/api/auth';
  }
  ngOnInit() {
    this.loadProducts();
    this.checkAuthStatus();
  }
  checkAuthStatus() {
    this.isLoggedIn = this.userService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userService.getCurrentUser().subscribe({
        next: response => {
          this.currentUser = response.user;
        },
        error: () => {
          this.isLoggedIn = false;
          this.currentUser = null;
        }
      });
    }
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.isLoggedIn = false;
        this.currentUser = null;
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if logout fails, clear local state
        this.isLoggedIn = false;
        this.currentUser = null;
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      }
    });
  }
  loadProducts(page = 1) {
    this.userService.getProducts(page, 8, this.searchQuery, this.selectedCategory, this.selectedCity, this.selectedPriceRange).subscribe({
      next: response => {
        console.log('Products loaded:', response.products);
        // Remove duplicates based on product id using Map for efficiency
        const uniqueProducts = new Map();
        response.products.forEach(product => {
          console.log('Product:', product.name, 'Main photo:', product.mainPhoto);
          if (!uniqueProducts.has(product.id)) {
            uniqueProducts.set(product.id, product);
          }
        });
        this.products = Array.from(uniqueProducts.values());
        this.currentPage = response.pagination.page;
        this.totalPages = response.pagination.totalPages;
      },
      error: error => {
        console.error('Error loading products:', error);
        // No fallback data - products will remain empty if API fails
        this.products = [];
      }
    });
  }
  onSearchInput() {
    if (this.searchQuery && this.searchQuery.length >= 2) {
      this.currentPage = 1;
      this.loadProducts();
    } else if (!this.searchQuery || this.searchQuery.length === 0) {
      this.currentPage = 1;
      this.loadProducts();
    }
  }
  onFilterChange() {
    this.currentPage = 1;
    this.loadProducts();
  }
  callSeller(phone) {
    this.callPhoneNumber = phone;
    this.showCallModal = true;
  }
  closeCallModal() {
    this.showCallModal = false;
    this.callPhoneNumber = '';
  }
  whatsappSeller(link) {
    let whatsappUrl = link;
    if (!whatsappUrl.includes('?text=')) {
      whatsappUrl += (whatsappUrl.includes('?') ? '&' : '?') + 'text=Bonjour, je suis intéressé par votre produit.';
    }
    window.open(whatsappUrl, '_blank');
  }
  emailSeller(email) {
    window.location.href = `mailto:${email}?subject=Intérêt pour votre produit&body=Bonjour, je suis intéressé par votre produit.`;
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadProducts(this.currentPage + 1);
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.loadProducts(this.currentPage - 1);
    }
  }
  openProductModal(product) {
    this.selectedProduct = product;
    this.showProductModal = true;
  }
  closeProductModal() {
    this.showProductModal = false;
    this.selectedProduct = null;
  }
  onImageError(event) {
    console.error('Image failed to load:', event.target.src);
    // Prevent infinite loop by checking if we're already trying to load the fallback
    if (!event.target.src.includes('no-image.png')) {
      event.target.src = 'http://localhost:3000/uploads/no-image.png';
    } else {
      console.error('Fallback image also failed to load');
    }
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 96,
      vars: 11,
      consts: [[1, "min-h-screen", "bg-gray-100"], [1, "bg-white", "shadow-md", "px-8", "py-4", "flex", "justify-between", "items-center"], [1, "text-2xl", "font-bold", "text-orange-500"], [1, "flex", "space-x-4", "items-center"], ["class", "flex items-center space-x-4", 4, "ngIf"], ["class", "flex space-x-4", 4, "ngIf"], [1, "bg-orange-500", "text-white", "py-16", "px-8", "text-center"], [1, "text-3xl", "font-bold", "mb-4"], [1, "text-xl"], [1, "py-8", "px-8"], [1, "max-w-6xl", "mx-auto", "grid", "grid-cols-1", "md:grid-cols-4", "gap-4"], [1, "bg-white", "p-4", "rounded-lg", "shadow-md"], ["type", "text", "placeholder", "Rechercher un produit", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", 3, "ngModel", "ngModelChange", "input"], [1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded", "focus:outline-none", "focus:ring-2", "focus:ring-orange-500", 3, "ngModel", "ngModelChange", "change"], ["value", ""], ["value", "Agroalimentaire"], ["value", "Animaux"], ["value", "Immobilier"], ["value", "Maison"], ["value", "\u00C9quipement"], ["value", "Mode & Beaut\u00E9"], ["value", "Multim\u00E9dia"], ["value", "Sport & Loisirs"], ["value", "V\u00E9hicules"], ["value", "Autre"], ["value", "Dakar"], ["value", "Thi\u00E8s"], ["value", "Saint-Louis"], ["value", "Ziguinchor"], ["value", "Kaolack"], ["value", "Diourbel"], ["value", "Louga"], ["value", "Fatick"], ["value", "Tambacounda"], ["value", "K\u00E9dougou"], ["value", "Kaffrine"], ["value", "Kolda"], ["value", "S\u00E9dhiou"], ["value", "Matam"], ["value", "0-50000"], ["value", "50000-200000"], ["value", "200000-500000"], ["value", "500000-1000000"], ["value", "1000000+"], [1, "max-w-6xl", "mx-auto"], [1, "text-2xl", "font-bold", "mb-6", "text-center"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "gap-6"], ["class", "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative", 4, "ngFor", "ngForOf"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", 4, "ngIf"], ["class", "flex justify-center mt-8", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", 4, "ngIf"], [1, "flex", "items-center", "space-x-4"], [1, "text-gray-700"], [1, "px-4", "py-2", "bg-red-500", "text-white", "rounded", "hover:bg-red-600", "transition-colors", "flex", "items-center", "space-x-2", 3, "click"], [1, "flex", "space-x-4"], ["routerLink", "/login", 1, "px-4", "py-2", "bg-orange-500", "text-white", "rounded", "hover:bg-orange-600", "transition-colors"], ["routerLink", "/register", 1, "px-4", "py-2", "bg-black", "text-white", "rounded", "hover:bg-gray-800", "transition-colors"], ["routerLink", "/buy-credits", 1, "px-4", "py-2", "bg-purple-600", "text-white", "rounded", "hover:bg-purple-700", "transition-colors", "flex", "items-center", "space-x-2"], [1, "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-lg", "transition-shadow", "relative"], ["class", "absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs px-3 py-1 rounded-full z-10 font-bold flex items-center space-x-1 shadow-lg", 4, "ngIf"], ["class", "w-full h-48 object-cover", 3, "src", "alt", "error", 4, "ngIf"], ["class", "w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500", 4, "ngIf"], [1, "p-4"], [1, "text-lg", "font-semibold", "mb-2"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-sm", "text-blue-600"], ["class", "flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs px-2 py-1 rounded-full font-bold", 4, "ngIf"], [1, "mb-3"], [1, "text-xl", "font-bold", "text-orange-500", "mb-2"], [1, "flex", "space-x-2"], ["class", "p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors", "title", "Appeler", 3, "click", 4, "ngIf"], ["class", "p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors", "title", "WhatsApp", 3, "click", 4, "ngIf"], ["title", "Email", 1, "p-2", "bg-gray-500", "text-white", "rounded-full", "hover:bg-gray-600", "transition-colors", 3, "click"], [1, "text-white"], [1, "w-full", "px-3", "py-2", "bg-orange-500", "text-white", "rounded", "hover:bg-orange-600", "transition-colors", 3, "click"], [1, "absolute", "top-2", "left-2", "bg-gradient-to-r", "from-yellow-400", "to-yellow-600", "text-white", "text-xs", "px-3", "py-1", "rounded-full", "z-10", "font-bold", "flex", "items-center", "space-x-1", "shadow-lg"], [1, "w-full", "h-48", "object-cover", 3, "src", "alt", "error"], [1, "w-full", "h-48", "bg-gray-200", "flex", "items-center", "justify-center", "text-gray-500"], [1, "text-lg"], [1, "flex", "items-center", "space-x-1", "bg-gradient-to-r", "from-yellow-400", "to-yellow-600", "text-white", "text-xs", "px-2", "py-1", "rounded-full", "font-bold"], ["title", "Appeler", 1, "p-2", "bg-blue-500", "text-white", "rounded-full", "hover:bg-blue-600", "transition-colors", 3, "click"], ["title", "WhatsApp", 1, "p-2", "bg-green-500", "text-white", "rounded-full", "hover:bg-green-600", "transition-colors", 3, "click"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50"], [1, "bg-white", "p-6", "rounded-lg", "shadow-lg", "max-w-md", "w-full", "mx-4"], [1, "text-lg", "font-semibold", "mb-4"], [1, "text-gray-700", "mb-4"], [1, "flex", "justify-end", "space-x-2"], [1, "px-4", "py-2", "bg-gray-300", "text-gray-700", "rounded", "hover:bg-gray-400", "transition-colors", 3, "click"], [1, "flex", "justify-center", "mt-8"], [1, "px-4", "py-2", "mx-1", "bg-gray-300", "text-gray-700", "rounded", "hover:bg-gray-400", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled", "click"], [1, "px-4", "py-2", "mx-1"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-50", "p-4"], [1, "bg-white", "rounded-lg", "shadow-xl", "max-w-4xl", "w-full", "max-h-[90vh]", "overflow-y-auto"], [1, "p-6"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800"], [1, "text-gray-500", "hover:text-gray-700", "text-2xl", 3, "click"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], [1, "space-y-4"], [1, "aspect-w-4", "aspect-h-3", "bg-gray-100", "rounded-lg", "overflow-hidden"], ["class", "w-full h-64 object-cover", 3, "src", "alt", "error", 4, "ngIf"], ["class", "w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500", 4, "ngIf"], ["class", "grid grid-cols-3 gap-2", 4, "ngIf"], [1, "space-y-6"], [1, "text-xl", "font-semibold", "text-gray-800", "mb-2"], [1, "flex", "items-center", "space-x-2", "mb-2"], [1, "text-sm", "text-blue-600", "bg-blue-50", "px-3", "py-1", "rounded-full"], ["class", "flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm px-3 py-1 rounded-full font-bold", 4, "ngIf"], [1, "text-3xl", "font-bold", "text-orange-500", "mb-2"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-2"], [1, "text-gray-600", "leading-relaxed"], [1, "bg-gray-50", "p-4", "rounded-lg"], [1, "text-lg", "font-semibold", "text-gray-700", "mb-4"], [1, "space-y-3"], [1, "flex", "items-center", "space-x-3"], [1, "text-gray-500"], [1, "font-medium"], [1, "mt-4"], ["class", "w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center space-x-2", 3, "click", 4, "ngIf"], [1, "flex", "justify-end", "mt-6", "pt-4", "border-t"], [1, "px-6", "py-2", "bg-gray-300", "text-gray-700", "rounded-lg", "hover:bg-gray-400", "transition-colors", 3, "click"], [1, "w-full", "h-64", "object-cover", 3, "src", "alt", "error"], [1, "w-full", "h-64", "bg-gray-200", "flex", "items-center", "justify-center", "text-gray-500"], [1, "grid", "grid-cols-3", "gap-2"], ["class", "aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity", 4, "ngFor", "ngForOf"], [1, "aspect-w-1", "aspect-h-1", "bg-gray-100", "rounded-lg", "overflow-hidden", "cursor-pointer", "hover:opacity-80", "transition-opacity"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt", "error"], [1, "flex", "items-center", "space-x-1", "bg-gradient-to-r", "from-yellow-400", "to-yellow-600", "text-white", "text-sm", "px-3", "py-1", "rounded-full", "font-bold"], [1, "w-full", "bg-green-500", "text-white", "px-4", "py-3", "rounded-lg", "hover:bg-green-600", "transition-colors", "font-medium", "flex", "items-center", "justify-center", "space-x-2", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 8, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 5, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 6, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 6)(9, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Achetez et vendez vos produits plus facilement avec votre application Photol Jay");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Des milliers de produits disponibles dans toutes les cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 9)(14, "div", 10)(15, "div", 11)(16, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.searchQuery = $event;
          })("input", function HomeComponent_Template_input_input_16_listener() {
            return ctx.onSearchInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11)(18, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_18_listener($event) {
            return ctx.selectedCategory = $event;
          })("change", function HomeComponent_Template_select_change_18_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Toutes les cat\u00E9gories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Agroalimentaire");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Animaux");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Immobilier");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Maison");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u00C9quipement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mode & Beaut\u00E9");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Multim\u00E9dia");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Sport & Loisirs");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "V\u00E9hicules");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Autre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11)(42, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_42_listener($event) {
            return ctx.selectedCity = $event;
          })("change", function HomeComponent_Template_select_change_42_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Toutes les villes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Dakar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Thi\u00E8s");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Saint-Louis");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Ziguinchor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Kaolack");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Diourbel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Louga");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Fatick");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Tambacounda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "K\u00E9dougou");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Kaffrine");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Kolda");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "S\u00E9dhiou");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Matam");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11)(74, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_select_ngModelChange_74_listener($event) {
            return ctx.selectedPriceRange = $event;
          })("change", function HomeComponent_Template_select_change_74_listener() {
            return ctx.onFilterChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Tous les prix");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "0 - 50,000 FCFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "50,000 - 200,000 FCFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "200,000 - 500,000 FCFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "option", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "500,000 - 1,000,000 FCFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "option", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Plus de 1,000,000 FCFA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "section", 9)(88, "div", 44)(89, "h2", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Produits disponibles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, HomeComponent_div_92_Template, 23, 13, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, HomeComponent_div_93_Template, 9, 1, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, HomeComponent_div_94_Template, 7, 4, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, HomeComponent_div_95_Template, 60, 18, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.currentUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && (ctx.currentUser == null ? null : ctx.currentUser.role) === "SELLER");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCity);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedPriceRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCallModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalPages > 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showProductModal && ctx.selectedProduct);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function LoginComponent_p_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "L'email est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Format d'email invalide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_p_11_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_p_11_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function LoginComponent_p_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le mot de passe est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le mot de passe doit contenir au moins 6 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_p_16_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_p_16_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.loginForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
  }
}
function LoginComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Connexion en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(fb, userService, router) {
    this.fb = fb;
    this.userService = userService;
    this.router = router;
    this.loading = false;
    this.errorMessage = '';
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      const {
        email,
        password
      } = this.loginForm.value;
      this.userService.login(email, password).subscribe({
        next: response => {
          this.loading = false;
          if (response.token) {
            if (response.user.role === 'ADMIN') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/vendeur/dashboard']);
            }
          } else {
            this.errorMessage = response.error || 'Erreur de connexion';
          }
        },
        error: error => {
          this.loading = false;
          this.errorMessage = 'Erreur de connexion. Vérifiez vos identifiants.';
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 27,
      vars: 11,
      consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-50", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8", "bg-white", "p-8", "rounded-lg", "shadow-md"], [1, "mt-6", "text-center", "text-3xl", "font-extrabold", "text-gray-900"], [1, "mt-8", "space-y-6", 3, "formGroup", "ngSubmit"], [1, "space-y-4"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["class", "mt-1 text-sm text-red-600", 4, "ngIf"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Votre mot de passe", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["class", "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded", 4, "ngIf"], ["type", "submit", 1, "group", "relative", "w-full", "flex", "justify-center", "py-2", "px-4", "border", "border-transparent", "text-sm", "font-medium", "rounded-md", "text-white", "bg-orange-600", "hover:bg-orange-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-orange-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [4, "ngIf"], [1, "text-center"], [1, "text-sm", "text-gray-600"], [1, "font-medium", "text-orange-600", "hover:text-orange-500", 3, "click"], [1, "mt-1", "text-sm", "text-red-600"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "px-4", "py-3", "rounded"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Connexion");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div")(8, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 3, 2, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Mot de passe");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_p_16_Template, 3, 2, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div")(19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, LoginComponent_span_21_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13)(23, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Pas encore de compte ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_25_listener() {
            return ctx.goToRegister();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "S'inscrire");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("password")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 6698:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function RegisterComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le pr\u00E9nom est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le nom est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "L'email est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Format d'email invalide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_p_21_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_p_21_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.registerForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["email"]);
  }
}
function RegisterComponent_p_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le mot de passe est requis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le mot de passe doit contenir au moins 6 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_p_26_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_p_26_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}
function RegisterComponent_p_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La confirmation du mot de passe est requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Les mots de passe ne correspondent pas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_p_31_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_p_31_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.registerForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["mismatch"]);
  }
}
function RegisterComponent_p_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Le num\u00E9ro de t\u00E9l\u00E9phone est requis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r17);
  }
}
function RegisterComponent_p_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " La ville est requise ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.errorMessage, " ");
  }
}
function RegisterComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Inscription en cours...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S'inscrire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor(fb, userService, router) {
    this.fb = fb;
    this.userService = userService;
    this.router = router;
    this.loading = false;
    this.errorMessage = '';
    this.cities = ['Dakar', 'Thiès', 'Saint-Louis', 'Kaolack', 'Ziguinchor'];
    this.registerForm = this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      whatsappLink: [''],
      city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  passwordMatchValidator(form) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        mismatch: true
      });
      return {
        mismatch: true
      };
    }
    return null;
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      const formData = this.registerForm.value;
      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        whatsappLink: formData.whatsappLink || undefined,
        city: formData.city || undefined
      };
      this.userService.register(userData).subscribe({
        next: response => {
          this.loading = false;
          if (response.message === 'Seller created successfully') {
            this.router.navigate(['/login']);
          } else {
            this.errorMessage = response.error || 'Erreur lors de l\'inscription';
          }
        },
        error: error => {
          this.loading = false;
          console.error('Registration error:', error);
          if (error.error && error.error.errors && Array.isArray(error.error.errors)) {
            // Validation errors from express-validator
            this.errorMessage = error.error.errors.map(err => err.message).join(', ');
          } else if (error.error && error.error.error) {
            // Other backend errors
            this.errorMessage = error.error.error;
          } else {
            this.errorMessage = 'Erreur lors de l\'inscription. Vérifiez vos informations.';
          }
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires correctement.';
    }
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 60,
      vars: 27,
      consts: [[1, "min-h-screen", "flex", "items-center", "justify-center", "bg-gray-50", "py-12", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-md", "w-full", "space-y-8", "bg-white", "p-8", "rounded-lg", "shadow-md"], [1, "mt-6", "text-center", "text-3xl", "font-extrabold", "text-gray-900"], [1, "mt-8", "space-y-6", 3, "formGroup", "ngSubmit"], [1, "grid", "grid-cols-1", "gap-6", "sm:grid-cols-2"], ["for", "firstName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "id", "firstName", "formControlName", "firstName", "placeholder", "Votre pr\u00E9nom", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["class", "mt-1 text-sm text-red-600", 4, "ngIf"], ["for", "lastName", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "id", "lastName", "formControlName", "lastName", "placeholder", "Votre nom", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "email", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "password", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Votre mot de passe", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "confirmPassword", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", "placeholder", "Confirmez votre mot de passe", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "phone", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "77 123 45 67", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["for", "city", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["id", "city", "formControlName", "city", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "whatsappLink", 1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "url", "id", "whatsappLink", "formControlName", "whatsappLink", "placeholder", "https://wa.me/221771234567", 1, "mt-1", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-md", "shadow-sm", "placeholder-gray-400", "focus:outline-none", "focus:ring-orange-500", "focus:border-orange-500"], ["class", "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded", 4, "ngIf"], ["type", "submit", 1, "group", "relative", "w-full", "flex", "justify-center", "py-2", "px-4", "border", "border-transparent", "text-sm", "font-medium", "rounded-md", "text-white", "bg-orange-600", "hover:bg-orange-700", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-orange-500", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [4, "ngIf"], [1, "text-center"], [1, "text-sm", "text-gray-600"], [1, "font-medium", "text-orange-600", "hover:text-orange-500", 3, "click"], [1, "mt-1", "text-sm", "text-red-600"], [3, "value"], [1, "bg-red-50", "border", "border-red-200", "text-red-700", "px-4", "py-3", "rounded"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Inscription");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div")(8, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Pr\u00E9nom *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_p_11_Template, 2, 0, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div")(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Nom *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RegisterComponent_p_16_Template, 2, 0, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RegisterComponent_p_21_Template, 3, 2, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Mot de passe *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RegisterComponent_p_26_Template, 3, 2, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div")(28, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Confirmer le mot de passe *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RegisterComponent_p_31_Template, 3, 2, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4)(33, "div")(34, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "T\u00E9l\u00E9phone *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RegisterComponent_p_37_Template, 2, 0, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div")(39, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Ville *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "select", 19)(42, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "S\u00E9lectionner une ville");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterComponent_option_44_Template, 2, 2, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, RegisterComponent_p_45_Template, 2, 0, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div")(47, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Lien WhatsApp");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, RegisterComponent_div_50_Template, 2, 1, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div")(52, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, RegisterComponent_span_53_Template, 2, 0, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, RegisterComponent_span_54_Template, 2, 0, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 27)(56, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " D\u00E9j\u00E0 un compte ? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_58_listener() {
            return ctx.goToLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Se connecter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          let tmp_13_0;
          let tmp_15_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_1_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_3_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.registerForm.get("password")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.registerForm.get("password")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_9_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_11_0 = ctx.registerForm.get("phone")) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.registerForm.get("phone")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.registerForm.get("phone")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.registerForm.get("phone")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("border-red-500", ((tmp_13_0 = ctx.registerForm.get("city")) == null ? null : tmp_13_0.invalid) && ((tmp_13_0 = ctx.registerForm.get("city")) == null ? null : tmp_13_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cities);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.registerForm.get("city")) == null ? null : tmp_15_0.invalid) && ((tmp_15_0 = ctx.registerForm.get("city")) == null ? null : tmp_15_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class UserService {
  constructor(http) {
    this.http = http;
    this.API_URL = 'http://localhost:3000/api/auth';
    this.TOKEN_KEY = 'auth_token';
  }
  getHeaders() {
    const token = this.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      ...(token && {
        Authorization: `Bearer ${token}`
      })
    });
  }
  getJsonHeaders() {
    const token = this.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && {
        Authorization: `Bearer ${token}`
      })
    });
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  register(userData) {
    const formData = new FormData();
    formData.append('email', userData.email);
    formData.append('password', userData.password);
    formData.append('firstName', userData.firstName);
    formData.append('lastName', userData.lastName);
    if (userData.phone) formData.append('phone', userData.phone);
    if (userData.whatsappLink) formData.append('whatsappLink', userData.whatsappLink);
    if (userData.city) formData.append('city', userData.city);
    if (userData.profilePhoto) formData.append('profilePhoto', userData.profilePhoto);
    return this.http.post(`${this.API_URL}/register-seller`, formData, {
      headers: this.getHeaders()
    });
  }
  login(email, password) {
    return this.http.post(`${this.API_URL}/login`, {
      email,
      password
    }, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      if (response.token) {
        this.setToken(response.token);
      }
    }));
  }
  logout() {
    return this.http.post(`${this.API_URL}/logout`, {}, {
      headers: this.getHeaders()
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
      localStorage.removeItem(this.TOKEN_KEY);
    }));
  }
  getCurrentUser() {
    return this.http.get(`${this.API_URL}/me`, {
      headers: this.getHeaders()
    });
  }
  changePassword(data) {
    return this.http.put(`${this.API_URL}/change-password`, data, {
      headers: this.getHeaders()
    });
  }
  initialChangePassword(data) {
    return this.http.put(`${this.API_URL}/initial-change-password`, data, {
      headers: this.getHeaders()
    });
  }
  completeFirstLogin(data) {
    return this.http.post(`${this.API_URL}/complete-first-login`, data, {
      headers: this.getHeaders()
    });
  }
  isLoggedIn() {
    return !!this.getToken();
  }
  createProduct(productData) {
    return this.http.post('http://localhost:3000/api/auth/products', productData, {
      headers: this.getHeaders()
    });
  }
  getProducts(page = 1, limit = 8, search, category, city, priceRange) {
    let url = `http://localhost:3000/api/auth/products?page=${page}&limit=${limit}`;
    if (search) url += `&search=${encodeURIComponent(search)}`;
    if (category) url += `&category=${encodeURIComponent(category)}`;
    if (city) url += `&city=${encodeURIComponent(city)}`;
    if (priceRange) url += `&priceRange=${encodeURIComponent(priceRange)}`;
    return this.http.get(url, {
      headers: this.getJsonHeaders()
    });
  }
  getPendingProducts() {
    return this.http.get('http://localhost:3000/api/auth/products/pending', {
      headers: this.getJsonHeaders()
    });
  }
  updateProductStatus(productId, status, isFeatured) {
    const body = {
      productId,
      status
    };
    if (isFeatured !== undefined) {
      body.isFeatured = isFeatured;
    }
    return this.http.put('http://localhost:3000/api/auth/products/status', body, {
      headers: this.getJsonHeaders()
    });
  }
  getSellerProducts() {
    return this.http.get('http://localhost:3000/api/auth/products/seller', {
      headers: this.getJsonHeaders()
    });
  }
  getAllSellers(page = 1, limit = 8) {
    return this.http.get(`http://localhost:3000/api/auth/sellers?page=${page}&limit=${limit}`, {
      headers: this.getJsonHeaders()
    });
  }
  buyCredits(amount, productId) {
    const body = {
      amount
    };
    if (productId) {
      body.productId = productId;
    }
    return this.http.post('http://localhost:3000/api/auth/buy-credits', body, {
      headers: this.getJsonHeaders()
    });
  }
  getNotifications(page = 1, limit = 4) {
    return this.http.get(`http://localhost:3000/api/auth/notifications?page=${page}&limit=${limit}`, {
      headers: this.getJsonHeaders()
    });
  }
  markNotificationAsRead(notificationId) {
    return this.http.put(`http://localhost:3000/api/auth/notifications/${notificationId}/read`, {}, {
      headers: this.getJsonHeaders()
    });
  }
  getUnreadNotificationsCount() {
    return this.http.get('http://localhost:3000/api/auth/notifications/unread-count', {
      headers: this.getJsonHeaders()
    });
  }
  resetUnreadNotificationsCount() {
    return this.http.put('http://localhost:3000/api/auth/notifications/reset-unread-count', {}, {
      headers: this.getJsonHeaders()
    });
  }
  static {
    this.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9210:
/*!***************************************************************!*\
  !*** ./src/app/shared/admin-navbar/admin-navbar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminNavbarComponent": () => (/* binding */ AdminNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function AdminNavbarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tableau de bord");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminNavbarComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Vendeurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminNavbarComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminNavbarComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminNavbarComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Param\u00E8tres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AdminNavbarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r5.currentUser.firstName, " ", ctx_r5.currentUser.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r5.currentUser.role, ")");
  }
}
class AdminNavbarComponent {
  constructor(router, userService) {
    this.router = router;
    this.userService = userService;
    this.currentUser = null;
    this.unreadNotificationsCount = 0;
    this.routerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    this.loadCurrentUser();
    this.loadUnreadNotificationsCount();
    // Listen to route changes to reset unread count when entering notifications page
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(event => {
      if (event.url === '/admin/notifications') {
        // Reset unread count to 0 when entering notifications page
        this.unreadNotificationsCount = 0;
      } else {
        // Load unread count when navigating to other pages
        this.loadUnreadNotificationsCount();
      }
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
  loadCurrentUser() {
    this.userService.getCurrentUser().subscribe({
      next: response => {
        this.currentUser = response.user;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }
  loadUnreadNotificationsCount() {
    this.userService.getUnreadNotificationsCount().subscribe({
      next: response => {
        this.unreadNotificationsCount = response.count;
      },
      error: error => {
        console.error('Error loading unread notifications count:', error);
        this.unreadNotificationsCount = 0;
      }
    });
  }
  resetUnreadCount() {
    this.unreadNotificationsCount = 0;
  }
  isActiveRoute(route) {
    return this.router.url === route;
  }
  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        // Even if logout fails, clear local state
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      }
    });
  }
  static {
    this.ɵfac = function AdminNavbarComponent_Factory(t) {
      return new (t || AdminNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AdminNavbarComponent,
      selectors: [["app-admin-navbar"]],
      decls: 9,
      vars: 6,
      consts: [[1, "bg-orange-500", "text-white", "px-8", "py-4", "flex", "justify-between", "items-center", "shadow-md", "fixed", "top-0", "left-56", "right-0", "z-20"], [1, "text-2xl", "font-bold", "text-white"], [4, "ngIf"], [1, "flex", "items-center", "space-x-4"], ["class", "text-right", 4, "ngIf"], [1, "text-right"], [1, "font-bold"], [1, "text-sm", "opacity-90"]],
      template: function AdminNavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminNavbarComponent_span_2_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminNavbarComponent_span_3_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminNavbarComponent_span_4_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminNavbarComponent_span_5_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminNavbarComponent_span_6_Template, 2, 0, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminNavbarComponent_div_8_Template, 5, 3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/dashboard"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/vendeurs"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/produits"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/notifications"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActiveRoute("/admin/parametres"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2FkbWluLW5hdmJhci9hZG1pbi1uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
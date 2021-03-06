var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_1 = require('ionic/ionic');
var ApiDemoApp = (function () {
    function ApiDemoApp() {
        this.rootPage = TabPage;
    }
    ApiDemoApp = __decorate([
        ionic_1.App({
            templateUrl: 'app.html',
            config: CONFIG_DEMO || {}
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDemoApp);
    return ApiDemoApp;
})();
var TabPage = (function () {
    function TabPage() {
        this.tabOne = InitialPage;
    }
    TabPage = __decorate([
        ionic_1.Page({
            templateUrl: 'tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabPage);
    return TabPage;
})();
exports.TabPage = TabPage;
var InitialPage = (function () {
    function InitialPage(platform) {
        this.platform = platform;
        if (window.localStorage.getItem('configDemo') !== null) {
            this.config = JSON.parse(window.localStorage.getItem('configDemo'));
        }
        else if (platform.is('ios')) {
            this.config = {
                'backButtonIcon': 'ion-ios-arrow-back',
                'iconMode': 'ios',
                'tabbarPlacement': 'bottom'
            };
        }
        else {
            this.config = {
                'backButtonIcon': 'ion-md-arrow-back',
                'iconMode': 'md',
                'tabbarPlacement': 'top'
            };
        }
    }
    InitialPage.prototype.load = function () {
        window.localStorage.setItem('configDemo', JSON.stringify(this.config));
        window.location.reload();
    };
    InitialPage = __decorate([
        ionic_1.Page({
            templateUrl: 'main.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ionic_1.Platform !== 'undefined' && ionic_1.Platform) === 'function' && _a) || Object])
    ], InitialPage);
    return InitialPage;
    var _a;
})();
exports.InitialPage = InitialPage;
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var flyInOutTrigger_animation_1 = require('./../animations/flyInOutTrigger-animation');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
var ButtonDemo = (function (_super) {
    __extends(ButtonDemo, _super);
    function ButtonDemo(router, route, titleService) {
        _super.call(this, router, route, titleService);
        this.buttonType = 'raised';
        this.doRipple = false;
        this.colored = '';
        this.btnDisabled = false;
    }
    ButtonDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'button-demo',
            host: {
                '[@flyInOut]': 'true',
                '[style.display]': "'block'"
            },
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'button.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], ButtonDemo);
    return ButtonDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.ButtonDemo = ButtonDemo;
//# sourceMappingURL=../../../dist/app/button/button.component.js.map
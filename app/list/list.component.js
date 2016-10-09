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
var flyInOutTrigger_animation_2 = require('./../animations/flyInOutTrigger-animation');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var abstract_demo_component_1 = require('./../abstract-demo.component');
var ListDemo = (function (_super) {
    __extends(ListDemo, _super);
    function ListDemo(router, route, titleService) {
        _super.call(this, router, route, titleService);
    }
    ListDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-demo',
            host: flyInOutTrigger_animation_2.hostConfig,
            animations: [
                flyInOutTrigger_animation_1.flyInOutTrigger
            ],
            templateUrl: 'list.component.html',
            styles: [
                "\n  mdl-list {\n    width: 300px;\n  }\n  \n  mdl-radio, mdl-checkbox, mdl-switch {\n    display: inline;\n  }\n"
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.Title])
    ], ListDemo);
    return ListDemo;
}(abstract_demo_component_1.AbstractDemoComponent));
exports.ListDemo = ListDemo;
//# sourceMappingURL=../../../dist/app/list/list.component.js.map
"use strict";
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
var AppendViewContainerRefDirective = (function () {
    function AppendViewContainerRefDirective(viewRef, renderer) {
        this.viewRef = viewRef;
        this.renderer = renderer;
    }
    AppendViewContainerRefDirective.prototype.ngAfterViewInit = function () {
        this.renderer.projectNodes(this.viewRef.element.nativeElement, [this.viewContainerRefToAppend.element.nativeElement]);
    };
    __decorate([
        core_1.Input('append-view-container-ref'), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], AppendViewContainerRefDirective.prototype, "viewContainerRefToAppend", void 0);
    AppendViewContainerRefDirective = __decorate([
        core_1.Directive({
            selector: '[append-view-container-ref]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer])
    ], AppendViewContainerRefDirective);
    return AppendViewContainerRefDirective;
}());
exports.AppendViewContainerRefDirective = AppendViewContainerRefDirective;
//# sourceMappingURL=../../../dist/components/common/append-view-container-ref-directive.js.map
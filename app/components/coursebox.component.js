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
var cart_service_1 = require('../services/cart.service');
var router_1 = require('@angular/router');
var CourseBoxComponent = (function () {
    function CourseBoxComponent(CartService, router) {
        this.CartService = CartService;
        this.router = router;
    }
    CourseBoxComponent.prototype.add = function (course) {
        this.CartService.addToCart(course);
    };
    CourseBoxComponent.prototype.goToDetails = function (course) {
        var link = ['/course', course.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CourseBoxComponent.prototype, "course", void 0);
    CourseBoxComponent = __decorate([
        core_1.Component({
            selector: 'coursebox',
            template: "\n     <div class=\"course\">\n        <img [src]=\"course.image\" (click)=\"goToDetails(course)\" >\n        <h2>{{course.name}}</h2>\n        <span class=\"price\">\n          {{course.price | currency : 'USD': true :'1.2-2'}}\n        </span>\n        <button (click)=\"add(course)\">Agregar al carrito</button>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, router_1.Router])
    ], CourseBoxComponent);
    return CourseBoxComponent;
}());
exports.CourseBoxComponent = CourseBoxComponent;
//# sourceMappingURL=coursebox.component.js.map
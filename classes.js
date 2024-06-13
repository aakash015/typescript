"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name, virgin) {
        this.city = ""; //if we do not give initializer then it will give error 
        this.address = "";
        this.email = email;
        this.name = name;
        this.virgin = virgin;
    }
    User.prototype.getVirginity = function () {
        return this.virgin;
    };
    User.prototype.setVirginity = function (isVirgin) {
        this.virgin = isVirgin;
    };
    return User;
}());
var Aakash = new User("atiwari@ivp.in", "Aakash", true);
// console.log(aakash.virgin) will produce error
//now suppose we need to get and se virgin property then in that case 
//we need to use getters and setters for the same . 
Aakash.setVirginity(true);
console.log(Aakash.getVirginity());
//suppose now we want some variable which is accessible both in 
//parent class and class inherited via parent so in that case we use protected modifier
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser(email, name, virgin, addr) {
        var _this = _super.call(this, email, name, virgin) || this;
        _this.address = addr;
        return _this;
    }
    subUser.prototype.getAddress = function () {
        return this.address;
    };
    return subUser;
}(User));
var sonia = new subUser("ssaini@kuk.ac.in", "sonia", false, "dd colony");
console.log(sonia.getAddress());

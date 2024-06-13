"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1",
    name: "Aakash",
    email: "atiwari@ivp.in"
};
myUser.name = "Aakash2";
var finalUser = {
    _id: "1",
    name: "lassi",
    email: "email@google.in",
    aadharCard: "32493994990",
    sample: ["1", "2"]
};
(_a = finalUser.sample) === null || _a === void 0 ? void 0 : _a.push("3");
console.log("Here is my final user", finalUser);

"use strict";
//declaring array in two types 
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var s = [1];
var names = [];
// function identityOne(val:boolean|number): boolean | number{
//     return true
// }
// design an function which takes the same type of args and return same type
function indentityTwo(val) {
    return val;
}
console.log(indentityTwo("Aakash"));
var b = {
    brand: "sony",
    type: 1
};
console.log(indentityTwo(b));
//another syntax 
console.log(indentityTwo(b));
function getElement(arr) {
    return arr[3];
} //valid function
//suntax in arrow functions 
var getElement1 = function (arr) {
    return arr[0];
};
//this is also a valid syntax 
var getElement2 = function (arr) {
    return arr[0];
};
function anotherFunction(one, two) {
    return {};
}
//anotherFunction("1" , {connection:"1",username:"1",password:"1",timeout:1}) //here cannot give 
//any extra property 
function anotherFunction2(one, two) {
    return {};
}
//here i can 
anotherFunction2("1", { connection: "1", username: "1", password: "1", timeout: 1 }); //here cannot give 
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.courseCart = [];
        this.quizCart = [];
    }
    Sellable.prototype.addToCart = function (product1, product2) {
        this.courseCart.push(product1);
        this.quizCart.push(product2);
        return {
            courseCart: this.courseCart,
            quizCart: this.quizCart
        };
    };
    return Sellable;
}());
var s1 = new Sellable();
var details = s1.addToCart({ name: "aakash", author: "aakash", subject: "aakash" }, { name: "myquiz", noOfQuestions: 2 });
console.log(details);

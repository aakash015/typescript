"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myWife = /** @class */ (function () {
    function myWife(color, height, education, isVirgin, canCookFood, isVeg, doClubbing) {
        this.color = color;
        this.height = height;
        this.education = education;
        this.isVrigin = isVirgin;
        this.canCookFood = canCookFood;
        this.isVeg = isVeg;
        this.doClubbing = doClubbing;
    }
    //another way of declaring the variables with access modifiers 
    //in this way it both declares and initialize at the same time 
    // constructor( 
    //     public color:string,
    //     public education:string,
    //     public height:string){}
    myWife.prototype.checkIfGharelu = function () {
        return this.isVeg && this.canCookFood && !this.doClubbing && this.isVrigin;
    };
    return myWife;
}());
var sanskariBiwi = new myWife("white", "5feet", "B.tech", true, true, true, false);
console.log(sanskariBiwi.checkIfGharelu());

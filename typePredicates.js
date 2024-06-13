"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type predicate function
function isFish(pet) {
    return pet.swim !== undefined;
}
// Usage
function swimOrFly(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
swimOrFly({ fly: function () { console.log("aasman ki unchaiyon mein"); } });

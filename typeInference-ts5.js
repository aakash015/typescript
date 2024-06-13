"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userId = 12; //declaring a number
/*
we can do this but this is not the good practice
because it is too obvious and we're overusing our typescript
typescript is smart enough to detect that userId is of type number
even if we don't explicitly declare userId of type number
This is called type inference
*/
var userId2 = 12; //even in this case it detected that this variable is of 
//number type and if i place a . like userId2. then we got only number 
//methods in suggestion
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
//now here in above case it is necessary to infer the type as string 
/*
In TypeScript, the noImplicitAny option is a compiler setting that helps catch potential bugs by ensuring that the type of every variable and parameter is explicitly declared or can be inferred by the compiler.
When this option is enabled, TypeScript will raise an error if it encounters a variable or parameter whose type is implicitly any.

To enable noImplicitAny, you need to configure your tsconfig.json file. Here's how you can do it:

Locate or create tsconfig.json: This file is typically found in the root of your TypeScript project. If you don't have one, you can create it using the TypeScript compiler (tsc) with the command tsc --init.

Modify tsconfig.json: Add or update the noImplicitAny setting in the compilerOptions section of your tsconfig.json file. The relevant part of the configuration might look like this:
*/
//Typescript's type inference is so smart that it detect type automatically from the 
//context 
var heros = ["h1", "h2", "h3"];
//here it is automatically detecting the type 
//of hero as string and even the type of lis is guessed correctly by the lis 
var lis = heros.map(function (hero) {
    return hero;
});
//void means function will return void and will not return any 
//kind of value
function consoleError() {
    console.log("tiwari");
}
//never means that the end point of the function will never be reached 
function handleError() {
    console.log("never function ");
    throw new Error("Hey! I am a Error");
}

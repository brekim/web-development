// script.js

var bag = 0;
var hasBag = false;
var bagName = null;
var name = "Blonde";
// var neverSetSomethingToThis = undefined;

console.log("Hello World");

function yes() {
    console.log("Yes, we have no bananas. We have no bananas today");
}

//Equality
a = 4;
b = "4";

//Automatic type concatenation
console.log("Hey, a is " + a)

//Type coercion
if(a == b) {
    console.log("This is true.");
} else {
    console.log("This is not true.");
}

//Strict Equality
if(a === b) {
    console.log("This is true under strict equality.");
} else {
    console.log("This is not true under strict equality.");
}

if(a == b || a === 4) {
    console.log("A is either b or a number 4.");
} else if(a == b && a === 4) {
    console.log("A is a number that is 4.");
}

//Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = "Mark";
company.ceo.favColor = blue;


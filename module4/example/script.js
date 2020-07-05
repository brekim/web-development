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
company.ceo.favColor = "Blue";

company["$tockprice"] = 233;

var oikku = {
    name: "Oikku",
    ceo: "Brett",
    cfo: "Caeden",
    cr_dir: "Lena"
};

function makeMultiplier(multiply) {
    var myFunc = function(x) {
        return multiply * x;
    };

    return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(3))

//JavaScript allows you to pass functions as arguments as well...
function doOperationOn(x, operation) {
    return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

//Function constructors
function Work(time, talent) {
    this.time = time;
    this.talent = talent;
}

Work.prototype.success =
    function () {
        console.log(this.time * this.talent);
        return this.time * this.talent;
    };

var myWork = new Work(10, 9);
console.log(myWork.success());

//Arrays
var array = new Array();
array[0] = "JavaScript";
array[1] = 14;
array[2] = function dance(name) {
    console.log("I like to dance, " + name);
};
array[3] = {course: "A Course"};

console.log(array);
array[2]("Mark")

console.log(array[3].course)

var wakeup = ["2AM", "3AM", "5AM", "8AM", "8AM", "9AM"];

for(var i = 0; i < wakeup.length; i++) {
    console.log("Hello " + wakeup[i]);
}

for (var time in wakeup) {
    console.log(time);
}

//IIFE
(function (password) {
    this.password = password;
    secretKey = password + "43258mvwsde9frm";
    console.log(secretKey);
})(password);
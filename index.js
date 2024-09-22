"use strict";
//npm install -g typescript
//Basic types to make complile to latest javascript in terminal use tsc --init...tsc index creates javascript that needs to create
//variables with let not var
//tsc --watch will automaticall compile to proper js version
//Basic types
let age = 25;
let hobby = "Soccer";
let isAdult = true;
let fruit = "apple";
//Arrays
let fruits = ["Apple", "Orange"];
let arr = [22, "a", true];
let numArr = [[1], [2]];
//Tuples 'ordered set of values'
let employee = [1, "Jack"];
let employees = [
    [2, "Sarah"],
    [3, "Jach"]
];
let newCar = {
    brand: "Lexus",
    year: 2020
};
//Union
let x = 22;
let jackOccupation = "student";
//TypeAssertion
let y = "a";
y = 22;
//Functions
function add(x, y) {
    return x + y;
}
//Generics
function sayHi() {
    console.log("Hi");
}
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
//Enums
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common eye color";
    EyeColor["blue"] = "Rare eye color";
    EyeColor["green"] = "Very rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Jack",
    age: 20,
    eyeColor: EyeColor.blue
});

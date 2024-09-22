//npm install -g typescript

//Basic types to make complile to latest javascript in terminal use tsc --init...tsc index creates javascript that needs to create
//variables with let not var
//tsc --watch will automaticall compile to proper js version

//Basic types
let age: number = 25
let hobby: string = "Soccer"
let isAdult: boolean = true
let fruit: any= "apple"

//Arrays
let fruits: string[] = ["Apple", "Orange"]
let arr: any[] = [22, "a", true]
let numArr: number[][] = [[1],[2]]


//Tuples 'ordered set of values'
let employee: [number, string] = [1,"Jack"]
let employees: [number, string][] = [
    [2, "Sarah"],
    [3, "Jach"]
]

//Objects not the best way. do the custom types
// let car: {
//     brand: string,
//     year: number
// } = {
//     brand: "Lexus",
//     year: 2020
// }

//Custom types  
type Car = {
    brand: string,
    year: number
}

//best to use as interface
// let car1: Car = { 
//     brand: "Lexus",
//     year: "2020"
// }

//Interface
interface Car1 {
    brand: string,
    year: number
}

let newCar: Car1 =  {
    brand: "Lexus",
    year: 2020
}

//Union

let x: string | number = 22
type occupation = "employed" | "student"
let jackOccupation: occupation= "student"

//TypeAssertion
let y: any = "a"
y = <number> 22

//Functions

function add(x: number,y: number): number {

return x + y
}


//Generics
function sayHi(): void {
console.log("Hi")
}

function copyArr<T>(arr: T[]): T[]{
    return [...arr]
}

let numCopy = copyArr<number>([1,2,3])
let strCopy = copyArr<string>(["1", "2","3"])


//Enums
enum EyeColor {
    brown = "Common eye color",
    blue = "Rare eye color",
    green = "Very rare eye color"
}

interface Student{
    name: string,
    age?: number, //? optional property
    eyeColor: EyeColor
}

function displayStudent(student: Student): void{
const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor
document.body.innerText = info
}

displayStudent({
    name: "Jack",
    age: 20,
    eyeColor: EyeColor.blue
})
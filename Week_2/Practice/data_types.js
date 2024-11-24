//Data Types //7 basics- number, string, boolean, null, undefined, symbol, BigInt
//Stack is used //Copy of data is used
console.log(typeof a)
console.log(typeof "Hello")
console.log(typeof true)
console.log(typeof null)    //important
console.log(typeof undefined)

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)
console.log(id==anotherid)

console.log(123=="123") //doesnt check data type but only value
console.log(123==="123")    //check data type along with value


//Non-Primitive- Array, Objects, Functions
//They use heap //Reference is used 
const x=[1,2,3] //Array 
const myobg={   //Object is anything inside curly brace
    name:"Umesh",
    age:21,
}



let score="33"
let value=Number(score) //for Conversion use class as capital
console.log(value)
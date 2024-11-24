//Strings
//2 ways to declare
const name = "Hello"


const b = new String("Hello") //Can use functions now
console.log(b[0])
console.log(b.__proto__)
console.log(b.length)
console.log(b.toUpperCase())
console.log(b.charAt(3))
console.log(b.substring(0,4)) //[include, exclude]  //ignored negative values and starts from start
console.log(b.slice(-8,4))      //can give negative valuse
console.log(b.trim())
console.log(b.trimEnd())
console.log(b.trimStart())
console.log(b.replace('ll','kk'))
console.log(b.includes('k'))
console.log(b.split('-'))   //makes array with - in between
console.log(b.split('')) 




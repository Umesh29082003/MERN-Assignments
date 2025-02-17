const map= new Map()
map.set('IN', "India")
map.set('USA', "Inited States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const key  of map)
{
    console.log(key)
}


for (const [key, value]  of map)
{
        console.log(key, ":- ", value)
}

//Map is iterable but object isnt iterable we cannot use for loop to traverse object
//we can use for in loop

const myobj ={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby"
}

for( const key in myobj){
    console.log(`${key} is shortcut for ${myobj[key]}`)
}

//In arrays
const arr= [10, 20, 30, 40, 50]
//for of loop-> gives values
for ( x of arr){
    console.log(x)
}

//for in loop-> gives keys
for ( x in arr){
    console.log(x)
}

//map-> for of
//obj-. for in


//for each
arr.forEach((item)=>console.log(item))
//only problem is it cannot return value

//filter()
let newarr= arr.filter((num)=>num>20)
console.log(newarr)

//Chaining
const newarr2= arr.map((num) => num + 10).map((num) => num + 1)

//reduce()
const newarr3= arr.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},3)
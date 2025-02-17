// let a=20
// const b=20
// var c=30     //problematic

if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a)
// console.log(b)
console.log(c)



//Closure

//+++++++++++++++++++++++++++++++++++Interseting+++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}
console.log(addone(5))


//console.log(addtwo(5))    //Shows error this time
const addtwo=function(num){ //This is called hoasting
    return num+2
}
console.log(addtwo(5))

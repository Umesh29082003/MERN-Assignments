//false-> false, 0, -0, BigInt 0n, "", null, undefined, NaN
//true-> true, "0", "false", " ", [], {}, function(){}, 

//o check object is empty or not
//Object.keys(obj).lengh ===0

//false==0......false==''......''==0........all are true

//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = undefined ?? 10
val2= null ?? 20
val3= 5 ?? 10
console.log(val1)
console.log(val2)
console.log(val3)
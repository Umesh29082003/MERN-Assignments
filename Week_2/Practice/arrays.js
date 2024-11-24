const arr=[0,1,2,3,4,5]

const arr2=new Array(0,1,2,3,4)

console.log(arr[3])
console.log(arr)    //total array

arr.push(6)         //insert at end
console.log(arr)
console.log(arr.pop())  //delete from end

arr.unshift(9)      //insert at beginning
console.log(arr)    
        
arr.shift()         //delete from end
console.log(arr)

console.log(arr.includes(4))    //check present or not

const newarr=arr.join() //join array to string
console.log(newarr)
console.log(typeof newarr)


console.log(arr);
const arr3=arr.slice(1,3) // dont changes the original array (included, excluded)
console.log(arr)
console.log(arr3)

const arr4=arr.splice(1,3) //deletes the part from original array (included, included)
console.log(arr)
console.log(arr4)

const arr5= arr3.concat(arr4)   //returns a new array
console.log(arr5)

arr3.push(arr4)
console.log(arr3)
console.log(arr3[2][2])


const arr7= [...arr, ...arr2, ...arr3]  //spread //concat more than 2 arrays
console.log(arr7)

const arr8=[1,2,3,[4,5],[6,[7,8]]]
const arr9= arr8.flat(1)    //to flatten 1-D
const arr10=arr8.flat(Infinity) //to flatten all 

console.log(arr8)
console.log(arr9)
console.log(arr10)



console.log(Array.isArray("hELLO")) //check array or not
console.log(Array.from("Hello"))    //transform string to array
console.log(Array.from({name:"Umesh"})) //transform object to array

console.log(Array.of(arr,arr3,arr4))    //make array of arrays

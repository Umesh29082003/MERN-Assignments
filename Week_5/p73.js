function func(arr)
{
    return arr.length==3 ? [arr[2],arr[1],arr[0]] : "Array length not 3"
}

console.log(func([1,2,3]))
console.log(func([1,2,3,5]))
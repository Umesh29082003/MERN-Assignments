function func(arr)
{
    return arr.sort((x,y)=>x.length-y.length)
}

console.log(func(["abc","123","xy","1","","ab"]))
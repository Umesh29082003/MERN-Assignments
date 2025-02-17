function func(arr)
{
    return (arr.length>1) && (arr[0]==1 ||arr[arr.length-1] ==1)
}

console.log(func([1,2,3]))
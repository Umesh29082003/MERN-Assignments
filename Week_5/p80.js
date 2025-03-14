function func(arr)
{
    x=arr[0]
    arr[0]=arr[arr.length-1]
    arr[arr.length-1]=x
    return arr;
}

console.log(func([2,3]))
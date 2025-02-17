function func(arr)
{
    var max=arr[0]>arr[arr.length-1]? arr[0]:arr[arr.length-1]
    for( var x=0; x<arr.length; x++)
    {
        arr[x ]= max
    }
    return arr
}

console.log(func([1,2,3,4]))
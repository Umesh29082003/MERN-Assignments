function func(arr)
{
    for(x=0;x<arr.length/2;x++)
    {
        temp=arr[x]
        arr[x]=arr[arr.length/2 + x]
        arr[arr.length/2+x]=temp
    }
    return arr
}

console.log(func([1,2,3,4,5,6,7,8]))
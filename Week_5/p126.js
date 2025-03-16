function func(arr)
{
    arr.sort()
    for(x=arr.length-1;x>=0;x--)
    {
        if(arr[x]%2==0)
            return arr[x]
    }
}

console.log(func([2,3,6,7,8,4,1]))
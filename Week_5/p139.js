function func(arr)
{
    for(x=arr.length-1;x>=0;x--)
    {
        if(arr[x]%10==0)
            return x
    }
    return 0
}

console.log(func([23,29,30,45]))
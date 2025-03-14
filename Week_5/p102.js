function func(arr)
{   
    let c=0
    for(x=0;x<arr.length-1;x++)
    {
        for(y=x+1;y<arr.length;y++)
        {
            if(arr[x]>arr[y])
                c++
        }
    }
    return c
}

console.log(func([1,6,4,3,8,9,2]))
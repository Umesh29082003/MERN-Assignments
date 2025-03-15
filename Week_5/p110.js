function func(arr,k)
{   
    let c=0
    for(x=0;x<arr.length;x++)
    {
        if(arr[x]==k)
            break;
        if(arr[x]%2==0)
            c++;
    }
    return c
}

console.log(func([1,2,3,4,5,6,7,8],7))
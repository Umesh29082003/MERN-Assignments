function func(arr,a,b)
{   
    for(x=0;x<arr.length;x++)
    {
        if(arr[x]==a)
            arr[x]=b;
    }
    return arr
}

console.log(func([1,2,3,3,2,9,2],2,7))
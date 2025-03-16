function func(arr)
{   
    if(arr.length==1)
        return true
    numdir = arr[1]-arr[0]
    for(x=0;x<arr.length-1;x++)
    {
        if(numdir*(arr[x+1]-arr[x])<=0)
            return false
    }
    return true
}

console.log(func([10.8,6,4,2,1]))
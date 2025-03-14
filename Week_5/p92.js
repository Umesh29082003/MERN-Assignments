function func(arr)
{   
    let maxdiff=Math.abs(arr[0]-arr[1]);
    for(x=1;x<arr.length-1;x++)
    {
        if(Math.abs(arr[x]-arr[x+1])>maxdiff)
            maxdiff=Math.abs(arr[x]-arr[x+1])
    }
    return maxdiff
}

console.log(func([1,9,4,3,8,5,2]))
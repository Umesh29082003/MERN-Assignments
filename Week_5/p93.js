function func(arr)
{   
    let maxdiff=Math.abs(arr[0]-arr[1]);
    for(x=0;x<arr.length-1;x++)
    {
        for(y=x+1;y<arr.length;y++)
        if(Math.abs(arr[x]-arr[y])>maxdiff)
            maxdiff=Math.abs(arr[x]-arr[y])
    }
    return maxdiff
}

console.log(func([1,6,4,3,8,9,2]))
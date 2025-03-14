function func(arr)
{   
    let sum = Math.abs(arr[0]-arr[1]);
    for(x=1;x<arr.length-1;x++)
    {
            sum+=Math.abs(arr[x]-arr[x+1])
    }
    return sum
}

console.log(func([1,2,3,6]))
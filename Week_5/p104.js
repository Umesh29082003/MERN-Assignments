function func(arr,k)
{   
    let closest = Math.abs(Math.abs(arr[0]-arr[1])-k)
    let closest_diff = Math.abs(arr[0]-arr[1])
    let diff = Math.abs(arr[0]-arr[1])
    for(x=0;x<arr.length-1;x++)
    {
        for(y=x+1;y<arr.length;y++)
        {
            diff = Math.abs(arr[x]-arr[y])
            if(Math.abs(diff-k)<closest)
            {
                closest = Math.abs(diff-k)
                closest_diff = diff
            }
        }
    }
    return closest_diff
}

console.log(func([2,4,9,3],3))
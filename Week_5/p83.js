function func(arr)
{   
    let max = arr[0].length
    let maxstr=arr[0]
    for(x=1;x<arr.length;x++)
    {
        if(arr[x].length>max)
        {
            max=arr[x].length
            maxstr=arr[x]
        }
    }
    return maxstr
}

console.log(func(["hello","Hi","Bye Bye"]))
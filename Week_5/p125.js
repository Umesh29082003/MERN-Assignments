function func(arr)
{
    let max = 0
    let maxstr = ""
    for(x=0;x<arr.length;x++)
    {
        if(arr[x].length>max)
        {
            max = arr[x].length
            maxstr = ""+arr[x]
        }
    }
    return maxstr
}

console.log(func(["Hello","Okay","Welcome"]))
function func(num)
{   
    arr = (''+num).split('')
    for(x=0;x<arr.length-1;x++)
    {
        if(arr[x+1]<arr[x])
            return false
    }
    return true
}

console.log(func(159))
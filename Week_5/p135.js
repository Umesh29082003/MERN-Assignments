function func(str)
{
    let arr = str.split('')
    let res = []
    for(x=0;x<arr.length;x++)
    {
        if(str.indexOf(arr[x])==str.lastIndexOf(arr[x]))
        {
            res.push(arr[x])
        }
    }
    return res.join('')
}

console.log(func("Hello Hi Bye Bye"))
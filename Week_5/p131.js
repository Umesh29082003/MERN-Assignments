function func(arr)
{
    let pre = []
    sum = 0
    for(x=0;x<arr.length;x++)
    {
        sum = sum + arr[x]
        pre.push(sum)
    }
    return pre
}

console.log(func([1,3,4,2,5,8,7]))
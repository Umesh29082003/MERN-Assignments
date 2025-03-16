function func(num)
{
    arr= num.toString().split('')
    if(arr.length%2!=0)
        return false
    for(x=0;x<arr.length;x+=2)
    {
        temp = arr[x]
        arr[x] = arr[x+1]
        arr[x+1] = temp
    }
    return parseInt(arr.join(''))
}

console.log(func(3259))
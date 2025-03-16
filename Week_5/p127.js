function func(num)
{
    arr = num.toString(2).split('').reverse()
    l=arr.length
    for(x=0;x<8-l;x++)
    {
        arr.push('0')
    }
    return parseInt(arr.join(''),2)
}

console.log(func(18)) //00010010- > 01001000
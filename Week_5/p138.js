function func(num)
{
    let arr = num.toString(2).split('').reverse()
    let l = arr.length 
    for(x=0;x<16-l;x++)
    {
        arr.push('0')
    }
    return arr.join('')
}

console.log(func(8))
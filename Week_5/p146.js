function func(num)
{
    let s=0
    for(x=1;x<=num;x++)
    {
        s+= Math.pow(x,3)
    }
    return s
}

console.log(func(3))
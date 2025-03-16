function func(num)
{
    let d=num%10
    while(num>0)
    {
        if(num%10!=d)
            return false
        num=Math.floor(num/10)
    }
    return true
}

console.log(func(141))
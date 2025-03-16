function func(str)
{   
    let res = []
    for(x=0;x<=9;x++)
    {
        s=str
        s=s.replace('#',x+'')
        num = parseInt(s)
        if(num%3==0)
            res.push(num)
    }
    return res
}

console.log(func("2#0"))
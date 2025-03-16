function func(num)
{
    c=0
    while(num>0)
    {
        d = num%10;
        if(d%2 == 0)
            c++
        num = Math.floor(num/10)
    }
    return c
}

console.log(func(1834)) 
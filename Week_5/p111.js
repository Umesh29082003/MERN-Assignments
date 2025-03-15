function func(a,b,c)
{   
    if(a!=b && b!=c && c!=a)
        return "no numbers are equal"
    if(a==b)
        return c
    if(b==c)
        return a
    return b
}

console.log(func(2,4,2))
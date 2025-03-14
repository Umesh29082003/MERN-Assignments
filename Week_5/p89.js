function func(a,b,s)
{   
    if((a+b==s) || (a-b==s) || (a*b==s) || (a/b==s))
        return true
    else
        return false

}

console.log(func(100,20,5))
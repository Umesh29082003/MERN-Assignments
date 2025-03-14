function func(a,b,d)
{   
    if((a%d==0 && b%d==0)|| (a%d!=0 && b%d!=0))
        return true
    else
        return false

}

console.log(func(10,20,2))
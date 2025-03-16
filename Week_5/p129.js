function func(num)
{
    function isPrime(a)
    {
        for(x=2;x<=Math.sqrt(a);x++)
        {
            if(a%x==0)
                return false
        }
        return true
    }
    while(!isPrime(num))
    {
        num++;
    }
    return num
}

console.log(func(21)) 
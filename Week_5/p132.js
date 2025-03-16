function func(num)
{
    let arr = new Set()
    arr.add(1)
    function isPrime(a)
    {
        if(x==1||x==2)
            return true
        for(x=2;x<=Math.sqrt(a);x++)
        {
            if(a%x==0)
                return false
        }
        return true
    }
    for(x=2;x<num;x++)
    {
        if(num%x==0 && isPrime(x))
        {
            arr.add(x)
            while(num%x==0)
                num=num/x
        }
    }
    return arr
}

console.log(func(21)) 
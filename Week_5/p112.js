function func(num)
{   
    c5=0
    if(num<5)
        return 0
    for(x=5;x<=num;x++)
    {
        let k=x
        while(k%5==0)
        {
            k=k/5
            c5++
        }
    }
    return c5
}

console.log(func(19))
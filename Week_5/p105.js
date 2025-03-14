function func(num)
{   
    let k=0
    let x=num
    while(x>9)
    {
        sum=0
        num=x
        while(num>0)
        {
            d=num%10
            sum=sum+d
            num=Math.floor(num/10)
        }
        x=sum
        k++
    }
    return k
}

console.log(func(25))
function func(num)
{   
    let k=1
    let sum=0
    while(num>=1)
    {
        sum+=num
        num=Math.floor(num/2)
        k=k*2
    }
    return sum
}

console.log(func(8))
function func(num)
{
    let k=1
    while(num>k)
    {
        num=num-k
        k++;
    }
    if(num==k)
        return k
    return k-1
}

console.log(func(20))
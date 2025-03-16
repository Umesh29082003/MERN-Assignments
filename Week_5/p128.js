function func(num)
{
    if(num%10==0)
        return num
    return num + 10-(num%10)
}

console.log(func(182))
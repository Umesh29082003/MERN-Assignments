function func(num,k)
{   
    if(k==1)
        return num
    while(num % k == 0)
        num/=k
    return num;
}

console.log(func(15,3))
function func(x,y)
{   
    let k=0
    let p=1
    while(x>0 && y>0)
    {
        k= p * Math.floor((x%10 + y%10)%10) +k
        x=Math.floor(x/10)
        y=Math.floor(y/10)
        p=p*10
    }
    return k
}

console.log(func(165,198))
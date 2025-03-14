function func(x,y)
{   
    let res=0
    for(i=0;i<3;i++)
    {
        res+= x[i]*y[i]
    }
    return res
}

console.log(func([2,1,3],[3,2,2]))
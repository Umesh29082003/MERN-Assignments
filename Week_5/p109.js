function func(num)
{   
    res=[]
    for(x=1;x<num;x++)
    {
        let flag = 0
        for(y=2;y<=Math.floor(Math.sqrt(x));y++)
        {
            if(x%y==0)
            {
                flag = 1
                break
            }
        }
        if(flag == 0)
            res.push(x)
    }
    return res
}

console.log(func(19))
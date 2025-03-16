function func(a,b)
{
    let c=0
    for(x=0;x<a.length;x++)
    {
        for(y=0;y<b.length;y++)
        {
            if(a[x]==b[y])
                c++
        }
    }
    return c
}

console.log(func([1,2,3,4],[1,3,5,6]))
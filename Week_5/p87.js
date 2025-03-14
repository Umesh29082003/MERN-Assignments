function func(a,b)
{   
    if(a.length!=b.length)
        return false
    let diff =[]
    for(x=0;x<a.length;x++)
    {
        if(a[x]!=b[x])
            diff.push(x)
    }
    if(diff.length==0)
        return true
    if(diff.length!=2)
        return false
    if(a[diff[0]]==b[diff[1]] && a[diff[1]]==b[diff[0]])
        return true
    return false
}

console.log(func([10,20,30,40],[10,30,20,50]))
function func(str1,str2)
{  
    if(str1.length!=str2.length)
        return false
    let x=str1.split('').sort()
    let y=str2.split('').sort()
    for(i=0;i<x.length;i++)
    {
        if(x[i]!=y[i])
            return false
    }
    return true
}

console.log(func("hello","lehlo"))
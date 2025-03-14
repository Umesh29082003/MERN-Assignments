function func(str)
{   
    let u,l
    for(x=0;x<str.length;x++)
    {
        char = str.charAt(x)
        if(char>='A' && char<='Z')
            u++
        if(char>='a' && char<='z')
            l++
    }
    if(u>l)
        return str.toUpperCase()
    else
        return str.toLowerCase()
}

console.log(func("HelLo"))
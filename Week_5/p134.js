function func(str)
{
    let newstr=""
    for(x=0;x<str.length;x++)
    {
        let ch=str.charAt(x)
        if(ch>="a" && ch<="z")
        {
            newstr+= String.fromCharCode(219-ch.charCodeAt(0))
        }
        else
            newstr+= ch
    }
    return newstr
}

console.log(func("Hello"))
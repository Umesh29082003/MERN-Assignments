function func(str)
{
    let res = ""
    for(x=0;x<str.length;x++)
    {
        let ch = str.charAt(x)
        if(ch>='A' && ch<='Z')
        {
            ch= String.fromCharCode(ch.charCodeAt(0)+32)
        }
        else if(ch>='a' && ch<='z')
        {
            ch= String.fromCharCode(ch.charCodeAt(0)-32)
        }
        res+=ch
    }
    return res
}

console.log(func("Hello"))
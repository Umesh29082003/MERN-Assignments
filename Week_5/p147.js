function func(str)
{
    let s = 0
    for(x=0;x<str.length;x++)
    {
        let ch=str.charAt(x)
        if(ch>='0' && ch<='9')
            s=s+parseInt(ch)
    }
    return s
}

console.log(func("Hel12oo52"))
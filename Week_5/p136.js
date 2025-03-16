function func(str)
{
    for(x=0;x<str.length;x++)
    {
        let ch = str.charAt(x)
        if(ch>='0' && ch<='9')
        {
            return str.substring(0,x)+"$"+str.substring(x+1,str.length)
        }
    }
}

console.log(func("H1e2llo"))
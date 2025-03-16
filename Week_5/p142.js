function func(str)
{
    let newstr=""
    for(x=0;x<str.length-1;x++)
    {
        let ch=str.charAt(x)
        if(ch=='.' && str.charAt(x+1)!='.')
        {
            newstr = newstr.substring(0,newstr.lastIndexOf('/'))
        }
        else if(ch=='.' && str.charAt(x+1)=='.')
        {
            newstr = newstr.substring(0,newstr.lastIndexOf('/'))
            newstr = newstr.substring(0,newstr.lastIndexOf('/')+1)
        }
        else
        {
            newstr+=ch
        }
    }
    return newstr+str.charAt(str.length-1)
}

console.log(func("/desktop/practical/./Hello/../p1"))
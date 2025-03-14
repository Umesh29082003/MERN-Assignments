function func(str)
{
    let newstr=""
    for(x=0;x<str.length;x++)
    {
        ch=str.charAt(x)
        ascii=ch.charCodeAt(0)
        if(ascii>=65 && ascii<=90)
        {
            if(ascii==90)
                newstr+='A'
            else
                newstr+=String.fromCharCode(ascii + 1)
        }
        else if(ascii>=97 && ascii<=122)
        {
            if(ascii==122)
                newstr+='a'
            else
                newstr+=String.fromCharCode(ascii + 1)
        }
        else
        {
            newstr+=String.fromCharCode(ascii)
        }
            
    }
    return newstr
}

console.log(func("Hello and Welcome z"))
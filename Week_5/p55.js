function func(str)
{
    var pc=0, tc=0;
    for( var x=0; x<str.length; x++)
    {
        if(str.charAt(x)=="p")
            pc++;
        if(str.charAt(x)=="t")
            tc++;
    }
    return pc==tc
}

console.log(func("pet"))
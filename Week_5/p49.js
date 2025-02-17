function func(str)
{
    var newstr=""
    for( var x=0; x<str.length; x++)
    {
        var char = str.charCodeAt(x);
        if(char>=65 && char<=90)
            char = char+1 >90 ? char-25 : char+1
        else if(char>=97 && char<=122)
            char = char+1 >122 ? char-25: char+1
        newstr = newstr + String.fromCharCode(char)
    }
    return newstr
}
    console.log(func("Hello"))

function func(str)
{
    var word=""
    var newstr=""
    str=str + " "
    for(var x=0; x<str.length; x++)
    {
        if(str.charAt(x)!=" ")
            word = word + str.charAt(x);
        else
        {
            newstr = newstr + word.charAt(0).toUpperCase() + word.substring(1,str.length)+ " "
            word=""
        }
    }
    return newstr
}
    console.log(func("hello brother"))

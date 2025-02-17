function reverse(str)
{
    var newstr=""
    for( var x=str.length-1; x>=0; x--)
    {
        newstr = newstr + str.charAt(x)
    }
    return newstr
}
    console.log(reverse("Hello"))

function swap(str, char)
{
    var c=0;
    for( var x=1; x<4; x++)
    {
        if(str.charAt(x)==char)
            c++
    }
    return c>=1
}

console.log(swap("Hello","l"))
console.log(swap("JavaHello","o"))
function func(str) { 
    str = str.toLowerCase();
    var c=0;
    for(var x=0; x<str.length; x++)
    {
        var char = str.charAt(x)
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
            c++
    }
    return c
}

console.log(func("Hello"))
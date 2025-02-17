function func(str,n)
{
    return str.substring(0,n)+str.substring(str.length-n,str.length)
}

console.log(func("Hello",1))
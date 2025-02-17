function func(a,b)
{
    var m = Math.min(a.length, b.length)
    return a.substring(0,m) + b.substring(0,m)
}
console.log(func("Hello","Wor"))
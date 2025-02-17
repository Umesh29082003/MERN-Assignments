function func(str)
{
    var start = Math.floor(str.length/2) -1
    return str.substring(start,start+3)
}

console.log(func("Hello"))
function swap(str)
{
    var l=str.length
    return str.substring(l-3,l) + str + str.substring(l-3,l)
}

console.log(swap("Hello"))
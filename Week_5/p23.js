function swap(str)
{
    return str.charAt(str.length-1) + str.substring(1, str.length-1) + str.charAt(0)
}

console.log(swap("Hello"))
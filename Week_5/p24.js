function swap(str)
{
    return str.charAt(0) + str.substring(0, str.length) + str.charAt(0)
}

console.log(swap("Hello"))
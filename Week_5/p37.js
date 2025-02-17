function swap(str)
{
    if(str.length>3)
        return str.substring(0,3).toLowerCase() + str.substring(3,str.length)
    else    
        return str.toUpperCase()
}

console.log(swap("HellScript"))
console.log(swap("Jaa"))
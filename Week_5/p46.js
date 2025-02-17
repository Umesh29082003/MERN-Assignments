function check(a,b)
{
    if(!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0)))
        return (a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0)
    else    
        return false
}

console.log(check(7,11))
console.log(check(77,11))
console.log(check(7,77))
console.log(check(11,7))
console.log(check(7,2))

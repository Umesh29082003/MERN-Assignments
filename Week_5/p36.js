function check(a,b,c)
{
    return (a%10 == b%10) && (b%10 == c%10)
}

console.log(check(20,30,50))
console.log(check(50,55,40))
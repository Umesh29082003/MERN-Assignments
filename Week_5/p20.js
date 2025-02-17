function check(a,b)
{
    return (a>0 && b<0) || (a<0 && b>0)
}

console.log(check(5,-5))
console.log(check(-5,5))
console.log(check(-5,-5))
console.log(check(5,5))

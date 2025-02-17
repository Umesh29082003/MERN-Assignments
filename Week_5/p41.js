function check(a,b,c)
{
    return (a==b && b==c)? 30 : (a==b ||b==c ||c==a)? 40 : 20
}

console.log(check(10,10,10))
console.log(check(10,20,10))
console.log(check(10,20,30))
console.log(check(10,10,20))
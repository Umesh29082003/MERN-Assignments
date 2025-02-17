function check(n)
{
    return Math.abs(n-100)<=20 || Math.abs(n-400)<=20
}

console.log(check(50))
console.log(check(90))
console.log(check(120))
console.log(check(389))
console.log(check(412))

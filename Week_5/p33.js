function check(x,y)
{
    return (x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)
}

console.log(check(50, 55))
console.log(check(50, 70))
console.log(check(20, 55))
console.log(check(60, 55))
console.log(check(100, 80))
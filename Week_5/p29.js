function check(x,y,z)
{
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)
}

console.log(check(10,60,50))
console.log(check(80,40,10))
console.log(check(20,40,100))
console.log(check(100,20,50))
function check(x,y,z)
{
    return (x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < y || z < x))
}

console.log(check(10,20,30));
console.log(check(11,13,15));
console.log(check(26,28,29));
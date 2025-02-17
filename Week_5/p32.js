function large(x,y)
{
    var a= Math.abs(100-x)
    var b= Math.abs(100-y)
    return a>b?y:x;
}

console.log(large(10,20))
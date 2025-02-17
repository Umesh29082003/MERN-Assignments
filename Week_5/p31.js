function large(a,b,c)
{
    return a>b?a>c?a:c:b>c?b:c;
}

console.log(large(10,20,30))
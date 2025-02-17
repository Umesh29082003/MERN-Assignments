function diff(n)
{
    if(n>19)
        return (n-13)*9;
    else    
        return 19-n;
}

console.log(diff(5))
console.log(diff(13))
console.log(diff(19))
function div(a,b)
{
    if(b==0)
        return "Cannot divide by Zero"
    else    
    return (a/b).toLocaleString(undefined, {maximumFractionDigits: 2});
}

console.log(div(100000,9))
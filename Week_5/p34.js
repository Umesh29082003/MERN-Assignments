function check(x,y)
{
    if(x>=40 && x<=60 && y>=40 && y<=60)
        return x>y?x:y;
    else    
        return "Number out of range"
}

console.log(check(20,30))
console.log(check(50,55))
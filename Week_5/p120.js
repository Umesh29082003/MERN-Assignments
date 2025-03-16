function func(cx,cy,rad,a,b)
{   
    return Math.sqrt((a-cx)*(a-cx)+(b-cy)*(b-cy))<rad

}

console.log(func(1,1,5,6,6))
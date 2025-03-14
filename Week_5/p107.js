function func(arr)
{   
    let k=0
    for(x=0;x<arr.length-1;x++)
    {
        for(y=x+1;y<arr.length;y++)
        {
            if(arr[y]%arr[x]==0)
                k++         
        }
    }
    return k
}

console.log(func([1,2,4,6,8,10]))
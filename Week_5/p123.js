function func(arr,num)
{   
    let p=new Set()
    for(x=0;x<arr.length;x++)
    {
        if(arr[x]>=1 && arr[x]<=num)
            p.add(arr[x])
        else
            return false
    }
    if(p.size==num)
        return true
    return false
}

console.log(func([2,4,1,3,5],5))
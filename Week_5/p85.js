function func(arr)
{   
    let result=[0,0]
    for(x=0;x<arr.length;x++)
    {
        if(x%2==0)
            result[0]+=arr[x]
        else
            result[1]+=arr[x]
    }
    return result
}

console.log(func([1,2,3,4,5,6,7,8]))
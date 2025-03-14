function func(arr,k)
{   
    let maxsum=0;
    let sum=0
    for(x=0;x<k;x++)
    {
        sum+= arr[x]
        maxsum=sum
    }
    for(x=k;x<arr.length;x++)
    {
        sum-=arr[x-k]
        sum+=arr[x]
        if(sum>maxsum)
            maxsum=sum
    }
    return maxsum
}

console.log(func([1,9,4,3,8,5,2],2))
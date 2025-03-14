function func(arr,k)
{   
    for(x=0;x<k;x++)
    {
        max=arr[x]
        maxi=x
        for(y=x+1;y<arr.length;y++)
        {
            if(arr[y]>max)
            {
                max=arr[y]
                maxi=y
            }
        }
        arr[maxi]=arr[x]
        arr[x]=max
    }
    return arr[k-1]
}

console.log(func([1,9,4,3,8,5,2],5))
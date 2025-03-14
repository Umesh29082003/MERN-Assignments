function func(arr1,arr2)
{  
    for(x=0;x<arr1.length;x++)
    {
        if(arr2.indexOf(arr1[x])!=-1)
            return true
    }
    return false
}

console.log(func([1,2,3],[4,5,6]))
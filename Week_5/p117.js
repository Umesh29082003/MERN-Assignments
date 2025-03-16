function func(arr)
{   
    for(x=0;x<arr.length;x++)
    {
        for(y=0;y<arr.length;y++)
        {
            if(x!=y && arr[x][y]!=0)
                return false
            if(x==y && arr[x][y]!=1)
                return false
        }
    }
    return true
}

console.log(func([[1,0,0],[0,1,0],[0,0,1]]))
function func(arr)
{   
    let map = new Map()
    let maxcount = 0
    let mode

    for(let x of arr)
    {
        map.set(x,(map.get(x)||0)+1)
        if(map.get(x)>maxcount)
        {
            maxcount=map.get(x);
            mode=x;
        }
    }
    return mode
}

console.log(func([1,2,3,3,2,9,2]))
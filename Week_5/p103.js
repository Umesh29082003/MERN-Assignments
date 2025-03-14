function func(num)
{   
    let maxnum=0
    let str=num.toString()
    for(x=0;x<str.length;x++)
    {
        new_num = parseInt(str.substring(0,x)+str.substring(x+1))
        maxnum = Math.max(maxnum,new_num)
    }
    return maxnum
}

console.log(func(2419))
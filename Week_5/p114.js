function func(str)
{   
    let f=str.charAt(0)
    let l=str.charAt(str.length-1)
    return f>='A' && f<='Z' && l=='.'
}

console.log(func("Hey, welcome everyone."))
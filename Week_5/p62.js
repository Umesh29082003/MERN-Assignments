function func(str)
{
    if(str.length>=3)
        return str.substring(str.length-3,str.length)+ str.substr(0,str.length-3)
    else    
        return str
}

console.log(func("Hello"))
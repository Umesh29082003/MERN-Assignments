function func(str) 
{
    
    if(str.charAt(0).toLowerCase()=='p' && str.charAt(str.length-1).toLowerCase()=='p')
        return str.substring(1,str.length-1)
    else
        return str
}
  
console.log(func("Pipep"))
console.log(func("Pipe"))

function func(str) 
{
    if (str.substring(str.length - 6, str.length) == 'Script') 
      return true
    else
      return false
}
  
console.log(func("HellScript"))
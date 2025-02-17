function func(str) 
{
    return str.substring(0,3)=="Los" || str.substring(0,3) == "New"
}
  
console.log(func("Newzeland"))
console.log(func("India"))

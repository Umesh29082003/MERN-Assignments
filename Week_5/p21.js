function check(str)
{
    if(str.substring(0,2)=="Py")
        return str;
    else
        return "Py"+str
}

console.log(check("Python"))
console.log(check("ython"))
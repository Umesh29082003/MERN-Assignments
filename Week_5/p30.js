function swap(str)
{
    return str.substring(4,10)=="Script"? str.substring(0,4)+str.substring(10,str.length): str;
}

console.log(swap("HellScript"))
console.log(swap("JavaHello"))
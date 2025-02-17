function remove(str, pos)
{
    return str.substring(0,pos) + str.substring(pos+1,str.length);
}

console.log(remove("Hello",2))
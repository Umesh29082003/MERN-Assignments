function func(str)
{   
    function isPal(str)
    {
        return str==str.split('').reverse().join('')
    }
    for(x=0;x<str.length;x++)
    {
        let endpart = str.substring(x,str.length);
        let fisrtpart = str.substring(0,x)
        if(isPal(endpart))
            //return str + fisrtpart.substring(0,).split('').reverse().join('')
            return fisrtpart.length
    }
    
}

console.log(func("abbaba"))
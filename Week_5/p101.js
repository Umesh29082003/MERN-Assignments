function func(str)
{  
    let first =str.charAt(0);
    for(x=0;x<str.length;x++)
    {
        if(first>='A' && first <='Z')
        {
            ch=str.charAt(x)
            if(x%2==0  &&  (ch>='a' && ch<='z'))
                return false
            if(x%2!=0  &&  (ch>='A' && ch<='Z'))
                return false
        }
        else if(first>='a' && first <='z')
        {
            ch=str.charAt(x)
            if(x%2==0  &&  (ch>='A' && ch<='Z'))
                return false
            if(x%2!=0  &&  (ch>='a' && ch<='z'))
                return false
        
        }
    }
    return true
}

console.log(func("HellO"))
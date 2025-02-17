function func(str) {
    if (str.length >= 3) {
        newstr = str.substring(str.length - 3);
        return newstr.repeat(4)
    } 
    else 
        return false;
}

console.log(func("Hello"))
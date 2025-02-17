function func(str) { 
    str = str.toLowerCase();
    return (/a...b/).test(str) || (/b...a/).test(str)
}

console.log(func("ask bro"))
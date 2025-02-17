function func(str) { 
    str = str.toLowerCase();
    return str.split("").sort().join("");
}

console.log(func("Hello"))
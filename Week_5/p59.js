function func(str)
{
    if (str.length % 2 == 0) {
        return str.slice(0, str.length / 2);
    }
    return str;
}

console.log(func("Helloo"))
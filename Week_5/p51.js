function func(n)
{
    var hr = Math.floor(n/60)
    var min = n%60
    return hr + " hours " + min + " minutes"
}
console.log(func(350))

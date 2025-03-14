function func(a)
{   
    if(a<90)
        return "Acute Angle"
    else if(a==90)
        return "Right Angle"
    else if(a<180)
        return "Obtuse Angle"
    return "Straight Angle"
}

console.log(func(150))
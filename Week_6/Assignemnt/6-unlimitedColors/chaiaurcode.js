//Generate A random Color
const randomColour = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i =0 ; i<6 ; i++)
    {
        color += hex.charAt(Math.floor(Math.random()*16))
    }
    return color
}

let intervalid
//Randomly change color continiously
const startChangingColor = function(){
    if(!intervalid)
        intervalid = setInterval(changeBGColor,1000)
    function changeBGColor(){
        document.body.style.backgroundColor = randomColour() 
    }
}

//Stop changing Color
const stopChangingColor = function(){
    clearInterval(intervalid)
    intervalid = null
}



document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        //console.log(e)    //The event
        //console.log(e.target)     //The targent from which the even is generated
        //console.log(e.target.id)  //id of that target
        body.style.backgroundColor = e.target.id
    })
})
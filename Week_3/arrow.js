//Arrow Function

const user= {
    username : "Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

console.log(this)

function chai(){
    let username="hitesh";
    console.log(this)
    console.log(this.username)
}
chai()

const chai2 = function (){
    let username="hitesh";
    console.log(this)
    console.log(this.username)
}

chai2()


//Arrow Function

const chai3 = ()=> {        //This is different
    let username="hitesh";
    console.log(this)      //Different value
    console.log(this.username)
}

chai3()

//-------------------------------------------------------

const addthree = (num1, num2, num3)=>{
    return num1 + num2 + num3
}

//const addthree = (num1, num2, num3)=> num1 + num2 + num3
//const addthree = (num1, num2, num3)=> (num1 + num2 + num3)
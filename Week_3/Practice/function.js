function sayMyName(){
    console.log("Hello")
}
console.log(sayMyName)
sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
addTwoNumbers(10,20)
addTwoNumbers(10,"2")
addTwoNumbers(10,"a")
addTwoNumbers(10,null)
addTwoNumbers(10)
addTwoNumbers()


function addTwoNumbers2(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers(3, 5)
console.log(result)

//"" empty string is false and undefined is false

function loginUser(username="Sam"){ //gaev default name if no argument
    console.log(`${username} just logged in`)
}
loginUser("Umesh")
loginUser()


//When number of parameters not known //rest operater 
function calculateCostPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCostPrice(100, 200, 400, 500))
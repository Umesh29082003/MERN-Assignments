const mySym = Symbol("key1") //creating a symbol


//Object Literals
const user={
    name: "Umesh",
    "full name": "Umesh Sahoo", //cant be accessed using dot
    [mySym]: "mukey1", //cant be accessed using dot
    age: 18,
    location: "Cuttack",
    email: "umesh@123gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(user.email)
console.log(user["email"])

// console.log(user.full name)   will not execute
console.log(user["full name"])

console.log(user[mySym])

user.greet = function(){
    console.log(`Hello User ${user.name}`)
}

user.greet()
console.log(user.greet)
console.log(user.greet())



user.age = 21
console.log(user.age)
Object.freeze(user)     //to freeze the change so that no more change can occur
user.age = 18       //change doesnt stay
console.log(user.age)
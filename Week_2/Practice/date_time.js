//Dates
let myDate= new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let Date1= new Date(2023, 0, 23)
let Date2= new Date(2023, 0, 23, 5, 3)
let Date3= new Date("2023-01-14")
let Date4= new Date("01-14-2023")

console.log(Date1)
console.log(Date2)
console.log(Date3)
console.log(Date4)


console.log(Date1.getMonth())
console.log(Date1.getTime())
console.log(Date1.getDate())
console.log(Date1.getDay())

//Time
let myTime=Date.now()
console.log(myTime)

console.log(Date1.toLocaleString('default',{
    weekday: "long"
}))
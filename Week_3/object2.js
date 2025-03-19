//Singleton Object
const user= new Object()
user.name="Umesh"
user.id="1234abc"


//Object inside Object

const user2={
    fullname:{
        firstname: "Umesh",
        lastname: "Sahoo"
    }
}
console.log(user2)
console.log(user2.fullname)
console.log(user2.fullname.firstname)

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

const obj3={obj1,obj2}
console.log(obj3)

const obj4=Object.assign({},obj1, obj2) //1st parameter is where to merge the array and keep
console.log(obj4)
console.log(obj1)

const obj5= {...obj1,...obj2}
console.log(obj5)


console.log(Object.keys(obj5))
console.log(Object.values(obj5))
console.log(Object.entries(obj5)) // array of arrays

console.log(obj5.hasOwnProperty('1'))
console.log(obj5.hasOwnProperty('5'))


const {id}=user;
console.log(id);
const {name: fname}= user       //Array destructuring
console.log(fname)

//Calling api and fetching data 
//Data can be in json or array of objects
//Use JSON formatter to see
//Primitive Data Types
const score = 100
const scoreval = 98.76
const name = "Nitin"
const temp = null
const isLoggedIn = false
//Declaring Symbol
const ID = Symbol('123')
const AnotherID = Symbol('123')
console.log(ID === AnotherID);//false as we know Symbols are unique
//Declaring array 
const Heroes = ["Papa","Mummy","Bhagwaan"]
//Declaring Objects(can contain any data types,another objects and even functions in it )
let Myobj = {
    name : "Nikhil",
    age : 23,
}   
//Declaring Function 
const MyFunc = function(){
    console.log("Namaste Bhaiya");
}
const n = 87423372832178912393280n
console.log(typeof Heroes);
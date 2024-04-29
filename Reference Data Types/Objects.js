
// Object.create //constructor method
const Mysm = Symbol('key1')
const JSuser = {
    name : "Nabin",//Key value pairs
    age : "18",
    [Mysm] : "Nabin",
    email : "nabinsharma98@gmail.com",
    location : "Noida",
    isLoggedIn : false,
    LastLoginDays : ["monday","Tuesday"],
    "Full name " : "Nabin Sharma"
}//Literal method 
//Declaring Symbol 


console.log(JSuser.email);//Not best way to access as it cannot access when key pair is in double quotes
console.log(JSuser["Full name "]);//Best way to access Object elements
console.log(JSuser[Mysm]);//Prints Nabin
JSuser.email = "nabinsha@87gmail.com"//Overwriting  data
// Object.freeze(JSuser)//freezes data 
//Declaring Function : 
JSuser.greeting = function(){
    console.log("Namaste Bhaiyon ");
}

console.log(JSuser.greeting());//output Namaste Bhaiyon 
console.log(JSuser.greeting);//return onluy reference of Function 
JSuser.greetingTwo = function(){
    console.log(`Namastee , ${this["Full name "]}`);
}
console.log(JSuser.greetingTwo());
const user = {
    username : "Nabin",
    age : 20,
    price : 999,
    WelcomeMessage: function(){
            console.log(`${this.username}, welcome to Website`);
            console.log(this);
    }
}
user.WelcomeMessage() //Nabin welcome to Website
user.username = "Sam"
user.WelcomeMessage();//Sam, welcome to website
/*this keyword returns : 
{
  username: 'Sam',
  age: 20,
  price: 999,
  WelcomeMessage: [Function: WelcomeMessage]
} 
*/
console.log(this); // {}
function chai(){
    let username = "Nitesh"
    console.log(this);
}
chai()
/* OUTPUT : <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */ 
const promiseOne = new Promise(function(resolve , reject){
    //Do an async task 
    setTimeout(function(){
        console.log("Promise hai ye ")
        resolve() //connects the promise to .then()
    },1000)
})
promiseOne.then(function(){
    console.log("Node consumed");    
})
//
//Promise hai ye 
//Node consumed
new Promise(function(resolve , reject){
    console.log("Async task 1");
    resolve();
}).then(function(){
    console.log("Async task 2");
})

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Nabin" , email:"sharmanabin@gmail.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
})
//{ username: 'Nabin', email: 'sharmanabin@gmail.com' }

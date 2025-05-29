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


const promiseFour = new Promise(function(resolve , reject){
    let error = true;
    if(!error){
        resolve({user:"Nabin" , pass:"1234"})
    }else{
        reject("404 Buddy")
    }
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
})
//finally is to happen when whatever was meant to happen has happened
//Letsee how to handle Promises using async await

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({user:"Nabin", pass:"xyz"})
        }else{
            reject("ERROR : 404")
        }
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
}
consumePromiseFive()
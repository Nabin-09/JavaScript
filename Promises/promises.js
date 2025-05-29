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
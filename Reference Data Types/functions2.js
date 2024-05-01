function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(400,300,500));//prints only 400
//Prints [400,300,500] after using the rest operator    
function calprice(val1,val2,...num1){
    return num1
}
console.log(calprice(200,300,400,500,600));//Prints 400,500,600
const user1 = {
    name : "Nabin",
    age : 20
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}
handleObject(user1)//Username is Nabin and Age is 20
//Other way to do it - 
handleObject({
    name : "Nigga",
    age : 89
})//Username is Nigga is age is 89
const arr = [1,2,3,4,5];
function retArr (getArray){
    return getArray[1]
}
console.log(retArr(arr));//2
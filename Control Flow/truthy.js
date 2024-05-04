const email = "nabin98@gmail.com"
if(email){//assuming that string has true email,even runs when we send an array
    console.log("Got Email");
}
else{//runs when empty string
    console.log("Didn't get");
}
/* Flasy values
false
0 
-0
0n
""
null,undefined
Nan */
/* All other than Falsy values are truthy values
special ones : "0" , 'false'," ",[],{},function(){} */
const emptyObj = {}
if(Object.keys(emptyObj).length == 0){//Checking Object in conditionals
    console.log("Object is not empty");
}
//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5??10
console.log(val1);//5
let val2 
val2 = null??10
console.log(val2);//10
//rejects values null and undefined
let val3
val3 = null??undefined
console.log(val3);//undefined
let val4 = null ?? 10 ?? 20
console.log(val4);//10
// ternary operator
/* Condition ? true : false
 */
const iceprice = 100 ? console.log("more than 99") : console.log("less than 99");
let val1 = 10;
let val2 = 20;
function adnum(num1,num2){
    let total = num1 + num2;
    return total;
}
let result = adnum(val1,val2);
let result2 = adnum(60,80);
/*Global execution happens first(allocated under 'this') - it will always occur
Memory Phase : 
val1 -> undefined 
val2 -> undefined 
adnum -> definiton 
result -> undefined
result2 -> undefined
Execution phase :
val1 <- 10
val2 <- 20
adnum -> creates executional context box 1 = (includes new variable environment + execution thread)
box1 has Memory phase = val1 -> undefined, val2 = undefined,total -> undefined. 
box1 then goes for Executional context num1->10,num2->20
and then executional context deletes. */

for (let index = 0; index < 10; index++) //(initialisation ; condition check: counter)
{
    const element = index;
    console.log(element);//prints 1-9
}
// Loops in loops
for(let i=0 ;i<4 ;i++){
    console.log(`Outer loop ${i}`);
    for(let j = 0 ;j<4;j++){
        console.log(`Outer loop : ${i} and outer loop ${j}`);
    }
} /*Outer loop 0
Outer loop : 0 and outer loop 0
Outer loop : 0 and outer loop 1
Outer loop : 0 and outer loop 2
Outer loop : 0 and outer loop 3
Outer loop 1
Outer loop : 1 and outer loop 0
Outer loop : 1 and outer loop 1
Outer loop : 1 and outer loop 2
Outer loop : 1 and outer loop 3
Outer loop 2
Outer loop : 2 and outer loop 0
Outer loop : 2 and outer loop 1
Outer loop : 2 and outer loop 2
Outer loop : 2 and outer loop 3
Outer loop 3
Outer loop : 3 and outer loop 0
Outer loop : 3 and outer loop 1
Outer loop : 3 and outer loop 2
Outer loop : 3 and outer loop 3 */
//Break and continue
for (let index = 0; index <= 20; index++) {
    const element = index;
    if(element==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${element}`);
}
/* output : 
Value of i is 0
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4 */
for (let index = 0; index <= 20; index++) {
    const element = index;
    if(element==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${element}`);
}/* Skips iterations :
Value of i is 0
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
Value of i is 7
Value of i is 8
Value of i is 9
Value of i is 10
Value of i is 11
Value of i is 12
Value of i is 13
Value of i is 14
Value of i is 15
Value of i is 16
Value of i is 17
Value of i is 18
Value of i is 19
Value of i is 20 */

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

let index = 0
while(index < 10){
    console.log(`Value of Index is ${index}`);
    index = index + 2;
}
/* O/P :
Value of Index is 0
Value of Index is 2
Value of Index is 4
Value of Index is 6
Value of Index is 8  */
let myArr = ['Batman','Nabin','Papa']
let arr = 0;
while(arr<myArr.length){
    console.log(`The SuperHero is ${myArr[arr]}`);
    arr++;
}
/*Output : 
The SuperHero is Batman
The SuperHero is Nabin
The SuperHero is Papa */
//Do while 
let score = 0;
do {
    console.log(`Score is ${score}`);
    score++
}
while (score<10);
/*Score is 0
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9 
if score was intialised at 11 : Score is 11 prints*/
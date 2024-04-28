console.log(Math);//Object
/* We have many methods in the math class : 
like srqt ceil abs */
console.log(Math.abs(-34));
console.log(Math.round(3.55));
console.log(Math.ceil(3.2));
console.log(Math.ceil(5.8));
console.log(Math.max(4,6,7,9,12));
console.log((Math.min(6,7,8,9,100)));
/*OUTPUT : 
34
4  
4
6
12
6*/
console.log((Math.random()));//Generates Random number .
console.log((Math.random())*10 + 1);
//Formula : 
const mx = 10;
const mn = 20;
console.log(Math.floor(Math.random()*(mx-mn + 1))+mn);//Generates random numbers bw 10 and 20
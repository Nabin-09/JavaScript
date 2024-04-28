const myArr = [3,,6,7,8,10] // can contain mix of different data types and resizable {2nd is empty item}
console.log(myArr[0]); //3
const MyHeroes = ["ballu","killua","sharua","hautra"]
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[2]);// 3
myArr.push(7);
console.log(myArr);
myArr.pop();
myArr.unshift(20);
console.log(myArr);//inserts 20 at beginning
console.log(myArr.join());
// Slice and splice 
let my1 = [1,2,3,4,6,7]
console.log(my1.slice(1,4));// 2 3 4(doesn't change array)
console.log(my1.splice(1,4));// 2 3 4 6 (changes original array)
console.log(my1);
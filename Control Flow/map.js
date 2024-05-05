const Nums = [1,2,3,4,5,6,7,8,9]
const NewNums = Nums.map((num) => {return num + 5})
console.log(NewNums); //[ 6,  7,  8,  9, 10, 11, 12, 13, 14 ] 
//chaining
const NewNumer = Nums
                .map((num) => num*5)
                .map((num)=>num + 1)
                .filter((num) => num>=15)
console.log(NewNumer); //[  16, 21, 26, 31, 36, 41, 46]
/* reduce 
const arr = [1,2,3,4,5]
const val = 0;
const SumWithInitial = arr.reduce((
    accumulator,currval) => accumulator + currval, val);
    console.log(SumWithInitial); // 15 */
    
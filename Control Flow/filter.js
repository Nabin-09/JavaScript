/*const coding = ['php','ruby','cpp','js']

const values = coding.forEach((item) => {
    console.log(item);
    return item;//for each wont ever return any value
})
console.log(values)
o/p : 
php
ruby
cpp
js
undefined*/
const MyNums = [1,2,3,4,5,6,7,8,9]
//MyNums.filter(() => {})
const nums = MyNums.filter((num) => num>4) // returns values that are true
console.log(nums);//[5,6,7,8,9]
//if we start scope by using {  } e will ahve to use return keyword.
//Doing above process using For Each
const NewNums = []
MyNums.forEach((item)=>{
    if(item>4){
        NewNums.push(item)
    }
})
console.log(NewNums); // [5,6,7,8,9]
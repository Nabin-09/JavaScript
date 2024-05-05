const lang = ['cpp','js','java','php','ruby']
lang.forEach(function greet(val){
    console.log(val);
})
/*cpp
  js
  java
  php
  ruby */
//using arrow function
lang.forEach((item) =>{
    console.log(item);//prints all items in array
})
/*Alternate way of using for each
function printme (items) {
    console.log(items);
}
lang.forEach(printme)
*/
myCoding  = [
    {
        langname : 'cpp',
        langfile : 'cpp'
    },
    {
        langname : 'java',
        langfile : 'file'
    },
    {
        langname : 'JAvascript',
        langfile : 'JS'
    }
]
myCoding.forEach((item) => {
    console.log(item.langname);
})
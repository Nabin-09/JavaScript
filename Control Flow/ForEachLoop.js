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

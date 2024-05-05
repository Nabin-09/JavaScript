//for of 
const arr = [1,2,3,4,5]
for (const val of arr) //for(iterator of Object) -> Object refers to a thing and not the JS object
    {
    console.log(val);
}//1 2 3 4 5
const greeting = "HORNY HO "
for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}
const mpp = new Map()
mpp.set("IN","INDIA")
mpp.set("EN","ENGLAND")
mpp.set("FR","FRANCE")
console.log(mpp); // Map(3) { 'IN' => 'INDIA', 'EN' => 'ENGLAND', 'FR' => 'FRANCE' }
for(const key of mpp){
    console.log(key);
    /*[ 'IN', 'INDIA' ]
    [ 'EN', 'ENGLAND' ]
    [ 'FR', 'FRANCE' ] */
}
// to print keys
for(const [key,value] of mpp){
    console.log(key,':-',value);
    /*IN :- INDIA
    EN :- ENGLAND
    FR :- FRANCE */
}
for(const [key] of mpp){
    console.log(key);
    /*IN
    EN
    FR */
}
const myObj = {
    'game1' : 'Spiderman',
    'game2' : 'Batman',
    'game3' : 'KrazyMad'
}
/*for(const [key,value] of myObj){
    console.log(key,":-",value) throws error(now iterable)
}*/
for (const key in myObj){
    // console.log(key); printS all the keys
    console.log(`${key} :- ${myObj[key]}`);
    /*game1 :- Spiderman    
    game2 :- Batman
    game3 :- KrazyMad */
}
const languages = ['php','cpp','java','JS']
for (const key in languages){
    // console.log(key);// 0 1 2 3 4
    console.log(languages[key]);
    /*php
cpp
java
JS */
}
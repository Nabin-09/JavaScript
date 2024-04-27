const name = "Nabin "
const repoCount = 66 
//Concatenation
// console.log(name + repoCount + " Value"); // Outdated Technique dont use
// console.log(`My name is ${name} and my repo count is ${repoCount}`);//String interpolation
const Name =  new String("NabinHAi")//Declaration using constructor
// console.log(typeof Name);//Object
// console.log(typeof name);//string
// console.log(name[0]);

//Some methods 
 console.log(Name.length);
 console.log(Name.toUpperCase);//Original Value isn't changed
 console.log(Name.charAt(2));//Checks what character at what Index
 console.log(Name.indexOf('a'));//Checks char is at what index
 const NewMaaal = Name.substring(0,4)//First Argument is for index and 2nd is for how many characters
 console.log(NewMaaal);//Substring doesnot obey negative values
 const anotherString = "Cricket"
 console.log(anotherString.slice(-5,3));//First Argument is for Index and 2nd is for how many characters.
 const newName1 = "  Karizma   "
 console.log(newName1);
 console.log(newName1.trim());//Trims starting and end spaces
 //Read MDN docs for Trim (Very Important)
 const url = "https://nabin.dev/nabin%20sharma"
 console.log(url.replace('nab','car'));//only first nab is changed and not second 
 /*OUTPUT : 
 8
[Function: toUpperCase]
b
1
Nabi
i
  Karizma
Karizma
https://carin.dev/nabin%20sharma
 */ 
 
 //Check more methods at Mdn Docs
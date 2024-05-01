/* function one (){
    const username = "Nabin"
    function two (){//can access all elements of one
        const website = "youtube.com"
        console.log(username);
    }
    console.log(website);//cannot acces website outside two
    two()//prints Nabin
}
one()
*/
if(true){
    const username = "Nabin"
    if(username === "Nabin"){
        const website = " youtube "
        console.log(username + website);
    }
    // console.log(username + website);// cannot access website outside scope 
}
// console.log(username); throws error out of scope
//Hoisting :
console.log(addone(5));//Prints 6 even if function is declared later
function addone (num){
    return num + 1;
}
/* console.log(ans);//throws error as ans is defined later and it stores values of addtwo
const ans = function addtwo(num){
    return num + 2;
} */
/* console.log(b);
let b = 2;//cannot access before initialisation */
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
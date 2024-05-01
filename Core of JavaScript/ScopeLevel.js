function one (){
    const username = "Nabin"
    function two (){//can access all elements of one
        const website = "youtube.com"
        console.log(username);
    }
    console.log(website);//cannot acces website outside two
    two()//prints Nabin
}
one()
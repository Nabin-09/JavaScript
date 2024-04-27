//Stack (Primitive Data types) and Heap (Non-Primitive/Reference Type)
let YoutubeName = "Nabin GayMer"
let anotherName = YoutubeName
console.log(anotherName);
anotherName = "Nitin Gaymer"
console.log(anotherName);
/*OUTPUT
Nabin GayMer
NitinGaymer  */
let userOne = { //heap give reference of original value
    email : "Nabingogoi@gmail.com",
    upi : "8929297628@ypl"
}
let userTwo = userOne
userTwo.email = "nabinsharmalol@gmail.com"
console.log(userOne.email);//Value gets changes in the userOne Object as well as reference or adress is passed
                           // to userTwo and not the copy of value 
console.log(userTwo.email);
/*OUPUT:
nabinsharmalol@gmail.com
nabinsharmalol@gmail.com 
*/
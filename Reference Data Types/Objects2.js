// const user = new Object(); creates an object(singleton object)
// console.log(user);  {}
const user = {}
user.name = "Nabin Sharma"
user.ID = 7832383281
user.IsloggedIn = false
const regular = {
    owner : "Nabin",
    email : "abxc89@gmail.com",
    fullname : {//Object in object
        userfullname : {//Object in Object in Object
            firstname : "Nabin",
            lastname : "Sharma"
        }
    }
}
console.log(regular.fullname.userfullname.firstname);//accessing objects in objects
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3  = {obj1,obj2} // creates object inside Object not preferred
console.log(obj3);

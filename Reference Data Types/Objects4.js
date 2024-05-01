const course = {
    coursename : "Js tutorial",
    price : 999,
    instructor : "Nabin"
}
// console.log(course["coursename"]); working syntax
// other ay to extract values 
const {coursename : name } = course //name is the short name I gave
console.log(name);//Js tutorial 
// {//treated as Json if not specified as object
//     "name" : "Nabin"
//     "price" : "999"
// }
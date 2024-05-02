//Immediately Invoked Function Expression (IIFE)
function chai(){
    console.log(`DB connected`);
}
chai(); //(use ; while using IIFE ,prints DB connected
(function addTwo(){
    console.log(`This is IIFE`)
}) // first paranthesis si for definition of function 
(); // parentheseis for execution prints this is IIFE
/*Passing Parameters to Fucntion */
((name) => {
    console.log(`DB connected ${name}`);
})('Nabin'); //Prints DB connected Nabin
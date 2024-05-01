
function print(){
    console.log("NABIN");
}
print()
function AddNumber(num1,num2){
    console.log(num1 + num2);
}
// AddNumber()//Prints NaN
// AddNumber(3,"3")//33
// AddNumber(3,"a")//3a
// AddNumber("a",3)//a3
// AddNumber(3,null)//3
const result = AddNumber(3,5) 
function Addnums(num1,num2){
   let result = num1+num2;
   return result;
}
const res = Addnums(8,9)
console.log(res);
function LoginMessage(username){
    return `${username} just Logged in` 
}
console.log(LoginMessage("Nabin"));

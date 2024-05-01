const user = {
    username : "Nabin",
    age : 20,
    price : 999,
    WelcomeMessage: function(){
            console.log(`${this.username}, welcome to Website`);
            console.log(this);
    }
}
user.WelcomeMessage() //Nabin welcome to Website
user.username = "Sam"
user.WelcomeMessage();//Sam, welcome to website
/*this keyword returns : 
{
  username: 'Sam',
  age: 20,
  price: 999,
  WelcomeMessage: [Function: WelcomeMessage]
} 
*/
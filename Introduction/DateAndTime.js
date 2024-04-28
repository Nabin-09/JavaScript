let Mydate = new Date()//Its an object
console.log(Mydate.toString());
//Sun Apr 28 2024 13:28:43 GMT+0530 (India Standard Time)
console.log(Mydate.toDateString());
//Sun Apr 28 2024
console.log(Mydate.toLocaleDateString());
//28/4/2024
console.log(Mydate.toISOString());
let CreateDate = new Date(2024,0,23)//We can also insert "2024-01-23" or "01-23-2024"
console.log(CreateDate.toLocaleDateString());
//23/1/2024 --> Months start with 0 in JS while parameterizing
let MyTimeStamp = Date.now();//Shows miliseconds now
console.log(MyTimeStamp);//Miliseconds from 1st Jan 1970 until now
console.log(CreateDate.getTime());//Shows what was the time back then.
let newDate = new Date();
console.log(newDate.getMonth()); //3
console.log(newDate.getDate()); // 28
console.log(newDate.getDay());// 0 (Sunday)
newDate.toLocaleString('default',{
    weekday: "long"
})
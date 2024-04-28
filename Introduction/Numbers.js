const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString());//Converting Number to string
console.log(typeof balance);//Object
console.log(balance.toFixed(2));//Used to give precision value 
const othNum = 28.98832
console.log(othNum.toPrecision(2));//returns a string (returns 28.99{4 characters})
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//Uses Indian way to commas to segregate values.
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991 {We have many more function}
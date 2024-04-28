let myHer = ["kill","die","mourn","sorrow"]
let MyHer2 = ["live","life","courage"]
// myHer.push(MyHer2)
// console.log(myHer);[ 'kill', 'die', 'mourn', 'sorrow', [ 'live', 'life', 'courage' ] ]
// let MyHer3 = myHer.concat(MyHer2)
// console.log(MyHer3);
/*Output : 
[
  'kill',    'die',
  'mourn',   'sorrow',
  'live',    'life',
  'courage'
]*/
let myHer3 = [...myHer,...MyHer2]
console.log(myHer3);
let a1 = [1,2,[3,4],5,[1,[2,3]]]
let a2 = a1.flat(Infinity);
console.log(a2);//[1, 2, 3, 4, 5, 1, 2, 3]
console.log(Array.isArray("Nabin")); 
console.log(Array.from("Nabin"));//[ 'N', 'a', 'b', 'i', 'n' ] 
console.log(Array.from({name:"Nabin"}));//Interesting - gets confused and returns nothing
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]
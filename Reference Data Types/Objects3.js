const user ={
    name : "Nabin ",
    age : 18,
    UID : 76621812,
    Username : {
        firsttag : "nab",
        secondtag : "8976"
    }
}
console.log(user["name"]);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2}
// console.log(obj3);  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
 const obj3 = Object.assign(obj1,obj2) // give {} as optional paramter to get guaranteed result.it acts as target and the latter parameters act as source
 console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } (used very less)
 const obj4 = {...obj1,...obj2}//spread operator
 console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

 const user1 = [//array of objects
    {
        id : 1,
        email : "djhad@gmail.com"
    },
    {
        id : 2,
        email : "asas@gmail.com"
    },
]
//accessing it 
console.log(user1[1].email); //simple syntax accessing arrays element then object
console.log(Object.keys(user));//type object returns [ 'name', 'age', 'UID', 'Username' ]
console.log(Object.values(user));//[ 'Nabin ', 18, 76621812, { firsttag: 'nab', secondtag: '8976' } ]
console.log(Object.entries(user));/*[
    [ 'name', 'Nabin ' ],
    [ 'age', 18 ],
    [ 'UID', 76621812 ],
    [ 'Username', { firsttag: 'nab', secondtag: '8976' } ]
  ] */
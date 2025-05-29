const promiseOne = new Promise(function(resolve , reject){
    //Do an async task 
    setTimeout(function(){
        console.log("Promise hai ye ")
        resolve() //connects the promise to .then()
    },1000)
})
promiseOne.then(function(){
    console.log("Node consumed");    
})
//
//Promise hai ye 
//Node consumed
new Promise(function(resolve , reject){
    console.log("Async task 1");
    resolve();
}).then(function(){
    console.log("Async task 2");
})

const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Nabin" , email:"sharmanabin@gmail.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
})
//{ username: 'Nabin', email: 'sharmanabin@gmail.com' }


const promiseFour = new Promise(function(resolve , reject){
    let error = true;
    if(!error){
        resolve({user:"Nabin" , pass:"1234"})
    }else{
        reject("404 Buddy")
    }
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
})
//finally is to happen when whatever was meant to happen has happened
//Letsee how to handle Promises using async await

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({user:"Nabin", pass:"xyz"})
        }else{
            reject("ERROR : 404")
        }
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response)
}
consumePromiseFive()

async function getAllUsers(){
    try{
    const response = await fetch('https://api.github.com/users/Nabin-09')
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.log("E:",error);
    }
}
getAllUsers()
//output 
/*
Async task 1
Async task 2
404 Buddy
{
  login: 'Nabin-09',
  id: 136674695,
  node_id: 'U_kgDOCCV9hw',
  avatar_url: 'https://avatars.githubusercontent.com/u/136674695?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/Nabin-09',
  html_url: 'https://github.com/Nabin-09',
  followers_url: 'https://api.github.com/users/Nabin-09/followers',
  following_url: 'https://api.github.com/users/Nabin-09/following{/other_user}',
  gists_url: 'https://api.github.com/users/Nabin-09/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/Nabin-09/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/Nabin-09/subscriptions',
  organizations_url: 'https://api.github.com/users/Nabin-09/orgs',
  repos_url: 'https://api.github.com/users/Nabin-09/repos',
  events_url: 'https://api.github.com/users/Nabin-09/events{/privacy}',
  received_events_url: 'https://api.github.com/users/Nabin-09/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'Nabin Sharma',
  company: null,
  blog: 'https://leetcode.com/nabin_09/',
  location: 'Greater Noida , Uttar Pradesh , Bharat.',
  email: null,
  hireable: null,
  bio: 'Would love to be an Innovator rather than just another manager.\r\n',
  twitter_username: null,
  public_repos: 28,
  public_gists: 0,
  followers: 10,
  following: 10,
  created_at: '2023-06-15T05:02:29Z',
  updated_at: '2025-05-26T12:08:36Z'
}
Promise hai ye 
Node consumed
{ username: 'Nabin', email: 'sharmanabin@gmail.com' }
{ user: 'Nabin', pass: 'xyz' }
*/
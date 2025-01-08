const promiseOne=new Promise(function(resolve,reject){
  setTimeout(function(){
 // console.log('Async task complete');
  resolve()
},1000) 
}
)

 promiseOne.then(function(){
 // console.log("Promise consumed")
})

new Promise(function(resolve,reject){
 setTimeout(function(){
   console.log("Async task 2 ")
   resolve()
},1000)
}).then(function(){
  console.log('Async task resolved')
})

const promiseThree=new Promise(function(resolve,reject){

  setTimeout(function(){
    resolve({username:"Aryan",email:"xyz@gmail.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
 setTimeout(function(){
  let error=false
  if(!error){
   resolve({username:'Aryan',pass:'1234'})
  } else{
    reject('ERROR')
  }
},1000)
})

promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
}).catch(function(error){
console.log(error)
}).finally(()=>console.log('Resolved or rejected'))


//const promiseFive=new Promise(function(resolve,reject){
//  setTimeout(function(){
//    let error=false
//    if(!error){
//     resolve({username:'Javascript',pass:'1234'})
//    } else{
//      reject('Js went wrong')
//    }
//  },1000)
//})
//
//async function consumePromiseFive(){
// const response= await promiseFive
// console.log(response)
//}
//
//consumePromiseFive()

async function getUsers(){
try {
  const response=await fetch('https://randomuser.me/api/')

  const data=await response.json()
  console.log(data)
  
} catch (error) {
  console.log("E:",error)
}
 
}

getUsers()

fetch('https://randomuser.me/api/').then((response)=>{
  return response.json()
}).then((data)=>{
 console.log(data);
}).catch((error)=>console.log(error))
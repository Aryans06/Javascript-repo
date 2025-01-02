const user={
 username:"Aryan",
 age:20,

 welcomeMessage:function(){
   console.log(`${this},welcome to website`)
   console.log(this);
}

}
//user.welcomeMessage()
//user.username="Anupam"
//user.welcomeMessage()

//console.log(this)

function chai(){
 console.log(this)
}

//chai()

//const addTwo=(num1,num2)=>{
 //  return num1+num2
//}

//const add=(num1,num2)=>(num1+num2)

// Immediately Invoked Function Expressions(IIFE)

(function hello(){
 console.log("connected")
})()
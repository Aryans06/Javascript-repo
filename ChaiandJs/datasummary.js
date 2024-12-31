// Primitve
// 7types: string,Number,Bigint,symbol,null,boolean,undefined

//reference(non primitive)

//Array,objects,functions

 let obj={
  name:"Aryan", 
  age:22
}

const myFunction= function(){
  console.log("Hello")
}

//Stack(Primitve) and Heap Memory(Non primitive)
let Myname="Aryan"
let anothername= Myname
anothername="Pallavi"

console.log(Myname)
console.log(anothername)


let User={
  Useremail:"aryans2637",
  upi:"upi@ybl"

}

let Usertwo=User
Usertwo.email="Yahoo@gmail.com"

console.log(User.email)
console.log(Usertwo.email)
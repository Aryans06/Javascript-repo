// singleton

// object literals

/* const jsUser={
  name:"Aryan",
  age:20,
  location:"Chennai",
  isLoggedin:false
}

console.log(jsUser["name"])

//Object.freeze(jsUser)

jsUser.greeting=function(){
  console.log(`Hello Js User ${this.age}`)
}

console.log(jsUser.greeting()); */

 // const tinderUser= new Object() singelton object

 const tinderUser={}

 tinderUser.name="Aryan"
 tinderUser.age=20
 tinderUser.isLogged=false;

 //console.log(tinderUser);

 const target={1:'a',2:'b',3:'c'}
 const source={4:'d',5:'e',6:'f'}

 //const object=Object.assign({},target,source)
 const object={...target,...source}
 
 //console.log(object)

 //console.log(Object.keys(tinderUser))
 //console.log(Object.values(tinderUser))
 //console.log(Object.entries(tinderUser))
 
 //console.log(tinderUser.hasOwnProperty('isLoggedIn'))

 const course={
  coursename:"Javascript",
  name:"Aryan",
  credit:4
}

const {name: myname}=course

console.log(myname)
 
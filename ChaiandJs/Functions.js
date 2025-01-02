function Myname(){
  console.log("Hello")
  console.log("Hello")
  console.log("Hello")
  console.log("Hello")
}

function add(number1,number2){
 console.log(number1+number2)
}
// rest operator
 function calculateCartPrice(...num1){
  return num1
}

 //console.log(calculateCartPrice(200,400,500,600))
 const team={
  name:"CSK",
  Place:"Chennai"
}

 const user={
  name:"Aryan",
  age:20
}

function handleObject(anyobject){
 console.log(`Username is ${anyobject.name} and place is ${anyobject.Place}`)
}

handleObject(team)

const myNewArray=[100,200,400,500]

function returnSecondValue(getAnyarray){
  return getAnyarray[2]
}

console.log(returnSecondValue(myNewArray));
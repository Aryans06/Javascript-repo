
function DegreetoFahrenheit(Celsius){
  const result=(9/5)*Celsius+32
  return result;
}
function FahrenheitToDegree(Fahrenheit){
  const ans= (Fahrenheit-32)*(5/9)
  return ans
}

console.log(DegreetoFahrenheit(50))
console.log(FahrenheitToDegree(100));
const numbers = [1,2,-1,3,4];
let sum = numbers.reduce((accumelator, currentValue)=>{
  return accumelator + currentValue;
},0)
console.log(sum)



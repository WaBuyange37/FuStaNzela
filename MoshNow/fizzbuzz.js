// divisible by 3 we get Fizz
// divisible by 5we get BUzz
// divisible by both 3 and 5 we get Fizz
// !divisible by 3 and 5 we get that number
function fizzBuzz(number){
  //  if(number % 3 === 0 && number % 5 === 0){
  //   return "fizzbuzz"
  //  }
  //  else if(number % 3 ===0){
  //   return "fizz"
  //  }
  //  else if(number % 5 ===0){
  //   return "buzz"
  //  }
  //  else{
  //   return number;
  //  }
  return ((number % 5 === 0) && (number % 3 ===0)) ? "FizzBuzz"
          : (number % 3 === 0)? "Fizz"
          : (number % 5 === 0) ? "Buzz"
          : (typeof number !=="number") ? "not a number"
          : number;
}
let k = fizzBuzz(15);
console.log(k)
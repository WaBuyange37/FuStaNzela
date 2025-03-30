let numbers=[1,2,3,4,5,6];
// numbers.forEach((number,index)=> console.log(index,":",number));
// numbers.forEach(number=> console.log(number));
for(let number of Object.keys(numbers))//re: for of loop require Object.keys to iterate through index
  console.log(number,':',numbers[number])//without it it iterate on element only

// for(let i in numbers)
//   console.log(i,':',numbers[i])


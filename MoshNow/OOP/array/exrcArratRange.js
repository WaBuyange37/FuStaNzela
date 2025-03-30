let numbers = arrayFromRange(10,40);
console.log(numbers)

function arrayFromRange(min, max){
  const arr = []
  for(let i=min; i <= max; i++)
    arr.push(i);
  return arr;
}

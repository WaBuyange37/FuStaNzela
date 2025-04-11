const numbers=[1,2,3,4,5,1];
const newArr =except(numbers,[1,5,10])
console.log(newArr)
function except(array, exclude){
  return array.filter(el => !exclude.includes(el)); 
  // this above is the best way the below is  traditional
  // const outPut=[];
  // for(let i of array)
  //   if(!exclude.includes(i))
  //     outPut.push(i)
  // return outPut
}
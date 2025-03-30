let arr = [3,4,1];
arr.push(5,6,1)
arr.unshift(1,2)
arr.splice(2,0,'a','b')
console.log(arr)
console.log(arr.indexOf(1))
console.log(arr.lastIndexOf(1))
// to search if an element belongs in an array, we do like


// let indices = numbers.map((el, i) => (el === value ? i : -1)).filter(i => i !== -1);
// console.log(indices);
let valueToSearch=1;
let indices = arr.map((el, i)=>(el=== valueToSearch ? i : -1)).filter(i=>i!==-1);
console.log(indices)
for(let key in indices)
  console.log(arr[indices[key]])
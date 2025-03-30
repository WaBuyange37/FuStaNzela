let numbers = [2,4,5,7,6,1];
let fromSmall=[...numbers].sort((a,b)=> a-b);
let fromBig = [...fromSmall].reverse();
// console.log(numbers.sort())
// console.log(numbers.reverse())

console.log(fromSmall)
console.log(fromBig)

//sort by name of courses
const courses = [
  {id: 1, name: 'Umwero'},
  {id: 2, name: 'Kinyarwanda'}
];
let display=courses.sort((a,b)=> {
  let bName=b.name.toLowerCase();
  let aName=a.name.toLowerCase();
  return aName.localeCompare(bName)
}
)
console.log(display)//k=153, u=165

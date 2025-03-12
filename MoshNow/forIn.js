let Person = {
  name: 'Nzela',
  age: 34,
  hobbie: 'eating',
  love: 'Christ',

};
for(let i in Person)
  console.log(i, Person[i]);

//for in mostly used in objects
//then for of in arrays
let arr = ['amabanga','umuhuro','ubukungu',32];
for(let [i,j] of arr.entries())
  console.log(i,j);
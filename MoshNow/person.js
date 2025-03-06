let person={
  name:'Nzela',
  age: 26,
  hobbie: 'JavaScript',
};
let myList = [122,5,'nkunda js',person.name];
myList[3]='ndebe';
console.log(typeof myList);
console.log(myList);
if(person.name === myList[3]){
document.getElementById('name').innerText=person.name;
document.getElementById('age').innerText=person.age;
}
else{
  document.getElementById('name').innerText='unknown';
document.getElementById('age').innerText='unknown';
}
console.log(`my name is: ${person.name}\n I have ${person.age} Years old\n I love ${person.hobbie}`);
let person={
  name:'Nzela',
  age: 26,
  hobbie: 'JavaScript',
};
document.getElementById('name').innerText=person.name;
document.getElementById('age').innerText=person.age;
console.log(`my name is: ${person.name}\n I have ${person.age} Years old\n I love ${person.hobbie}`);
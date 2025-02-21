function greet() {
  console.log(
    `hello my friend Mr ${person.name} are  you ${person.age} years old`
  );
}
let person = {
  name: "kwizera",
  age: 26,
  greet,
};
person.greet();

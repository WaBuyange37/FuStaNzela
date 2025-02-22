// function greet() {
//   console.log(
//     `hello my friend Mr ${person.name} are  you ${person.age} years old`
//   );
// }
let person = {
  name: "kwizera",
  age: 26,
  greet: function greet() {
    return `hello my friend Mr ${person.name} are  you ${person.age} years old`;
  },
};
console.log(person.greet());
let name = "kwizera akunda kwiga js";
let arr = [];
arr = name.split("");
console.log(arr.reverse().join(""));

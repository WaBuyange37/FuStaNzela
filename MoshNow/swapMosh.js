let a = 'red';
let b = 'blue';
//my own method
let temp = a;
a=b;
b=a;
b=temp;

console.log(a);
console.log(b);
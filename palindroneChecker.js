/*let str = ["madam", "mango", "check", "racecar", "level", "javascript"];
let palindrone = [];
for (let i of str) {
  if (i === i.split("").reverse().join("")) {
    palindrone.push(i);
    // console.log(palindrone);
  }
}
console.log("Final Palindrome Array:", palindrone);*/
//let do a function that checks if a word is a palindrone and if true new array-
//is created and the same index show  1 if not 0
let str = ["madam", "mango", "check", "racecar", "level", "javascript"];
function ckecker(arr) {
  let newArr = [];
  for (let i of arr) {
    if (i === i.split("").reverse().join("")) {
      newArr.push(1);
    } else {
      newArr.push(0);
    }
  }
  return newArr;
}

console.log(ckecker(str));

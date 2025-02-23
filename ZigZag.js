let arr1 = [1, 3, 2, 4, 3, 5];
let arr2 = [1, 2, 3, 4];
function zgzg(amaArray) {
  for (let i = 0; i < amaArray.length - 1; i++) {
    if (i % 2 === 0) {
      if (amaArray[i] >= amaArray[i + 1]) {
        return false;
      }
    } else {
      if (amaArray[i] <= amaArray[i + 1]) {
        return false;
      }
    }
  }
  return true;
}
console.log(zgzg(arr1));
console.log(zgzg(arr2));

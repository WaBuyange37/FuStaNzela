let favArtist = ["Fanuel Sedekia", "Christina Shusho", "Rose Muhando"];
let favNumber = [0, 18, 7, 37];
// let mixeArray = ["hello", [1, 2, 3], 123, true];
// console.log(favArtist[0]);
// console.log(mixeArray[0]);
// console.log(mixeArray[1][0]);
// console.log(mixeArray[1][1]);
// console.log(mixeArray[1][2]);
// console.log(mixeArray[2]);
// console.log(mixeArray[3]);
// console.log(favNumber);

// basic array methods
let combinatedArray = favArtist.concat(favNumber);
console.log(combinatedArray);
// console.log(combinatedArray.includes("Fanuel Sedekia"));
if (combinatedArray.includes("Fanuel Sedekia")) {
  console.log(combinatedArray.indexOf("Fanuel Sedekia"));
}

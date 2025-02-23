let words = "Kwizera patrick obed";
let vowels = "auoei";
let wordArray = words.split(" ");
wordArray.sort((a, b) => {
  function getDifference(word) {
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of word.toLowerCase()) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
    return consonantCount - vowelCount;
  }
  return getDifference(a) - getDifference(b);
});
console.log(wordArray);

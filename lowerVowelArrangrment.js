let words = "Kwizera patrick obed Ruhangamagambo ";
let vowels = "auoei";
let wordArray = words.split(" ");
// Function to deep clone an array
/** deep clone is uncessary in here, it will be helpful when we have nested arrays or objects
 * function deepClone(arr) {
    return arr.map((item) =>
        Array.isArray(item)
            ? deepClone(item)
            : typeof item === "object"
            ? { ...item }
            : item
    );
}
 */

// Clone the original array before sorting
// let originalArray = deepClone(wordArray);
let originalArray = [...wordArray];
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
console.log("Original:", originalArray);
console.log("Sorted:", wordArray);

// let data = [
//   ["Apple", "Banana", "Cherry"],
//   { name: "John", age: 25 },
//   [10, 20, [100, 200, 300]],
// ];

// let clonedData = [...data];
// clonedData[0][1] = "Mango";
// clonedData[1].age = 30;
// clonedData[2][2][1] = 999;
// console.log(clonedData);
// console.log(data); // The original data is also changed
//deep clone funcdtion to correct te above issues
let data = [
  ["Apple", "Banana", "Cherry"],
  { name: "John", age: 25 },
  [10, 20, [100, 200, 300]],
];

// Deep clone function
function deepClone(arr) {
  return arr.map((item) =>
    Array.isArray(item)
      ? deepClone(item)
      : typeof item === "object"
      ? { ...item }
      : item
  );
}

// Clone the data deeply
let clonedData = deepClone(data);

// Modify the cloned data
clonedData[0][1] = "Mango";
clonedData[1].age = 30;
clonedData[2][2][1] = 999;

// Print both arrays
// console.log("Cloned Data:", clonedData);
// console.log("Original Data:", data);

console.log(clonedData[0].join("-"));

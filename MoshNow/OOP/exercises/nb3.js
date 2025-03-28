class MyAddress {
  constructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  showMyAddress() {
    for (let i in this) {
      if (typeof this[i] !== 'function') {
        console.log(i + ":", this[i]);
      }
    }
  }
}

const nzela = new MyAddress('Gatsata', 'Kigali', 349);
const mugisha = new MyAddress('Gatsata', 'Kigali', 349);

// Function to check if objects have the same properties
let ndebe = function areEqual(a, b) {
  // Compare properties of both objects
  for (let key in a) {
    if (a[key] !== b[key]) {
      return false;  // If properties don't match, return false
    }
  }
  return true;  // If all properties match, return true
};

// Check if nzela and mugisha are equal by value (not reference)
if (ndebe(nzela, mugisha)) {
  nzela.showMyAddress();  // Call showMyAddress if they are equal
} else {
  console.log("The objects are not equal.");
}

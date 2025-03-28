// Define separate behaviors as objects
const canSpeak = {
    speak() {
        return `${this.name} says hello!`;
    }
};

const canWalk = {
    walk() {
        return `${this.name} is walking`;
    }
};

// Create a function that combines different behaviors
function createPerson(name) {
    return Object.assign({ name }, canSpeak, canWalk);
    // Object.assign copy from source Object to targeet object
}

const person = createPerson("Kwizera");
console.log(person.speak());  
console.log(person.walk());   

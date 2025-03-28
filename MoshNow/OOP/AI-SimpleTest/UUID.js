 const { v4: uuidv4 } = require('uuid');

 // Generate a random UUID
 const random_uuid = uuidv4();

 // Print the UUID
 console.log(random_uuid);

/**  Generate a random UUID
const random_uuid = uuidv4();

// Print the UUID
console.log(random_uuid);

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
*/

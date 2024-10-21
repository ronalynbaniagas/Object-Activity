// objectActivity.js

// Create an object called car
const car = {
    type: "Sedan",
    model: "Corolla",
    color: "Black"
};

// Use typeof to check the type of the object and log it to the console
console.log(typeof car); // "object"

// Update the type property to "Toyota" and log the updated object
car.type = "Toyota";
console.log(car); // { type: "Toyota", model: "Corolla", color: "Black" }

// Add a new property wheels with the value 4 and log the updated object
car.wheels = 4;
console.log(car); // { type: "Toyota", model: "Corolla", color: "Black", wheels: 4 }
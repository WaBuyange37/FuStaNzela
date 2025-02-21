let car = {
  type: "",
  model: "",
  color: "",
};
car.wheels = 3;
let car1 = Object.create(car);
car1.type = "Toyota";
car1.model = "corolla";
car1.color = "black";
car1.wheels = 4;
console.log(car);

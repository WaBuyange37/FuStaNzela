// car factory
// it returns a brand(string), model(string), Year(number)
function createCar(brand,model,Year){
  return{
    brand,
    model,
    Year,
    getCarInfo: function(){
      return `${brand} ${model} (${Year})`
    }
  }
}
let firstCar=createCar('Toyota', 'collora', 2020);
console.log(firstCar.getCarInfo());
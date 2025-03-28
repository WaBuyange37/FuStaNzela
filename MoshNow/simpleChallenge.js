
(amamodoka('toyota','whl',12000000).carFullInfo());
(amamodoka('BMW','whl014',15000000).carFullInfo());
function amamodoka(name,model,price=0){
  let programmer='Kwizera Mugisha';
  let tax=0;
  if(price<=12000000)
    tax=(price * 15)/100;
  else if(price>12000000)
    tax=(price * 22)/100;
  return{
    name,
    model,
    price,
    tax,
    carInfo: function(){
      console.log(`the car's name is ${this.name}`);
    },
    carModel(){
      console.log(`the car's model is ${this.model}`);
    },
    carFullInfo: function(){
      console.log(`the car's name is ${this.name}\n
        the car's model is ${this.model}
        happa sawa?\n
        the car tax is ${this.tax}`);
        
    },


  }
}
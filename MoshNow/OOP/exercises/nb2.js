// nb1 but using factory function
function myAddress(street, city, zipCode){
  //let cheatCode= 1;
  let address = {
    street: street,
    city: city,
    zipCode: zipCode,
    showMyAddress(){
      for(let key of Object.keys(this)){
        if(typeof this[key] !== 'function'){
          console.log(key+":"+" "+this[key]);
        }
      }
    }

  }
  return address;
}
let show1 = myAddress('Gatsata','Kigali', 349);
show1.showMyAddress()
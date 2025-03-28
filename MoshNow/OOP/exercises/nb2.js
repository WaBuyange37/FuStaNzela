// nb1 but using factory function
function myAddress(street, city, zipCode){
  //let cheatCode= 1;
  return {
    street,
    city,
    zipCode,
    showMyAddress(){
      for(let key of Object.keys(this)){
        if(typeof this[key] !== 'function'){
          console.log(key+":"+" "+this[key]);
        }
      }
    }

  }
  
}
let show1 = myAddress('Gatsata','Kigali', 349);
show1.showMyAddress()
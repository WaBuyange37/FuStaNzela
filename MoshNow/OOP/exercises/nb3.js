//nb1 but conctructor

class MyAddress{
  constructor(street, city, zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
  }
  showMyAddress(){
    for(let i in this){
      if(typeof this[i] !== 'function')
        console.log(i+":",this[i]);
    }
  }
}
const nzela = new MyAddress('Gatsata','Kigali', 349);
nzela.showMyAddress();
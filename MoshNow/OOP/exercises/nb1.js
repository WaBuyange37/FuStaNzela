// address object with 3 properties
// street city and zipcode
// function called shhowAddress that 

let address = {
  street: 'Kanyonyomba',
  city: 'Kigali',
  zipCode: 349,
  showAddress: function(){
    for(let i in this)
      if(typeof this[i] !== 'function')
        console.log(i+':',this[i])
  },
}
address.showAddress();
//method is a function in an object

let circle = {
  radius:1,
  location:{
    x:1,
    y:1,
  },
  isVisible : !true,
  draw: function(){//draw is not a function but a method
    if(this.isVisible){
      console.log('show circle');}
    else{ 
      console.log('false neveer show');}
  },
}
circle.draw();

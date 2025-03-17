// just like factory produce product
// the factory function in Js produce objects

function createCircle(radius){
  return {
    radius,
    draw: function()
    {    
      console.log('show circle');
    },
}
}

let a=createCircle(1);
console.log(a)
console.log(a.draw())
console.log(createCircle(3))
//circle.draw();
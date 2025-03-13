//speed limit = 70km/hr
speedChecker(170);
function speedChecker(speed){
  const speedLimit = 70;
  const speedPoint = 5;
  if(speed <= speedLimit){
    console.log("Ok")
  }
  else{
     const points = Math.floor((speed-speedLimit)/speedPoint);
     if(points>=12){
      console.log("baragufunga woe")
     }
     else{
      console.log('points is: ', points);
     }
  }
}
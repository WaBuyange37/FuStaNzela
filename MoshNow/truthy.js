function truthyChecker(inputNow){
  let count = 0;
  for(let i of inputNow){
    if(i){
      count+=1;
    }
  }
  return count;
    

}
console.log(truthyChecker([12,3,'', 0,'0']));
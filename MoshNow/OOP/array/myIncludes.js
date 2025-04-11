arry=[0,2,3,4,5,'R'];
console.log(myIncludes(arry,'r'));

function myIncludes(arr, searcElement){
  for(let i of arr)
    if(i===searcElement)
      return true;
  return false;
}
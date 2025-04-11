let arr = [1,2,3,1,4];
console.log(myMax(arr));
console.log(myCount(arr));
function myMax(arr){
  return arr.reduce((a,b)=> a>b?a:b)
}
function myCount(arr){
 return arr.reduce((acc, item)=> {
    acc[item]=(acc[item]||0)+1;
    return acc;
  },{})
}
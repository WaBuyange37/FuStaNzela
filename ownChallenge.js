let strToSwap = 'abdca';
//target to swap it to "dbaca" this was in amalitech and hard to me at the time
//let me punish this, let it know it was a fear at interview and not hard to me
let noSswapped=[...strToSwap];
let arr=strToSwap.split('');
  let temp=arr[0];
  arr[0]=arr[2];
  arr[2]=temp;
console.log('orginal: ',noSswapped.join('')); 
console.log('swapped: ',arr.join('')); 

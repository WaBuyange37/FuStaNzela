myPyramid(6);

function myPyramid(limit){
  for(let i=1; i<=limit;++i){
    for(let j=1;j<=i;++j)
      process.stdout.write('*');
    console.log(``)
  }
}
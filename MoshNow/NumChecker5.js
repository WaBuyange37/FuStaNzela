function checker(number){
  for( let i = 0 ; i <= number ; i++){
    // let str = "";
    // if(i % 2 ===0)
    //   str = "Even";
    // else
    //   str = "odd";
    let str = (i % 2 ===0) ? "Even" : "Odd";
    console.log(`${i} "${str}"`)
  }
}
checker(50);
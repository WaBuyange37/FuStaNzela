const fs = require("fs").promises;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let inAns = [];

//intialize the array to hold the landom number
for(let i = 0; i <= 100; i++){
  inAns.push(i)
}
//the compiler Random guess
const randomInAnsIndex = Math.floor(Math.random() * inAns.length);
const compilerGuess = inAns[randomInAnsIndex]

//from user
rl.question("enter your choice: ",(choice)=>{
  const userChoice = Number(choice);
  if(userChoice === compilerGuess){
    console.log('you win')}
  else{
    console.log('loose');}
  rl.close()
})


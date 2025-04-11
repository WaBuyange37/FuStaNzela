//let work on readline app where a student can do multiple choice quiz and get his glad accondingly
const readline = require('readline');
let rl = readline.createInterface(
  {input: process.stdin,
  output: process.stdout,}
);
const questions = [
  {
    ikibazo: 'who created Umwero alphabet',
    amahitamo: ['Einstain','Mugisha','Pascal'],
    igisubizo: 'Mugisha',
  },
  {
    ikibazo: 'which country Origin culture Umweero is rooted in',
    amahitamo: ['Zimbabwe','Kenya','Rwanda'],
    igisubizo: 'Rwanda',
  },
  {
    ikibazo: 'which religion Of Mugisha of Umwero',
    amahitamo: ['Christian','Athiest','Musilm'],
    igisubizo: 'Christian'
  }
];
let amanota = 0;
let indx = 0;
function dutangire(){
  const qs = questions[indx];
  console.log(`${indx+1}) ${qs.ikibazo}`)
  qs.amahitamo.forEach((opt, i)=>{
    console.log(`\t${++i}. ${opt}`);
  })
  console.log(``);
  rl.question("select real answer by picking the number of it:",(answer)=>{
    let amahitaIndex = [...qs.amahitamo];
    // console.log(`you choose ${Number(answer)}\n kandi ${amahitaIndex[Number(answer)-1]}`);
    if(qs.igisubizo === amahitaIndex[Number(answer)-1]){
      amanota+=5; //console.log(amanota)
      }
    indx++;
    if(questions.length > indx){
      dutangire();
      
    }
    else
      rl.close();
    if(questions.length === indx){
      console.log(`wagize amanota ${amanota}`);
      if(amanota===15)
        console.log('great brother')
      else
        console.log('uri ikibwa')
    }  
  })
  
}
dutangire()
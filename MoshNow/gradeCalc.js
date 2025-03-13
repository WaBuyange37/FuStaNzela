//1-59 =F, 60-69=D,70-79=C, 80-89=B,90-100=A
//we calculate the avarage
let marks = [80,80,50];

calculateGrade(marks);

function calculateGrade(marks){
  let avarage = 0;
  let sum=0;
  let Grade= '';
  for (let i of marks)
    sum+=i;
  avarage=sum/marks.length;
  
  if(avarage<=59){
    Grade='F'
      
    }

  else if ((avarage>=60)&&(avarage<=69)){
    Grade='D'
    }

    else if((avarage>=70)&&(avarage<=79)){
      Grade='C'
    }
      
    else if((avarage>=80)&&(avarage<=89)){
      Grade='B';
    }
      
    else{
      Grade='A';
    }
      
  
  
  console.log(avarage+":",Grade);
}
let nzela = {
  age: 26,
  nkunda: ['Imana', 'Yesu', 'Mwukawera'],
  myBelief: function(){
    console.log(`nizera ${this.nkunda[0]} Data  Se wu Umwami wacu ${this.nkunda[1]} ninayo ${this.nkunda[2]}`);
  },
};
let myChurch ={
  member : 23000,
  station: 200,
  twite: function(){
    console.log('Twite restoration church cg Bcc');
  }
};
myChurch = Object.assign({...myChurch, skin: 'black'},nzela);
myChurch.myBelief()
myChurch.twite()
for(let key in myChurch)
  console.log(key)
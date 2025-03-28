function Umuntu(name){
  this.name= name;
  let self = this;
  this.njyewe = {
    nyereka: function(){
      console.log(`helloo ${self.name}`)
    }
  };

}
let a= new Umuntu('nzela');
a.njyewe.nyereka();
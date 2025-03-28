/**let blogPost ={
  title:'Agakiza',
  body:'Yesu ni we musa mbona mo amahoro nifuzaga',
  author: 'Mugisha',
  views: 3,//it will show number of times the post viewed 
  comment:[{author: 'Kayabo', body:'byiza'},
    {author:'Musaza', body:'ndemeye'}
  ],//comment should have a couple properties, (authou and body) 
  isLive: true,///each post should have this to show true or false 
}*/
class BlogPost{
  constructor(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive=false;
  }
}
const post = new BlogPost('Njye','Gukizwa','Musha');
console.log(post)
const movies = [
  {title: 'a', year: 2018, rating: 4.5},
  {title: 'b', year: 2018, rating: 4.7},
  {title: 'c', year: 2018, rating: 3},
  {title: 'd', year: 2017, rating: 4.5},
];
// all movies from 2018, rate>4
// pick only them title in descending
let display = movies.filter(yr=> (yr.year===2018)&&yr.rating>4).sort((a,b)=>{
  return (b.title).localeCompare(a.title);
}).map(name=>(name.title)).join('\n')

console.log(display)
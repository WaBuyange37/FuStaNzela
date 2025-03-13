
let movies = {
  title: 'Seburikoko',
  releaseYear: 2021,
  rating: 4,
  director:"Nzela",
}
showProperties(movies)

function showProperties(obj){
  for(let char in obj)
    if(typeof obj[char] === "string")
      console.log(char,":",obj[char])
}
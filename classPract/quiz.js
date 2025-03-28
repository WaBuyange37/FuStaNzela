class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  updateScore(points){
    this.score += points;
  }
}

class Question{
  constructor(questionText, options, correctAnswer){
    this.questionText= questionText;
    this.options=options;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(answer){
    return answer === this.correctAnswer;
  }
}

class Quiz{
  constructor(questions){
    this.questions= questions;
    this.currentIndex = 0;
  }
  getCurrentQuestion(){
    return this.questions[this.currentIndex];
  }
  nextQuestion(){
    this.currentIndex++;
  }
  isFinished(){
    if (this.currentIndex >= this.questions.length)
      return this.currentIndex >= this.questions.length;
 
    
  }
}

class QuizApp{
  constructor(user, quiz){
    this.user = user;
    this.quiz = quiz;
    this.loadQuestion();
  }
  loadQuestion(){
    if(this.quiz.isFinished()){
      document.getElementById('question').innerText = `quiz completed! 🎉 your score: ${this.user.score}`;
      document.getElementById("options").innerHTML = "";
      return;
    }

    const question = this.quiz.getCurrentQuestion();
    document.getElementById("question").innerText = question.questionText;
    document.getElementById("options").innerHTML = question.options
      .map((option,index)=>`<button class="option" onclick ="quizApp.checkAnswer('${option}')">${option}</button>`)
      .join("");
  }
  checkAnswer(answer){
    if(this.quiz.getCurrentQuestion().checkAnswer(answer)){
      this.user.updateScore(10);
    }
    document.getElementById("score").innerText = `score: ${this.user.score}`;
    this.quiz.nextQuestion();
    this.loadQuestion();
  }
}

//twagiye
const user = new User("Kwizera", "37nzela@gmail");
const questions = [
  new Question("What is 2 + 2?", ["3", "4", "5"], "4"),
  new Question("What is the capital city of Rwanda?", ["Kigali", "Nairobi", "Lagos"], "Kigali"),
  new Question("Who invented the Umwero alphabet?", ["Kwizera", "Mugisha", "John"], "Kwizera"),
  new Question("What is the largest continent?", ["Asia", "Africa", "Europe"], "Asia"),
  new Question("Which animal is known as the King of the Jungle?", ["Lion", "Elephant", "Tiger"], "Lion")
];
const quiz = new Quiz(questions);
const quizApp = new QuizApp(user, quiz);
const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  document.getElementById('qc').innerHTML=question.questionText; 
}

function askQuestionThen(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise((resolve,reject)=>{setTimeout(function(){answer = document.getElementById('qc'); resolve(answer)},time)})
}

function removeQuestion(){
  document.getElementById('qc').innerHTML=''
}

function askQuestionThenRemoveQuestion(time){
 
}
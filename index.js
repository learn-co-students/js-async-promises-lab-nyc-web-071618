const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const askQuestion = () => {
  return questions[0];
}

const checkQuestion = (question, answer) => {
  question.questionAnswer == answer;
}


const appendQuestion = (question) => {
  let questionContainer = document.querySelector('.question-container')
  questionContainer.innerHTML = question.questionText;
}

const askQuestionThen = (time) => {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(question)
    }, time)
  })
}

const removeQuestion = () => {
  return new Promise(function() {
    let container = document.querySelector('.question-container')
    container.innerHTML = ''
    toggleTrueAndFalseButtons()
  })
}

const askQuestionThenRemoveQuestion = (time) => {
  return askQuestionThen(time).then(removeQuestion)
}

const trueAndFalseButtons = () => {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

const displayQuestionOnClick = () => {
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}

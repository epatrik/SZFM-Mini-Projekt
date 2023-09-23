const startButton = document.getElementById('start');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const answers = document.getElementById('answers');
const question = document.getElementById('question');
const questionBlock = document.getElementById('question-block');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
backButton.addEventListener('click', resetQuiz);

let questionNumber = 0;

function startQuiz() {
    resetScreen();
    shuffleQuestions(questions);
    questionNumber = 0;
    startButton.classList.add('hide');
    showQuestion(questionNumber);
    backButton.classList.remove('hide');
}

function showQuestion(questionNumber){
    questionBlock.classList.remove('hide');
    question.innerText = questions[questionNumber].question;
}

function shuffleQuestions(questions){
    questions.sort(() => Math.random() - 0.5);
}

function answerSelected() {

}

function resetScreen() {
    nextButton.classList.add('hide');
    backButton.classList.add('hide');
    questionBlock.classList.add('hide');
}

function resetQuiz(){
    resetScreen();
    startButton.classList.remove('hide');
}

function nextQuestion(){
    questionNumber += 1;
}

const startButton = document.getElementById('start');
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const answers = document.getElementById('answers');
const question = document.getElementById('question');
const questionBlock = document.getElementById('question-block');
const topicBlock = document.getElementById('topic-block');
const topicButtons = document.querySelectorAll('.topic');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
backButton.addEventListener('click', resetQuiz);

topicButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        questionTopic = event.target.dataset.topic;
        topicButtons.forEach(function(topicButton) {
            topicButton.classList.remove('selected');
        })
        button.classList.add('selected');
        startButton.disabled = false;
    });
});

let questionNumber = 0;
var questionTopic = "";
var questions = {};

import allQuestions from './questions.json' assert { type: 'json' };

function startQuiz() {
    resetScreen();
    questions = allQuestions.filter(function (question) {
        return question.topic === questionTopic;
      });
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
    topicBlock.classList.add('hide');
}

function resetQuiz(){
    resetScreen();
    startButton.classList.remove('hide');
    topicBlock.classList.remove('hide');
}

function nextQuestion(){
    questionNumber += 1;
}
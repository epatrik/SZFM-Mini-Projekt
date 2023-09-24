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

topicButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        questionTopic = event.target.dataset.topic;
        topicButtons.forEach(function (topicButton) {
            topicButton.classList.remove('selected');
        })
        button.classList.add('selected');
        startButton.disabled = false;
    });
});

let questionNumber = 0;
let score = 0;
let endOfQuiz = false;
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
    score = 0;
    startButton.classList.add('hide');
    showQuestion();
    backButton.classList.remove('hide');
}

function showQuestion() {
    questionBlock.classList.remove('hide');
    question.innerText = questions[questionNumber].question;
    questions[questionNumber].answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.disabled = false
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerSelected)
        answers.appendChild(button)
    })
}

function shuffleQuestions(questions) {
    questions.sort(() => Math.random() - 0.5);
}

function answerSelected(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answers.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        button.classList.add('no-click')
        nextButton.classList.remove('hide')
    })
    if (correct) {
        score++
    }
    if (questions.length <= questionNumber + 1) {
        backButton.classList.add('hide');
        nextButton.innerText = "Befejezés";
        endOfQuiz = true;
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function showEndScreen() {
    resetScreen();
    questionBlock.classList.remove('hide')
    nextButton.innerText = "Következő";
    answers.classList.add('hide')
    question.innerText = '\n\n\nElért eredmény: \n' + score + '/' + questions.length
    backButton.innerText = 'Bezár'
    backButton.classList.remove('hide')
}

function resetScreen() {
    nextButton.classList.add('hide');
    backButton.innerText = 'Vissza';
    backButton.classList.add('hide');
    questionBlock.classList.add('hide');
    answers.classList.remove('hide')
    topicBlock.classList.add('hide');
    clearStatusClass(document.body);
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild)
    }
}

function resetQuiz() {
    resetScreen();
    endOfQuiz = false
    startButton.classList.remove('hide');
    topicBlock.classList.remove('hide');
}

function nextQuestion() {
    questionNumber += 1;
    resetScreen();
    backButton.classList.remove('hide')
    if (endOfQuiz) {
        showEndScreen();
    }
    else {
        showQuestion();
    }
}
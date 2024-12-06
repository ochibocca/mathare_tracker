const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const questionCointainerElement = document.getElementById('question-cointainer')
const shuffledQuestions, currentQuestionIndex 



function startGame(params) {
    console.log('started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    questionCointainerElement.classList.remove('hide')
    setNextQuestion(params)
    

    
}
function setNextQuestion(params) {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}
function selectAnswer(params) {
    
}
const questions = [
    {
        question : 'What is Malaria',
        answer: [
            { text: 'It is a disease', correct: true},
            { text: 'It is a game', correct: false}


        ]

    }
]
const startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const questionCointainerElement = document.getElementById('question-cointainer')



function startGame(params) {
    console.log('started');
    startButton.classList.add('hide')
    questionCointainerElement.classList.remove('hide')
    setNextQuestion(params)
    

    
}
function setNextQuestion(params) {
    
}
function selectAnswer(params) {
    
}
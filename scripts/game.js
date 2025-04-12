const Data = [
    {
        question:"What is malaria",
        a:"A disease",
        b:"a game",
        c:"A FLU",
        d:"nothing",
        correct: "a",
    },
    {
        question:"What is Mosquitos",
        a:"A animal",
        b:"a food",
        c:"A insect",
        d:"nothing",
        correct: "c",
    },
    {
        question:"How to prevent malaria",
        a:"Nets",
        b:"Showering",
        c:"Singing",
        d:"nothing",
        correct: "d",
    },
    {
        question:"Is Malari goood or bad",
        a:"A yes",
        b:"a no",
        c:"I dont know",
        d:"nothing",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz');
const question = document.querySelectorAll('.question');
const answer = document.getElementsById('answer');
const a_text = document.getElementsById('a_text');
const b_text = document.getElementsById('b_text');
const c_text = document.getElementsById('c_text');
const d_text = document.getElementsById('d_text');
const sumbit = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuiz = quizData()[currentQuiz]
    question.innerHTML = currentQuiz.question
    a_text.innerHTML = currentQuiz.a
    b_text.innerHTML = currentQuiz.b
    c_text.innerHTML = currentQuiz.c
    d_text.innerHTML = currentQuiz.d
}
function deselectAnswers() {
    answer.forEach(answer => answer.checked = false)
}
function getSelected() {
    let answer
    answer.ForEach( answer => {
        if(answer.checked){
            answer = answer.id
        }

    })
    return answer
}
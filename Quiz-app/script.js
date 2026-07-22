import {quizData} from "./data.js";
let currentQuiz =0;
let score = 0;

const question = document.querySelector("#question");
const optionA = document.querySelector("#a_text");
const optionB = document.querySelector("#b_text");
const optionC = document.querySelector("#c_text");
const optionD = document.querySelector("#d_text");

 function deselectAnswers(){
    for(const answer of answerEls){
        answer.checked = false;
    }
}
function loadQuiz(){
   
    const currentData = quizData[currentQuiz];
       deselectAnswers();
    question.textContent =
    `Q${currentQuiz + 1}. ${currentData.question}`;
   
    optionA.textContent = currentData.a;
    optionB.textContent = currentData.b;
    optionC.textContent = currentData.c;
    optionD.textContent = currentData.d;
}
const answerEls = document.querySelectorAll('input[name="answer"]');
const submitBtn = document.querySelector("#submit");
function getSelectedAnswer(){
    for(const answer of answerEls){
        if(answer.checked){
            return answer.id;
        }
    }
}

submitBtn.addEventListener("click",()=>{
    const currentData = quizData[currentQuiz];
    const selected = getSelectedAnswer();
    if(!selected){
    return;
}
    if(selected === currentData.correct){
        score++;
    }
     currentQuiz++;
    if(currentQuiz < quizData.length){
    loadQuiz();
}
else{
document.querySelector(".quiz-container").innerHTML = `
    <h1>🎉 Quiz Completed!</h1>
    <h2>You scored ${score}/${quizData.length}</h2>
    <button class="play-again-btn" onclick="location.reload()">
        Play Again
    </button>
`;

}
})

loadQuiz();
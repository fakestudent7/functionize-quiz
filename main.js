// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

// Event Function
function markQuiz() {
    // Initialize Score Variable
    let score = 0;

    // Check Questions
    score += markQuestion("1", "canada");
    score += markQuestion("2", "cardinal");
    score += markQuestion("3", 'tai lung');
    score += markQuestion("4", "pickleball");

    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);
}

function markQuestion(qNum, correctAnswer) {
    // Check Question 1
    let answer = document.getElementById('answer' + qNum).value;
    answer = answer.toLowerCase();

    let resultEl = document.getElementById('result' + qNum);
    if (answer == correctAnswer) {
        resultEl.innerHTML = 'Correct';
        resultEl.style.color = 'green';
        return 1;
    } else {
        resultEl.innerHTML = 'Incorrect';
        resultEl.style.color = 'red';
        return 0;
    }
}
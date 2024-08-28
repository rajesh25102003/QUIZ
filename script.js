const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Ag", "Ge"],
        answer: "Au"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, button));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, selectedButton) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctButton = Array.from(optionsElement.children).find(
        button => button.textContent === currentQuestion.answer
    );

    if (selectedOption === currentQuestion.answer) {
        score++;
        correctButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
        correctButton.classList.add('correct');
    }

    // Disable all buttons to prevent multiple clicks
    Array.from(optionsElement.children).forEach(button => button.disabled = true);

    // Wait for 1.5 seconds before moving to the next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    questionElement.textContent = 'Quiz Completed!';
    optionsElement.innerHTML = '';
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
    scoreElement.style.marginTop = '20px';
    scoreElement.style.color = '#333333';
    optionsElement.appendChild(scoreElement);
}

displayQuestion();

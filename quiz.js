const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Whale", "Hippopotamus"],
    answer: "Whale"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City"
  }
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  questionElement.textContent = quiz[currentQuestion].question;
  
  optionsElement.innerHTML = "";
  quiz[currentQuestion].options.forEach((option) => {
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === quiz[currentQuestion].answer) {
    correctAnswers++;
  } else {
    incorrectAnswers++;
  }
  
  currentQuestion++;
  
  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    displayResults();
  }
}

function displayResults() {
  const quizElement = document.getElementById("quiz");
  quizElement.innerHTML = `
    <h2>Quiz Results</h2>
    <p>Correct Answers: ${correctAnswers}</p>
    <p>Incorrect Answers: ${incorrectAnswers}</p>
  `;
}

displayQuestion();

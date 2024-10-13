// take the references of elements 

const quizContainer = document.getElementsByClassName('quiz-container')[0];
const quiz = document.getElementsByClassName('quiz')[0];
const previousButton = document.getElementsByClassName('previous-btn')[0];
const nextButton = document.getElementsByClassName('next-btn')[0];
const submitButton = document.getElementsByClassName('submit-btn')[0];


// data  
const questions = [
    {
        id: 1,
        question: "What gas do plants primarily use for photosynthesis?",
        answers: {
            a: "Oxygen",
            b: "Carbon Dioxide",
            c: "Nitrogen",
            d: "Hydrogen"
        },
        correctAnswer: "b"
    },
    {
        id: 2,
        question: "Which one is the programming language?",
        answers: {
            a: "HTML",
            b: "JavaScript",
            c: "CSS",
            d: "Python"
        },
        correctAnswer: "b"
    },
    {
        id: 3,
        question: "What is the smallest unit of life?",
        answers: {
            a: "Atom",
            b: "Cell",
            c: "Molecule",
            d: "Nucleus"
        },
        correctAnswer: "b"
    },
    {
        id: 4,
        question: "What is the capital of France?",
        answers: {
            a: "Rome",
            b: "Madrid",
            c: "Paris",
            d: "Berlin"
        },
        correctAnswer: "c"
    },
    {
        id: 5,
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: {
            a: "Harper Lee",
            b: "Mark Twain",
            c: "J.K. Rowling",
            d: "Ernest Hemingway"
        },
        correctAnswer: "a"
    },
    {
        id: 6,
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "c"
    },
    {
        id: 7,
        question: "What is the boiling point of water in Celsius?",
        answers: {
            a: "90°C",
            b: "100°C",
            c: "110°C",
            d: "120°C"
        },
        correctAnswer: "b"
    },
    {
        id: 8,
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Vincent van Gogh",
            b: "Leonardo da Vinci",
            c: "Pablo Picasso",
            d: "Claude Monet"
        },
        correctAnswer: "b"
    },
    {
        id: 9,
        question: "Which element has the chemical symbol 'O'?",
        answers: {
            a: "Gold",
            b: "Oxygen",
            c: "Silver",
            d: "Sodium"
        },
        correctAnswer: "b"
    },
    {
        id: 10,
        question: "What is the smallest prime number?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "5"
        },
        correctAnswer: "b"
    },
    {
        id: 11,
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Venus",
            b: "Mars",
            c: "Saturn",
            d: "Jupiter"
        },
        correctAnswer: "b"
    },
    {
        id: 12,
        question: "Who was the first person to walk on the moon?",
        answers: {
            a: "Buzz Aldrin",
            b: "Neil Armstrong",
            c: "Yuri Gagarin",
            d: "Alan Shepard"
        },
        correctAnswer: "b"
    },
    {
        id: 13,
        question: "What is the hardest natural substance on Earth?",
        answers: {
            a: "Gold",
            b: "Iron",
            c: "Diamond",
            d: "Copper"
        },
        correctAnswer: "c"
    },
    {
        id: 14,
        question: "Which ocean is the largest?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Pacific Ocean",
            d: "Arctic Ocean"
        },
        correctAnswer: "c"
    },
    {
        id: 15,
        question: "What is the chemical formula for table salt?",
        answers: {
            a: "NaCl",
            b: "H2O",
            c: "CO2",
            d: "KCl"
        },
        correctAnswer: "a"
    }
];
const quizSlides = [];  ///1
let currentSlide = 0;
let quizSubmitted = false;
const answeredByUser = []; ///10

function onNextClick() {  ///5
    const upcomingSlideNumber = currentSlide + 1;
    if (upcomingSlideNumber >= questions.length) {
        return;
    } else {
        showSlide(upcomingSlideNumber);
    }
}

function onPreviousClick() { ///6
    const SlideNumber = currentSlide - 1;
    if (SlideNumber < 0) {
        return;
    } else {
        showSlide(SlideNumber);
    }
}

function onSubmitClick() {  ///12
    quizSubmitted = true;
    const resultsElement = quizContainer.querySelector('.results');
    const correctAnswers = answeredByUser.filter(i => i.isCorrect == true);

    const displayText = `${correctAnswers.length} of ${questions.length} are correct.`;
    resultsElement.innerText = displayText;

    enableSubmitButton(false);     ///11
    disableAnswers();  ///13
}

function regulateNextPrevEnability() {    ///7   call this from showSlide()
    if (currentSlide <= 0) {
        previousButton.setAttribute('disabled', 'disabled');
    } else {
        previousButton.removeAttribute('disabled');
    }

    if (currentSlide >= quizSlides.length - 1) {
        nextButton.setAttribute('disabled', 'disabled');
    } else {
        nextButton.removeAttribute('disabled');
    }
}

function enableSubmitButton(enable) { ///8 ///11
    if (enable) {
        submitButton.removeAttribute('disabled');   // enabling.
    } else {
        submitButton.setAttribute('disabled', 'disabled'); 
    }
}

function buildQuiz() { /// 2
    questions.forEach(function (question) {
        const slideElement = document.createElement('div');
        slideElement.setAttribute('class', 'slide');

        const questionElement = document.createElement('div');
        questionElement.setAttribute('class', 'question');
        questionElement.innerText = `${question.id}. ${question.question}`;

        slideElement.appendChild(questionElement);

        const answersElement = document.createElement('div');
        
        answersElement.setAttribute('class', 'answers');
        
        for (const letter in question.answers) {
            const answerElement = document.createElement('div');
            answerElement.setAttribute('class', 'answer');

            const inputOptionElement = document.createElement('input');
            inputOptionElement.setAttribute('type', 'radio');
            inputOptionElement.setAttribute('name', `question${question.id}`);
            inputOptionElement.setAttribute('id', letter);
            inputOptionElement.setAttribute('value', question.answers[letter]);
            inputOptionElement.setAttribute('onclick', 'onAnswerClick(event)');

            answerElement.appendChild(inputOptionElement);

            const spanElement = document.createElement('span');
            spanElement.innerText = question.answers[letter];

            answerElement.appendChild(spanElement);
            answersElement.appendChild(answerElement);
        }

        slideElement.appendChild(answersElement);

        quizSlides.push(slideElement);
    });
}

function onAnswerClick(ev) {  ///9
    const questionId = ev.target.name.match(/(?<=question).*/gi)[0];

    const existingAnswer = answeredByUser.find(i => i.questionId == questionId);

    const answeredObj = existingAnswer ?? { questionId: questionId };
    answeredObj.answerChosen = ev.target.id;

    markCorrect(answeredObj); ///10
    if (!existingAnswer) {
        answeredByUser.push(answeredObj);
    }

    if (questions.length == answeredByUser.length) {
        enableSubmitButton(true); ///11
    }
}

function markCorrect(answeredObj) {  ///10
    const question = questions.find(i => i.id == answeredObj.questionId);

    if (question.correctAnswer == answeredObj.answerChosen) {
        answeredObj.isCorrect = true;
    } else {
        answeredObj.isCorrect = false;
    }
}

function showSlide(slideNumber) { ///4
    quiz.innerHTML = '';    // making quiz empty

    const slide = quizSlides[slideNumber];
    quiz.appendChild(slide);    // make it part of quiz.

    currentSlide = slideNumber;  ///update currentSlide number

    regulateNextPrevEnability();

    if (quizSubmitted) {
        disableAnswers();
    }
}

function disableAnswers() {  ///13
    const slide = quizSlides[currentSlide];
    const allTheAnswers = slide.querySelectorAll("input[type=radio]");

    for (let i = 0; i < allTheAnswers.length; i++) {
        const element = allTheAnswers[i];

        element.setAttribute('disabled', 'disabled');
    }

}

function initialize() { ///3
    currentSlide = 0;
    buildQuiz();
    showSlide(0);

    enableSubmitButton(false); //8
}


// start the show.
initialize();











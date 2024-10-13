# Quiz project

This is a dynamic Quiz Application built using HTML, CSS, and JavaScript. The application allows users to take a quiz, navigate between questions, and submit their answers. The app automatically calculates and displays the final score after submission.

## Features

### Multiple Choice Questions: 
    Each question has multiple options, and the user can select one option per question.
### Navigation:
    Users can navigate through the quiz using Previous and Next buttons.
### Answer Validation:
    The application tracks the user's selected answers and checks them against the correct answers.
### Score Calculation:
    After submitting the quiz, the total number of correct answers is displayed.
### Dynamic UI: 
    Questions and options are dynamically created using JavaScript, enhancing flexibility for future updates or question changes.
### Input Validation: 
    Once all questions are answered, the submit button becomes enabled. If some answers are missing, the quiz cannot be submitted.
### Answer Disabling: 
    After submitting, all options are disabled to prevent further changes.

## Code Structure:

### Key JavaScript Functions:
### buildQuiz(): 
    Dynamically generates the quiz questions and options from the data array.
### showSlide(slideNumber): 
    Displays a specific slide (question) based on the current slide number.
### onAnswerClick(ev): 
    Tracks the user's selected answers and validates them.
### onSubmitClick(): 
    Calculates and displays the total score.
### regulateNextPrevEnability(): 
    Enables or disables the navigation buttons based on the current question index.
### markCorrect(answeredObj): 
    Checks if the selected answer is correct.
### disableAnswers(): 
    Disables all the radio buttons after submission to prevent changes.

## Project links
- [GitHub Repository] (https://github.com/harithas1/Quiz_project.git)

- [Live Demo] (https://harithas1.github.io/Quiz_project/) 
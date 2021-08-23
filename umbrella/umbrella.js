document.querySelector('.submit-task-1').addEventListener('click', () => {
    document.querySelector('.task-1 .right-answer').innerHTML = "Правильный ответ: 60.6";
});

document.querySelector('.submit-task-2').addEventListener('click', () => {
    document.querySelector('.task-2 .right-answer').innerHTML = "Правильный ответ: 9890";
});

document.querySelector('.submit-task-3').addEventListener('click', () => {
    document.querySelector('.task-3 .right-answer').innerHTML = "Правильный ответ: 73";
});

document.querySelector('.submit-task-4').addEventListener('click', () => {
    document.querySelector('.task-4 .right-answer').innerHTML = "Правильный ответ: 11461";
});

document.querySelector('.submit-task-5').addEventListener('click', () => {
    document.querySelector('.task-5 .right-answer').innerHTML = "Правильный ответ: 9";
});




document.querySelector('.task-1 .help-icon').addEventListener('click', () => {
    document.querySelector('.task-1 .help').classList.toggle('help-active');
});

document.querySelector('.task-2 .help-icon').addEventListener('click', () => {
    document.querySelector('.task-2 .help').classList.toggle('help-active');
});

document.querySelector('.task-3 .help-icon').addEventListener('click', () => {
    document.querySelector('.task-3 .help').classList.toggle('help-active');
});

document.querySelector('.task-4 .help-icon').addEventListener('click', () => {
    document.querySelector('.task-4 .help').classList.toggle('help-active');
});

document.querySelector('.task-5 .help-icon').addEventListener('click', () => {
    document.querySelector('.task-5 .help').classList.toggle('help-active');
});


let answerTask1;
let answerTask2;
let answerTask3;
let answerTask4;
let answerTask5;
let count = 0;

document.querySelector('.sendTest').addEventListener('click', function () {

    answerTask1 = document.querySelector('.task-1 input');
    answerTask2 = document.querySelector('.task-2 input');
    answerTask3 = document.querySelector('.task-3 input');
    answerTask4 = document.querySelector('.task-4 input');
    answerTask5 = document.querySelector('.task-5 input');


    let allInputs = document.querySelectorAll('input');
    for (input of allInputs) {
        if (input.value == undefined) {
            answerTask1.value = 0;
            answerTask2.value = 0;
            answerTask3.value = 0;
            answerTask4.value = 0;
            answerTask5.value = 0;
        }
    }
    if (answerTask1.value.trim() == 60.6) {
        answerTask5.classList.remove('answer-fail');
        answerTask1.classList.add('answer-success');
        count++;
    } else {
        answerTask1.classList.add('answer-fail');
    }

    if (answerTask2.value.trim() == 9890) {
        answerTask5.classList.remove('answer-fail');
        answerTask2.classList.add('answer-success');
        count++;
    } else {
        answerTask2.classList.add('answer-fail');
    }

    if (answerTask3.value.trim() == 73) {
        answerTask5.classList.remove('answer-fail');
        answerTask3.classList.add('answer-success');
        count++;
    } else {
        answerTask3.classList.add('answer-fail');
    }

    if (answerTask4.value.trim() == 11461) {
        answerTask5.classList.remove('answer-fail');
        answerTask4.classList.add('answer-success');
        count++;
    } else {
        answerTask4.classList.add('answer-fail');
    }

    if (answerTask5.value.trim() == 9) {
        answerTask5.classList.remove('answer-fail');
        answerTask5.classList.add('answer-success');
        count++;
    } else {
        answerTask5.classList.add('answer-fail');
    }

    let result = document.querySelector('.right-answers');
    result.innerHTML = `Результат: ${count}/5`;
});
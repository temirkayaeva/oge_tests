let answerTask1 = 132;
let answerTask2 = 4500;
let answerTask3 = 15.4;
let answerTask4 = 17550;
let answerTask5 = 50;
let count = 0;


document.querySelector('.submit-task-1').addEventListener('click', () => {
    document.querySelector('.task-1 .right-answer').innerHTML = `Правильный ответ: ${answerTask1}`;
});

document.querySelector('.submit-task-2').addEventListener('click', () => {
    document.querySelector('.task-2 .right-answer').innerHTML = `Правильный ответ: ${answerTask2}`;
});

document.querySelector('.submit-task-3').addEventListener('click', () => {
    document.querySelector('.task-3 .right-answer').innerHTML = `Правильный ответ: ${answerTask3}`;
});

document.querySelector('.submit-task-4').addEventListener('click', () => {
    document.querySelector('.task-4 .right-answer').innerHTML = `Правильный ответ: ${answerTask4}`;
});

document.querySelector('.submit-task-5').addEventListener('click', () => {
    document.querySelector('.task-5 .right-answer').innerHTML = `Правильный ответ: ${answerTask5}`;
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


let answerTask_1;
let answerTask_2;
let answerTask_3;
let answerTask_4;
let answerTask_5;
let isFirstAnswer = true;


document.querySelector('.sendTest').addEventListener('click', function () {

    answerTask_1 = document.querySelector('.task-1 input');
    answerTask_2 = document.querySelector('.task-2 input');
    answerTask_3 = document.querySelector('.task-3 input');
    answerTask_4 = document.querySelector('.task-4 input');
    answerTask_5 = document.querySelector('.task-5 input');


    let allInputs = document.querySelectorAll('input');
    for (input of allInputs) {
        if (input.value == undefined) {
            answerTask_1.value = 0;
            answerTask_2.value = 0;
            answerTask_3.value = 0;
            answerTask_4.value = 0;
            answerTask_5.value = 0;
        }
    }
    if (answerTask_1.value.trim() == 132) {
        answerTask_1.classList.remove('answer-fail');
        answerTask_1.classList.add('answer-success');
        if (isFirstAnswer) {
            isFirstAnswer = false;
            count++;
        }
    } else {
        answerTask_1.classList.add('answer-fail');
    }

    if (answerTask_2.value.trim() == 4500) {
        answerTask_2.classList.remove('answer-fail');
        answerTask_2.classList.add('answer-success');
        count++;
    } else {
        answerTask_2.classList.add('answer-fail');
    }

    if (answerTask_3.value.trim() == 15.4) {
        answerTask_3.classList.remove('answer-fail');
        answerTask_3.classList.add('answer-success');
        count++;
    } else {
        answerTask_3.classList.add('answer-fail');
    }

    if (answerTask_4.value.trim() == 17550) {
        answerTask_4.classList.remove('answer-fail');
        answerTask_4.classList.add('answer-success');
        count++;
    } else {
        answerTask_4.classList.add('answer-fail');
    }

    if (answerTask_5.value.trim() == 50) {
        answerTask_5.classList.remove('answer-fail');
        answerTask_5.classList.add('answer-success');
        count++;
    } else {
        answerTask_5.classList.add('answer-fail');
    }
    let result = document.querySelector('.right-answers');
    result.innerHTML = `Результат: ${count}/5`;
});


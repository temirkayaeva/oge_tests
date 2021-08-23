let buttons = document.querySelectorAll('button');
let urls = [];

for (let button of buttons) {
    button.addEventListener('click', function () {
        if (button.classList.contains('umbrella')) {
            location.href = 'umbrella/umbrella' + '.html';
        } else if (button.classList.contains('flat')) {
            location.href = 'flat/flat' + '.html';
        }
    });
}
const title = document.querySelector('#title');
const text = document.querySelector('#text')
const btn = document.querySelector('#btn');
const anotherBtn = document.querySelector('#another-btn');
const background = document.querySelector('body');
let mode = 'light';

btn.addEventListener('click', (e) => {
    if (mode == 'light') {
        mode = 'dark';
        title.style.color = 'white';
        text.style.color = 'white';
        background.style.backgroundColor = 'black';
    } else {
        mode = 'light'
        title.style.color = 'black';
        text.style.color = 'black';
        background.style.backgroundColor = 'white'
    }
});
anotherBtn.addEventListener('click', (e) => {
    background.style.backgroundColor = 'pink';
});
const btn = document.querySelector('button')
const text = document.getElementById('text')
const main = document.querySelector('body')
let flag = 1
btn.addEventListener('click', () => {
    if (flag % 2) {
        main.style.backgroundColor = 'black';
        text.style.color = 'white';
        text.innerHTML = 'DarkMode';
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        btn.innerHTML = 'Back To LiteMode'
    }
    else {
        main.style.backgroundColor = 'white';
        text.style.color = 'black';
        text.innerHTML = 'LiteMode';
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
        btn.innerHTML = 'Back To DarkMode'
    }
    flag++
})
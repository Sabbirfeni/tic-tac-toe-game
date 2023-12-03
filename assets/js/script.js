// Declaring html elements
const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players')
window.onload = () => {
    allBox.forEach(box => {
        box.setAttribute('onclick', 'clickedBox(this)')
    })
    selectXBtn.onclick = () => {
        selectBox.classList.add('hide')
        playBoard.classList.add('show')
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add('hide')
        playBoard.classList.add('show')
        players.setAttribute('class', 'players active')
    }
}
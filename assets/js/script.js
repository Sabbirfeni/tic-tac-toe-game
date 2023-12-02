// Declaring html elements
const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.player0'),
playBoard = document.querySelector('.play-board');

window.onload = () => {
    selectXBtn.onclick = () => {
        selectBox.classList.add('hide')
        playBoard.classList.add('show')
    }
}
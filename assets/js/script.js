// Declaring html elements
const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players'),
resultBox = document.querySelector('.result-box'),
wonText = document.querySelector('.won-text'),
replayBtn = document.querySelector('.result-box button')

let runBot = true;

window.onload = () => {
    allBox.forEach(box => {
        box.setAttribute('onclick', 'clickedBox(this)') // set onclick attribute to all boxes on windows load
    })
    selectXBtn.onclick = () => {
        selectBox.classList.add('hide') // hide the select box on playerX button clicked
        playBoard.classList.add('show') // show the playboard section on playerX button clicked
    }
    selectOBtn.onclick = () => {
        selectBox.classList.add('hide') // hide the select box on playerO button clicked
        playBoard.classList.add('show') // show the playboard section on playerO button clicked
        players.setAttribute('class', 'players active player') // adding three class names in player element
    }
}

let playerSign;

const clickedBox = element => {
    playerSign = 'X'
    if(players.classList.contains('player')) { // if players element contains (.player)
        element.innerHTML = '<div>O</div>' // adding circle icon inside user clicked element
        players.classList.add('active') // setting class attribute to remove .active and .player to swicth to X player
        playerSign = 'O'
        element.setAttribute('id', playerSign)
    } else {
        element.innerHTML = '<div>X</div>' // adding cross icon inside user clicked
        players.classList.add('active') // setting class attribute to add class .active and .player to switch to O player
        element.setAttribute('id', playerSign)
    }
    element.style.pointerEvents = 'none'
     // unable element to pointer once clicked on it
    let randomDelayTime = ((Math.random() * 1000 )+ 200).toFixed() // generating a random number to delay the call of bot function
    generateWinner()
    playBoard.style.pointerEvents = 'none'
    setTimeout(() => {
        bot(runBot)
    }, randomDelayTime)

}

const bot = runBot => {
    if(runBot) {
        playerSign = 'O'
        let array = [];
        allBox.forEach((box, i) => {
            if(box.childElementCount == 0) {
                array.push(i)
            }
        })
        const randomNum = Math.floor(Math.random() * array.length) // generating a random number in the length of empty elements
        const randomBoxNum = array[randomNum]; // getting a random element using random number
        if(array.length > 0) { // checking if the box of play-area empty
            if(players.classList.contains('player')) { // if players element contains (.player)
                allBox[randomBoxNum].innerHTML = '<div>X</div>' // adding circle icon inside user clicked element
                players.classList.remove('active') // setting class attribute to remove .active and .player to swicth to X player
                playerSign = 'X'
                allBox[randomBoxNum].setAttribute('id', playerSign)
            } else {
                allBox[randomBoxNum].innerHTML = '<div>O</div>' // adding cross icon inside user clicked
                players.classList.remove('active') // setting class attribute to add class .active and .player to switch to O player
                allBox[randomBoxNum].setAttribute('id', playerSign)
            }
            
        }
        allBox[randomBoxNum].style.pointerEvents = 'none'
        playBoard.style.pointerEvents = 'auto'
        generateWinner()
    }
   
}

const getId = idName => {
    return document.querySelector('.box' + idName).id;
}

const checkId = (val1, val2, val3, sign) => {
    if(getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
        return true
    }
}

const generateWinner = () => {
    if(checkId(1, 2, 3, playerSign) || checkId(1, 4, 7, playerSign) || checkId(1, 5, 9, playerSign) || checkId(2, 5, 8, playerSign) || checkId(3, 5, 7, playerSign) || checkId(3, 6, 9, playerSign) || checkId(4, 5, 6, playerSign) || checkId(7, 8, 9, playerSign)) {
        runBot = false
        playBoard.style.pointerEvents = 'none'
        setTimeout(() => {
            playBoard.classList.remove('show')
            resultBox.classList.add('show')
        }, 800)
        wonText.innerHTML = `Player <p>${playerSign}</p> has own the game`
    } else {
        if(getId(1) !== '' && getId(2) !== '' && getId(3) !== '' && getId(4) !== '' && getId(5) !== '' && getId(6) !== '' && getId(7) !== '' && getId(8) !== '' && getId(9) !== '') {
            runBot = false
            playBoard.style.pointerEvents = 'none'
            setTimeout(() => {
                playBoard.classList.remove('show')
                resultBox.classList.add('show')
            }, 800)
            wonText.innerText = `Match has been drawn!`
        }
    }
}

replayBtn.onclick = () => {
    window.location.reload()
}
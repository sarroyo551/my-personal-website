//document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'art',
            img: 'images/art.jpeg'
        },
        {
            name: 'art',
            img: 'images/art.jpeg'
        },
        {
            name: 'boat',
            img: 'images/boat.jpeg'
        },
        {
            name: 'boat',
            img: 'images/boat.jpeg'
        },
        {
            name: 'camera',
            img: 'images/camera.jpeg'
        },
        {
            name: 'camera',
            img: 'images/camera.jpeg'
        },
        {
            name: 'camera2',
            img: 'images/camera2.jpeg'
        },
        {
            name: 'camera2',
            img: 'images/camera2.jpeg'
        },
        {
            name: 'guitar',
            img: 'images/guitar.jpeg'
        },
        {
            name: 'guitar',
            img: 'images/guitar.jpeg'
        },
        {
            name: 'seville',
            img: 'images/seville.jpeg'
        },
        {
            name: 'seville',
            img: 'images/seville.jpeg'
        },
    ]
    cardArray.sort(()=> 0.5 - Math.random())
//})


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

console.log(grid)

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
//check for matches
function checkForMatch () {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', './images/checkmark.webp')
        cards[optionTwoId].setAttribute('src', './images/checkmark.webp')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}


//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


createBoard()



//angry magic eight ball
const ball = document.querySelector('.ball')
const question = document.getElementById('question')
console.log(question);
question.addEventListener("change", displayAnswer)
function displayAnswer () {
    const randomNumber = Math.floor(Math.random()*8);
let eightBall = ''
switch (randomNumber) {
  case 0:
    eightBall = 'That is not your concern'
    break;
  case 1:
    eightBall = 'Not a problem of mine'
    break;
  case 2:
    eightBall = 'Yes... but really no'
    break;
  case 3:
    eightBall = 'Figure it out yourself'
    break;
  case 4:
    eightBall = 'Why must you ask so many questions?'
    break;
  case 5:
    eightBall = 'I do not care'
    break;
  case 6:
    eightBall = 'Maybe. Maybe not'
    break;
  case 7:
    eightBall = 'Signs point to who cares'
    break;
}
//ball.append(eightBall)
const answer = document.getElementById('answer');
console.log(`The eight ball answered:
${eightBall}`);
let h2 = document.createElement('h2')
h2.innerHTML = eightBall;
answer.innerHTML = '';
answer.append(h2)
  console.log(`You asked: ${userQuestion}.`);
}

const userName = 'Stranger'
userName ? console.log(`Hello, ${userName}!`) : 
  console.log('Hello!');
//const userQuestion = 'Will it rain today?'

/*const randomNumber = Math.floor(Math.random()*8);
let eightBall = ''
switch (randomNumber) {
  case 0:
    eightBall = 'That is not your concern'
    break;
  case 1:
    eightBall = 'Not a problem of mine'
    break;
  case 2:
    eightBall = 'Yes... but really no'
    break;
  case 3:
    eightBall = 'Figure it out yourself'
    break;
  case 4:
    eightBall = 'Why must you ask so many questions?'
    break;
  case 5:
    eightBall = 'I do not care'
    break;
  case 6:
    eightBall = 'Maybe. Maybe not'
    break;
  case 7:
    eightBall = 'Signs point to nothing'
    break;
}
ball.append(eightBall)
console.log(`The eight ball answered:
 ${eightBall}`);*/


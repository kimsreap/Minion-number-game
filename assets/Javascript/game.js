// 4 Minions will display with buttons on page
// At the start of the game, Minions will generate random nymber
// When players click on minions, it will add th Num to the total's score
// players win if the scores equal to random number
// Player lose if the scores is grater than the random number
// Restart the game when the player win or lose
// Players will get a new set of radom Num on easch Minion
// The numbers of win and losse will increment


const getRand = cap => Math.floor(Math.random()*cap) + 1
let goalValue
let currValue = 0
let isGameOver = false

const init = _ => {
    isGameOver = false
    goalValue = getRand(120)
    currValue = 0
    document.querySelector('#goalValue').textContent = goalValue   
    document.querySelector('#currValue').textContent = 0    
    document.querySelector('#buttons').innerHTML = ''
   
    for (let i = 0; i < 4; i++){
        
        let btn = document.createElement('button')
        btn.className = 'someValue'
        btn.textContent = 'Pick Me'
        btn.setAttribute('data-value', getRand(19))
        document.querySelector('#buttons').append(btn)
    }
}

const reset = _ => {
    if (isGameOver){
        init()
    }
}

var win = 1
var losse = 1
const check = _ => {
    if (currValue === goalValue){
        isGameOver = true
        document.querySelector('#result').textContent = 'Well Done!!'
        document.querySelector('#win').textContent = win++

    }else if (currValue > goalValue) {
        isGameOver = true
        document.querySelector('#result').textContent = "Sorry You lose :("
        document.querySelector('#losse').textContent = losse++   
    }else {
      document.querySelector('#result').textContent = 'Please keep adding...'  
    }
}
document.addEventListener('click', e => {
    if (e.target.className === 'someValue' && !isGameOver){

        currValue += parseInt(e.target.dataset.value)
        document.querySelector('#currValue').textContent = currValue
        check()
    }
})

init()



















let body = document.querySelector('body')
let time = document.querySelector('#time')
let board = document.querySelector('#board')
let timeGame = 0
let count = 0
let id = 0
let circle = document.querySelector('#circle')


circle.addEventListener('click', (event)=>{
    count++
    let sizeCircle = Math.round(Math.random()*100)+10
    event.target.style.width = sizeCircle + 'px'
    event.target.style.height = sizeCircle + 'px'

    let koordinat = Math.round(Math.random() * board.getBoundingClientRect().height)
    event.target.style.top = ((koordinat > sizeCircle)?(koordinat - sizeCircle):(sizeCircle - koordinat)) + 'px'

    koordinat = Math.round(Math.random() * board.getBoundingClientRect().width)
    event.target.style.left = ((koordinat > sizeCircle)?(koordinat - sizeCircle):(sizeCircle - koordinat)) + 'px'

    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    event.target.style.background = `rgb(${r}, ${g}, ${b})`
})


document.querySelector('.start').addEventListener('click', (event)=>{
    event.preventDefault()
    body.style.transform = 'translateY(-100vh)'
})


for(let btn of document.querySelectorAll('.btn')){
    btn.addEventListener('click', setTimeGame)
}
        
    
function setTimeGame(event){
    let attr = event.target.getAttribute('value')

    if(attr === 'choice'){
        timeGame = parseInt(document.querySelector('#number').value)
    }else{   
        timeGame = parseInt(attr)
    }

    body.style.transform = 'translateY(-200vh)'
    count = 0
    id = setInterval(fTimeGame, 1000)
} 


function fTimeGame(){

    if(timeGame <= 0){
        gameOver()
    }else if(timeGame < 10){
        time.innerText = `00 : 0${timeGame}`
    }else{
        time.innerText = `00 : ${timeGame}`
    }
    timeGame--
}


function gameOver(){
    clearInterval(id)
    circle.style.display = 'none'
    board.innerText = `Ваш счет: ${count}`
    document.querySelector('h3').innerHTML=''
}
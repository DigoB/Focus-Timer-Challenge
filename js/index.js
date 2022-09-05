import {Timer} from "./timer.js"
import {Sound} from "./sounds.js"

/** Timer */
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = document.querySelector('.minutes')
let timerTimeOut

/** Controls */
const playButton = document.querySelector('.playButton')
const stopButton = document.querySelector('.stopButton')
const plusButton = document.querySelector('.plusButton')
const minusButton = document.querySelector('.minusButton')
const soundOnButton = document.querySelector('.soundOn')
const soundOffButton = document.querySelector('.soundOff')

/** Climate */
const forestButton = document.querySelector('.forestButton')
const rainButton = document.querySelector('.rainButton')
const coffeButton = document.querySelector('.cofeeButton')
const fireplaceButton = document.querySelector('.fireplaceButton')

const sound = Sound()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut 
})

function resetAudios() {
    sound.stopAllAudios()
    sound.pressButton()
    soundOnButton.classList.add('hide')
    soundOffButton.classList.remove('hide')

}

playButton.addEventListener('click', () => {
    timer.countDown()
    sound.pressButton()
})

stopButton.addEventListener('click', () => {
    clearTimeout(Timer.timerTimeOut)
    sound.pressButton()
    timer.updateTimerDisplay(25, 0)
})

plusButton.addEventListener('click', () => {
    timer.updateTimerDisplay(Number(minutesDisplay.textContent) + 5, secondsDisplay.textContent)
})

minusButton.addEventListener('click', () => {
    if(Number(minutesDisplay.textContent) >= 5) {
        timer.updateTimerDisplay(Number(minutesDisplay.textContent) - 5, secondsDisplay.textContent)
    } else {
        alert("Its not possible to descrese your timer to less then zero")
    }
})

forestButton.addEventListener('click', () => {
    resetAudios()
    sound.forestButton()
    
})

rainButton.addEventListener('click', () => {
    resetAudios()
    sound.rainButton()
})

coffeButton.addEventListener('click', () => {
    resetAudios()
    sound.coffeShopButton()
})

fireplaceButton.addEventListener('click', () => {
    resetAudios()
    sound.fireplaceButton()
})

soundOnButton.addEventListener('click', () => {
    resetAudios()
})

soundOffButton.addEventListener('click', () => {
    soundOnButton.classList.remove('hide')
    soundOffButton.classList.add('hide')
    sound.stopAllAudios()
})
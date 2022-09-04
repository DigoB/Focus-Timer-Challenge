import {Timer} from "./timer.js"
import Sound from "./sounds.js"

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

playButton.addEventListener('click', () => {
    timer.countDown()
    sound.buttonPressAudio()
})

stopButton.addEventListener('click', () => {
    timer.updateTimerDisplay(25, 0)
    clearTimeout(Timer.timerTimeOut)
    sound.buttonPressAudio()
})

plusButton.addEventListener('click', () => {
    timer.updateTimerDisplay(Number(minutesDisplay.textContent) + 5, secondsDisplay.textContent)
})

minusButton.addEventListener('click', () => {
    timer.updateTimerDisplay(Number(minutesDisplay.textContent) - 5, secondsDisplay.textContent)
})
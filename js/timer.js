export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut
}) {

    function countDown() {

        timerTimeOut = setTimeout( () => {
    
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            updateTimerDisplay(minutes, 0)
            
            if (minutes <= 0 && seconds <= 0) {
                updateTimerDisplay(25, 0)
                return
            }
            
            if( seconds <= 0 ) {
                seconds = 60
                
                --minutes
            }
            
            updateTimerDisplay(minutes, String(seconds -1))
    
            countDown()
    
        }, 1000)
    
    }
    
    function updateTimerDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    return {
        countDown,
        updateTimerDisplay
    }
}
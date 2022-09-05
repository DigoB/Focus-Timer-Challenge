export function Sound() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const forestAudio = new Audio("../sounds/Floresta.wav")
    const coffeShopAudio = new Audio("../sounds/Cafeteria.wav")
    const rainAudio = new Audio("../sounds/Chuva.wav")
    const fireplaceAudio = new Audio("../sounds/Lareira.wav")

    forestAudio.loop
    coffeShopAudio.loop
    rainAudio.loop
    fireplaceAudio.loop

    function pressButton() {
        buttonPressAudio.play()
    }

    function forestButton() {
        forestAudio.play()
    }

    function coffeShopButton() {
        coffeShopAudio.play()
    }

    function rainButton() {
        rainAudio.play()
    }

    function fireplaceButton() {
        fireplaceAudio.play()
    }

    function stopAllAudios() {
        forestAudio.pause()
        coffeShopAudio.pause()
        rainAudio.pause()
        fireplaceAudio.pause()
    }

    
    return {
        pressButton,
        forestButton,
        coffeShopButton,
        rainButton,
        fireplaceButton,
        stopAllAudios
    }
}
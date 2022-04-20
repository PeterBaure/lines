input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, 0)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let y = 0; y <= 4; y++) {
        led.plot(0, 4 - y)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})

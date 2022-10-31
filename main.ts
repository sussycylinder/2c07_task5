let xvalue = 0
let yvalue = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    xvalue = 0
    yvalue = 0
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(500)
            xvalue += 1
        }
        yvalue += 1
        for (let index = 0; index < 5; index++) {
            xvalue += -1
            led.plot(xvalue, yvalue)
            basic.pause(500)
        }
        yvalue += 1
    }
})

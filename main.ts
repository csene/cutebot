radio.onReceivedString(function (receivedString) {
    if (receivedString == "lights" && 0 == lights) {
        cuteBot.singleheadlights(cuteBot.RGBLights.ALL, 200, 100, 0)
        lights = 1
    }
    if (receivedString == "lights" && 1 == lights) {
        cuteBot.closeheadlights()
        lights = 0
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
let lights = 0
radio.setGroup(5)
lights = 0
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})

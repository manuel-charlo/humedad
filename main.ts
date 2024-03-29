basic.forever(function () {
    basic.showNumber(Environment.ReadSoilHumidity(AnalogPin.P1))
    if (Environment.ReadSoilHumidity(AnalogPin.P1) > 0) {
        pins.servoWritePin(AnalogPin.P2, 90)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})

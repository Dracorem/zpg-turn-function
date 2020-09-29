function Turn_360 () {
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(2300)
    maqueen.motorStop(maqueen.Motors.M1)
}
input.onButtonPressed(Button.A, function () {
    Turn_360()
})

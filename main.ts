makerbit.onIrDatagram(function () {
    code = makerbit.irDatagram()
    if (code == "0x00FFA25D") {
        basic.showString("1")
    } else if (code == "0x00FF629D") {
        basic.showString("2")
    } else if (code == "0x00FFE21D") {
        basic.showString("3")
    } else if (code == "0x00FF22DD") {
        basic.showString("4")
    } else if (code == "0x00FF02FD") {
        basic.showString("5")
    } else if (code == "0x00FFC23D") {
        basic.showString("6")
    } else if (code == "0x00FFE01F") {
        basic.showString("7")
    } else if (code == "0x00FFA857") {
        basic.showString("8")
    } else if (code == "0x00FF906F") {
        basic.showString("9")
    } else if (code == "0x00FF6897") {
        basic.showString("*")
    } else if (code == "0x00FF9867") {
        basic.showString("0")
    } else if (code == "0x00FFB04F") {
        basic.showString("#")
    } else if (code == "0x00FF18E7") {
        basic.showString("^")
    } else if (code == "0x00FF10EF") {
        basic.showString("<")
    } else if (code == "0x00FF38C7") {
        basic.showString("OK")
    } else if (code == "0x00FF5AA5") {
        basic.showString(">")
    } else if (code == "0x00FF4AB5") {
        basic.showString("V")
    } else {
        basic.showString(code)
    }
})
let code = ""
makerbit.connectIrReceiver(DigitalPin.P1, IrProtocol.NEC)

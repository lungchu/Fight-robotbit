function pwmTurnLeftLow (speed: number) {
    images.arrowImage(ArrowNames.West).showImage(0)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2B,
    speed
    )
}
function pwmTurnRightArc (speed: number, diff: number) {
    images.arrowImage(ArrowNames.East).showImage(0)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M2B,
    speed - diff
    )
}
function pwmTurnLeftHigh (speed: number) {
    images.arrowImage(ArrowNames.West).showImage(0)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0 - speed,
    robotbit.Motors.M2B,
    speed
    )
}
function pwmTurnRightLow (speed: number) {
    images.arrowImage(ArrowNames.East).showImage(0)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M2B,
    0
    )
}
function pwmTurnLeftArc (speed: number, diff: number) {
    images.arrowImage(ArrowNames.West).showImage(0)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed - diff,
    robotbit.Motors.M2B,
    speed
    )
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    led.stopAnimation()
    EventID = control.eventValue()
    if (EventID == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        CarAct = 8
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        CarAct = 2
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        CarAct = 4
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        CarAct = 6
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_A_UP || (EventID == EventBusValue.MES_DPAD_BUTTON_B_UP || (EventID == EventBusValue.MES_DPAD_BUTTON_C_UP || EventID == EventBusValue.MES_DPAD_BUTTON_D_UP))) {
        CarAct = 5
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        vServoPos = vServoUp
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        vServoPos = vServoDown
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_1_UP || EventID == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        vServoPos = vServoBase
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        hServoPos = hServoLeft
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        hServoPos = hServoRight
    } else if (EventID == EventBusValue.MES_DPAD_BUTTON_3_UP || EventID == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        hServoPos = hServoBase
    }
})
function pwmTurnRightHigh (speed: number) {
    images.arrowImage(ArrowNames.East).showImage(0)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M2B,
    0 - speed
    )
}
function pwmBackward (speed: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0 - speed,
    robotbit.Motors.M2B,
    0 - speed
    )
    images.arrowImage(ArrowNames.South).showImage(0)
}
function pwmStop () {
    robotbit.MotorStopAll()
    basic.showIcon(IconNames.No)
}
function pwmForward (speed: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M2B,
    speed
    )
    images.arrowImage(ArrowNames.North).showImage(0)
}
let CarAct = 0
let vServoPos = 0
let hServoPos = 0
let EventID = 0
let vServoBase = 0
let vServoDown = 0
let vServoUp = 0
let hServoBase = 0
let hServoRight = 0
let hServoLeft = 0
basic.showString("Fight")
basic.pause(100)
let speed = 255
hServoLeft = 180
hServoRight = 20
hServoBase = 90
vServoUp = 45
vServoDown = 90
vServoBase = 108
EventID = -1
hServoPos = hServoBase
let vServoLastPos = -1
vServoPos = vServoBase
let hServoLastPos = -1
CarAct = 5
let LastCarAct = -1
basic.forever(function () {
    if (CarAct != LastCarAct) {
        LastCarAct = CarAct
        if (CarAct == 8) {
            pwmForward(speed)
        } else if (CarAct == 2) {
            pwmBackward(speed)
        } else if (CarAct == 4) {
            pwmTurnLeftLow(speed)
        } else if (CarAct == 6) {
            pwmTurnRightLow(speed)
        } else if (CarAct == 5) {
            pwmStop()
        }
    }
})
basic.forever(function () {
    if (hServoLastPos != hServoPos) {
        hServoLastPos = hServoPos
        robotbit.Servo(robotbit.Servos.S1, hServoPos)
    }
})
basic.forever(function () {
    if (vServoLastPos != vServoPos) {
        vServoLastPos = vServoPos
        robotbit.Servo(robotbit.Servos.S2, vServoPos)
    }
})

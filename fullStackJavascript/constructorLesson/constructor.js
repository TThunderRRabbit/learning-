const div1 = document.querySelector('.div1')

div1.innerHTML = 'HATDOG'

class Car{
    constructor(model, speed) {
        this.model = model
        this.speed = speed
    }

    accelerate() {
        console.log('getting faster')
        console.log(this.model)
        console.log(this.speed)

    }

    slowDown(deccelerate) {
        this.speed = this.speed - deccelerate
        console.log(this.speed)
    }
}

const deccelerate = 20

let car1 = new Car('R-type', 56)
let car2 = new Car('Vios', 40)
car1.accelerate()
car2.accelerate()
car2.slowDown(deccelerate)
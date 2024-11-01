class MathUtil {
    static pi = 3.14159


    static used = 0
    static sayHello() {
        console.log("Hello")
    }
    
    static multi2() {
        return this.pi * 2 + 5;
        MathUtil.used++;
    }

    constructor (userUsed){
        this.userUsed = userUsed
        MathUtil.used ++
    }
}

MathUtil.sayHello()
console.log(MathUtil.pi)

let use1 = new MathUtil('lol')
let use2 = new MathUtil('lol')
let use3 = new MathUtil('lol')



console.log(MathUtil.multi2())
console.log(MathUtil.used)

console.log(use1.userUsed)
console.log(MathUtil.used)
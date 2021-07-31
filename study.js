// const a = '42'
// console.log(`${-a + 1}`)

// function f (s, name, age){
//     return  age > 0 ? s[0] : s[1]
// }
// console.log(f`Name ${'L'} Age ${'29'}!`)
// let c = 10

// setInterval(function () {
//     prompt(`Введите имя ${--c}`)
// },1000)

// console.log(sumAll(1,2,'3'))
// function sumAll (...args){
//     let s = 0
//     for (let arg of args) {
//         s += arg;
//     }
//     return s
// }
var a = Math.log(2)
const logger = {
    keys() {
        console.log('Obj Keys: ', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach(key  => {
            console.log(key + ': ' + this.key)
        })
    }
}
logger.keysAndValues.call({a: 1, b: {c: 2}})

console.log(logger)
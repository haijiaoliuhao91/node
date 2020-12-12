// ES5 中的类和静态方法
function Person (name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        console.log(`${this.name} ---- ${this.age}`)
    }
}

// 原型属性和方法
// 原型链上的属性和方法可以被多个实例共享
Person.prototype.sex = '男'
Person.prototype.work = function () {
    console.log(`${this.name}-----${this.sex}-----${this.age}`)
}

// 静态属性和方法
Person.score = 90
Person.setName = function () {
    console.log('这是一个静态方法')
}

var p = new Person('张三', 19)
p.run()
p.work()
Person.setName()
console.log(Person.score)
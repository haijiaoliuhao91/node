// 构造函数
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    // 静态方法
    static sayHi() {
        console.log('你好吖' + this.sex)
    }
}
// 静态属性
Person.sex = '男'

var p = new Person('张三', 18)
// 实例方法调用
console.log(p.getName())
p.setName('李四')
console.log(p.name)

// 静态方法调用
Person.sayHi()

// 继承
class Student extends Person {
    constructor(name, age, score) {
        super(name, age)
        this.score = score
    }

    printInfo() {
        console.log(`${this.name}----${this.age}---${this.score}`)
    }
}

var s = new Student('王五', 22, 98)
s.printInfo()
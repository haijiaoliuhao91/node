class Person {
    // 构造方法
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // 实例方法
    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    print() {
        console.log(`${this.name}----${this.age}`)
    }

    // 静态方法
    static sayHi() {
        console.log('你好!')
    }
}

// 静态属性
Person.sex = '男'

var p = new Person('张三', 18)
p.print()
// 静态方法调用
Person.sayHi()
// 静态属性
console.log(Person.sex)
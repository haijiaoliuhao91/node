// 构造函数
function Person(name, age) {
    this.name = name
    this.age = age
    this.run = function () {
        console.log(`${this.name}----${this.age}`)
    }
}

// 原型链上的属性和方法
Person.prototype.sex = '男'
Person.prototype.work = function () {
    console.log('这是一个原型链上的方法')
}

// 对象冒充实现继承
function Web(name, age) {
    Person.call(this, name, age)
}

// 原型链继承
Web.prototype = new Person()

var web = new Web('李四', 22)
web.run()
web.work()

/*
原型链继承和对象冒充继承
对象冒充继承
不能继承原型链上的属性和方法
原型链继承
可以继承构造函数以及原型链中的属性和方法，但是实例化子类的时候不能给构造函数传值
*/
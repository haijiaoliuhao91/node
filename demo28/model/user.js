// 引入 db 模块
const mongoose = require('./db')
// 定义 schema 
const UserSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    sex: {
        type: String,
        enum: ['男', '女']
    }
})

// 注意：扩展的静态方法和实例方法一定要写在 model 定义之前
// 扩展静态方法 通过 statics 添加
UserSchema.statics.findByAge = function (age, cb) {
    this.find({'age': age}, cb)
}

// 扩展实例方法 通过 methods 添加
UserSchema.methods.print = function () {
    console.log(`我叫${this.name}，我是一个${this.sex}孩子，我今年${this.age}岁了！快来和我一起玩耍吧!`)
}

// 定义 model 操作数据库
const User = mongoose.model('User', UserSchema, 'users')

// 模块导出
module.exports = User
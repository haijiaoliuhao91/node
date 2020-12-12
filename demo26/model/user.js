// 引入 db 模块
const db = require('./db')
// 定义 schema 
// schema里面的对象和数据库表里面的字段一一对应
const UserSchema = db.Schema({
    name: String,
    age: {
        type: Number,
        default: 18
    },
    sex: {
        type: String,
        default: '未知'
    }
})

// 定义数据库模型，操作数据库
// model里面的第一个参数 要注意：1、首字母大写 2、要和数据库表(集合)名称对应 
const User = db.model('User', UserSchema, 'user')

// 导出模块
module.exports = User
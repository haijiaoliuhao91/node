// 引入 mongoose 模块
const mongoose = require('mongoose')
// 建立连接
// 写法1
/*
mongoose.connect('mongodb://127.0.0.1/finghting', { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
// 监听连接状态
db.on('error', function (err) {
    console.log('数据库连接失败:' + err)
})

db.on('open', function () {
    console.log('数据库连接成功!')
})

*/

// 写法2 
mongoose.connect('mongodb://127.0.0.1/finghting', (err)=>{
    if (err) {
        console.log('数据库连接失败')
        return
    }
    console.log('数据库连接成功')
})

// 定义 schema 
const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: 'string'
})

// 定义 model
const User = mongoose.model('User', UserSchema)

// 查找数据
User.find({}, function (err, doc) {
    if (err) {
        console.log(err)
        return
    }
    console.log(doc)
})

// 更新一条数据
// User.updateOne({name: '李四'}, {age: 19, sex: '女'}, (err, raw)=>{
//     if (err) {
//         console.log('更新数据失败:' + err)
//         return
//     }
//     console.log(raw)
// })

// 更新所有数据
// User.updateMany({age: 22}, {name: 'lisi', sex: '未知'}, (err, raw)=>{
//     if (err) {
//         console.log('更新数据失败:' + err)
//         return
//     }
//     console.log(raw)
// })

// 添加数据
// const user = new User({
//     name: '李四',
//     age: 22,
//     sex: '男'
// })

// user.save(function (err, doc) {
//     if (err) {
//         console.log('添加数据失败:' + err)
//         return
//     }
//     console.log(doc)
// })


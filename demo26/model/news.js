// 引入 db 模块
const db = require('./db')
// 定义 schema 对象
const NewSchema = db.Schema({
    title: String,
    content: String,
    time: String
})

// 定义 model 对象
const New = db.model('New', NewSchema, 'new')

// 导出模块
module.exports = New
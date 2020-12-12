// 引入 user 模块
const User = require('./model/user')
// 查找数据
User.find({}, (err, res)=>{
    if (err) {
        console.log('查找数据失败：' + err)
        return
    }
    console.log('查找数据成功!')
    console.log(res)
})

// 根据年龄查找数据
User.findByAge(19, (err, res)=>{
    if (err) {
        console.log('查询数据失败：' + err)
    }
    console.log('查询数据成功')
    console.log(res)
})

// 添加数据
const user = new User({
    name: '王麻子',
    age: 180,
    sex: '男'
})

user.save((err, doc)=>{
    if (err) {
        console.log('添加数据失败：' + err)
        return
    }
    console.log('添加数据成功')
    console.log(doc)
})

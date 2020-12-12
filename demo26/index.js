// 引入 user 模块
const User = require('./model/user')
// 引入 new 模块
const New = require('./model/news')

// 查找数据
User.find({}, (err, doc)=>{
    if (err) {
        console.log('查找数据失败:' + err)
        return
    }
    console.log(doc)
})

// 添加数据
// const user = new User({
//     name: '王麻子'
// })

// user.save((err, raw)=>{
//     if (err) {
//         console.log('添加数据失败:' + err)
//         return
//     }
//     console.log('添加数据成功')
//     console.log(raw)
// })

// 删除数据
// User.deleteOne({name: '王麻子'}, (err)=>{
//     if (err) {
//         console.log('数据删除失败:' + err)
//         return
//     }
//     console.log('数据删除成功!')
// })

// 通过模型的 create 方法增加数据
// User.create({
//     name: '史玉柱',
//     age: 48,
//     sex: '未知'
// }, (err, user)=>{
//     if (err) {
//          console.log('添加数据失败：' + err)
//          return
//     }
//     console.log('添加数据成功')
//     console.log(user)
// })

// 查找数据
New.find({}, (err, doc)=>{
    if (err) {
        console.log('查找数据失败:' + err)
        return
    }
    console.log('查找数据成功')
    console.log(doc)
})

// 添加数据
// const news = new New({
//     title: '震惊中外人民',
//     content: '新闻内容'
// })

// news.save((err, doc)=>{
//     if (err) {
//         console.log('添加数据')
//         return
//     }
//     console.log('添加数据成功!')
// })

// 更新数据
// New.updateOne({_id: '5fc7179ba6bbe51f7778222f'}, {title: '号外号外'}, (err, doc)=>{
//     if (err) {
//         console.log('更新数据失败：' + err)
//         return
//     }
//     console.log(doc)
// })
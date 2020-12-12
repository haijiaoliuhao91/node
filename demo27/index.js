// 引入 banner 模块
const Banner = require('./model/banner')
// 查找数据
// Banner.find({}, (err, res)=>{
//     if (err) {
//         console.log('查找数据失败：' + err)
//         return
//     }
//     console.log(res)
// })

// 添加数据
// 方式一
Banner.create({
    title: '   排名榜单12   ',
    link: 'https://www.baidu.com',
    pic: 'https://ranking.png'
}, (err, res)=>{
    if (err) {
        console.log('添加数据失败：' + err)
        return
    }
    console.log('添加数据成功')
    console.log(res)
})
// 引入 express 模块
const express = require('express')
// 实例化 express 对象
const app = express()
// 配置模板引擎
app.set('view engine', 'ejs')
// 指定模板位置，默认模板位置在views
app.set('views', __dirname + '/views')
// 配置路由
app.get('/', (req, res)=>{
    res.send('模板引擎')
})

// 使用模板引擎
app.get('/home', (req, res)=>{
    res.render('index.ejs')
})

app.get('/userinfo', (req, res)=>{
    let title = 'ejs 模板引擎'
    let userinfo = {
        name: '张三',
        age: 19,
        sex: '男',
        address: '<h3>河南南阳镇平晁陂老张营村</h3>'
    }
    let score = 50
    let list = ['111', '222', '333']
    let newsList = [
        {
            'title': '新闻111'
        },
        {
            'title': '新闻222'
        },
        {
            'title': '新闻333å'
        }
    ]
    res.render('userinfo.ejs', {
        title,
        userinfo,
        score,
        list,
        newsList
    })
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
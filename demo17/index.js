// 引入 express 模块
const express = require('express')
// 引入 cookie-parser 模块
const cookieParser = require('cookie-parser')
// 实例化 express 对象
const app = express()
// 使用 cookie-parser 中间件
app.use(cookieParser('123'))
// 配置路由
app.get('/', (req, res)=>{
    // 设置 cookie
    res.cookie('name', '张三', {
        maxAge: 1000 * 60 * 60,
        signed: true,
        path: '/news'
    })
    res.cookie('user', {name:'lisi', age:18,sex:'男'}, {
        domain: '.fighting.com'
    })
    res.send('首页')
})

app.get('/user', (req, res)=>{
    // 获取 cookie
    console.log(req.signedCookies.name)
    console.log(req.cookies.user)
    res.send(req.cookies.user)
})

app.get('/news', (req, res)=>{
    res.send(req.signedCookies.name)
})

// 设置监听
app.listen(80, ()=>{ console.log('app started at port 3031...') })
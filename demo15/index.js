/*
Express 可以使用如下几种中间件
1、应用级中间件
2、路由级中间件
3、错误处理中间件
4、内置中间件
5、第三方中间件
 */

// 引入 express 模块
const express = require('express')
// 实例化 express 对象
const app = express()

// 应用级中间件
app.use(async (req, res, next) => {
    console.log('请求开始:' + new Date())
    await next()
    console.log('请求结束:' + new Date())
})

// 内置中间件
// 配置静态 web 服务目录
// app.use(express.static('static'))
// 配置虚拟静态 web 服务目录
app.use('/public', express.static('static'))

// 配置路由
app.get('/', (req, res) => {
    res.send('首页')
})

app.get('/login', (req, res) => {
    res.send('登录页面')
})

app.get('/news', (req, res) => {
    res.send('新闻列表')
})

// 路由级中间件
app.get('/news/add', (req, res, next) => {
    console.log('news add')
    next()
})

// 动态路由
app.get('/news/:id', (req, res) => {
    console.log('新闻动态路由')
    res.send('新闻动态路由:' + req.params.id)
})

// 错误处理中间件
app.use((req, res, next) => {
    res.status(404).send('访问的页面暂时不存在!')
})

// 设置监听
app.listen(3031, () => { console.log('app started at port 3031...') })
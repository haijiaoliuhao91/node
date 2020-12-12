/* 
seession 是另一种记录客户状态的机制，不同的是 cooie 保存在客户端浏览器中，而 session 保存在服务器上。
Cookie 数据存放在客户的浏览器上，session 数据放在服务器上。session 相比 cookie 要更安全一些。
由于 session 保存在服务器上，所以当访问量增多的时候，会比较占用服务器的性能。单个 cookie 保存的数据大小不能超过4K，很多浏览器都限制一个站点最多保存20个cookie
session 没有这方面的限制。session 是基于 cookie 进行工作的

session 的工作流程
当浏览器访问服务器并发送第一次请求时，服务器端会创建一个 session 对象，生成一个类似于 key,value 的键值对，然后将 key(cookie) 返回到客户端浏览器，浏览器下次再访问时，携带 key(cookie)，找到对应的 session(value)

*/

// 引入 express 模块
const express = require('express')
// 引入 session 模块
const session = require('express-session')
// 实例化 express 对象
const app = express()
// 加载 seesion 中间件
app.use(session({
    // 服务器端生成 session 的签名
    secret: '河南南阳镇平晁陂',
    // 强制保存 session 即使没有发生变化
    resave: false,
    // 强制将未初始化的 session 保存
    saveUninitialized: true,
    // 设置 session 对应 cookie 名称
    name: 'xiaoshen',
    // 在每次请求时强行设置 cookie，这将重置 cookie 过期时间
    rolling: true,
    // cookie 的设置
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}))

// 配置路由
app.get('/', (req, res)=>{
    // 获取 session
    let username = req.session.username
    if (username || req.session.age) {
        res.send(username + '---' + req.session.age + '已经登录')
    } else {
        res.send('用户未登录')
    }
})

app.get('/login', (req, res)=>{
    // 设置 session
    req.session.username = 'lisi'
    req.session.age = 20
    res.send('登录')
})

app.get('/logout', (req, res)=>{
    // 1、会将所有 session 清空
    // req.session.maxAge = 0

    // 2、将对应的值置空
    // req.session.username = ''

    req.session.destroy(err=>{
        if (err) {
            console.log(err)
            return
        }
        console.log('session 清除成功')
    })
    res.send('退出登录')
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
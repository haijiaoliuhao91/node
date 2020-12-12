/*
connext-mogon 可以将 session 保存在 mogondb 数据库中
*/

// 引入 express 模块
const express = require('express')
// 引入 express-session 模块
const session = require('express-session')
// 引入 connect-mongo 模块
const MongoStore = require('connect-mongo')(session)
// 实例化 express 对象
const app = express()
// 加载 session 中间件
app.use(session({
    secret: '上海北京广州河南南阳',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/product',
        // 不管发出了多少请求 在24小时内只更新一次session
        touchAfter: 24 * 3600
    })
}))

// 配置路由
app.get('/', (req, res)=>{
    res.send('首页')
})

app.get('/login', (req, res)=>{
    req.session.name = '张三'
    req.session.age = '18'
    req.session.user = { name:'lisi', age: 20, sex: '男', score: '98' }
    res.send('执行登录操作')
})

app.get('/logout', (req, res)=>{
    req.session.destroy(err=>{
        if (err) {
            console.log('session清除失败:' + err)
            return
        }
        console.log('session清除成功!')
    })
    res.send('退出登录')
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031....') })
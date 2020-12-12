// 引入 express 模块
const express = require('express')
// 引入 body-parser 模块
const bodyParser = require('body-parser')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入外部模块
const login = require('./routes/login')
// 实例化 express 对象
const app = express()
// 配置静态 web 服务目录
app.use(express.static('static'))
// 配置虚拟静态 web 服务目录
// app.use('/public', express.static('static'))
// 加载 body-parser 中间件
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// 配置模板位置。默认是在views目录
app.set('/views', __dirname + '/views')
// 配置 ejs 模板引擎
app.engine('html', ejs.__express)
app.set('view engine', 'html')
// 加载外部模块
app.use('/login', login)
// 配置路由
app.get('/', (req, res)=>{
    res.send('首页')
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
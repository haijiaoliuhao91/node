// 引入 express 模块
const express = require('express')
// 实例化 express 对象
const app = express()
// 引入 path 模块
const path = require('path')
// 引入 body-parser 模块
const bodyParser = require('body-parser')
// 配置 body-parser 模块
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 引入 margon 模块
const logger = require('morgan')
// 配置 margon 模块
app.use(logger('dev'))
// 引入 ejs 模块
const ejs = require('ejs')
// 配置模板视图位置，默认是在 views 目录下
app.set('views', path.join(__dirname, '/views'))
// 配置 ejs 模块
app.engine('html', ejs.__express)
app.set('view engine', 'html')
// 配置静态 web 服务目录
app.use(express.static('static'))
// 配置虚拟静态 web 服务目录
// app.use('/public', express.static('static'))
// 引入外部模块
const admin = require('./routes/admin')
const api = require('./routes/api')
const index = require('./routes/index')
// 加载外部模块
app.use('/admin', admin)
app.use('/api', api)
app.use('/', index)
// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
// 引入 path 模块
const path = require('path')
// 引入 koa 模块
const Koa = require('koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 koa-bodyparser 模块
const bodyParser = require('koa-bodyparser')
// 引入 koa-static 模块
const static = require('koa-static')
// 引入 koa-art-template 模块
const render = require('koa-art-template')
// 引入 koa-logger 模块
const logger = require('koa-logger')
// 引入路由模块
const admin = require('./routes/admin')
const api = require('./routes/api')
const index = require('./routes/index')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 加载 bodyparser 模块
app.use(bodyParser())
// 配置静态 web 服务目录
app.use(static(path.join(__dirname, 'static')))
// 配置模板视图位置
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV != 'production'
})
// 配置路由
// 配置子路由
router.use('/admin', admin)
router.use('/api', api)
router.use('/', index)
// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, () => { console.log('app started at port 3031...') })
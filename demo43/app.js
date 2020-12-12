// 引入 path 模块
const path = require('path')
// 引入 koa 模块
const Koa = require('koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 koa-static 模块
const static = require('koa-static')
// 引入 koa-views 模块
const views = require('koa-views')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 koa-bodyparser 模块
const bodyParser = require('koa-bodyparser')
// 引入 koa-session 模块
const session = require('koa-session')
// 引入 koa-logger 模块
const logger = require('koa-logger')
// 引入 admin 模块
const admin = require('./routes/admin')
// 引入 index 模块
const index = require('./routes/index')
// 引入 api 模块
const api = require('./routes/api')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 配置静态 web 服务目录
app.use(static(path.join(__dirname, 'static')))
// 配置模板视图位置, 默认是 view 目录
app.use(views(path.join(__dirname, 'views'), {
    map: {
        html: 'ejs'
    }
}))
// 加载 bodyparser 模块
app.use(bodyParser())
// 配置 session 模块
app.keys = ['some secrect hurr']
const CONFIG = {
    maxAge: 1000 * 60 * 10,
    autoCommit: true,
    overwrite: true,
    httpOnly: false,
    signed: true,
    rolling: false,
    secure: false,
    sameSite: null
}
app.use(session(CONFIG, app))
// 加载 logger 模块
app.use(logger())
// 配置路由
// 配置子路由
router.use('/admin', admin.routes())
router.use('/', index.routes())
router.use('/api', api)
// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, () => { console.log('app started at port 3031...') })
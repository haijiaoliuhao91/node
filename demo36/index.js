// 引入 path 模块
const path = require('path')
// 引入 koa 模块 
const Koa = require('koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 koa-static 模块
const static = require('koa-static')
// 引入 koa-bodyparser 模块
const bodyParser = require('koa-bodyparser')
// 引入 koa-art-template 模块
const render = require('koa-art-template')
// 引入 koa-session 模块
const session = require('koa-session')
// 引入 koa-morgan 模块
const morgan = require('koa-morgan')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 配置静态 web 服务目录
app.use(static(path.join(__dirname, 'static')))
// 加载 body-parser 模块
app.use(bodyParser())
// 配置 art-template 模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV != 'production'
})
// 配置 session 模块
app.keys = ['1we12']
const CONFIG = {
    key: 'userinfo',
    maxAge: 1000 * 10,
    autoCommit: true,
    overwrite: true,
    httpOnly: false,
    signed: true,
    rolling: false,
    renew: true,
    secure: false,
    sameSite: null
}
app.use(session(CONFIG, app))
// 加载 morgan 模块
app.use(morgan('dev'))
// 配置路由
router.get('/', async (ctx, next)=>{
    const username = ctx.session.username
    await ctx.render('index', {
        username
    })
})

router.get('/login', async (ctx, next)=>{
    ctx.session.username = '李四'
    ctx.body = '登录'
})

router.get('/home', async (ctx, nexr)=>{
    const username = ctx.session.username
    await ctx.render('home', {
        username
    })
})

// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })

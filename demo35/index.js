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
// 引入 koa-morgan 模块
const logger = require('koa-morgan')
// 实例化 koa 对象
const app = new Koa()
// 实例化 koa-router 对象
const router = new Router()
// 配置静态 web 服务目录
app.use(static(path.join(__dirname, 'static')))
// 配置 koa-art-template 模块
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_DEV != 'production'
})
// 加载 koa-bodyparser 模块
app.use(bodyParser())
// 加载 koa-morgan 模块
app.use(logger('dev'))
// 配置路由
router.get('/', async (ctx, next)=>{
    ctx.body = '首页'
})

router.get('/home', async (ctx, next)=>{
    let username = ctx.cookies.get('username')
    await ctx.render('home', {
        username
    })
})

router.get('/news', async (ctx, next)=>{
    let username = new Buffer.from(ctx.cookies.get('username'), 'base64').toString()
    let age = ctx.cookies.get('age')
    let sex = new Buffer.from(ctx.cookies.get('sex'), 'base64').toString()
    await ctx.render('news', {
        username,
        age,
        sex
    })
})

router.get('/login', async (ctx, next)=>{
    // 设置 cookie
    /*
    ctx.cookies.set('username', 'zhangsan', {
        maxAge: 1000 * 6
    })

    ctx.cookies.set('username', 'lisi', {
        maxAge: 1000 * 60,
        path: '/news',
        // 设置为 true 时，不能通过 JS 获取 cookie
        httpOnly: true
    })
    */

    ctx.cookies.set('username', new Buffer.from('张三', 'utf-8').toString('base64'), {
        maxAge: 1000 * 60 * 10
    })

    ctx.cookies.set('age', 18, {
        maxAge: 1000 * 60 * 10
    })

    ctx.cookies.set('sex', new Buffer.from('男', 'utf-8').toString('base64'), {
        maxAge: 1000 * 60 * 10,
    })
    
    ctx.body = '登录页面'
})

// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
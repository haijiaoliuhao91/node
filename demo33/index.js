// 引入 koa 模块
const Koa = require('koa')
// 引入 path 模块
const path = require('path')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 koa-static 模块
const static = require('koa-static')
// 引入 koa-views 模块
const views = require('koa-views')
// 引入 koa-bodyparser 模块
const bodyParser = require('koa-bodyparser')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 koa-morgan 模块
const logger = require('koa-morgan')
// 引入 tools 模块
const tools = require('./common/tools')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 配置静态 web 服务目录
app.use(static(path.join(__dirname, 'static')))
// 配置模板位置，默认是 views 目录
app.use(views(path.join(__dirname, 'views'), {
    extension: 'ejs'
}))
// 配置 koa-bodyparser 模块
app.use(bodyParser())
// 加载 koa-morgan 模块
app.use(logger('dev'))
// 配置路由
router.get('/', async (ctx, next)=>{
    ctx.body = 'koa'
})

router.get('/home', async (ctx, next)=>{
    await ctx.render('index')
})

router.get('/lists', async (ctx, next)=>{
    console.log('2')
    let title = '商品列表'
    let lists = [
        {
            title: '设计模式之美'
        },
        {
            title: 'Redis核心技术与实战'
        },
        {
            title: '大厂晋升指南'
        },
        {
            title: '数据结构与算法之美'
        }
    ]
    await ctx.render('lists', {
        title,
        lists
    })
})

router.get('/login', async (ctx, next)=>{
    await ctx.render('login')
})

router.post('/doLogin', async (ctx, next)=>{
    ctx.body = {
        url: ctx.url,
        body: ctx.request.body
    }
}) 

app.use(async (ctx, next)=>{
    console.log('1')
    // ctx.state 推荐的命名空间，可以通过中间件传递数据给前端页面
    ctx.state.userinfo = {
        name: '张三',
        age: 18,
        sex: '男'
    }
    await next()
    console.log('3')
})

// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
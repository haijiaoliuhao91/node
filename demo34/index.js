// 引入 koa 模块
const Koa = require('koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 path 模块
const path = require('path')
// 引入 koa-static 模块
const static = require('koa-static')
// 引入 koa-art-template 模块
const render = require('koa-art-template')
// 引入 koa-bodyparser 模块
const bodyParser = require('koa-bodyparser')
// 引入 koa-morgan 模块
const logger = require('koa-morgan')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 配置静态 web 服务目录
app.use(static(path.join(__dirname, 'static')))
// 配置 koa-art-template 模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV != 'production'
})
// 加载 koa-morgan 模块
app.use(logger('dev'))
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = '首页'
})

router.get('/home', async (ctx, next) => {
    let title = '商品列表'
    let lists = [
        {
            title: '万向轮拉杆箱'
        },
        {
            title: '全自动迷你砂锅炖蛊'
        },
        {
            title: '成人电动牙刷'
        }
    ]
    let score = 54
    let userinfo = {
        name: '张三',
        sex: '男',
        age: 22
    }
    let tip = '<h2>上海小鬼网络科技有限公司</h2>'
    await ctx.render('home', {
        title,
        lists,
        score,
        userinfo,
        tip
    })
})

router.get('/news', async (ctx, next) => {
    let title = '新闻列表'
    let lists = [
        {
            title: '万向轮拉杆箱'
        },
        {
            title: '全自动迷你砂锅炖蛊'
        },
        {
            title: '成人电动牙刷'
        }
    ]
    let score = 54
    let userinfo = {
        name: '张三',
        sex: '男',
        age: 22
    }
    let tip = '<h2>上海小鬼网络科技有限公司</h2>'
    await ctx.render('news', {
        title,
        lists,
        score,
        userinfo,
        tip
    })
})

// 应用级中间件
app.use(async (ctx, next) => {
    await next()
})
// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, () => { console.log('app started at port 3031...') })
// 引入 koa 模块
const Koa = require('Koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 path 模块
const path = require('path')
// 引入 koa-static 模块
const static = require('koa-static')
// 引入 koa-views 模块
const views = require('koa-views')
// 引入 koa-morgan 模块
const logger = require('koa-morgan')
// 实例化 koa 对象
const app = new Koa()
// 实例化 koa-router 对象
const router = new Router()
// 配置静态 web 服务目录
app.use(static('static'))
// 配置模板位置，默认是 views 目录
// 配置方式一 这样配置的话 模板的后缀名是 .html
app.use(views(path.join(__dirname, 'views'), {
    map: {
        html: 'ejs'
    }
}))
// 配置方式二 这样配置的话 模板的后缀名是 .ejs
// ap.use(views(path.join(__dirname, 'views'), {
//     extension: 'ejs'
// }))

// 使用 koa-morgan 模块
app.use(logger('dev'))
// 配置路由
router.get('/', async (ctx, next) => {
    await ctx.render('index')
})

router.get('/news', async (ctx, next) => {
    ctx.body = '新闻列表'
})

router.get('/lists', async (ctx, next) => {
    console.log(ctx.request.query)
    let title = '推荐商品列表'
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

// 应用级中间件
app.use(async (ctx, next) => {
    console.log('123')
    // ctx.state 推荐的命名空间，用于通过中间件传递数据给前端页面
    ctx.state.userinfo = {
        name: '张三',
        age: 18,
        sex: '男'
    }
    await next()
})
// 加载 router 中间件
app.use(router.routes())
app.use(router.allowedMethods())
// 监听端口
app.listen(3031, () => { console.log('app started at port 3031...') })
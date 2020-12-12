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
const morgan = require('koa-morgan')
// 引入 db 模块
const DB = require('./module/db')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 加载 bodyparser 模块
app.use(bodyParser())
// 配置模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV != 'production'
})
// 配置静态 web 服务模板
app.use(static(path.join(__dirname, 'static')))
// 加载 morgan 模块
app.use(morgan('dev'))
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = '首页'
})

router.get('/users', async (ctx, next) => {
    console.time('start')
    const lists = await DB.find('user', {})
    console.timeEnd('start')
    await ctx.render('users', {
        lists
    })
})

router.get('/add', async (ctx, next) => {
    await ctx.render('add')
})

router.post('/doAdd', async (ctx, next) => {
    console.log(ctx.request.body)
    const data = await DB.insert('user', ctx.request.body)
    try {
        if (data.result.ok) {
            await ctx.redirect('users')
        }
    } catch (error) {
        console.log(error)
        await ctx.redirect('add')
    }
})

router.get('/edit', async (ctx, next) => {
    const id = ctx.query.id
    const lists = await DB.find('user', { '_id': DB.getObjectId(id) })
    await ctx.render('edit', {
        data: lists[0]
    })
})

router.post('/doEdit', async (ctx, next) => {
    const params = ctx.request.body
    const data = await DB.update('user', { '_id': DB.getObjectId(params.id) }, {
        name: params.name,
        sex: params.sex,
        age: params.age
    })
    try {
        if (data.result.ok) {
            await ctx.redirect('users')
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/delete', async (ctx, next) => {
    const objectId = DB.getObjectId(ctx.query.id)
    console.log(objectId)
    const data = await DB.delete('user', { '_id': objectId })
    try {
        if (data.result.ok) {
            await ctx.redirect('users')
        }
    } catch (error) {
        console.log(error)
    }
})

// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, () => { console.log('app started at port 3031...') })
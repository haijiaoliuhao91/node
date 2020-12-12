// 引入 koa 模块
const Koa = require('koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 引入 db 模块
const DB = require('./module/db')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 配置路由
router.get('/', async (ctx, next) => {
    console.time('start')
    const result = await DB.find('user', {})
    console.timeEnd('start')
    ctx.body = '首页'
})

router.get('/news', async (ctx, next) => {
    console.time('start')
    const result = await DB.find('user', {})
    console.timeEnd('start')
    ctx.body = '新闻列表'
})

router.get('/insert', async (ctx, next) => {
    console.time('start')
    const result = await DB.insert('user', { name: '李思思', age: 38, sex: '男' })
    console.log(result)
    console.timeEnd('start')
    ctx.body = '插入数据'
})

router.get('/delete', async (ctx, next) => {
    console.time('start')
    const result = await DB.remove('user', { name: '李思思' })
    console.timeEnd('start')
    ctx.body = '删除数据'
})

router.get('/update', async (ctx, next) => {
    console.time('start')
    const result = await DB.update('user', { name: '李思思' }, { sex: '女' })
    console.timeEnd('start')
    ctx.body = '更新数据'
})

// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, () => { console.log('app started at port 3031...') })
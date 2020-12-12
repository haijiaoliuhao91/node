// 引入 koa 模块
const Koa = require('koa')
// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 koa 对象
const app = new Koa()
// 实例化 router 对象
const router = new Router()
// 配置路由
router.get('/', async (ctx, next)=>{
    ctx.body = 'koa'
})

router.get('/news', async (ctx, next)=>{
    console.log('3')
    ctx.body = '新闻列表'
})
// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
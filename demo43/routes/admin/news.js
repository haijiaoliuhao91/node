// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = '新闻列表'
})

router.get('/add', async (ctx, next) => {
    ctx.body = '增加新闻'
})

router.get('/delete', async (ctx, next) => {
    ctx.body = '删除新闻'
})

router.get('/edit', async (ctx, next) => {
    ctx.body = '编辑新闻'
})

// 模块导出并加载路由
module.exports = router.routes()
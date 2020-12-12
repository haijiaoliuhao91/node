// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = '首页'
})

router.get('case', async (ctx, next) => {
    ctx.body = '用户案例'
})

router.get('about', async (ctx, next) => {
    ctx.body = '关于我们'
})

// 模块导出并加载路由
module.exports = router.routes()
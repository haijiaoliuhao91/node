// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = 'api模块'
})
// 模块导出并加载路由
module.exports = router.routes()
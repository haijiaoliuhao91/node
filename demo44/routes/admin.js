// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 引入子路由模块
const banner = require('./admin/banner')
const news = require('./admin/news')
const user = require('./admin/user')
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = '后台管理模块'
})
// 配置子路由
router.use('/banner', banner)
router.use('/news', news)
router.use('/user', user)
// 模块导出并加载路由
module.exports = router.routes()
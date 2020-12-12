// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 引入用户模块
const user = require('./admin/user')
// 引入新闻模块
const news = require('./admin/news')
// 引入轮播图模块
const banner = require('./admin/banner')
// 配置路由
router.get('/', async (ctx, next) => {
    ctx.body = '后台管理系统首页'
})
// 配置子路由
router.use('/user', user)
router.use('/news', news)
router.use('/banner', banner)
// 模块导出
module.exports = router
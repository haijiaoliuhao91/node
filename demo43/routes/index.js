// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 配置路由
router.get('/', async (ctx, index) => {
    await ctx.render('default/index', {
        title: '学习koa'
    })
})

router.get('case', async (ctx, next) => {
    await ctx.render('default/case', {
        title: '客户案例'
    })
})

router.get('about', async (ctx, next) => {
    await ctx.render('default/about', {
        title: '关于我们'
    })
})

// 模块导出
module.exports = router
// 引入 koa-router 模块
const Router = require('koa-router')
// 实例化 router 对象
const router = new Router()
// 引入 db 模块
const DB = require('../../module/db')
// 配置路由
router.get('/', async (ctx, next) => {
    const lists = await DB.find('user', {})
    await ctx.render('admin/user/index', {
        lists
    })
})

router.get('/add', async (ctx, next) => {
    await ctx.render('admin/user/add')
})

router.post('/doAdd', async (ctx, next) => {
    const data = await DB.insert('user', ctx.request.body)
    try {
        if (data.result.ok) {
            await ctx.redirect('/admin/user')
        }
    } catch (error) {
        await ctx.redirect('/admin/user/add')
    }
})

router.get('/edit', async (ctx, next) => {
    const lists = await DB.find('user', { '_id': DB.getObjectId(ctx.query.id) })
    await ctx.render('admin/user/edit', {
        data: lists[0]
    })
})

router.post('/doEdit', async (ctx, next) => {
    const params = ctx.request.body
    console.log(params)
    const data = await DB.update('user', { '_id': DB.getObjectId(params.id) }, {
        name: params.name,
        sex: params.sex,
        age: params.age
    })
    try {
        if (data.result.ok) {
            await ctx.redirect('/admin/user')
        }
    } catch (error) {
        await redirect('/admin/user/edit')
    }
})

router.get('/delete', async (ctx, next) => {
    const data = await DB.delete('user', { '_id': DB.getObjectId(ctx.query.id) })
    try {
        await ctx.redirect('/admin/user')
    } catch (error) {
        console.log(error)
    }
})

// 模块导出并加载路由
module.exports = router.routes()
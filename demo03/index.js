// 引入 http 模块
const http = require('http')
// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头
    // 状态码是200 文件类型是html 字符集是utf-8
    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力学习!')
    response.write('<head><style> p { color: red;font-size: 18px;font-weight: bold;font-style: italic; } </style></head>')
    // 结束响应
    response.end('<p>努力生活！加油!</p>')
}).listen(3031, ()=>{ console.log('app started at port 3031...') })

// 引入 mongodb 模块
const { MongoClient } = require('mongodb')
// 定义数据库连接的地址
const url = 'mongodb://127.0.0.1:27017'
// 定义要操作的数据库
const dbName = 'xiaogui'
// 实例化 MongoClient 对象，传入数据库连接地址
const client = new MongoClient(url, { useUnifiedTopology: true } )
// 连接数据库
client.connect((err)=>{
    if (err) {
        console.log('数据连接失败:' + err)
        return
    }
    console.log('数据库连接成功!')
    const db = client.db(dbName)

    /*
    // 1、查找数据
    db.collection('user').find({}).toArray((err, data)=>{
        if (err) {
            console.log('查找数据失败:' + err)
            return
        }
        console.log(data)
        // 操作数据库完毕时一定要关闭数据库连接
        client.close()
    })

    // 2、增加一条数据
    db.collection('user').insertOne({name:'李四', age: 20}, (err, result)=>{
        if (err) {
            console.log('增加数据失败:' + err)
            return
        }
        console.log('增加一条数据成功!')
        console.log(result.insertedId)
        // 操作数据库完毕时一定要关闭数据库连接
        client.close()
    })

    // 3、增加多条数据
    db.collection('user').insertMany([{name:'王五', age: 16}, {name:'王麻子', age: 36}, {name: '赵四', age: 28}], (err, result)=>{
        if (err) {
            console.log('增加多条数据失败:' + err)
            return
        }
        console.log('增加多条数据成功!')
        console.log(result)
        // 操作数据库完毕时一定要关闭数据库连接
    })

    // 4、更新数据
    db.collection('user').updateOne({name:'zhangsan'}, {$set:{name:'张三'}}, (err, result)=>{
        if (err) {
            console.log('更新数据失败:' + err)
            return
        }
        console.log('更新数据成功!')
        console.log(result)
        // 数据库操作完毕时一定要关闭数据库连接
        client.close()
    })

    // 5、更新多条数据
    db.collection('user').updateMany({name:'李四'}, {$set:{name:'李思雨'}}, (err, result)=>{
        if (err) {
            console.log('更新多条数据失败:' + err)
            return
        }
        console.log('更新多条数据成功!')
        console.log(result)
        // 数据库操作完毕时一定要关闭数据库连接
        client.close()
    })

    // 6、删除一条数据
    db.collection('user').deleteOne({name:'李思雨'}, (err, result)=>{
        if (err) {
            console.log('删除数据失败:' + err)
            return
        }
        console.log('删除数据成功!')
        console.log(result)
        // 操作数据库完毕时一定要记得关闭数据库
        client.close()
    })

    // 7、删除多条数据
    db.collection('user').deleteMany({name:'李思雨'}, (err, result)=>{
        if (err) {
            console.log('删除多条数据失败:' + err)
            return
        }
        console.log('删除多条数据成功')
        console.log(result)
        // 操作数据库完毕时一定要记得关闭数据库连接
        client.close()
    })

    */

    
})
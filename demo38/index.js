// 引入 mongodb 模块 
const MongoClient = require('mongodb').MongoClient
// 数据库地址
const dbUrl = 'mongodb://127.0.0.1:27017/'
// 数据库名称
const dbName = 'finghting'
// 连接数据库
// console.time('start')
// MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client)=>{
//     if (err) {
//         console.log('数据库连接失败:' + err)
//         return
//     }
//     console.log('数据库连接成功')
//     const db = client.db(dbName)
//     // 查找数据
//     db.collection('user').find({}).toArray((err, docs)=>{
//         // 操作数据完毕的时候关闭数据库
//         client.close()
//         console.timeEnd('start')
//         if (err) {
//             console.log('查找数据失败:' + err)
//             return
//         }
//         console.log(docs)
//     })
// })

// 连接数据库
console.time('start')
MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client)=>{
    if (err) {
        console.log('数据库连接失败:' + err)
        return
    }
    console.log('数据库连接成功')
    const db = client.db(dbName)
    // 增加数据
    db.collection('user').insertOne({name: '刘少奇1', age: 88, sex: '男'}, (err, res)=>{
        if (err) {
            console.log('增加数据失败:' + err)
            return
        }
        console.log('增加数据成功')
        client.close()
        console.timeEnd('start')
    })
})

console.time('insert')
MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client)=>{
    if (err) {
        console.log('数据库连接失败:' + err)
        return
    }
    console.log('数据库连接成功')
    const db = client.db(dbName)
    // 增加数据
    db.collection('user').insertOne({name: '刘少奇2', age: 88, sex: '男'}, (err, res)=>{
        if (err) {
            console.log('增加数据失败:' + err)
            return
        }
        console.log('增加数据成功')
        client.close()
        console.timeEnd('insert')
    })
})
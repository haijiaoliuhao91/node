// 引入 mongodb 模块
const MongoClient = require('mongodb').MongoClient
// 引入 config 模块
const Config = require('./config')

class Db {
    // 解决多次实例化的问题
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db()
        }
        return Db.instance
    }
    constructor() {
        // 存放 db 对象
        this.dbClient = ''
        // 实例化的时候就连接数据库
        // this.connect()
    }

    // 连接数据库
    connect() {
        return new Promise((resolve, reject) => {
            // 解决数据库多次连接的问题
            if (!this.dbClient) {
                MongoClient.connect(Config.dbUrl, { useUnifiedTopology: true }, (err, client) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    console.log('数据库连接成功')
                    this.dbClient = client.db(Config.dbName)
                    resolve(this.dbClient)
                })
            } else {
                console.log('不需要连接数据库')
                resolve(this.dbClient)
            }
        })
    }
    // 查找数据
    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).find(json).toArray((err, res) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(res)
                })
            })
        })
    }
    // 添加数据
    insert() {

    }
    // 删除数据
    remove() {

    }
}


var myDb = Db.getInstance()
setTimeout(() => {
    console.time('start')
    myDb.find('banner', {}).then(data => {
        console.timeEnd('start')
    }, err => {
        console.log('查找数据失败:' + err)
    })
}, 100)

setTimeout(() => {
    console.time('insert')
    myDb.find('banner', {}).then(data => {
        console.timeEnd('insert')
    }, err => {
        console.log('查找数据失败:' + err)
    })
}, 2000)

var myDb1 = Db.getInstance()
setTimeout(() => {
    console.time('insert1')
    myDb1.find('banner', {}).then(data => {
        console.timeEnd('insert1')
    }, err => {
        console.log('查找数据失败:' + err)
    })
}, 3000)

setTimeout(() => {
    console.time('insert2')
    myDb1.find('banner', {}).then(data => {
        console.timeEnd('insert2')
    }, err => {
        console.log('查找数据失败:' + err)
    })
}, 4000)
// 引入 mongodb 模块
const MongoClient = require('mongodb').MongoClient
// 引入 config 模块
const Config = require('./config')

class Db {
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db()
        }
        return Db.instance
    }

    constructor() {
        this.dbClient = ''
        this.connect()
    }

    // 连接数据库
    connect() {
        return new Promise((resolve, reject) => {
            if (!this.dbClient) {
                MongoClient.connect(Config.dbUrl, { useUnifiedTopology: true }, (err, client) => {
                    if (err) {
                        console.log('数据库连接失败:' + err)
                        return
                    }
                    console.log('数据库连接成功')
                    this.dbClient = client.db(Config.dbName)
                    resolve(this.dbClient)
                })
            } else {
                resolve(this.dbClient)
            }
        })
    }

    // 查找数据
    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).find(json).toArray((err, docs) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(docs)
                })
            })
            })
    }

    // 更新数据
    update(collectionName, filter, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).updateOne(filter, {$set:json}, (err, res) => {
                    if (err) {
                        reject(err)
                        console.log('更新数据失败:' + err)
                        return
                    }
                    console.log('更新数据成功')
                    resolve(res)
                })
            })
        })
    }

    // 插入数据
    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).insertOne(json, (err, res) => {
                    if (err) {
                        console.log('插入数据失败:' + err)
                        reject(err)
                        return
                    }
                    console.log('插入数据成功')
                    resolve(res)
                })
            })
        })
    }

    // 删除数据
    remove(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).deleteOne(json, (err, res) => {
                    if (err) {
                        console.log('删除数据失败:' + err)
                        reject(err)
                        return
                    }
                    console.log('删除数据成功')
                    resolve(res)
                })
            })
        })
    }

}

// 模块导出
module.exports = Db.getInstance()
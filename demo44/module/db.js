// 引入 mongodb 模块
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

// 引入 config 模块
const CONFIG = require('./config')

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
                MongoClient.connect(CONFIG.dbUrl, { useUnifiedTopology: true }, (err, client) => {
                    if (err) {
                        console.log('数据库连接失败:' + err)
                        reject(err)
                        return
                    }
                    console.log('数据库连接成功')
                    this.dbClient = client.db(CONFIG.dbName)
                    resolve(this.dbClient)
                })
            } else {
                resolve(this.dbClient)
            }
        })
    }

    // 查找数据
    find(collectionName, filter) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).find(filter).toArray((err, docs) => {
                    if (err) {
                        console.log('查找数据失败:' + err)
                        reject(err)
                        return
                    }
                    console.log('查找数据成功')
                    resolve(docs)
                })
            })
        })
    }

    // 更新数据
    update(collectionName, filter, update) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).updateOne(filter, { $set: update }, (err, res) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(res)
                })
            })
        })
    }

    // 增加数据
    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).insertOne(json, (err, res) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(res)
                })
            })
        })
    }

    // 删除数据
    delete(collectionName, filter) {
        return new Promise((resolve, reject) => {
            this.connect().then(db => {
                db.collection(collectionName).deleteOne(filter, (err, res) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(res)
                })
            })
        })
    }

    // 获取 ObjectID 对象
    getObjectId(id) {
        return new ObjectID(id)
    }
}

// 模块导出
module.exports = Db.getInstance()
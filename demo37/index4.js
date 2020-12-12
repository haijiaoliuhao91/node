class DB {
    static getInstance() {
        if (!DB.instance) {
            DB.instance = new DB()
        }
        return DB.instance
    }

    constructor() {
        console.log('实例化的时候会触发构造函数')
        this.connect()
    }

    connect() {
        console.log('连接数据库')
    }

    find() {
        console.log('查询数据库')
    }
}

var myDb1 = DB.getInstance()
var myDb2 = DB.getInstance()
var myDb3 = DB.getInstance()
myDb1.find()
myDb2.find()

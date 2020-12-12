// 引入 fs 模块
const fs = require('fs')

exports.getMime = function (extname) {
    switch (extname) {
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        default:
            return 'text/html'
    }
}

exports.getFileMime = function (extname) {
    // 读取文件
    return new Promise((resolve, reject)=>{
        fs.readFile('./mime.json', (err, data)=>{
            if (err) {
                console.log('文件读取失败:' + err)
                reject(err)
            }
            let mime = JSON.parse(data.toString())
            console.log(mime[extname])
            resolve(mime[extname])
        })
    })
}

exports.getFileMimeSync = function (extname) {
    const data = fs.readFileSync('./mime.json')
    const mime = JSON.parse(data.toString())
    return mime[extname]
}
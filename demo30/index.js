/*
function getData(cb) {
    setTimeout(()=>{
        var name = '张三'
        cb(name)
    }, 3000)
}

getData((data)=>{
    console.log(data)
})

async function getData() {
    return '这是一个 async 函数'
}

let p = getData()
p.then(res=>{
    console.log(res)
})

var flag = false
function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (flag) {
                resolve('请求成功的回调')
            } else {
                reject('请求失败的回调')
            }
        }, 5000)
    })
}

let p = getData()
p.then(res=>{
    console.log(res)
}, err=>{
    console.log(err)
})

function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('要努力吖!')
        },5000)
    })
}

async function test() {
    let data = await getData()
    console.log(data)
}

test()

*/

// 引入 http 模块
const http = require('http')
// 创建 http 服务
http.createServer((req, res)=>{
    // 设置响应头
    // 状态码是 200 文本类型是 html 字符集是 utf-8
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    res.write('今天要努力学习吖！')
    res.write('<head><style> p { color: red;font-size: 18px;font-weight: bold; } </style></head>')
    // 结束响应
    res.end('<p>为什么不努力呢！</p>')
    // 设置监听
}).listen(3031, ()=>{ console.log('app started at port 3031...') })
// 引入 http 模块
const http = require('http')

// 第一种导入方式
// const axios = require('./node_modules/axios/index.js')
// console.log(axios)
// axios.get()
// axios.post()
// axios.head()

// 第二种导入方式
// const axios = require('axios/index')
// console.log(axios)
// axios.get()
// axios.post()
// axios.head()

// 第三种导入方式(放在node_modules文件夹中的模块，在引入时不需要填写完整的相对路径)
const axios = require('axios')
console.log(axios)

// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('一定要努力学习吖!')
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031, ()=>{ console.log('app started at port 3031...') })
// 引入http模块
var http = require('http');
// 创建http服务
http.createServer(function (request, response) {
  // 设置响应头信息
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // 页面输出内容并结束响应
  response.end('Hello World!');
  // listen 监听端口
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
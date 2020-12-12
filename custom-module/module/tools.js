function formatApi(api) {
    return "https://www.baidu.com/" + api
}

function get() {
    console.log('获取被访问URI指定的资源')
}
 
exports.formatApi = formatApi
exports.get = get
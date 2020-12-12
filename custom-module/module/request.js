var obj = {
    get: function () {
        console.log('获取被访问URI指定的资源')
    },

    post: function () {
        console.log('提交数据到指定的资源进行处理')
    }
}

// exports.request = obj

module.exports = obj
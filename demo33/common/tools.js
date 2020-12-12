function getPostData(ctx) {
    return new Promise((resolve, reject)=>{
        try {
            let postData = ''
            ctx.req.on('data', (data)=>{
                postData += data
            })
            ctx.req.on('end', ()=>{
                resolve(postData)
            })
        } catch (error) {
            reject(error)
        }
    })
}

exports.getPostData = getPostData
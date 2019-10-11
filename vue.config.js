module.exports = {
    devServer: {
        port: 8099,
        proxy: {
            '/api': {
                target: 'https://bi.doqtech.com.cn/open/public/statement/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}

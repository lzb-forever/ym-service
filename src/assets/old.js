module.exports = {
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8099,
        https: false,
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

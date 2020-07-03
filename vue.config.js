const path = require('path');
module.exports = {
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    //css loader
    css: {
        loaderOptions: {
            sass: {
                prependData:
                    `@import "packages/assets/style/common/variables.scss";
                    @import "packages/assets/style/common/common.scss";
                    `
            }
        }
    },
    // 修改 pages 入口
    pages: {
        index: {
            entry: 'examples/main.js', // 入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    // 扩展 webpack 配置
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))

        // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })

    //    配置字体图标
        config.module
            .rule("iconfont")
            .test(/\.(svg|eot|ttf|woff|woff2)$/,)
            .use("file-loader")
            .loader("file-loader")
            .options({
                limit:10000,
                name:"assets/iconfont/[name].[ext]"
            })
    }
}

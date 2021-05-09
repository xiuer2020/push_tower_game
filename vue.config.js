const path = require("path");
console.log(path.resolve(__dirname, "src/assets/less/goobal.less"));
module.exports = {
    publicPath: "./",

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/assets/less/goobal.less")]
        }
    },
    // 全局注册less
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                // lessOptions: {
                modifyVars: {

                },
                // },
            },
        },
    },
};













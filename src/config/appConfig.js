let appConfig = {
    name:"",//项目名称
    port:"4123",//调试端口名称,
    host:"127.0.0.1",//端口名称
    environment:"test",//开发环境配置（dev：开发模式，test：测试环境，product：生成环境）
    requestUrl:'',//请求后台数据的服务器地址
    imgUrl:"",//图片路径
    productionSourceMap:false,//去掉打包生成的map文件
    proxyConfig:{//跨域代理配置
        '/api': {
            target: 'http://localhost:7001',//后端接口地址
            changeOrigin: true,//是否允许跨越
            pathRewrite: {
                '^/api': '/api',//重写,
            }
        }
    }
};
if(appConfig.environment === "dev"){
    appConfig.requestUrl = "1"
}else if(appConfig.environment === "test"){
    appConfig.requestUrl = "2"
}else if(appConfig.environment === "product"){
    appConfig.requestUrl = "3"
};
module.exports = appConfig;
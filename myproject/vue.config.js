module.exports={
  chainWebpack:config=>{
     //删除编译后的独立js文件上的预获取操作
    config.plugins.delete("prefetch")
  },
  //跨域
  devServer:{
    proxy:{
      '/':{
        target:`http://localhost:5050`,
        changeOrigin:true
      }
    }
  }
}
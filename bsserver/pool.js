//引入mysql模块
const mysql=require('mysql');
//创建连接池
const pool=mysql.createPool({
	// host:'127.0.0.1',  //MySQL服务器地址
	// port:'3306',			//MySQL服务器端口号
	// user:'root',			//数据库用户的用户名
	// password:'mysqlpwd',			//数据库用户密码
	// database:'bs',		//数据库名字
	// connectionLimit:20,	//最大连接数
	// charset:'utf8'		//数据库服务器的编码方式
	 // 新浪云上的配置参数
	 host     : process.env.MYSQL_HOST,
	 port     : process.env.MYSQL_PORT,
	 user     : process.env.ACCESSKEY,
	 password : process.env.SECRETKEY,
	 database : 'app_' + process.env.APPNAME

	//  connectionLimit: 5
})
module.exports=pool;

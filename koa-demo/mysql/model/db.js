const mysql = require('mysql')

// 创建数据池
const pool = mysql.createPool({
    host: '127.0.0.1', // 数据库地址
    user: 'root', // 数据库用户
    password: 'rootroot', // 数据库密码
    database: 'gp16' // 选中数据库
})
module.exports = (sql,params) => {
    return new Promise((resolve, reject) => {
        // 在数据池中进行会话操作
        pool.getConnection(function (err, connection) {
            connection.query(sql,params, (error, results, fields) => {
                if(error){
                    reject()
                }else{
                    resolve(results)
                }
                // 结束会话
                connection.release();
            })
        })
    })
}
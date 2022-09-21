const mysql = require('mysql2')

// Strictly for checking whether the connection has been established, use "mysql_connection" for actual usage
module.exports = async () => {
    try {
        const connection = await mysql.createConnection(
            {
                host: process.env.MYSQL_HOST, 
                user: process.env.MYSQL_ROOT, 
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE, 
                port: process.env.MYSQL_PORT}
            )
        console.log(`MYSQL connection established`);
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
}
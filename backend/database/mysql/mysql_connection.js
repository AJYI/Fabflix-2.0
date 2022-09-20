const mysql = require('mysql2')

module.exports = async () => {
    const connection = await mysql.createConnection(
        {
            host: process.env.MYSQL_HOST, 
            user: process.env.MYSQL_ROOT, 
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE, 
            port: process.env.MYSQL_PORT}
        )
    console.log(`The database ${process.env.MYSQL_DATABASE} Connected`);
    return connection
}
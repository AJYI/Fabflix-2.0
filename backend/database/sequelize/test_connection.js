const { Sequelize } = require('sequelize');

module.exports = async () => {
    try {
        const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_ROOT, process.env.MYSQL_PASSWORD, {
            host: process.env.MYSQL_HOST,
            dialect: 'mysql'
          });
          await sequelize.authenticate()
        console.log('ORM Connection Established!')
    
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
}

const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(
    'urbain',
    'root',
    null,
    {host: 'localhost', dialect: 'mysql'}
)


module.exports = sequelize
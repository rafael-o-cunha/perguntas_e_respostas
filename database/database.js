//const config = require('config');
const Sequelize = require('sequelize');

// const conn = new Sequelize(
//     config.get('param.database.database'),
//     config.get('param.database.user'),
//     config.get('param.database.password'),
//     {
//         host: config.get('param.database.host'),
//         port: config.get('param.database.port'),
//         dialect: 'postgres'
//     }
// );

const conn = new Sequelize(
    'db_perguntas',
    'rafael',
    '123456',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);

 module.exports = conn;

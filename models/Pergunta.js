const Sequelize = require('sequelize');
const conn = require('../database/database');

const Pergunta = conn.define('tb_pergunta', {
    id_pergunta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}); 

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;
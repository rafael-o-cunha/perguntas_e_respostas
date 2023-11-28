const Sequelize = require('sequelize');
const conn = require('../database/database');

const Pergunta = conn.define('tb_pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNULL: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNULL: false
    }
}); 

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;
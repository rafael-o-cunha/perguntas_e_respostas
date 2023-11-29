const Sequelize = require('sequelize');
const conn = require('../database/database');
const Pergunta = require('./Pergunta');

const Resposta = conn.define('tb_resposta', {
    id_resposta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    resposta: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}); 

Pergunta.hasMany(Resposta, {foreignKey: 'id_pergunta'})
Resposta.belongsTo(Pergunta, {foreignKey: 'id_pergunta'})

Resposta.sync({force: false}).then(() => {});

module.exports = Resposta;
//imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const conn = require('./database/database');
const Pergunta = require('./models/Pergunta');

//database
conn.authenticate().then(()=> {
    console.log("conexao realizada com sucesso!")
}).catch((e)=> {
    console.log("falha na conexão.")
    console.log(e.message)
})

//settings
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//routes
//home
app.get('/', (req, res) => {
    Pergunta.findAll({raw: true, order:[['id', 'DESC']]}).then(perguntas => {
        res.render('index', {
            perguntas: perguntas
        });
    });
});

//perguntar
app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

//salvar-pergunta
app.post('/salvarpergunta', (req, res) => {
    Pergunta.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }).then(() => {
        res.redirect('/')
    });
    //res.send(`Forumulario recebido! titulo: ${titulo}, Descrição: ${descricao}`)
})

//server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
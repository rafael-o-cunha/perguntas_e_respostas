//imports
const express = require('express');
const app = express();
const ejs = require('ejs');

//settings
app.set('view engine', 'ejs');
app.use(express.static('public'));

//routes
//home
app.get('/', (req, res) => {
    res.render('index');
});

//perguntar
app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

//salvar-pergunta


//server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
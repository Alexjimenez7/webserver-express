const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //     //res.send('Hello World');
    //     let salida = {
    //         nombre: 'Alex',
    //         edad: 44,
    //         url: req.url
    //     }
    //     res.send(salida);
    res.render('home', {
        nombre: 'alex jimenez'
    });
});


app.get('/about', (req, res) => {
    //res.send('Hola Data');
    res.render('about');
});

//app.listen(3000);

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
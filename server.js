const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
    //Express hbs
hbs.registerPartials(__dirname + '/views/parcials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    //res.send('Hola mundo')
    let salida = {
        nombre: 'Andres',
        adad: 32,
        url: req.url
    }
    res.render('home', { nombre: 'andres' })
})
app.get('/about', (req, res) => {
    //res.send('Hola mundo')
    let salida = {
        nombre: 'Andres',
        adad: 32,
        url: req.url
    }
    res.render('about', { nombre: 'Andres' })
})

app.get('/data', (req, res) => {
    res.send('Hola data')
})
app.listen(port, () => {
    console.log(`Escuchando petticiones por el puerto ${port}`);
})
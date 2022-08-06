const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/listacc', (req, res) => {

    res.render('listacc')
})
app.get('/chart', (req, res) => {
        res.render('chart')
    })
    // app.get('/404', (req, res) => {
    //     res.render('404', { layout: '' })
    // })

app.get('/404', (req, res) => {
    res.render('404', { layout: '' })
})

app.get('/selfhome', (req, res) => {
    res.render('selfhome')
})

// app.get('/login', (req, res) => {
//   res.render('login', {layout: ''})
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
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
    res.render('user/home')
})

app.get('/selfhome', (req, res) => {
    res.render('user/selfhome')
})

app.use('/404', (req, res) => {
    res.render('user/404', { layout: '' })
})

app.get('/listacc', (req, res) => {

    res.render('admin/listacc')
})

app.get('/chart', (req, res) => {
        res.render('admin/chart')
})

app.get('/reportPost', (req, res) => {
    res.render('admin/reportPost')
})

app.get('/reportWriter', (req, res) => {
    res.render('admin/reportWriter')
})

app.get('/listUser', (req, res) => {
    res.render('admin/listUser')
})

// app.get('/login', (req, res) => {
//   res.render('login', {layout: ''})
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
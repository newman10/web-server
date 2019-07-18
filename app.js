const path = require('path')
const express = require('express')
const hbs = require('hbs') 

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views  location 
app.set('view engine', 'hbs')
app.det('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
      title: 'Weather',
      name: 'Andrew Mead'
  })

})

app.get('/about', (req, res) => {
  res.render('about',{
    title: 'About Me',
    name: 'Andrew maid'
  })
})

app.get('/help', (reg, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Andrew Mead'
  })
})


app.get('/weather', (req, res) => { 
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'

  })
    
})

app.get('/help/*', (reg, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Help article not found.'
  })
})

app.get('/products', (req, res) => {
res.send({
  products: []
})

})


app.listen(3000, () => {
     console.log('server is up on port 3000.')
})
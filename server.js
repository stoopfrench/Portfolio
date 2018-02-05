const express = require('express')
const HTTP = require('http')
const HTTPS = require('https')
const multer = require('multer')
const bodyParser = require('body-parser')
const fs = require('fs')

const request = require('request')
const secrets = require('./secrets.js')

const app = express()
const upload = multer()

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Portfolio -----------------------------------------------------

app.get('/', function(req, res) {

    res.sendFile('./public/html/index.html', { root: './' })
})

// Dangerous Asteroids -------------------------------------------

app.get('/asteroids', function(req, res) {

    res.sendFile('./public/html/asteroids.html', { root: './' })

    console.log('sent index.html')

})

app.get('/asteroids/top-25', function(req, res) {

    res.sendFile('./public/html/sentry.html', { root: './' })

    console.log('sent sentry.html')
})

// Rock, Paper, Scissors -----------------------------------------

app.get('/rps', function(req, res) {

    res.sendFile('./public/html/rps.html', {root: './'})

    console.log('sent rps.html')
})

// Calculator ----------------------------------------------------

app.get('/calc', function(req, res) {

    res.sendFile('./public/html/calc.html', {root: './'})

    console.log('sent calc.html')
})


// NEO API ==============================================================================

var key = secrets.nasaKey

app.get('/search', function(req, res) {


    var nasaAPI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.start_date}&end_date=${req.query.start_date}&api_key=${key}`
    request(nasaAPI, function(err, response, dataFromServer) {

        res.send(dataFromServer)

        console.log('single-date sent')
    })
})

app.get('/range_search', function(req, res) {

    var nasaAPI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.start_date}&end_date=${req.query.end_date}&api_key=${key}`
    request(nasaAPI, function(err, response, dataFromServer) {

        res.send(dataFromServer)

        console.log('range-date sent')
    })
})


// SENTRY API ===========================================================================


app.get('/sentry_data', function(req, res) {

    var sentryAPI = `https://ssd-api.jpl.nasa.gov/sentry.api`
    request(sentryAPI, function(err, response, sentryDataFromServer) {

        res.send(sentryDataFromServer)

        console.log('sentry data sent')
    })
})

// Messages =============================================================================
app.post('/messages', upload.single(), function(req, res) {
    const date = new Date
    const message = {
        Date: date.toLocaleString('en-US'),
        Name: req.body.name,
        Email: req.body.email,
        Message: req.body.message
    }
    var text = JSON.stringify(message) + '\n'
    fs.appendFile('Messages.txt', text, (err) => {
        if (err) throw err
        // console.log('saved message: ',message)
    })
    res.status(201).send(message)    
})


//==================================================

try {
    var httpsConfig = {

        key: fs.readFileSync('/etc/letsencrypt/live/iamaaronallen.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/iamaaronallen.com/fullchain.pem'),
    }

    var httpsServer = HTTPS.createServer(httpsConfig, app)

    httpsServer.listen(443)

    var httpApp = express()

    httpApp.use(function(req, res, next){

        res.redirect('https://iamaaronallen.com' + req.url)
    })

    httpApp.listen(80)
}
catch(e){

    console.log(e)

    console.log('could not start HTTPS server')

    var httpServer = HTTP.createServer(app)

    httpServer.listen(80)
}

/* var port = 8080

var counter

app.listen(port, function() {

    console.log('portfolio running on ', port)
}) */
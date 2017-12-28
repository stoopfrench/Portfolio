const express = require('express')
const HTTP = require('http')
const HTTPS = require('https')
const fs = require('fs')

const app = express()

app.use(express.static('./public'))

app.get('/', function(req, res){

	res.sendFile('./public/html/index.html', {root: './'})
})


//==================================================

// try {
//     var httpsConfig = {
//         key: fs.readFileSync('/etc/letsencrypt/live/iamaaronallen.com/privkey.pem'),
//         cert: fs.readFileSync('/etc/letsencrypt/live/iamaaronallen.com/fullchain.pem'),
//     }

//     var httpsServer = HTTPS.createServer(httpsConfig, app)
//     httpsServer.listen(443)
//     var httpApp = express()
//     httpApp.use(function(req, res, next){
//         res.redirect('https://iamaaronallen.com' + req.url)
//     })
//     httpApp.listen(80)
// }
// catch(e){
//     console.log(e)
//     console.log('could not start HTTPS server')
//     var httpServer = HTTP.createServer(app)
//     httpServer.listen(80)
// }

var port = 8080

var counter

app.listen(port, function(){

	console.log('portfolio running on ', port)
})



// var httpServer = HTTP.createServer(app, function(req, res){

// 	counter++

// 	console.log('counter ', counter)

// }).listen(port)
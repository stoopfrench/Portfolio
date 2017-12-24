const express = require('express')
const HTTP = require('http')

const app = express()

app.use(express.static('./public'))

app.get('/', function(req, res){

	res.sendFile('./public/html/index.html', {root: './'})
})


//==================================================

let port = 8080

app.listen(port, function(){

	console.log('portfolio running on ', port)
})

// let httpServer = HTTP.createServer(function(req, res){

// 	counter++

// 	console.log('counter ', counter)

// }).listen(port)
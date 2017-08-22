const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let bookRouter = require('./router/book-router')

app.use('/books', bookRouter)


app.listen(3003, function(req,res){
    console.log("menyabung ke express, port 3003")
})

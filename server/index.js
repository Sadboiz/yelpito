const express = require('express')
const app = express()
const db = require('./db')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  })

db.sync()
  .then(() => {
    console.log('db synced')
    
    app.listen(port, function () {
      console.log(`Now listening on port ${port}`);
    })
  })
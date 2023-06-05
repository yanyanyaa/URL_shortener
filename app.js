const express = require('express')
const app = express()
const port = 3000
const SERVER = ` http://localhost:${port}/`
const exphbs = require('express-handlebars')

const Url = require('./models/url') //schema
const shortCode = require('./shortener') //五亂碼

const mongoose = require('mongoose')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 首頁路由設定
app.get('/', (req, res) => {
  res.render('index')
})

// 產生短網址(不重複產生)
app.post('/', (req, res) => {
  if (!req.body.originalURL) return res.redirect("/")
  const originalURL = req.body.originalURL
  Url.findOne({ originalURL })
    .then(data => {
      if (data) {
        res.render('index', { originalURL, shortURL: data.shortURL })
      } else {
        const shortURL = SERVER + shortCode()
        Url.create({ originalURL, shortURL })
          .then(newData => {
            res.render('index', { originalURL, shortURL })
          })
          .catch(err => console.log('err: newData'))
      }
    })
    .catch(err => console.log('err: data'))
  })


// 將短網址連至原網址
app.get('/:shortCode', (req, res) => {
  const shortCode = req.params.shortCode
  const shortURL = SERVER + shortCode
  Url.findOne({ shortURL })
    .then(data => {
      res.redirect(data.originalURL)
    })
    .catch(err => console.log('err'))
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})

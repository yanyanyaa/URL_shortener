const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlshortenerSchema = new Schema({
  originalURL: {
    type: String,
    required: true
  }, 
  shortURL: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('urlshortener', urlshortenerSchema)
const express = require('express')
const app = express()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

let data = {}
const DATA_FILE = 'data.json'

if (fs.existsSync(DATA_FILE)) {
  data = JSON.parse(fs.readFileSync(DATA_FILE))
}

app.get('/', (req, res) => {
  const { url } = req.query
  if (!url) return res.send('Provide a URL using ?url=')
  const id = uuidv4().slice(0, 8)
  data[id] = url
  fs.writeFileSync(DATA_FILE, JSON.stringify(data))
  res.send(`${req.protocol}://${req.get('host')}?id=${id}`)
})

app.get('/data', (req, res) => {
  res.json(data)
})

app.get('/', (req, res) => {
  const { id, url } = req.query
  if (url) {
    const shortId = uuidv4().slice(0, 8)
    data[shortId] = url
    fs.writeFileSync(DATA_FILE, JSON.stringify(data))
    return res.send(`${req.protocol}://${req.get('host')}?id=${shortId}`)
  } else if (id) {
    if (data[id]) return res.redirect(data[id])
    return res.status(404).send('Invalid ID')
  }
  res.send('Use ?url= to shorten or ?id= to redirect')
})

module.exports = app

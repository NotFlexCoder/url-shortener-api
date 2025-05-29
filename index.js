const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

let data = {}

app.get('/', (req, res) => {
  const { id, url } = req.query

  if (url) {
    const shortId = uuidv4().slice(0, 8)
    data[shortId] = url
    return res.json({
      status: 'success',
      message: 'URL shortened successfully',
      short_url: `${req.protocol}://${req.get('host')}?id=${shortId}`,
      id: shortId,
      original_url: url
    })
  }

  if (id) {
    if (data[id]) {
      return res.json({
        status: 'success',
        message: 'Redirecting to original URL',
        original_url: data[id]
      })
    } else {
      return res.status(404).json({
        status: 'error',
        message: 'Invalid or expired ID'
      })
    }
  }

  res.json({
    status: 'error',
    message: 'Use ?url= to shorten or ?id= to retrieve original URL'
  })
})

app.get('/data', (req, res) => {
  res.json({
    status: 'success',
    urls: data
  })
})

module.exports = app

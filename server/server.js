const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const webpush = require('web-push')
var cors = require('cors')
require('dotenv').config()

// middlewares
app.use(bodyParser.json())
app.use(cors())

// webpush.setGCMAPIKey('<Your GCM API Key Here>') -- have not been used here

// these below keys have been generated via web-pushd CLI and saved as environment variables
// environment variables can be created in different ways
// like - create a .env file where key value pairs reside
// like - export from terminal
// like - create via your specific programming language

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  process.env.PublicKey,
  process.env.PrivateKey
)

// console.log('public key ', process.env.PublicKey)
// console.log('private key ', process.env.PrivateKey)

app.get('/', (req, res) => console.log('Hey There !'))

app.get('/test', (req, res) => {
  console.log('/test was hit')
  res.json({ greet: 'how you doin' })
})

app.post('/subscribe', async (req, res) => {
  let subscription = req.body
  console.log('/subsribe was hit')
  let payload = JSON.stringify({ titile: 'Notification Payload !' })
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.log('error happened while sending notification', err))
})

app.listen(4000, () => console.log('Example App Listening on Port 4000!'))

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const db = require('./db')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   console.log(`Welcome to the home directory`)
//   res.send('this is the response in the / route')
// })

// app.post('/', (req, res) => {
//   res.send('this is the response in the / route of the post command')
// })

// app.delete('/', (req, res) => {
//   res.send('this is the response in the / route of the delete command')
// })

// app.put('/', (req, res) => {
//   res.send('this is the response in the / route of the put command')
// })

// app.get(
//   '/middleware',
//   (req, res, next) => {
//     console.log('this is the console log for middleware route')
//     next()
//   },
//   (req, res) => {
//     res.send('response completed to middleware')
//   }
// )

// app.get('/hello', (req, res) => {
//   console.log("You're in the /hello route handler!")
//   res.send('Howdy')
// })

// app.get('*', (req, res) => {
//   res.send('404 Not Found')
// })

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

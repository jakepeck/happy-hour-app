const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
  console.log(`Welcome to the home directory`)
  res.send('this is the response in the / route')
})

app.post('/', (req, res) => {
  res.send('this is the response in the / route of the post command')
})

app.delete('/', (req, res) => {
  res.send('this is the response in the / route of the delete command')
})

app.put('/', (req, res) => {
  res.send('this is the response in the / route of the put command')
})

app.get('/hello', (req, res) => {
  console.log("You're in the /hello route handler!")
  res.send('Howdy')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

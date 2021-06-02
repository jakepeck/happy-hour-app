const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/happyhours/all', controllers.getAllHappyHours)

router.post('/happyhours/add/:id', controllers.CreateHappyHourDeal)

router.post('/happyhours/:id/adddeal', controllers.CreateHappyHourDeal)

router.get('/happyhours/:id', controllers.getHappyHourById)

router.get('/deals/:id', controllers.getHappyHourDealById)

router.post('/happyhours/:id', controllers.addDealByHappyHourId)

router.delete('/happyhours/:id', controllers.deleteHappyHour)

router.post('/happyhours', controllers.createHappyHour)

router.get('/', (req, res) => {
  console.log(`Welcome to the home directory`)
  res.send('this is the response in the / route')
})

router.post('/', (req, res) => {
  res.send('this is the response in the / route of the post command')
})

router.delete('/', (req, res) => {
  res.send('this is the response in the / route of the delete command')
})

router.put('/', (req, res) => {
  res.send('this is the response in the / route of the put command')
})

router.get(
  '/middleware',
  (req, res, next) => {
    console.log('this is the console log for middleware route')
    next()
  },
  (req, res) => {
    res.send('response completed to middleware')
  }
)

router.get('*', (req, res) => {
  res.send('404 Not Found')
})

module.exports = router

const HappyHour = require('../models/happyhour')
const HappyHourDeal = require('../models/happyhourdeal')

const createHappyHour = async (req, res) => {
  try {
    const happyHour = await new HappyHour(req.body)
    await happyHour.save()
    return res.status(201).json({ happyHour })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createHappyHourDeal = async (req, res) => {
  try {
    const happyHourDeal = await new HappyHourDeal(req.body)
    await happyHourDeal.save()
    return res.status(201).json({ happyHourDeal })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllHappyHours = async (req, res) => {
  try {
    const happyHours = await HappyHour.find({})
    return res.status(200).json({ happyHours })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createHappyHour,
  createHappyHourDeal,
  getAllHappyHours
}

// const HappyHour = require('../models/index')
// const HappyHourDeal = require('../models/index')
const { HappyHour, HappyHourDeal } = require('../models')

const createHappyHour = async (req, res) => {
  try {
    const happyhour = await new HappyHour(req.body)
    await happyhour.save()
    return res.status(201).json({ happyhour })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createHappyHourDeal = async (req, res) => {
  try {
    const happyhourdeal = await new HappyHourDeal(req.body)
    await happyhourdeal.save()
    return res.status(201).json({ happyhourDeal })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllHappyHours = async (req, res) => {
  try {
    const happyhours = await HappyHour.find()
    return res.status(200).json({ happyhours })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteHappyHour = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await HappyHour.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Happy hour deleted')
    }
    throw new Error('Happy hour not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateHappyHour = async (req, res) => {
  try {
    const { id } = req.params
    await HappyHour.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, happyhour) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!happyhour) {
          res.status(500).send('Happy hour not found!')
        }
        return res.status(200).json(happyhour)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getHappyHourById = async (req, res) => {
  try {
    const { id } = req.params
    const happyhour = await HappyHour.findById(id)
    if (happyhour) {
      return res.status(200).json({ happyhour })
    }
    return res
      .status(404)
      .send('Happy hour with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createHappyHour,
  createHappyHourDeal,
  getAllHappyHours,
  deleteHappyHour,
  updateHappyHour,
  getHappyHourById
}

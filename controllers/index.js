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

const getAllHappyHourDeals = async (req, res) => {
  try {
    const happyhourdeals = await HappyHourDeal.find()
    return res.status(200).json({ happyhourdeals })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const CreateHappyHourDeal = async (req, res) => {
  console.log(`creating a new model for happy hour deal`)
  //Create the new model
  const happyHourDeal = new HappyHourDeal({
    // grab necessary attributes out of req.body
    description: req.body.description,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    sunday: req.body.sunday,
    monday: req.body.monday,
    tuesday: req.body.tuesday,
    wednesday: req.body.wednesday,
    thursday: req.body.thursday,
    friday: req.body.friday,
    saturday: req.body.saturday,
    happyHour_id: req.params.id
  })
  console.log('calling save on happyhourdeal')
  happyHourDeal.save()
  //Update the parent
  console.log(`id is: ${req.params.id}`)
  const happyHour = await HappyHour.updateOne(
    { _id: req.params.id },
    {
      $push: {
        happyhourdeals: happyHourDeal
      }
    }
  )
  res.send(happyHourDeal)
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

const deleteHappyHourDeal = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await HappyHourDeal.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Happy hour deal deleted')
    }
    throw new Error('Happy hour deal not found')
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

const getHappyHourDealById = async (req, res) => {
  try {
    const { id } = req.params
    const happyhourdeal = await HappyHourDeal.findById(id)
    if (happyhourdeal) {
      return res.status(200).json({ happyhourdeal })
    }
    return res
      .status(404)
      .send('Happy hour deal with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addDealByHappyHourId = async (req, res) => {
  try {
    const { id } = req.params

    const happyhourdeal = await new HappyHourDeal(req.body)
    await happyhourdeal.save()
    // console.log(happyhourdeal)
    // console.log(res._id)
    HappyHour.findOneAndUpdate({ _id: id }, { $push: { deals: res._id } })
    if (happyhourdeal) {
      return res.status(200).json({ happyhourdeal })
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
  getHappyHourDealById,
  getAllHappyHours,
  deleteHappyHour,
  updateHappyHour,
  getHappyHourById,
  addDealByHappyHourId,
  CreateHappyHourDeal,
  getAllHappyHourDeals
}

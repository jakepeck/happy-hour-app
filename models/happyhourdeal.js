const { Schema } = require('mongoose')

const HappyHourDeal = new Schema(
  {
    description: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    price: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = HappyHourDeal

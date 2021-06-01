const { Schema } = require('mongoose')

const HappyHourDeal = new Schema(
  {
    description: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    daysActive: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = HappyHourDeal

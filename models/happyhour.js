const { Schema } = require('mongoose')

const HappyHour = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    deals: { type: Array, required: false }
  },
  { timestamps: true }
)

module.exports = HappyHour

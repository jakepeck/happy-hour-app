const db = require('../db')
const { HappyHour, HappyHourDeal } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const happyHours = [
    {
      name: 'IO Roofscape',
      location: 'Godfrey Hotel 4th floor',
      deals: [
        {
          description: 'Half off all drinks',
          startTime: '7:00',
          endTime: '9:00'
        }
      ]
    },

    {
      name: 'Mother Hubbards',
      location: 'Hubbard St',
      deals: [
        {
          description: 'Jason is giving out free shots',
          startTime: '12:00',
          endTime: '12:00'
        }
      ]
    },

    {
      name: 'Cantina Laredo',
      location: 'State Street',
      deals: [
        {
          description: 'Margarita special',
          startTime: '1:00',
          endTime: '3:30'
        }
      ]
    }
  ]

  await HappyHour.insertMany(happyHours)
  console.log('Added some happy hours!')
}
const run = async () => {
  await main()
  console.log('database about to close')
  db.close()
}

run()

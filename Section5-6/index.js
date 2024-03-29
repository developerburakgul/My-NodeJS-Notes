const request = require("postman-request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const chalk = require("chalk")


const address = process.argv[2]

geocode(address, (error, data) => {
  if (error) {
    console.log("Error :", error)
    return
  }

  forecast(data.longitude, data.latitude, (forecastError, forecastData) => {
    if (forecastError) {
      console.log(chalk.red.inverse("Error : " + forecastError))
      return
    }
    console.log(chalk.green.inverse(data.location + forecastData))
  })
})

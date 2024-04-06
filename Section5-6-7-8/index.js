const request = require("postman-request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const chalk = require("chalk")

const address = process.argv[2]

geocode(address, (error, { latitude, longitude, location }) => {
  if (error) {
    console.log("Error :", error)
    return
  }

  forecast(longitude, latitude, (forecastError, forecastData) => {
    if (forecastError) {
      console.log(chalk.red.inverse("Error : " + forecastError))
      return
    }
    console.log(chalk.green.inverse(location + forecastData))
  })
})

const express = require("express")
const hbs = require("hbs")
const app = express()
const path = require("path")
const { title } = require("process")
const publicDirectoryPath = path.join(__dirname, "../public")
const partialsPath = path.join(__dirname, "../public/templates/partials")
const viewsPath = path.join(__dirname, "../public/templates/views")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

app.set("views", viewsPath)
hbs.registerPartials(partialsPath)
app.set("view engine", "hbs")
app.use(express.static(publicDirectoryPath))



app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Burak Gül"
  })
})

app.get("/about", (req, res) => {
  res.render("About", {
    title: "About Me",
    name: "Burak Gül"
  })
})

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Burak Gül",
    helpText: "This is some help text example"
  })
})
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide a search term"
    })
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error })
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error })
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        })
      })
    }
  )
})

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Burak Gül",
    errorMessage: "Help article not found"
  })
})

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Burak Gül",
    errorMessage: "Page not found"
  })
})
app.listen(3000, () => {
  console.log("Server 3000 portunu dinliyor.")
})



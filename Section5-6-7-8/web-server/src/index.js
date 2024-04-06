const express = require("express")
const app = express()
const path = require("path")
const { title } = require("process")
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../public/views")
app.set("views", viewsPath)
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
    helpText: "This is some help text example"
  })
})
app.listen(3000, () => {
  console.log("Server 3000 portunu dinliyor.")
})

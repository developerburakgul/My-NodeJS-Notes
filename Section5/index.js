const request = require("postman-request")
const url =
  "http://api.weatherstack.com/current?access_key=6a062fa08038e848eb2f9ad4b2ce7c10&query=37.8267,-122.4233&units=f"

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Error var : " + error.message)
//   } else {
//     console.log(
//       "Hava Sıcaklığı : " +
//         response.body.current.temperature +
//         " fahrenheit " +
//         " Hissedilen  : " +
//         response.body.current.feelslike +
//         " fahrenheit "
//     )
//   }
// })

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Bursa.json?access_token=pk.eyJ1IjoiZGV2ZWxvcGVyYnVyYWtndWwiLCJhIjoiY2x0emlyNThqMDBmczJ1cGRnNmw4YTRoaiJ9.TKyh0iv0a_FSkhRakSeAyA"

request({ url: geocodeURL, json: true }, (error, response) => {
  const longitude = response.body.features[0].center[0]
  const latitude = response.body.features[0].center[1]

  console.log("Enlem : " + latitude + " Boylam : " + longitude)
})

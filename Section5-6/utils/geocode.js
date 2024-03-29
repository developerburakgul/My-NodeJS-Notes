const request = require("postman-request")

const geocode = (address, callback) => {
  // function body goes here
  const geocodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURI(address) +
    ".json?access_token=pk.eyJ1IjoiZGV2ZWxvcGVyYnVyYWtndWwiLCJhIjoiY2x0emlyNThqMDBmczJ1cGRnNmw4YTRoaiJ9.TKyh0iv0a_FSkhRakSeAyA"

  request({ url: geocodeURL, json: true }, (error, response) => {
    // ! bursa yerine saçma sapan bir şeyler girersek response un features dizisi boş gelmektedir.
    if (error) {
      callback("Geocoding servisine bağlanamadı", undefined)
    } else if (response.body.features.length == 0) {
      callback("Belirttiğiniz konum bulunamadı", undefined)
    } else {
      const longitude = response.body.features[0].center[0]
      const latitude = response.body.features[0].center[1]
      const location = response.body.features[0].place_name

      callback(undefined, {
        longitude: longitude,
        latitude: latitude,
        location: location
      })
    }
  })
}


module.exports = geocode

const request = require("postman-request")
const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6a062fa08038e848eb2f9ad4b2ce7c10&query=" +
    longitude +
    "," +
    latitude

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Hava durumu servisine bağlantı kurulamadı", undefined)
    } else if (body.error) {
      callback("Girilen konum bilgisi bulunamadı", undefined)
    } else if (body.current == undefined) {
    } else {
      callback(
        undefined,
        " Hava sıcaklığı : " +
          body.current.temperature +
          " Hissedilen : " +
          body.current.feelslike
      )
    }
  })
}

module.exports = forecast

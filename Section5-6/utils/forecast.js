const request = require("postman-request")
const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6a062fa08038e848eb2f9ad4b2ce7c10&query=" +
    longitude +
    "," +
    latitude

  request({ url: url, json: true }, (error, response) => {
    //   const data = JSON.parse(response.body)
    //   console.log(data.current) // * json : true yazmadığımız kısımda böyle gelir ve biz veriyi JSON formatına çeviririz.
    if (error) {
      callback("Hava durumu servisine bağlantı kurulamadı", undefined)
    } else if (response.body.error) {
      callback("Girilen konum bilgisi bulunamadı", undefined)
    } else {
      callback(
        undefined,
        " Hava sıcaklığı : " +
          response.body.current.temperature +
          " Hissedilen : " +
          response.body.current.feelslike
      )
    }
  })
}

module.exports = forecast

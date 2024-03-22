request({ url: url, json: true }, (error, response) => {
  console.log(
    "Hava Sıcaklığı : " +
      response.body.current.temperature +
      "fahrenheit " +
      " Hissedilen  : " +
      response.body.current.feelslike +
      "fahrenheit "
  )
})
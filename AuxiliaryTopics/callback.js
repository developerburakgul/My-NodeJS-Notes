// * asenkron call back fonksyion
// setTimeout(() => {
//   console.log("2 saniye time out")
// }, 2000)

// ! callback fonksiyonların hepsi asenkron değildir senkron olan da vardır

// * senkron callback fonksiyon
const names = ["Ali", "Berk", "Canan"]
const shortNames = names.filter((name) => {
  return name.length <= 4
})

// // senkron fonksiyon
// const geocode = (address, callback) => {
//   const data = {
//     latitude: 0,
//     longitude: 0
//   }
//   return data
// }
// const data = geocode("Bursa")
// console.log(data)

// asenkron fonksiyon
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 40.182846,
//       longitude: 29.066834
//     }
//     callback(data)
//   }, 2000)
// }

// geocode("Bursa", (data) => {
//   console.log(data) // Bu callback fonksiyonu `setTimeout` tamamlandığında çağrılır
// })

const add = (number1, number2, callback) => {
  setTimeout(() => {
    const result = number1+number2
    callback(result)
  }, 2000)
}

add(1, 2, (number) => {
  console.log(number)
})



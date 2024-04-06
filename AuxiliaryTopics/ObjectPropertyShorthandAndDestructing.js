// const name = "Andrew"
// const userAge = 27
// const user = {
//   name: name,
//   age: userAge,
//   location: "Bursa"
// }

// // * Shorthand syntax
// const name = "Andrew"
// const userAge = 27
// const user = {
//   name,
//   age: userAge,
//   location: "Bursa"
// }

// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined
// }
// const label = product.label
// const stock = product.stock

// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined
// }
// const { label, stock } = product
// console.log(label)
// console.log(stock)

// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined
// }
// const { label, stock ,rating} = product
// console.log(label)
// console.log(stock)
// console.log(rating) // return undefined

// // ! We can rename the variable.
// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined
// }
// const { label: productLabel, stock } = product
// console.log(productLabel)
// console.log(stock)

// // ! We can define a new variable.
// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined
// }
// const {label: productLabel, stock, rating=5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined,
//   rating: 4.2
// }
// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

// const product = {
//   label: "Red notebook",
//   price: 3,
//   stock: 201,
//   salePrice: undefined,
//   rating: 4.2
// }

// const transaction = (type, myProduct) => {
//   const { label } = myProduct
//   console.log(label);
// }
// transaction("order", product)

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

const transaction = (type, { label, stock }) => {
  console.log(label)
  console.log(stock)
}
transaction("order", product)

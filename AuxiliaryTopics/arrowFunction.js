//* Way 1
function greetings(name) {
  console.log("Hello " + name)
}

//* Way2

let greetings2 = function (name) {
  console.log("Hello " + name)
}
greetings("Burak")
greetings2("Batuhan")

const arrowFunctionGreeting = (name) => {
  console.log("Hello " + name)
}
arrowFunctionGreeting("Gül")

// * Regular Function Convert To Arrow  Function
// function greetings(name) {
//   return "Hello " + name;
// }
// //! Step 1 : Function keywordünü const ile değiştir
// const greeting(name){
//   return "Hello " + name;
// }
// //! Step 2 : Fonksiyon isminden sonra = koy
// const greeting = (name) {
//   return "Hello " + name;
// }
// //! Step 3 : Parametre parantezlerinden  sonra => koy
// const greeting = (name) =>{
//   return "Hello " + name;
// }

// * Single Line Function
const greeting = (name) => {
  return "Hello " + name
}
const greeting2 = (name2) => "Hello " + name2
console.log(greeting2("Burak"))

const greeting3 = (name3) => "Hello " + name3
console.log(greeting3("Batuhan"))

const greeting4 = () => console.log("Hello World")
greeting4()

const greeting5 = () => {
  console.log("Hello World !")
  console.log("How are you ?")
}

// ! High Order Functions
// * forEach

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numberArray.forEach(function (number) {
  console.log(2 * number - 1)
})
// output 1,3,5,7,9,11,13,15,17,19
// * Map
var otherArray = numberArray.map((number) => 2 * number - 1)
console.log(otherArray)

// * filter
var evenNumbers = numberArray.filter(function (number) {
  if (number % 2 == 0) {
    return true
  } else {
    return false
  }
})
console.log(evenNumbers)

var oddNumbers = numberArray.filter((number) => number % 2 == 1)
console.log(oddNumbers)

// *  This keyword

const person = {
  name: "Batuhan",
  lastName: "Gül",
  hobbies: ["Ride a motorBike", "Travel"],
  showLastName() {
    console.log(this.lastName + " is lastName ")
  },
  showHobbies() {
    this.hobbies.forEach(function (hobby) {
      console.log(this.name + " 's hobbies is " + hobby)
    })
  }
}
const person2 = {
  name: "Burak",
  lastName: "Gül",
  hobbies: ["Read a Book", "Write a code"],
  showLastName: () => {
    console.log(this.lastName + " is lastName ")
  },
  showHobbies() {
    const self = this
    this.hobbies.forEach(function (hobby) {
      console.log(self.name + " 's hobbies is " + hobby)
    })
  },
  showHobbies2(){
    this.hobbies.forEach(hobby=>console.log(this.name + " 's hobbies is " + hobby ))
  }
}
person.showHobbies()
// undefined 's hobbies is Ride a motorBike,
// undefined 's hobbies is Travel
person2.showHobbies()
// Burak 's hobbies is Read a Book
// Burak 's hobbies is Write a code
person2.showHobbies2()
// Burak 's hobbies is Read a Book
// Burak 's hobbies is Write a code




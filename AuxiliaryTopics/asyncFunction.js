// ! Example 1
// console.log("Starting");
// // * Senkron arrow function :IIFE - Immediately Invoked Function Expression
// (() => {
//   console.log("Senkron function")
// })()
// console.log("Stopping")

// ! Example2
// console.log("Starting")
// // * Asenkron Function
// setTimeout(() => {
//   console.log("Asenkron Function")
// }, 2000)
// console.log("Stopping")

// ! Example 3

console.log("Starting")
setTimeout( () => { console.log("2-second timer")
}, 2000)
setTimeout( () => { console.log("0-second timer")
}, 0)
 console.log("Stopping")


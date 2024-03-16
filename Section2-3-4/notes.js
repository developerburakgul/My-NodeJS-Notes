const fs = require("fs")
const chalk = require("chalk")

// // * First state
// function addNote(title, body) {
//   const notes = loadNotes()
//   const duplicateNotes = notes.filter((note) => note.title === title)
//   if (duplicateNotes.length === 0) {
//     // ! no duplicate
//     notes.push({ title: title, body: body })
//     saveNotes(notes)
//     console.log(chalk.green.inverse("New note added!"))
//   } else {
//     // ! there is duplicate
//     console.log(chalk.red.inverse("Note title taken"))
//   }
// }
// * Second State
function addNote(title, body) {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  if (duplicateNote === undefined) {
    // ! no duplicate
    notes.push({ title: title, body: body })
    saveNotes(notes)
    console.log(chalk.green.inverse("New note added!"))
  } else {
    // ! there is duplicate
    console.log(chalk.red.inverse("Note title taken"))
  }
}

function removeNote(title) {
  const notes = loadNotes()
  // * First state
  // const notesToKeep = notes.filter(function (note) {
  //   return note.title !== title
  // })
  // * Second state
  const notesToKeep = notes.filter((note) => note.title !== title)
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"))
    saveNotes(notesToKeep)
  } else {
    console.log(
      chalk.red.inverse("The note you wanted to delete was not found")
    )
  }
}
//* First State
// function loadNotes() {
//   try {
//     // read from file
//     const dataBuffer = fs.readFileSync("notes.json")
//     // Convert to JSON format
//     const dataJSON = dataBuffer.toString()
//     // Parse the string and return
//     return JSON.parse(dataJSON)
//   } catch (error) {
//     return []
//   }
// }
//* Second State
const loadNotes = () => {
  try {
    // read from file
    const dataBuffer = fs.readFileSync("notes.json")
    // Convert to JSON format
    const dataJSON = dataBuffer.toString()
    // Parse the string and return
    return JSON.parse(dataJSON)
  } catch (error) {
    return []
  }
}

// * First state
// const saveNotes = function (notes) {
//   const dataJSON = JSON.stringify(notes)
//   fs.writeFileSync("notes.json", dataJSON)
// }
// * Second state
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse("Your notes"))
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse("Note not found!"))
  }
}

module.exports = {
  addNote: addNote, // ! sağ kısımda yazan bu dosyadaki ile eşleşmeli
  removeNote: removeNote, // ! sol kısımda yazan ise başka dosyalarda kullanılmak üzere isimlendirilir.
  listNotes: listNotes,
  readNote:readNote
}

const fs = require("fs");
const chalk = require("chalk");
function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    // ! no duplicate
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    // ! there is duplicate
    console.log(chalk.red.inverse("Note title taken"));
  }
}
function removeNote(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(
      chalk.red.inverse("The note you wanted to delete was not found")
    );
  }
}

function loadNotes() {
  try {
    // read from file
    const dataBuffer = fs.readFileSync("notes.json");
    // Convert to JSON format
    const dataJSON = dataBuffer.toString();
    // Parse the string and return
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote, // ! sağ kısımda yazan bu dosyadaki ile eşleşmeli
  removeNote: removeNote, // ! sol kısımda yazan ise başka dosyalarda kullanılmak üzere isimlendirilir.
};

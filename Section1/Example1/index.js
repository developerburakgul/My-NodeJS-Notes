const fileSystem = require("fs");
console.log("Burak Gül");
fileSystem.writeFileSync("notesOfBurak.txt","I am a student that want to be iOS Developer.");

fileSystem.appendFileSync("notesOfBurak.txt", "I live in Bursa");

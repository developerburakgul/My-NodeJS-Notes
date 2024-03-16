const yargs = require("yargs")
const notes = require("./notes.js")
yargs.version("1.1.0")
// Create add command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Body title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})
yargs.command({
  command: "remove",
  describe: "Remove  a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes()
  }
})
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()

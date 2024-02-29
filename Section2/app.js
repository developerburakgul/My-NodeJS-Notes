const yargs = require("yargs");
yargs.version("1.1.0");
// Create add command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Remove  a new note",
  handler: function () {
    console.log("Removing the note!");
  },
});
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing all notes !");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

yargs.parse();

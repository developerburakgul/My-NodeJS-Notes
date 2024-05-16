const databaseName = "task-manager"
const { MongoClient, ServerApiVersion } = require("mongodb")
const uri =
  "mongodb+srv://developerburakgultool:1DH93vYwUNkiMID0@clusterlearnmongodb.wjuie0k.mongodb.net/?retryWrites=true&w=majority&appName=ClusterLearnMongoDB"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function run() {
  try {
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 })

    const db = client.db(databaseName)
    const collection = db.collection("tasks")
    await collection
      .find({ completed: true })
      .toArray()
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  } finally {
    await client.close()
  }
}
run().catch(console.dir)

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://pc-builder-app:admin1234@cluster0.0qdtr89.mongodb.net/pc-builder-app?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const newsCollection = client.db("pc-builder-app").collection("pc");

    if (req.method === "GET") {
      const pc = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: pc });
    }

    if (req.method === "POST") {
      const pc = req.body;
      const result = await newsCollection.insertOne(pc);
      res.json(result);
    }
    console.log("Database connected Successfully");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;

// const handler = (req,res) => {
//     res.send({message:"Server Created"})
// }

// export default handler;

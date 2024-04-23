import { MongoClient, Db } from "mongodb";

let client: Db;

async function connect() {
  try {
    if (client) {
      console.log("Cached MongoDB");
      return client;
    }

    const server = new MongoClient(`${process.env.DB_URL}`);
    // Connect the client to the MongoDB server
    await server.connect();
    console.log("Connected to MongoDB");

    client = server.db(`${process.env.DB_NAME}`);

    return client;
    // You can perform database operations here
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return client;
  }
}

export default connect;

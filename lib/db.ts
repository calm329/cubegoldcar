// import { MongoClient } from "mongodb"
import mongoose from "mongoose"

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable")
}

if (process.env.NODE_ENV === "development") {
  //@ts-ignore

  if (!globalThis.mongo) {
    //@ts-ignore
    globalThis.mongo = { conn: null, promise: null }
  }
  //@ts-ignore

  client = globalThis.mongo
} else {
  //@ts-ignore
  client = globalThis.mongo || {}
}

if (!client.promise) {
  //@ts-ignore

  client.promise = mongoose.connect(uri, options).then((clientInstance) => {
    return clientInstance
    // db: clientInstance.db("cubarentcar"), // replace with your database name
  })
}

export default client.promise

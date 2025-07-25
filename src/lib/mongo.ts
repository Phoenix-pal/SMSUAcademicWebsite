import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
console.log(uri);
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

//if (!process.env.MONGODB_URI) {
 // throw new Error('Please add your Mongo URI to .env.local');
//}

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// ✅ เพิ่มฟังก์ชันนี้
export async function connectToDB() {
  const client = await clientPromise;
  return client.db(); // คืนค่า database
}

export default clientPromise;

// src/app/api/resource/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://farophoenix:smsuacademic@smsudb.2ybcdod.mongodb.net/?retryWrites=true&w=majority&appName=smsudb";;
const dbName = 'smsudb'; // เปลี่ยนให้ตรงกับชื่อ database ที่คุณตั้งไว้

export async function GET() {
  const client = await MongoClient.connect(uri);
  console.log()
  const db = client.db(dbName);
  const collection = db.collection('resources');

  const data = await collection.findOne({});
  client.close();

  return NextResponse.json(data || {});
}

export async function POST(req: Request) {
  const body = await req.json();

  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);
  const collection = db.collection('resources');

  const result = await collection.updateOne(
    {},
    { $set: body },
    { upsert: true } // ถ้าไม่มี document ให้สร้างใหม่
  );

  client.close();
  return NextResponse.json({ success: true });
}

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo'; // ต้องใช้ lib/mongo.ts ที่จัดการ connection

const dbName = 'smsudb'; // เปลี่ยนเป็นชื่อ database จริง

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection('test_collection');

    // ✅ สร้าง document ทดลอง
    const insertResult = await collection.insertOne({
      message: 'Hello MongoDB from Vercel!',
      createdAt: new Date(),
    });

    // ✅ อ่าน document ล่าสุด
    const latest = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    return NextResponse.json({
      insertedId: insertResult.insertedId,
      latest,
    });
  } catch (error) {
    console.error('[Mongo Test Error]', error);
    return new NextResponse('Error connecting to MongoDB', { status: 500 });
  }
}

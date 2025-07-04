// src/app/api/resource/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/resource.json');

export async function GET() {
  const content = fs.readFileSync(filePath, 'utf-8');
  return NextResponse.json(JSON.parse(content));
}

export async function POST(req: Request) {
  const body = await req.json();
  fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
  return NextResponse.json({ success: true });
}

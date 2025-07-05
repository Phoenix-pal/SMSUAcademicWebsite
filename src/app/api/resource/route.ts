// src/app/api/resource/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), 'src/data/resource.json');
  await fs.writeFile(filePath, JSON.stringify(body, null, 2), 'utf8');
  return NextResponse.json({ success: true });
}
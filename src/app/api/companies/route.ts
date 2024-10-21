import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.resolve(
    process.cwd(),
    `${process.env.API_URL}/companies-lookup.json`,
  );

  const jsonData = readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  return NextResponse.json(data);
}

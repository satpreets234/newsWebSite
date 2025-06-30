import { NextResponse } from 'next/server';
import { News } from '../../../models/News';
import dbConnect from '../../../lib/mongodb';

export async function GET() {
  await dbConnect();
  const news = await News.find().sort({ createdAt: -1 });
  return NextResponse.json(news);
}

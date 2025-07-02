import { NextResponse } from 'next/server';
import { News } from '../../../models/News';
import dbConnect from '../../../lib/mongodb';
import { fetchAndStoreRSSNews } from '../../../lib/rssFetcher';

export async function GET() {
  await dbConnect();
  await fetchAndStoreRSSNews();
  const news = await News.find().sort({ createdAt: -1 });
  return NextResponse.json(news);
}

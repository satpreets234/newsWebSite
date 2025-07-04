import { NextResponse } from 'next/server';
import { News } from '../../../models/News';
import dbConnect from '../../../lib/mongodb';
import { fetchAndStoreRSSNews } from '../../../lib/rssFetcher';
import { apiResponse } from '../../../lib/apiFetch';

export async function GET() {
  try {
    await dbConnect();
    await fetchAndStoreRSSNews();
    const news = await News.find().sort({ createdAt: -1 });
    return apiResponse({ data: news, message: 'News fetched successfully' });
  } catch (error) {
    return apiResponse({ error: 'Internal server error', status: 500, data: null, message: 'Failed to fetch news' });
  }
}

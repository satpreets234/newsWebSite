import Parser from 'rss-parser';
import { News } from '../models/News';
import dbConnect from '../lib/mongodb';

const parser = new Parser();
const RSS_FEED_URL = 'https://feeds.bbci.co.uk/news/rss.xml'; // Example: BBC News RSS

export async function fetchAndStoreRSSNews() {
  await dbConnect();
  const feed = await parser.parseURL(RSS_FEED_URL);
  for (const item of feed.items) {
    if (!item.title || !item.link) continue;
    // Check if news already exists by link
    const exists = await News.findOne({ link: item.link });
    if (!exists) {
      await News.create({
        title: item.title,
        description: item.contentSnippet || item.content || '',
        link: item.link,
        category: item.categories?.[0] || 'general',
        createdAt: item.pubDate ? new Date(item.pubDate) : new Date(),
      });
    }
  }
}

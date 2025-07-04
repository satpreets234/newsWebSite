import Parser from 'rss-parser';
import { News } from '../models/News';
import { NewsContent } from '../models/NewsContent';
import dbConnect from '../lib/mongodb';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const parser = new Parser();
const RSS_FEED_URL = 'https://feeds.bbci.co.uk/news/rss.xml'; // Example: BBC News RSS

async function fetchFullArticleContent(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    // BBC: main content is in <article> or .ssrcss-uf6wea-RichTextComponentWrapper
    let content = '';
    if ($('article').length) {
      content = $('article').text();
    } else if ($('.ssrcss-uf6wea-RichTextComponentWrapper').length) {
      content = $('.ssrcss-uf6wea-RichTextComponentWrapper').text();
    } else {
      content = $('body').text();
    }
    return content.trim();
  } catch (e) {
    return '';
  }
}

export async function fetchAndStoreRSSNews() {
  await dbConnect();
  const feed = await parser.parseURL(RSS_FEED_URL);
  for (const item of feed.items) {
    if (!item.title || !item.link) continue;
    // Check if news already exists by link
    const exists = await News.findOne({ link: item.link });
    if (!exists) {
      const newsDoc = await News.create({
        title: item.title,
        description: item.contentSnippet || item.content || '',
        link: item.link,
        category: Array.isArray(item.categories) && item.categories.length > 0 ? item.categories[0] : (item.category || 'general'),
        createdAt: item.pubDate ? new Date(item.pubDate) : new Date(),
      });
      // Fetch and save full content
      const fullContent = await fetchFullArticleContent(item.link);
      if (fullContent) {
        await NewsContent.create({ newsId: newsDoc._id, content: fullContent });
      }
    }
  }
}

import mongoose, { Document, Model, Schema } from 'mongoose';

export interface INewsContent extends Document {
  newsId: string; // Foreign key to News _id
  content: string;
}

const NewsContentSchema: Schema = new Schema<INewsContent>({
  newsId: { type: String, required: true, ref: 'News', index: true },
  content: { type: String, required: true },
});

export const NewsContent: Model<INewsContent> = mongoose.models.NewsContent || mongoose.model<INewsContent>('NewsContent', NewsContentSchema); 
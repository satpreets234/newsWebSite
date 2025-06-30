import mongoose, { Document, Model, Schema } from 'mongoose';

export interface INews extends Document {
  title: string;
  description: string;
  createdAt: Date;
}

const NewsSchema: Schema = new Schema<INews>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const News: Model<INews> = mongoose.models.News || mongoose.model<INews>('News', NewsSchema);

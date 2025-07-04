import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  isPremium: boolean;
  createdAt: Date;
  favorites: string[];
  preferences: {
    categories: string[];
    language: string;
  };
  history: { newsId: string; viewedAt: Date }[];
}

const UserSchema: Schema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isPremium: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  favorites: [{ type: String }],
  preferences: {
    categories: [{ type: String }],
    language: { type: String, default: 'en' },
  },
  history: [
    {
      newsId: { type: String },
      viewedAt: { type: Date, default: Date.now },
    },
  ],
});

export const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

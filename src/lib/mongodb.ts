import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/newsdb';

let cached = (global as any)._mongoose;

if (!cached) {
  cached = (global as any)._mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

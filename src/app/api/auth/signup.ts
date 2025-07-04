import { NextResponse } from 'next/server';
import { User } from '@/models/User'
import dbConnect from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { apiResponse } from '@/lib/apiFetch';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();
    if (!email || !password) {
      return apiResponse({ error: 'Email and password required', status: 400, message: 'Missing credentials' });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return apiResponse({ error: 'User already exists', status: 409, message: 'Duplicate user' });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });
    return apiResponse({ data: { email: user.email, isPremium: user.isPremium }, message: 'User created' });
  } catch (error) {
    return apiResponse({ error: 'Internal server error', status: 500, message: 'Signup failed' });
  }
}

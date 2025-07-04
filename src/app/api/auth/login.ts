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
    const user = await User.findOne({ email });
    if (!user) {
      return apiResponse({ error: 'User not found', status: 404, message: 'No user found' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return apiResponse({ error: 'Invalid credentials', status: 401, message: 'Invalid credentials' });
    }
    // Here you would generate a JWT or session cookie for real auth
    return apiResponse({ data: { email: user.email, isPremium: user.isPremium }, message: 'Login successful' });
  } catch (error) {
    return apiResponse({ error: 'Internal server error', status: 500, message: 'Login failed' });
  }
}

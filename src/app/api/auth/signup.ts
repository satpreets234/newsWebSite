import { NextResponse } from 'next/server';
import { User } from '@/models/User'
import dbConnect from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }
  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });
  return NextResponse.json({ message: 'User created', user: { email: user.email, isPremium: user.isPremium } });
}

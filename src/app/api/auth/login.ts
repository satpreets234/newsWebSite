import { NextResponse } from 'next/server';
import { User } from '../../../../models/User';
import dbConnect from '../../../../lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  await dbConnect();
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  // Here you would generate a JWT or session cookie for real auth
  return NextResponse.json({ message: 'Login successful', user: { email: user.email, isPremium: user.isPremium } });
}

import { NextResponse } from 'next/server';
import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      return NextResponse.json({ errors: error.details.map((d: any) => ({ path: d.path[0], message: d.message })) }, { status: 400 });
    }
    // Here you would save the contact message to a database or send an email
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 
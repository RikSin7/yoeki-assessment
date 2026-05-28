import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Handle contact form submission
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
  }
}


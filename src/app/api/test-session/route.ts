import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    console.log('Test Session API: Starting session test...');
    
    const session = await getServerSession(authOptions);
    console.log('Test Session API: Session found:', !!session);
    
    if (session) {
      console.log('Test Session API: Session details:', {
        user: session.user,
        expires: session.expires
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      hasSession: !!session,
      session: session ? {
        user: session.user,
        expires: session.expires
      } : null
    });
  } catch (error) {
    console.error('Test Session API: Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    console.log('Set Password API: POST request received');
    
    const session = await getServerSession(authOptions);
    console.log('Set Password API: Session found:', !!session);
    
    if (!session?.user?.email) {
      console.log('Set Password API: Unauthorized - no session or email');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    console.log('Set Password API: Request body:', body);
    
    const { password } = body;

    if (!password || password.length < 6) {
      console.log('Set Password API: Invalid password');
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    console.log('Set Password API: Fetching user with email:', session.user.email);
    const user = await query(
      'SELECT id, password_hash FROM users WHERE email = $1',
      [session.user.email]
    );

    console.log('Set Password API: User query result rows:', user.rows.length);

    if (!user.rows.length) {
      console.log('Set Password API: User not found');
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const userId = user.rows[0].id;
    const currentPasswordHash = user.rows[0].password_hash;

    // Check if user already has a proper password
    if (!currentPasswordHash.startsWith('temp_hash_')) {
      console.log('Set Password API: User already has a proper password');
      return NextResponse.json(
        { error: 'User already has a password set' },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Set Password API: Password hashed successfully');

    // Update the user's password
    const updateResult = await query(
      'UPDATE users SET password_hash = $1 WHERE id = $2 RETURNING id, name, email',
      [hashedPassword, userId]
    );

    console.log('Set Password API: Password updated successfully');

    return NextResponse.json({
      success: true,
      message: 'Password set successfully',
      user: updateResult.rows[0]
    });
  } catch (error) {
    console.error('Set Password API: Error details:', error);
    console.error('Set Password API: Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
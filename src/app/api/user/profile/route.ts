import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session in profile API:', JSON.stringify(session, null, 2));
    
    if (!session?.user?.email) {
      console.log('No session or email found');
      return NextResponse.json(
        { error: 'Unauthorized - No session or email found' },
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    console.log('Fetching user with email:', session.user.email);
    let result = await query(
      'SELECT id, name, email, phone, country, created_at FROM users WHERE email = $1',
      [session.user.email]
    );

    console.log('Database query result:', JSON.stringify(result.rows, null, 2));

    if (!result.rows.length) {
      console.log('No user found with email:', session.user.email);
      console.log('Creating user in database...');
      
      // Create user in database with session data
      result = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, phone, country, created_at',
        [session.user.name || 'Unknown User', session.user.email, 'temp_hash_' + Date.now()] // Temporary password hash
      );
      
      console.log('User created in database:', JSON.stringify(result.rows[0], null, 2));
    }

    const user = result.rows[0];
    console.log('Returning user data:', JSON.stringify(user, null, 2));
    
    return NextResponse.json(
      user,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Error in profile API:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
} 
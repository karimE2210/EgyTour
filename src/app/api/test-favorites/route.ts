import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    console.log('Test Favorites API: Starting test...');
    
    const session = await getServerSession(authOptions);
    console.log('Test Favorites API: Session found:', !!session);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'No session' }, { status: 401 });
    }

    console.log('Test Favorites API: User email:', session.user.email);
    
    // Test user query
    let user = await query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );
    console.log('Test Favorites API: User query result:', user.rows);

    if (!user.rows.length) {
      console.log('Test Favorites API: Creating user...');
      user = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [session.user.name || 'Unknown User', session.user.email, 'temp_hash_' + Date.now()]
      );
      console.log('Test Favorites API: User created:', user.rows[0]);
    }

    const userId = user.rows[0].id;
    console.log('Test Favorites API: Using user ID:', userId);

    // Test favorites query
    const favorites = await query(
      'SELECT * FROM favorites WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    console.log('Test Favorites API: Favorites found:', favorites.rows.length);

    return NextResponse.json({ 
      success: true, 
      userId,
      favoritesCount: favorites.rows.length,
      favorites: favorites.rows
    });
  } catch (error) {
    console.error('Test Favorites API: Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    }, { status: 500 });
  }
} 
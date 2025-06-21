import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    let user = await query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );

    if (!user.rows.length) {
      console.log('User not found in database, creating...');
      // Create user in database with session data
      user = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [session.user.name || 'Unknown User', session.user.email, 'temp_hash_' + Date.now()] // Temporary password hash
      );
    }

    const reviews = await query(
      'SELECT * FROM reviews WHERE user_id = $1 ORDER BY created_at DESC',
      [user.rows[0].id]
    );

    return NextResponse.json({ reviews: reviews.rows });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('Reviews API: POST request received');
    
    const session = await getServerSession(authOptions);
    console.log('Reviews API: Session found:', !!session);
    
    if (!session?.user?.email) {
      console.log('Reviews API: Unauthorized - no session or email');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    console.log('Reviews API: Request body:', body);
    
    const { place_id, place_name, place_location, rating, comment } = body;

    if (!place_id || !place_name || !place_location || !rating) {
      console.log('Reviews API: Missing required fields', { place_id, place_name, place_location, rating });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      console.log('Reviews API: Invalid rating', rating);
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    console.log('Reviews API: Fetching user with email:', session.user.email);
    let user = await query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );

    console.log('Reviews API: User query result rows:', user.rows.length);

    if (!user.rows.length) {
      console.log('Reviews API: User not found in database, creating...');
      // Create user in database with session data
      user = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [session.user.name || 'Unknown User', session.user.email, 'temp_hash_' + Date.now()] // Temporary password hash
      );
      console.log('Reviews API: User created with ID:', user.rows[0].id);
    }

    const userId = user.rows[0].id;
    console.log('Reviews API: Using user ID:', userId);

    // Check if user already has a review for this place
    const existingReview = await query(
      'SELECT id FROM reviews WHERE user_id = $1 AND place_id = $2',
      [userId, place_id]
    );

    console.log('Reviews API: Existing review check result rows:', existingReview.rows.length);

    if (existingReview.rows.length > 0) {
      console.log('Reviews API: Updating existing review');
      // Update existing review
      const updateResult = await query(
        'UPDATE reviews SET rating = $1, comment = $2, place_location = $3, created_at = CURRENT_TIMESTAMP WHERE user_id = $4 AND place_id = $5 RETURNING *',
        [rating, comment || null, place_location, userId, place_id]
      );

      console.log('Reviews API: Update result:', updateResult.rows[0]);

      return NextResponse.json(updateResult.rows[0]);
    } else {
      console.log('Reviews API: Creating new review');
      // Create new review
      const insertResult = await query(
        'INSERT INTO reviews (user_id, place_id, place_name, place_location, rating, comment) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [userId, place_id, place_name, place_location, rating, comment || null]
      );

      console.log('Reviews API: Insert result:', insertResult.rows[0]);

      return NextResponse.json(insertResult.rows[0]);
    }
  } catch (error) {
    console.error('Reviews API: POST Error details:', error);
    console.error('Reviews API: POST Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
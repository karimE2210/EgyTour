import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    console.log('Favorites API: GET request received');
    const session = await getServerSession(authOptions);
    console.log('Favorites API: Session found:', !!session);
    
    if (!session?.user?.email) {
      console.log('Favorites API: Unauthorized - no session or email');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('Favorites API: Fetching user with email:', session.user.email);
    let user = await query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );
    console.log('Favorites API: User query result rows:', user.rows.length);

    if (!user.rows.length) {
      console.log('Favorites API: User not found in database, creating...');
      // Create user in database with session data
      user = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [session.user.name || 'Unknown User', session.user.email, 'temp_hash_' + Date.now()] // Temporary password hash
      );
      console.log('Favorites API: User created with ID:', user.rows[0].id);
    }

    console.log('Favorites API: Fetching favorites for user ID:', user.rows[0].id);
    const favorites = await query(
      'SELECT * FROM favorites WHERE user_id = $1 ORDER BY created_at DESC',
      [user.rows[0].id]
    );
    console.log('Favorites API: Found favorites count:', favorites.rows.length);

    return NextResponse.json({ favorites: favorites.rows });
  } catch (error) {
    console.error('Favorites API: GET Error details:', error);
    console.error('Favorites API: GET Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    console.log('Favorites API: POST request received');
    
    const session = await getServerSession(authOptions);
    console.log('Favorites API: Session found:', !!session);
    
    if (!session?.user?.email) {
      console.log('Favorites API: Unauthorized - no session or email');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    console.log('Favorites API: Request body:', body);
    
    const { itemId, itemType, action, itemName, itemImage, itemLocation } = body;

    if (!itemId || !action) {
      console.log('Favorites API: Missing required fields', { itemId, action });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Favorites API: Fetching user with email:', session.user.email);
    let user = await query(
      'SELECT id FROM users WHERE email = $1',
      [session.user.email]
    );

    console.log('Favorites API: User query result rows:', user.rows.length);

    if (!user.rows.length) {
      console.log('Favorites API: User not found in database, creating...');
      // Create user in database with session data
      user = await query(
        'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
        [session.user.name || 'Unknown User', session.user.email, 'temp_hash_' + Date.now()] // Temporary password hash
      );
      console.log('Favorites API: User created with ID:', user.rows[0].id);
    }

    const userId = user.rows[0].id;
    console.log('Favorites API: Using user ID:', userId);

    if (action === 'add') {
      console.log('Favorites API: Adding favorite for item:', itemId);
      
      // Check if already favorited
      const existing = await query(
        'SELECT id FROM favorites WHERE user_id = $1 AND place_id = $2',
        [userId, itemId]
      );

      console.log('Favorites API: Existing check result rows:', existing.rows.length);

      if (existing.rows.length > 0) {
        console.log('Favorites API: Already favorited');
        return NextResponse.json(
          { error: 'Already favorited' },
          { status: 400 }
        );
      }

      // Add to favorites
      console.log('Favorites API: Inserting favorite with values:', {
        userId,
        itemId,
        itemName: itemName || itemId,
        itemImage: itemImage || '',
        itemLocation: itemLocation || ''
      });
      
      const insertResult = await query(
        'INSERT INTO favorites (user_id, place_id, place_name, place_image, place_location) VALUES ($1, $2, $3, $4, $5)',
        [userId, itemId, itemName || itemId, itemImage || '', itemLocation || '']
      );

      console.log('Favorites API: Insert result:', insertResult);

      return NextResponse.json({ success: true, action: 'added' });
    } else if (action === 'remove') {
      console.log('Favorites API: Removing favorite for item:', itemId);
      
      // Remove from favorites
      const deleteResult = await query(
        'DELETE FROM favorites WHERE user_id = $1 AND place_id = $2',
        [userId, itemId]
      );

      console.log('Favorites API: Delete result:', deleteResult);

      return NextResponse.json({ success: true, action: 'removed' });
    } else {
      console.log('Favorites API: Invalid action:', action);
      return NextResponse.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Favorites API: POST Error details:', error);
    console.error('Favorites API: POST Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
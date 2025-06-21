import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET() {
  try {
    console.log('Test Schema API: Starting schema test...');
    
    // Test if tables exist
    const tablesResult = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('users', 'favorites', 'reviews')
    `);
    
    console.log('Test Schema API: Tables found:', tablesResult.rows);
    
    // Test users table structure
    const usersColumns = await query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'users'
      ORDER BY ordinal_position
    `);
    
    console.log('Test Schema API: Users table columns:', usersColumns.rows);
    
    // Test favorites table structure
    const favoritesColumns = await query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns 
      WHERE table_name = 'favorites'
      ORDER BY ordinal_position
    `);
    
    console.log('Test Schema API: Favorites table columns:', favoritesColumns.rows);
    
    // Use a unique email for each test run
    const uniqueEmail = `test_${Date.now()}@example.com`;
    // Test inserting a dummy user
    const insertUserResult = await query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
      ['Test User', uniqueEmail, 'test_hash']
    );
    
    console.log('Test Schema API: Test user created with ID:', insertUserResult.rows[0].id);
    
    const userId = insertUserResult.rows[0].id;
    
    // Test inserting a favorite
    const insertFavoriteResult = await query(
      'INSERT INTO favorites (user_id, place_id, place_name, place_image, place_location) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [userId, 'test-place-1', 'Test Place', '/test-image.jpg', 'Test Location']
    );
    
    console.log('Test Schema API: Test favorite created with ID:', insertFavoriteResult.rows[0].id);
    
    // Clean up test data
    await query('DELETE FROM favorites WHERE user_id = $1', [userId]);
    await query('DELETE FROM users WHERE id = $1', [userId]);
    
    return NextResponse.json({ 
      success: true, 
      tables: tablesResult.rows,
      usersColumns: usersColumns.rows,
      favoritesColumns: favoritesColumns.rows,
      message: 'Schema test completed successfully'
    });
  } catch (error) {
    console.error('Test Schema API: Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    }, { status: 500 });
  }
} 
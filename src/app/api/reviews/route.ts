import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');

    let queryText = `
      SELECT r.*, u.name as user_name 
      FROM reviews r 
      JOIN users u ON r.user_id = u.id 
      ORDER BY r.created_at DESC
    `;
    
    let queryParams: any[] = [];

    if (location) {
      queryText = `
        SELECT r.*, u.name as user_name 
        FROM reviews r 
        JOIN users u ON r.user_id = u.id 
        WHERE r.place_location = $1 
        ORDER BY r.created_at DESC
      `;
      queryParams = [location];
    }

    const reviews = await query(queryText, queryParams);

    return NextResponse.json({ reviews: reviews.rows });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
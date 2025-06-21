import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    console.log('Testing database connection...');
    console.log('Environment variables:');
    console.log('POSTGRES_USER:', process.env.POSTGRES_USER);
    console.log('POSTGRES_HOST:', process.env.POSTGRES_HOST);
    console.log('POSTGRES_PORT:', process.env.POSTGRES_PORT);
    console.log('POSTGRES_DATABASE:', process.env.POSTGRES_DATABASE);
    console.log('POSTGRES_PASSWORD:', process.env.POSTGRES_PASSWORD ? 'SET' : 'NOT SET');

    const client = await pool.connect();
    console.log('Database connection successful');
    
    const result = await client.query('SELECT NOW() as current_time');
    console.log('Database query result:', result.rows[0]);
    
    client.release();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      currentTime: result.rows[0].current_time
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    }, { status: 500 });
  }
} 
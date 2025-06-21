import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { query } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, phone, country, password } = await request.json();
    console.log('Received signup request:', { name, email, phone, country });

    // Check if user already exists
    const existingUser = await query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    console.log('Existing user check result:', existingUser.rows.length);

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed successfully');

    // Insert new user
    const result = await query(
      'INSERT INTO users (name, email, phone, country, password_hash) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, email',
      [name, email, phone, country, hashedPassword]
    );
    console.log('User inserted successfully:', result.rows[0]);

    return NextResponse.json(
      { message: 'User created successfully', user: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Detailed signup error:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return NextResponse.json(
      { message: 'Internal server error', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
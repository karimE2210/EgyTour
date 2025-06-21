import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE,
});

export { pool };

export async function query(text: string, params: (string | number | boolean | null)[] = []) {
  console.log('DB Query:', text);
  console.log('DB Params:', params);
  
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    console.log('DB Query result rows:', result.rows.length);
    return result;
  } catch (error) {
    console.error('DB Query error:', error);
    console.error('DB Query error stack:', error instanceof Error ? error.stack : 'No stack trace');
    throw error;
  } finally {
    client.release();
  }
}

export async function initDb() {
  try {
    // Drop existing tables in correct order (due to foreign key constraints)
    console.log('Dropping existing tables...');
    await query('DROP TABLE IF EXISTS favorites CASCADE');
    await query('DROP TABLE IF EXISTS reviews CASCADE');
    await query('DROP TABLE IF EXISTS users CASCADE');

    // Create users table
    await query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        country VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create favorites table
    await query(`
      CREATE TABLE favorites (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        place_id VARCHAR(255) NOT NULL,
        place_name VARCHAR(255) NOT NULL,
        place_image VARCHAR(255) NOT NULL,
        place_location VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, place_id)
      )
    `);

    // Create reviews table
    await query(`
      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        place_id VARCHAR(255) NOT NULL,
        place_name VARCHAR(255) NOT NULL,
        place_location VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
} 
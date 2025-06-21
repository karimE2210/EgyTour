import { query } from '@/lib/db';

async function clearDb() {
  try {
    console.log('Starting database cleanup...');
    
    // Clear data from tables in correct order (due to foreign key constraints)
    console.log('Clearing favorites table...');
    await query('DELETE FROM favorites');
    console.log('✓ Favorites table cleared');
    
    console.log('Clearing reviews table...');
    await query('DELETE FROM reviews');
    console.log('✓ Reviews table cleared');
    
    console.log('Clearing users table...');
    await query('DELETE FROM users');
    console.log('✓ Users table cleared');
    
    // Reset auto-increment sequences
    console.log('Resetting auto-increment sequences...');
    await query('ALTER SEQUENCE users_id_seq RESTART WITH 1');
    await query('ALTER SEQUENCE favorites_id_seq RESTART WITH 1');
    await query('ALTER SEQUENCE reviews_id_seq RESTART WITH 1');
    console.log('✓ Auto-increment sequences reset');
    
    console.log('Database cleanup completed successfully!');
    console.log('All tables are now empty and ready for fresh data.');
  } catch (error) {
    console.error('Error clearing database:', error);
    throw error;
  }
}

// Run the cleanup
clearDb()
  .then(() => {
    console.log('Cleanup script finished');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Cleanup script failed:', error);
    process.exit(1);
  }); 
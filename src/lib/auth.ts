import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pool } from './db';
import { compare } from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('Auth: Missing credentials');
          throw new Error('Missing credentials');
        }

        console.log('Auth: Attempting to authenticate user:', credentials.email);

        const client = await pool.connect();
        try {
          const result = await client.query(
            'SELECT id, name, email, password_hash FROM users WHERE email = $1',
            [credentials.email]
          );

          console.log('Auth: Database query result rows:', result.rows.length);

          if (result.rows.length === 0) {
            console.log('Auth: No user found with email:', credentials.email);
            throw new Error('No user found with this email. Please sign up first.');
          }

          const user = result.rows[0];
          console.log('Auth: User found, checking password...');

          // Check if this is a temporary password hash (created automatically)
          if (user.password_hash.startsWith('temp_hash_')) {
            console.log('Auth: User has temporary password hash, needs to sign up properly');
            throw new Error('This account was created automatically. Please sign up with a password to continue.');
          }

          const isValid = await compare(credentials.password, user.password_hash);

          if (!isValid) {
            console.log('Auth: Invalid password for user:', credentials.email);
            throw new Error('Invalid password');
          }

          console.log('Auth: Authentication successful for user:', credentials.email);
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error('Auth: Error during authentication:', error);
          throw error;
        } finally {
          client.release();
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}; 
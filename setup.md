# EgyTour Setup Guide

This guide will help you set up the EgyTour project on your local machine.

## Step-by-Step Setup

### 1. Prerequisites Check

Make sure you have these installed:

```bash
# Check Node.js version (should be 18+)
node --version

# Check if Bun is installed (recommended)
bun --version

# Check PostgreSQL
psql --version
```

If any are missing:
- **Node.js**: Download from [nodejs.org](https://nodejs.org/)
- **Bun**: Install with `curl -fsSL https://bun.sh/install | bash`
- **PostgreSQL**: Download from [postgresql.org](https://www.postgresql.org/download/)

### 2. Clone and Install

```bash
# Clone the repository
git clone https://github.com/karimE2210/EgyTour.git
cd EgyTour

# Install dependencies
bun install
```

### 3. Database Setup

#### Option A: Local PostgreSQL

1. **Create Database**:
```sql
-- Connect to PostgreSQL as superuser
psql -U postgres

-- Create database and user
CREATE DATABASE egytour_db;
CREATE USER egytour_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE egytour_db TO egytour_user;

-- Exit psql
\q
```

2. **Environment Variables**:
```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local with your values
POSTGRES_USER=egytour_user
POSTGRES_PASSWORD=your_secure_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=egytour_db
```

#### Option B: Cloud Database (Neon, Supabase, etc.)

1. Create a PostgreSQL database on your preferred cloud provider
2. Get the connection details
3. Update `.env.local` with your cloud database credentials

### 4. Initialize Database Tables

```bash
# This will create all necessary tables
bun run init-db
```

### 5. Generate NextAuth Secret

```bash
# Generate a secure secret key
openssl rand -base64 32

# Or use online generator: https://generate-secret.vercel.app/32
```

Add this to your `.env.local`:
```env
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000
```

### 6. Optional: Weather API

If you want weather features:

1. Get API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Add to `.env.local`:
```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

### 7. Start Development Server

```bash
bun run dev
```

Visit: http://localhost:3000

## Troubleshooting

### Database Connection Issues

```bash
# Test database connection
bun run src/app/api/test-db/route.ts
```

Common fixes:
- Check PostgreSQL is running: `brew services start postgresql` (Mac) or `sudo service postgresql start` (Linux)
- Verify credentials in `.env.local`
- Check if database exists: `psql -U postgres -l`

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
bun run dev -- -p 3001
```

### Large Files Not Loading

The project uses Git LFS for large media files. If images/audio aren't loading:

```bash
# Install Git LFS
git lfs install

# Pull LFS files
git lfs pull
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules bun.lockb
bun install

# Run type checking
bun run lint
```

## Production Deployment

### Environment Variables for Production

```env
NODE_ENV=production
NEXTAUTH_URL=https://your-domain.com
# ... other production values
```

### Build and Test

```bash
# Build for production
bun run build

# Test production build locally
bun run start
```

## Need Help?

- Check the main [README.md](./README.md) for general information
- Look at existing issues on GitHub
- Check the console for error messages
- Verify all environment variables are set correctly

## Success Checklist

- [ ] Node.js 18+ installed
- [ ] Bun installed
- [ ] PostgreSQL running
- [ ] Database created
- [ ] `.env.local` configured
- [ ] Dependencies installed (`bun install`)
- [ ] Database initialized (`bun run init-db`)
- [ ] Development server running (`bun run dev`)
- [ ] Website accessible at http://localhost:3000
- [ ] No console errors
- [ ] Images and audio loading properly 
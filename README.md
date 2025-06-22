# EgyTour

A modern tourism website showcasing Egypt's rich cultural heritage, historical landmarks, and vibrant experiences.

## Features

- 🏛️ Modern and responsive design
- 🗺️ Interactive map of Egypt's regions
- 📍 Comprehensive guide to attractions and activities
- ✈️ Travel inspiration and planning tools
- 🔍 User-friendly navigation and search
- 🌐 Bilingual support (English & Arabic)
- 👤 User authentication and profiles
- ⭐ Reviews and favorites system
- 🎵 Music player with Egyptian heritage tracks
- 📱 Fully responsive mobile design

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm
- [PostgreSQL](https://www.postgresql.org/) database

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/karimE2210/EgyTour.git
cd EgyTour
```

### 2. Install dependencies

```bash
bun install
# or
npm install
```

### 3. Set up environment variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# Database Configuration (PostgreSQL)
POSTGRES_USER=your_postgres_username
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=egytour_db

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_key_here
NEXTAUTH_URL=http://localhost:3000

# Weather API (Optional)
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
```

### 4. Set up the database

Create a PostgreSQL database and initialize the tables:

```bash
# Initialize database tables
bun run init-db
```

### 5. Run the development server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run linting and type checking
- `bun run format` - Format code with Biome
- `bun run init-db` - Initialize database tables
- `bun run clear-db` - Clear database (use with caution)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
├── contexts/              # React contexts
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── locales/               # Translation JSON files
├── translations/          # Translation TypeScript files
└── types/                 # TypeScript type definitions

public/
├── images/                # Static images
├── audio/                 # Music files organized by decade
└── fonts/                 # Custom fonts
```

## Features in Detail

### 🌐 Multilingual Support
- Full English and Arabic translations
- RTL support for Arabic
- Context-based language switching

### 🎵 Music Player
- Egyptian music from different eras (1960s-2020s)
- Background audio for immersive experience
- Organized by decades

### 👤 User System
- User registration and authentication
- Profile management
- Favorites system
- Review and rating system

### 📱 Responsive Design
- Mobile-first approach
- Works on all device sizes
- Touch-friendly interactions

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `POSTGRES_USER` | PostgreSQL username | Yes |
| `POSTGRES_PASSWORD` | PostgreSQL password | Yes |
| `POSTGRES_HOST` | PostgreSQL host | Yes |
| `POSTGRES_PORT` | PostgreSQL port | Yes |
| `POSTGRES_DATABASE` | Database name | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes |
| `NEXTAUTH_URL` | Base URL for auth | Yes |
| `NEXT_PUBLIC_OPENWEATHER_API_KEY` | Weather API key | Optional |

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Package Manager**: Bun
- **Linting**: Biome
- **Deployment**: Vercel/Netlify ready

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.

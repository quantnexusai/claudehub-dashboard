# Contributing to ClaudeHub Dashboard

Thanks for your interest in contributing! This guide covers local development setup.

## Prerequisites

- Node.js 18+
- npm or yarn
- Git

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/quantnexusai/claudehub-dashboard.git
cd claudehub-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values (optional - app works in demo mode without them):

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
claudehub-dashboard/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── api/             # API routes
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── profile/         # Profile page
│   │   └── reset-password/  # Password reset
│   ├── components/          # React components
│   │   ├── dashboard/       # Dashboard-specific
│   │   └── ui/              # Reusable UI
│   └── lib/                 # Utilities
│       ├── auth-context.tsx # Auth provider
│       ├── demo-data.ts     # Demo mode data
│       ├── supabase.ts      # DB client
│       └── types.ts         # TypeScript types
├── supabase/
│   └── schema.sql           # Database schema
├── public/                   # Static assets
└── package.json
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Setting Up Supabase Locally

### Option 1: Cloud Supabase (Recommended)

1. Create a project at [supabase.com](https://supabase.com)
2. Run `supabase/schema.sql` in SQL Editor
3. Copy API credentials to `.env.local`

### Option 2: Local Supabase

```bash
# Install Supabase CLI
npm install -g supabase

# Start local Supabase
supabase start

# Run migrations
supabase db reset
```

## Code Style

- TypeScript for all new code
- Tailwind CSS for styling
- Use existing component patterns
- Follow the existing file structure

## Making Changes

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test locally:
   ```bash
   npm run build
   ```

4. Commit with a clear message:
   ```bash
   git commit -m "Add: description of your change"
   ```

5. Push and create a Pull Request

## Pull Request Guidelines

- Describe what your PR does
- Include screenshots for UI changes
- Ensure the build passes
- Keep PRs focused on a single change

## Demo Mode

The app includes a demo mode for development without external services:

- Triggered when `NEXT_PUBLIC_SUPABASE_URL` is missing or placeholder
- Uses mock data from `src/lib/demo-data.ts`
- Claude API returns sample responses

To test demo mode locally, leave `.env.local` empty or remove it.

## Adding New Features

### New Dashboard Page

1. Create `src/app/dashboard/your-page/page.tsx`
2. Add navigation link in `src/components/dashboard/Sidebar.tsx`
3. Add demo data in `src/lib/demo-data.ts` if needed

### New API Endpoint

1. Create `src/app/api/your-endpoint/route.ts`
2. Handle demo mode with fallback responses
3. Add proper error handling

### New Component

1. Create in `src/components/` (or subdirectory)
2. Use TypeScript interfaces for props
3. Follow existing patterns for styling

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

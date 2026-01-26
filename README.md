# ClaudeHub Dashboard

A modern, full-featured dashboard application with Claude AI integration, built with Next.js, Supabase, and Tailwind CSS. Perfect for data visualization, business analytics, and AI-powered insights.

## Features

- **Dynamic Charts & Analytics** - Interactive bar, line, pie, and area charts with real-time data
- **Claude AI Integration** - Get intelligent insights and analysis powered by Claude
- **Secure Authentication** - Email/password auth with Supabase Auth
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates** - Live data synchronization with Supabase
- **Profile Management** - User settings and account management
- **Row-Level Security** - Secure data isolation per user

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: Anthropic Claude API
- **Deployment**: Netlify
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- An Anthropic API key

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

Copy the example environment file and fill in your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Anthropic Claude API
ANTHROPIC_API_KEY=your_anthropic_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set Up Supabase Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and run the contents of `supabase/schema.sql`

This will create all necessary tables with proper Row-Level Security policies.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
claudehub-dashboard/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── api/           # API routes
│   │   │   └── claude/    # Claude AI endpoint
│   │   ├── dashboard/     # Dashboard pages
│   │   │   ├── charts/    # Charts page
│   │   │   ├── claude/    # Claude AI chat
│   │   │   ├── forms/     # Forms page
│   │   │   └── groups/    # Groups page
│   │   ├── profile/       # Profile settings
│   │   └── reset-password/# Password reset
│   ├── components/        # React components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   └── ui/            # Reusable UI components
│   └── lib/               # Utilities and configs
│       ├── auth-context.tsx  # Auth context provider
│       ├── supabase.ts    # Supabase client
│       └── types.ts       # TypeScript types
├── supabase/
│   └── schema.sql         # Database schema and RLS policies
├── .env.example           # Example environment variables
├── netlify.toml           # Netlify configuration
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Landing | `/` | Public landing page with features, pricing, testimonials |
| Dashboard | `/dashboard` | Main dashboard with stats and overview |
| Charts | `/dashboard/charts` | Interactive chart visualizations |
| Forms | `/dashboard/forms` | Data entry forms |
| Groups | `/dashboard/groups` | Project and group management |
| Claude AI | `/dashboard/claude` | AI chat interface |
| Profile | `/profile` | User settings and account management |
| Reset Password | `/reset-password` | Password reset flow |

## Customization

### Adding New Charts

1. Add chart data to your Supabase database
2. Create a new chart component in `src/components/dashboard/`
3. Use Recharts components for visualization
4. Import and use in your dashboard pages

### Modifying Claude AI Behavior

Edit the system prompt in `src/app/api/claude/route.ts`:

```typescript
const SYSTEM_PROMPT = `Your custom instructions here...`
```

### Adding New Dashboard Tabs

1. Create a new page in `src/app/dashboard/your-tab/page.tsx`
2. Add the navigation item to `src/components/dashboard/Sidebar.tsx`
3. Style using Tailwind CSS classes

### Customizing the Theme

Edit `tailwind.config.js` to modify colors, fonts, and other design tokens:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
    },
  },
},
```

## Security Considerations

### Row-Level Security (RLS)

All database tables have RLS policies enabled. Users can only access their own data. Review `supabase/schema.sql` for policy details.

### Environment Variables

- Never commit `.env.local` to version control
- Use Netlify environment variables for production
- Keep your `SUPABASE_SERVICE_ROLE_KEY` secure (server-side only)
- Rotate API keys periodically

### Authentication

- Passwords require minimum 6 characters
- Email verification is optional (configure in Supabase)
- Session tokens are handled automatically by Supabase

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Connect your repo in Netlify dashboard
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables in Netlify

Add these in your Netlify dashboard under Site Settings > Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `NEXT_PUBLIC_APP_URL` (your Netlify domain)

## API Reference

### Claude AI Endpoint

**POST** `/api/claude`

Request body:
```json
{
  "message": "Your question or prompt",
  "conversationHistory": [
    { "role": "user", "content": "Previous message" },
    { "role": "assistant", "content": "Previous response" }
  ]
}
```

Response:
```json
{
  "response": "Claude's response text",
  "usage": {
    "input_tokens": 100,
    "output_tokens": 200
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions or issues:
- Open a GitHub issue
- Check existing issues for solutions

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Anthropic Claude](https://www.anthropic.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

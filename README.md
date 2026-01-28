# ClaudeHub Dashboard

A modern, full-featured dashboard with Claude AI integration. Deploy in minutes, no local setup required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fquantnexusai%2Fclaudehub-dashboard&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,ANTHROPIC_API_KEY&envDescription=Get%20keys%20from%20Supabase%20and%20Anthropic&envLink=https%3A%2F%2Fgithub.com%2Fquantnexusai%2Fclaudehub-dashboard%23environment-variables&project-name=claudehub-dashboard&repository-name=claudehub-dashboard)

## Features

- **Claude AI Integration** - Get intelligent insights and analysis
- **Interactive Charts** - Bar, line, pie, and area charts
- **Real-time Dashboard** - Stats, metrics, and KPIs at a glance
- **User Authentication** - Secure login with Supabase Auth
- **Demo Mode** - Works instantly without any configuration
- **Responsive Design** - Desktop, tablet, and mobile ready

## Quick Start (2 minutes)

### Step 1: Deploy to Vercel

Click the button above, or:

1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your forked repo
4. Deploy (works immediately in demo mode!)

### Step 2: Set Up Supabase (Optional)

To use real data instead of demo data:

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the schema:

```sql
-- Copy contents from supabase/schema.sql
```

Or use the quick setup link:
[Create Supabase Project with Schema](https://supabase.com/dashboard/new?template=claudehub)

3. Copy your credentials from **Settings > API**

### Step 3: Add Environment Variables

In your Vercel dashboard, go to **Settings > Environment Variables** and add:

| Variable | Where to Find |
|----------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase > Settings > API > Project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase > Settings > API > Publishable key |
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |

### Step 4: Redeploy

Vercel will automatically redeploy when you add environment variables. Your dashboard is now fully connected!

## Demo Mode

The app works **without any configuration**. When API keys aren't set:

- Authentication uses demo credentials
- Dashboard shows sample data
- Claude AI returns helpful demo responses
- All features are explorable

This lets you try everything before connecting your own services.

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 15 |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| AI | Claude API |
| Hosting | Vercel |

## Project Structure

```
src/
├── app/                    # Next.js pages
│   ├── dashboard/         # Dashboard views
│   │   ├── charts/       # Chart visualizations
│   │   ├── claude/       # AI chat interface
│   │   ├── forms/        # Data entry forms
│   │   └── groups/       # Project management
│   ├── profile/          # User settings
│   └── api/claude/       # AI API endpoint
├── components/            # React components
└── lib/                   # Utilities
    ├── supabase.ts       # Database client
    ├── auth-context.tsx  # Auth provider
    └── demo-data.ts      # Demo mode data
```

## Customization

### Using Claude Code

The easiest way to customize this dashboard:

1. Install [Claude Code](https://claude.ai/code)
2. Open your forked repo
3. Ask Claude to make changes:
   - "Add a new chart showing monthly trends"
   - "Change the color scheme to dark mode"
   - "Add a new dashboard tab for inventory"

### Manual Changes

Edit files directly on GitHub or clone locally. Key files:

- `src/app/page.tsx` - Landing page
- `src/app/dashboard/page.tsx` - Main dashboard
- `src/lib/demo-data.ts` - Demo data
- `tailwind.config.js` - Colors and theme

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase publishable key |
| `ANTHROPIC_API_KEY` | Yes | Claude API key |

## Database Schema

The Supabase schema includes:

- `profiles` - User profiles
- `sales_stats` - Dashboard statistics
- `transactions` - Financial transactions
- `projects` - Project tracking
- `invoices` - Invoice management
- `chat_messages` - AI conversation history

All tables have Row-Level Security (RLS) enabled.

## Security

- Environment variables never exposed to client (except `NEXT_PUBLIC_*`)
- Supabase RLS ensures users only access their own data
- API routes validate requests server-side
- HTTPS enforced in production

## Support

- [Open an issue](https://github.com/quantnexusai/claudehub-dashboard/issues)
- [View discussions](https://github.com/quantnexusai/claudehub-dashboard/discussions)

**Need help with deployment, configuration, or customization (MCP servers, AI agents, etc.)?**
Contact us at **templates@quantnexus.ai**

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for local development setup.

## License

MIT License - use freely for personal or commercial projects.

---

Built with [Next.js](https://nextjs.org), [Supabase](https://supabase.com), [Claude](https://anthropic.com), and [Vercel](https://vercel.com).

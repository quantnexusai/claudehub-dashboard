// Demo data for running the app without Supabase connection

export const isDemoMode = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  return !supabaseUrl || supabaseUrl === '' || supabaseUrl.includes('placeholder')
}

export const demoUser = {
  id: 'demo-user-id',
  email: 'demo@claudehub.com',
  created_at: new Date().toISOString(),
}

export const demoProfile = {
  id: 'demo-user-id',
  created_at: new Date().toISOString(),
  email: 'demo@claudehub.com',
  first_name: 'Demo',
  last_name: 'User',
  avatar_url: null,
  phone: '+1 (555) 123-4567',
}

export const demoStats = {
  id: 'demo-stats',
  created_at: new Date().toISOString(),
  invoices: 156,
  offline: 3420,
  online: 5000,
  projects: 89,
  queries: 1250,
  returns: 23,
  revenue: 124500,
  users: 8420,
  user_id: 'demo-user-id',
}

export const demoTransactions = [
  { id: '1', created_at: new Date().toISOString(), amount: 2500, description: 'Project Alpha payment', type: 'income', user_id: 'demo-user-id' },
  { id: '2', created_at: new Date(Date.now() - 86400000).toISOString(), amount: 1200, description: 'Software subscription', type: 'expense', user_id: 'demo-user-id' },
  { id: '3', created_at: new Date(Date.now() - 172800000).toISOString(), amount: 4800, description: 'Consulting fee', type: 'income', user_id: 'demo-user-id' },
  { id: '4', created_at: new Date(Date.now() - 259200000).toISOString(), amount: 350, description: 'Office supplies', type: 'expense', user_id: 'demo-user-id' },
  { id: '5', created_at: new Date(Date.now() - 345600000).toISOString(), amount: 1800, description: 'Client retainer', type: 'income', user_id: 'demo-user-id' },
]

export const demoProjects = [
  { id: '1', created_at: new Date().toISOString(), amount: 12500, deadline: '2024-03-15', first_name: 'John Smith', image_url: null, product: 'Website Redesign', progress: 75, status: 'In Progress', user_id: 'demo-user-id' },
  { id: '2', created_at: new Date().toISOString(), amount: 8200, deadline: '2024-03-20', first_name: 'Sarah Johnson', image_url: null, product: 'Mobile App', progress: 45, status: 'In Progress', user_id: 'demo-user-id' },
  { id: '3', created_at: new Date().toISOString(), amount: 15000, deadline: '2024-02-28', first_name: 'Mike Wilson', image_url: null, product: 'E-commerce Platform', progress: 100, status: 'Completed', user_id: 'demo-user-id' },
  { id: '4', created_at: new Date().toISOString(), amount: 5500, deadline: '2024-04-01', first_name: 'Emily Davis', image_url: null, product: 'Dashboard UI', progress: 20, status: 'Planning', user_id: 'demo-user-id' },
  { id: '5', created_at: new Date().toISOString(), amount: 9800, deadline: '2024-03-25', first_name: 'Alex Brown', image_url: null, product: 'API Integration', progress: 60, status: 'In Progress', user_id: 'demo-user-id' },
]

export const demoClaudeResponses: Record<string, string> = {
  default: `I'm running in demo mode, so I can't provide real AI analysis.

To enable full Claude AI functionality:
1. Get an API key from console.anthropic.com
2. Add it to your Vercel environment variables as ANTHROPIC_API_KEY
3. Redeploy your app

In the meantime, feel free to explore the dashboard! All other features work in demo mode.`,

  'analyze': `**Demo Analysis Report**

Based on your dashboard data:
- Revenue is trending upward (+12.5% this month)
- User engagement is strong with 8,420 active users
- Project completion rate is at 89%

*Note: This is sample output. Connect your Anthropic API key for real AI-powered analysis.*`,

  'sales': `**Demo Sales Insights**

Your sales data shows:
- Total revenue: $124,500
- Online sales: 60% of total
- Top performing month: December

*Note: This is sample output. Connect your Anthropic API key for real AI-powered insights.*`,

  'help': `**What I can help with (when connected):**

- Analyze your sales and revenue trends
- Generate reports and summaries
- Answer questions about your data
- Provide business recommendations
- Help with forecasting

*Currently in demo mode - add your Anthropic API key to enable these features.*`,
}

export const getDemoClaudeResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('analyze') || lowerMessage.includes('analysis')) {
    return demoClaudeResponses['analyze']
  }
  if (lowerMessage.includes('sales') || lowerMessage.includes('revenue')) {
    return demoClaudeResponses['sales']
  }
  if (lowerMessage.includes('help') || lowerMessage.includes('what can')) {
    return demoClaudeResponses['help']
  }

  return demoClaudeResponses['default']
}

import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPT = `You are Claude, an AI assistant integrated into ClaudeHub Dashboard. You help users analyze their business data, generate insights, create reports, and answer questions about their dashboard metrics.

Your capabilities include:
- Analyzing sales trends and patterns
- Providing business insights and recommendations
- Helping with data interpretation
- Generating summary reports
- Answering questions about metrics and KPIs
- Suggesting improvements based on data

Be helpful, concise, and actionable in your responses. When discussing numbers or trends, be specific and provide context. If you need more information to provide accurate analysis, ask clarifying questions.`

interface ConversationMessage {
  role: 'user' | 'assistant'
  content: string
}

// Demo responses when API key is not configured
const getDemoResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('analyze') || lowerMessage.includes('analysis')) {
    return `**Demo Analysis Report**

Based on your dashboard data:
- Revenue is trending upward (+12.5% this month)
- User engagement is strong with 8,420 active users
- Project completion rate is at 89%

*This is a demo response. To enable real AI analysis, add your ANTHROPIC_API_KEY in Vercel environment variables.*`
  }

  if (lowerMessage.includes('sales') || lowerMessage.includes('revenue')) {
    return `**Demo Sales Insights**

Your sales data shows:
- Total revenue: $124,500
- Online sales: 60% of total
- Top performing month: December

*This is a demo response. To enable real AI insights, add your ANTHROPIC_API_KEY in Vercel environment variables.*`
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('what can')) {
    return `**What I can help with:**

- Analyze your sales and revenue trends
- Generate reports and summaries
- Answer questions about your data
- Provide business recommendations
- Help with forecasting

*Currently in demo mode. Add your ANTHROPIC_API_KEY in Vercel to enable full AI capabilities.*`
  }

  return `Thanks for your message! I'm currently running in demo mode.

To enable full Claude AI functionality:
1. Go to console.anthropic.com and get an API key
2. Add ANTHROPIC_API_KEY to your Vercel environment variables
3. Redeploy your app

In the meantime, try asking me to "analyze sales" or "help" to see sample responses!`
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey || apiKey === '' || apiKey.includes('placeholder')) {
      // Return demo response
      return NextResponse.json({
        response: getDemoResponse(message),
        usage: { input_tokens: 0, output_tokens: 0 },
        demo: true,
      })
    }

    const anthropic = new Anthropic({ apiKey })

    // Build messages array from conversation history
    const messages: Anthropic.MessageParam[] = [
      ...(conversationHistory || []).map((msg: ConversationMessage) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      {
        role: 'user' as const,
        content: message,
      },
    ]

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    })

    // Extract text from response
    const textContent = response.content.find((block) => block.type === 'text')
    const responseText = textContent && 'text' in textContent ? textContent.text : ''

    return NextResponse.json({
      response: responseText,
      usage: response.usage,
      demo: false,
    })
  } catch (error) {
    console.error('Claude API error:', error)

    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status || 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

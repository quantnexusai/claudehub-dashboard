import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

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

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Anthropic API key not configured' },
        { status: 500 }
      )
    }

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

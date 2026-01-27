'use client'

import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

export default function DemoBanner() {
  const { isDemo } = useAuth()
  const [dismissed, setDismissed] = useState(false)

  if (!isDemo || dismissed) return null

  return (
    <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <Sparkles className="w-4 h-4" />
          <span>
            <strong>Demo Mode</strong> — Explore all features with sample data.
            <a
              href="https://github.com/quantnexusai/claudehub-dashboard#setup"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1 hover:text-white/90"
            >
              Connect Supabase & Claude
            </a>
            {' '}to use your own data.
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

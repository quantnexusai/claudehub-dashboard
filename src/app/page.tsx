'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BarChart3,
  Bot,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Check,
  Menu,
  X
} from 'lucide-react'
import AuthModal from '@/components/AuthModal'

const features = [
  {
    icon: BarChart3,
    title: 'Dynamic Charts',
    description: 'Interactive bar, line, pie, and area charts with real-time data updates from your database.',
  },
  {
    icon: Bot,
    title: 'Claude AI Integration',
    description: 'Get intelligent insights, predictions, and analysis powered by Claude AI directly in your dashboard.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built-in authentication, row-level security, and encrypted data storage with Supabase.',
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'See changes instantly with real-time subscriptions and live data synchronization.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Manage users, roles, and permissions for seamless team collaboration.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Reports',
    description: 'Track KPIs, generate reports, and monitor business metrics at a glance.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out ClaudeHub',
    features: [
      'Up to 1,000 data entries',
      'Basic charts and graphs',
      '5 AI queries per day',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    featured: true,
    features: [
      'Unlimited data entries',
      'Advanced analytics',
      '100 AI queries per day',
      'Priority support',
      'Custom dashboards',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Unlimited AI queries',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
  },
]

const testimonials = [
  {
    quote: "ClaudeHub transformed how we analyze our data. The AI insights are incredibly valuable.",
    author: "Sarah Chen",
    role: "Data Analyst at TechCorp",
  },
  {
    quote: "The best dashboard solution we've used. Clean, fast, and the Claude integration is amazing.",
    author: "Michael Torres",
    role: "CTO at StartupXYZ",
  },
  {
    quote: "Finally, a dashboard that's both powerful and easy to use. Highly recommended!",
    author: "Emily Johnson",
    role: "Product Manager at InnovateCo",
  },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setAuthModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ClaudeHub</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <button
                onClick={() => openAuthModal('signin')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4 px-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 py-2">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 py-2">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 py-2">Testimonials</a>
              <button
                onClick={() => openAuthModal('signin')}
                className="text-gray-600 hover:text-gray-900 py-2 text-left"
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="btn-primary w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Data, Powered by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                Claude AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A modern dashboard for data visualization, management, and AI-powered insights.
              Built with Next.js, Supabase, and Claude for the ultimate analytics experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAuthModal('signup')}
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="#features"
                className="btn-outline text-lg px-8 py-3"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Total Revenue', value: '$124,500', change: '+12.5%' },
                    { label: 'Active Users', value: '8,420', change: '+8.2%' },
                    { label: 'Projects', value: '156', change: '+23.1%' },
                    { label: 'Conversion', value: '3.24%', change: '+2.4%' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                  ))}
                </div>
                <div className="h-48 bg-gradient-to-r from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-primary-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you visualize, analyze, and act on your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`card ${plan.featured ? 'ring-2 ring-primary-500 relative' : ''}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openAuthModal('signup')}
                  className={plan.featured ? 'btn-primary w-full' : 'btn-outline w-full'}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by Teams Everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users have to say about ClaudeHub Dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="card">
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of teams using ClaudeHub to make better decisions.
          </p>
          <button
            onClick={() => openAuthModal('signup')}
            className="btn-primary text-lg px-8 py-3"
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ClaudeHub</span>
              </div>
              <p className="text-gray-400">
                Modern dashboard with AI-powered insights for your business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ClaudeHub Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </div>
  )
}

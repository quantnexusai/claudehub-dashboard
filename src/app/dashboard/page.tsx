'use client'

import { useEffect, useState } from 'react'
import {
  DollarSign,
  Users,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import { demoStats, demoTransactions } from '@/lib/demo-data'
import type { SalesStats, Transaction } from '@/lib/types'
import RevenueChart from '@/components/dashboard/RevenueChart'
import RecentTransactions from '@/components/dashboard/RecentTransactions'

interface StatCardProps {
  title: string
  value: string
  change: number
  icon: React.ElementType
  iconBg: string
  iconColor: string
}

function StatCard({ title, value, change, icon: Icon, iconBg, iconColor }: StatCardProps) {
  const isPositive = change >= 0

  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className={`flex items-center gap-1 mt-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            <span>{Math.abs(change)}% from last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-xl ${iconBg}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  )
}

export default function DashboardOverview() {
  const { user, isDemo } = useAuth()
  const [stats, setStats] = useState<SalesStats | null>(null)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      fetchData()
    }
  }, [user, isDemo])

  const fetchData = async () => {
    // Use demo data if in demo mode
    if (isDemo) {
      setStats(demoStats)
      setTransactions(demoTransactions)
      setLoading(false)
      return
    }

    try {
      // Fetch stats from Supabase
      const { data: statsData } = await supabase
        .from('sales_stats')
        .select('*')
        .eq('user_id', user!.id)
        .single()

      setStats(statsData || demoStats)

      // Fetch transactions
      const { data: txData } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false })
        .limit(5)

      setTransactions(txData && txData.length > 0 ? txData : demoTransactions)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      // Fallback to demo data on error
      setStats(demoStats)
      setTransactions(demoTransactions)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  const statCards: StatCardProps[] = [
    {
      title: 'Total Revenue',
      value: `$${stats?.revenue?.toLocaleString() || '0'}`,
      change: 12.5,
      icon: DollarSign,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Active Users',
      value: stats?.users?.toLocaleString() || '0',
      change: 8.2,
      icon: Users,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Invoices',
      value: stats?.invoices?.toLocaleString() || '0',
      change: -2.4,
      icon: FileText,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Projects',
      value: stats?.projects?.toLocaleString() || '0',
      change: 23.1,
      icon: TrendingUp,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <RecentTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

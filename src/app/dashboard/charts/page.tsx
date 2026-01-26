'use client'

import { useState } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const barData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
]

const lineData = [
  { name: 'Week 1', visitors: 4000, pageViews: 2400, bounceRate: 24 },
  { name: 'Week 2', visitors: 3000, pageViews: 1398, bounceRate: 22 },
  { name: 'Week 3', visitors: 2000, pageViews: 9800, bounceRate: 29 },
  { name: 'Week 4', visitors: 2780, pageViews: 3908, bounceRate: 20 },
]

const pieData = [
  { name: 'Desktop', value: 400, color: '#0ea5e9' },
  { name: 'Mobile', value: 300, color: '#8b5cf6' },
  { name: 'Tablet', value: 200, color: '#f43f5e' },
  { name: 'Other', value: 100, color: '#f59e0b' },
]

const areaData = [
  { name: 'Mon', cpu: 40, memory: 24, network: 10 },
  { name: 'Tue', cpu: 30, memory: 13, network: 22 },
  { name: 'Wed', cpu: 20, memory: 98, network: 30 },
  { name: 'Thu', cpu: 27, memory: 39, network: 25 },
  { name: 'Fri', cpu: 18, memory: 48, network: 18 },
  { name: 'Sat', cpu: 23, memory: 38, network: 12 },
  { name: 'Sun', cpu: 34, memory: 43, network: 8 },
]

type ChartType = 'bar' | 'line' | 'pie' | 'area'

export default function ChartsPage() {
  const [selectedChart, setSelectedChart] = useState<ChartType>('bar')

  const chartTypes: { type: ChartType; label: string }[] = [
    { type: 'bar', label: 'Bar Chart' },
    { type: 'line', label: 'Line Chart' },
    { type: 'pie', label: 'Pie Chart' },
    { type: 'area', label: 'Area Chart' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Charts & Analytics</h1>
        <p className="text-gray-600">Visualize your data with interactive charts.</p>
      </div>

      {/* Chart Type Selector */}
      <div className="flex flex-wrap gap-2">
        {chartTypes.map((chart) => (
          <button
            key={chart.type}
            onClick={() => setSelectedChart(chart.type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedChart === chart.type
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {chart.label}
          </button>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Main Selected Chart */}
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            {chartTypes.find((c) => c.type === selectedChart)?.label}
          </h3>
          <div className="h-96">
            {selectedChart === 'bar' && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="sales" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="profit" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
            {selectedChart === 'line' && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="visitors" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: '#0ea5e9' }} />
                  <Line type="monotone" dataKey="pageViews" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
                </LineChart>
              </ResponsiveContainer>
            )}
            {selectedChart === 'pie' && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
            {selectedChart === 'area' && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorMemory" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorNetwork" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="cpu" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorCpu)" />
                  <Area type="monotone" dataKey="memory" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorMemory)" />
                  <Area type="monotone" dataKey="network" stroke="#f43f5e" fillOpacity={1} fill="url(#colorNetwork)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Summary</h3>
          <div className="space-y-4">
            {barData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-gray-600">{item.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-primary-600">${item.sales.toLocaleString()}</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full"
                      style={{ width: `${(item.sales / 4000) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Distribution</h3>
          <div className="space-y-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{item.value}</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(item.value / 400) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

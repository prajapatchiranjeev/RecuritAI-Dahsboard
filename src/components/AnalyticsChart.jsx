/**
 * AnalyticsChart Component
 * 
 * Displays a line chart showing recruitment analytics over time.
 * Matches the Figma design with exact colors, styling, and layout.
 * 
 * Features:
 * - Interactive period selection (6 Months / 1 Year)
 * - Three data series: Applicants, Hired, Interviews
 * - Responsive design with horizontal scroll on mobile
 * - Custom styling matching Figma design specifications
 * 
 * @component
 * @returns {JSX.Element} Analytics chart component
 */

import React, { useState, useMemo } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AnalyticsChart = () => {
  // State for selected time period
  const [selectedPeriod, setSelectedPeriod] = useState('6 Months')
  
  /**
   * Chart data matching Figma design specifications
   * Values are calibrated to match the visual representation in the design
   */
  const chartData = useMemo(() => [
    { month: 'Jan', applicants: 420, hired: 95, interviews: 350 },
    { month: 'Feb', applicants: 510, hired: 125, interviews: 410 },
    { month: 'Mar', applicants: 480, hired: 115, interviews: 390 },
    { month: 'Apr', applicants: 570, hired: 145, interviews: 450 },
    { month: 'May', applicants: 600, hired: 155, interviews: 480 },
    { month: 'Jun', applicants: 680, hired: 175, interviews: 540 },
  ], [])

  /**
   * Handle period selection
   * @param {string} period - Selected period ('6 Months' or '1 Year')
   */
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period)
    // Future: Update data based on selected period
  }

  /**
   * Custom tooltip component for better styling
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="p-3 rounded-lg border shadow-lg"
          style={{ 
            backgroundColor: '#1e293b', 
            borderColor: 'rgba(255,255,255,0.1)'
          }}
        >
          <p className="text-white text-sm font-medium mb-2">
            {payload[0].payload.month}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs mb-1" style={{ color: entry.color }}>
              {entry.name}: <span className="font-semibold">{entry.value}</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div 
      className="border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm" 
      style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <div>
          <h2 className="text-white text-lg sm:text-xl font-bold mb-1">
            Recruitment Analytics
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Monthly performance overview
          </p>
        </div>
        
        {/* Period Selection Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => handlePeriodChange('6 Months')}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors" 
            style={{ 
              backgroundColor: selectedPeriod === '6 Months' 
                ? 'rgba(124, 58, 237, 0.2)' 
                : 'rgba(255, 255, 255, 0.05)', 
              color: selectedPeriod === '6 Months' 
                ? '#a78bfa' 
                : '#9ca3af' 
            }}
            aria-label="Select 6 months view"
          >
            6 Months
          </button>
          <button 
            onClick={() => handlePeriodChange('1 Year')}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors" 
            style={{ 
              backgroundColor: selectedPeriod === '1 Year' 
                ? 'rgba(124, 58, 237, 0.2)' 
                : 'rgba(255, 255, 255, 0.05)', 
              color: selectedPeriod === '1 Year' 
                ? '#a78bfa' 
                : '#9ca3af' 
            }}
            aria-label="Select 1 year view"
          >
            1 Year
          </button>
        </div>
      </div>

      {/* Chart Container - Fixed height for ResponsiveContainer */}
      <div className="w-full h-64 sm:h-80 mb-4 sm:mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={chartData} 
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            {/* Grid Lines - Matching Figma design */}
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="rgba(255, 255, 255, 0.06)"
              vertical={false}
            />
            
            {/* X-Axis - Month labels */}
            <XAxis 
              dataKey="month" 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            
            {/* Y-Axis - Value labels */}
            <YAxis 
              stroke="#94a3b8"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 800]}
              ticks={[0, 200, 400, 600, 800]}
            />
            
            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} />
            
            {/* Applicants Line - Purple */}
            <Line 
              type="monotone" 
              dataKey="applicants" 
              name="Applicants"
              stroke="#7C3AED" 
              strokeWidth={3}
              dot={{ fill: '#7C3AED', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#7C3AED' }}
            />
            
            {/* Hired Line - Cyan */}
            <Line 
              type="monotone" 
              dataKey="hired" 
              name="Hired"
              stroke="#06B6D4" 
              strokeWidth={3}
              dot={{ fill: '#06B6D4', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#06B6D4' }}
            />
            
            {/* Interviews Line - Green */}
            <Line 
              type="monotone" 
              dataKey="interviews" 
              name="Interviews"
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#10B981' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Section - Matching Figma design */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 pt-4 sm:pt-6 border-t border-white/10 flex-wrap">
        <div className="flex items-center gap-2">
          <div 
            className="w-3.5 h-3.5 rounded-full" 
            style={{ backgroundColor: '#7C3AED' }}
            aria-label="Applicants line color"
          ></div>
          <span className="text-gray-400 text-xs">Applicants</span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="w-3.5 h-3.5 rounded-full" 
            style={{ backgroundColor: '#06B6D4' }}
            aria-label="Hired line color"
          ></div>
          <span className="text-gray-400 text-xs">Hired</span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="w-3.5 h-3.5 rounded-full" 
            style={{ backgroundColor: '#10B981' }}
            aria-label="Interviews line color"
          ></div>
          <span className="text-gray-400 text-xs">Interviews</span>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsChart

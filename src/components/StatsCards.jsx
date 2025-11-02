import React from 'react'

const StatsCards = () => {
  const getGradientStyle = (gradient) => {
    const gradients = {
      'from-purple-600 to-purple-700': { background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(147, 51, 234, 1) 100%)' },
      'from-cyan-500 to-blue-600': { background: 'linear-gradient(135deg, rgba(8, 145, 178, 1) 0%, rgba(37, 99, 235, 1) 100%)' },
      'from-green-600 to-green-700': { background: 'linear-gradient(135deg, rgba(5, 150, 105, 1) 0%, rgba(22, 163, 74, 1) 100%)' },
      'from-red-600 to-red-700': { background: 'linear-gradient(135deg, rgba(225, 29, 72, 1) 0%, rgba(220, 38, 38, 1) 100%)' },
    }
    return gradients[gradient] || {}
  }
  const stats = [
    {
      title: 'Total Applicants',
      value: '1,284',
      change: '+12.5%',
      changeType: 'positive',
      icon: '📋',
      gradient: 'from-purple-600 to-purple-700',
    },
    {
      title: 'Interviews Scheduled',
      value: '342',
      change: '+8.2%',
      changeType: 'positive',
      icon: '📅',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Hired',
      value: '156',
      change: '+15.3%',
      changeType: 'positive',
      icon: '✅',
      gradient: 'from-green-600 to-green-700',
    },
    {
      title: 'Rejected',
      value: '428',
      change: '-3.1%',
      changeType: 'negative',
      icon: '❌',
      gradient: 'from-red-600 to-red-700',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="relative border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-xl sm:text-2xl shadow-lg" style={getGradientStyle(stat.gradient)}>
              {stat.icon}
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              stat.changeType === 'positive'
                ? 'text-green-400'
                : 'text-red-400'
            }`} style={stat.changeType === 'positive' ? { backgroundColor: 'rgba(16, 185, 129, 0.2)' } : { backgroundColor: 'rgba(244, 63, 94, 0.2)' }}>
              <span className="inline-flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.changeType === 'positive' ? "M13 7l5 5m0 0l-5 5m5-5H6" : "M13 17l5-5m0 0l-5-5m5 5H6"} />
                </svg>
                {stat.change}
              </span>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-xs sm:text-sm mb-1">{stat.title}</p>
            <p className="text-white text-2xl sm:text-3xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards

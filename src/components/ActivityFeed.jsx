import React from 'react'

const ActivityFeed = () => {
  const activities = [
    {
      icon: '👤',
      iconBg: 'bg-purple-500/20',
      title: 'New applicant: Rahul Prajapat applied for Senior Designer',
      time: '5 minutes ago',
    },
    {
      icon: '📅',
      iconBg: 'bg-cyan-500/20',
      title: 'Interview scheduled with Anisha Sharma for tomorrow at 2 PM',
      time: '1 hour ago',
    },
    {
      icon: '✅',
      iconBg: 'bg-green-500/20',
      title: 'Offer sent to Harshit Saxena for Product Manager role',
      time: '3 hours ago',
    },
    {
      icon: '📄',
      iconBg: 'bg-amber-500/20',
      title: 'Resume reviewed: Vishal Sharma - Data Analyst position',
      time: '5 hours ago',
    },
  ]

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden relative" style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
      <div className="p-4 sm:p-6 border-b border-white/10">
        <h2 className="text-white text-lg sm:text-xl font-bold mb-1">Activity Feed</h2>
        <p className="text-gray-400 text-xs sm:text-sm">Recent recruitment activities</p>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-[400px] sm:max-h-none overflow-y-auto">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4 relative">
            {index < activities.length - 1 && (
              <div className="absolute left-4 sm:left-5 top-10 sm:top-12 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-purple-600 to-transparent"></div>
            )}
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${activity.iconBg} flex items-center justify-center text-lg sm:text-xl flex-shrink-0 relative z-10`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs sm:text-sm mb-1">{activity.title}</p>
              <p className="text-gray-500 text-xs">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 sm:p-4 border-t border-white/10">
        <button className="w-full py-2 bg-transparent hover:bg-white/5 border border-white/10 rounded-lg text-purple-400 font-medium text-xs sm:text-sm transition-colors">
          View Full Activity Log
        </button>
      </div>

    </div>
  )
}

export default ActivityFeed

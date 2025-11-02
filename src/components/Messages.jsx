import React from 'react'

const Messages = () => {
  const messages = [
    {
      initials: 'RP',
      name: 'Rahul Prajapat',
      time: '2m ago',
      message: 'Thanks for scheduling the interview!',
      unread: true,
    },
    {
      initials: 'NS',
      name: 'Nikita Saini',
      time: '15m ago',
      message: 'I have a question about the role...',
      unread: true,
    },
    {
      initials: 'AR',
      name: 'Anil Roy',
      time: '1h ago',
      message: 'Looking forward to hearing back',
      unread: false,
    },
    {
      initials: 'PS',
      name: 'Pooja Sharma',
      time: '3h ago',
      message: 'Thank you for the opportunity',
      unread: false,
    },
    {
      initials: 'AK',
      name: 'Ankit Kumar',
      time: '5h ago',
      message: 'When can I expect a response?',
      unread: false,
    },
  ]

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }}>
      <div className="p-4 sm:p-6 border-b border-white/10">
        <h2 className="text-white text-lg sm:text-xl font-bold mb-1">Messages</h2>
        <p className="text-gray-400 text-xs sm:text-sm">Recent conversations</p>
      </div>

      <div className="divide-y divide-white/5 max-h-[400px] sm:max-h-none overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="p-3 sm:p-4 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }}>
                  <span className="text-white font-semibold text-xs">{msg.initials}</span>
                </div>
                {msg.unread && (
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2" style={{ backgroundColor: '#8b5cf6', borderColor: '#1e293b' }}></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1 gap-2">
                  <p className="text-white font-medium text-xs sm:text-sm truncate">{msg.name}</p>
                  <span className="text-gray-500 text-xs flex-shrink-0">{msg.time}</span>
                </div>
                <p className={`text-xs sm:text-sm truncate ${
                  msg.unread ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {msg.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 sm:p-4 border-t border-white/10">
        <button className="w-full py-2 bg-transparent hover:bg-white/5 border border-white/10 rounded-lg text-purple-400 font-medium text-xs sm:text-sm transition-colors">
          View All Messages
        </button>
      </div>
    </div>
  )
}

export default Messages

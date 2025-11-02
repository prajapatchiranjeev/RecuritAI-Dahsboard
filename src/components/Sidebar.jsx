import React from 'react'

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '👥', label: 'Applicants', active: false },
    { icon: '📈', label: 'Analytics', active: false },
    { icon: '💬', label: 'Messages', active: false },
    { icon: '⚙️', label: 'Settings', active: false },
  ]

  return (
    <>
      <div 
        className={`w-64 h-screen bg-slate-800/95 border-r border-white/10 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'rgba(30, 41, 59, 0.95)' }}
      >
        {/* Logo */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }}>
              <span className="text-white font-bold text-base sm:text-lg">R</span>
            </div>
            <span className="text-white font-bold text-base sm:text-lg">RecruitAI</span>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-3 sm:p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={onClose}
              className={`w-full flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all ${
                item.active
                  ? 'text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              style={item.active ? {
                backgroundColor: 'transparent',
                boxShadow: '0px 10px 15px -3px rgba(139, 92, 246, 0.2), 0px 4px 6px -4px rgba(139, 92, 246, 0.2)'
              } : {}}
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <span className="font-medium text-xs sm:text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Sidebar

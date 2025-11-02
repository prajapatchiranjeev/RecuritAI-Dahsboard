import React from 'react'

const Header = ({ onMenuClick }) => {
  return (
    <header className="border-b border-white/10 px-3 sm:px-6 py-3 sm:py-4" style={{ background: 'linear-gradient(90deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%)' }}>
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-2xl">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex-1 relative min-w-0">
            <div className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 border-l border-white/10 pl-2 sm:pl-4">
            <div className="text-right hidden sm:block">
              <p className="text-white text-xs sm:text-sm font-medium">Trioutma Rathore</p>
              <p className="text-gray-400 text-xs">HR Manager</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 border-purple-500/30 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }}>
              <span className="text-white font-semibold text-xs sm:text-sm">TR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

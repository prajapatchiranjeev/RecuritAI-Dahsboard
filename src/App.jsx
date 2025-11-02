/**
 * App Component
 * 
 * Main application component that orchestrates the entire RecruitAI dashboard.
 * 
 * Features:
 * - Responsive layout with sidebar navigation
 * - Mobile-friendly hamburger menu
 * - Main dashboard content with statistics, charts, and tables
 * - Integrated Gemini AI chatbot
 * 
 * Component Structure:
 * - Sidebar: Navigation menu (hidden on mobile, slide-in)
 * - Header: Top navigation with search and user profile
 * - Main Content:
 *   - StatsCards: Key recruitment metrics
 *   - AnalyticsChart: Recruitment analytics visualization
 *   - RecentApplicants: Latest applicant submissions
 *   - Messages: Recent conversations
 *   - ActivityFeed: Recruitment activity timeline
 * - GeminiChatbot: AI assistant for recruitment queries
 * 
 * @component
 * @returns {JSX.Element} Main application component
 */

import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import AnalyticsChart from './components/AnalyticsChart'
import RecentApplicants from './components/RecentApplicants'
import Messages from './components/Messages'
import ActivityFeed from './components/ActivityFeed'
import GeminiChatbot from './components/GeminiChatbot'

function App() {
  // State for mobile sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false)

  /**
   * Handle sidebar close
   */
  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  /**
   * Toggle sidebar open/closed
   */
  const handleSidebarToggle = () => {
    setSidebarOpen(prev => !prev)
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" 
      style={{ 
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 85%, rgba(15, 23, 42, 1) 100%)' 
      }}
    >
      {/* Mobile Overlay - Darkens background when sidebar is open */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleSidebarClose}
          aria-label="Close sidebar overlay"
        />
      )}
      
      <div className="flex">
        {/* Sidebar Navigation */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={handleSidebarClose} 
        />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen lg:ml-64 w-full lg:w-auto">
          {/* Header */}
          <Header onMenuClick={handleSidebarToggle} />
          
          {/* Main Dashboard Content */}
          <main className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Statistics Cards Row */}
            <StatsCards />
            
            {/* Dashboard Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
              {/* Left Column - Analytics and Applicants */}
              <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                <AnalyticsChart />
                <RecentApplicants />
              </div>
              
              {/* Right Column - Messages and Activity */}
              <div className="space-y-3 sm:space-y-4">
                <Messages />
                <ActivityFeed />
              </div>
            </div>
          </main>
        </div>
        
        {/* AI Chatbot - Floating button */}
        <GeminiChatbot />
      </div>
    </div>
  )
}

export default App

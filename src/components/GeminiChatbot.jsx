/**
 * GeminiChatbot Component
 * 
 * AI-powered chatbot integrated with Google Gemini API for recruitment assistance.
 * Provides intelligent responses to recruitment-related queries.
 * 
 * Features:
 * - Floating chat button with notification badge
 * - Expandable chat window with message history
 * - Integration with Google Gemini AI
 * - Mock responses when API key is not configured
 * - Responsive design for mobile and desktop
 * - Smooth animations and transitions
 * 
 * @component
 * @returns {JSX.Element} Chatbot component
 */

import React, { useState, useRef, useEffect, useCallback } from 'react'

const GeminiChatbot = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your RecruitAI assistant. How can I help you with your recruitment needs today?'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  /**
   * Scroll to bottom of messages when new messages are added
   */
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  /**
   * Send message to Gemini API or use mock response
   * @param {string} userMessage - User's message text
   */
  const sendMessage = useCallback(async (userMessage) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
    
    // Use mock responses if no API key is configured
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
      const mockResponses = [
        "I can help you with recruitment analytics, applicant management, and interview scheduling. What specific information would you like to know?",
        "Based on your dashboard, you have 1,284 total applicants with 342 interviews scheduled. Would you like more details about any specific metric?",
        "I can assist you with:\n• Analyzing recruitment trends\n• Managing applicant pipelines\n• Scheduling interviews\n• Reviewing candidate profiles\n\nWhat would you like to explore?",
        "Great question! Your hiring rate shows a positive trend with a 15.3% increase. The recruitment analytics chart indicates strong performance across all metrics.",
        "I can provide insights on:\n• Candidate screening processes\n• Interview best practices\n• Recruitment metrics analysis\n• Pipeline optimization strategies\n\nWhat area would you like to focus on?"
      ]
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      return randomResponse
    }

    // Call Gemini API
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a helpful recruitment assistant for RecruitAI. Help users with recruitment-related questions about applicant management, interview scheduling, analytics, and hiring processes. Be concise and professional. User message: ${userMessage}`
                  }
                ]
              }
            ]
          })
        }
      )

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.candidates && data.candidates[0]?.content?.parts) {
        return data.candidates[0].content.parts[0].text
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      throw error
    }
  }, [])

  /**
   * Handle send button click and form submission
   */
  const handleSend = useCallback(async () => {
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const assistantMessage = await sendMessage(userMessage)
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please make sure your Gemini API key is configured correctly in the .env file (VITE_GEMINI_API_KEY).'
      }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, sendMessage])

  /**
   * Handle keyboard input
   * @param {KeyboardEvent} e - Keyboard event
   */
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }, [handleSend])

  /**
   * Get count of user messages for notification badge
   */
  const unreadCount = messages.filter(m => m.role === 'user').length

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform border border-black"
        style={{
          background: 'linear-gradient(180deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)',
          boxShadow: '0px 25px 50px -12px rgba(139, 92, 246, 0.5)',
          display: isOpen ? 'none' : 'flex'
        }}
        aria-label="Open chat"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-full sm:max-w-md h-[calc(100vh-8rem)] sm:h-[600px] rounded-xl shadow-2xl flex flex-col border border-white/10"
          style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">RecruitAI Assistant</h3>
                <p className="text-white/80 text-xs">Powered by Gemini AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'text-white'
                      : 'text-white border border-white/10'
                  }`}
                  style={
                    message.role === 'user'
                      ? { background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' }
                      : { backgroundColor: 'rgba(255, 255, 255, 0.05)' }
                  }
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div 
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                      style={{ animationDelay: '0ms' }}
                    ></div>
                    <div 
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                      style={{ animationDelay: '150ms' }}
                    ></div>
                    <div 
                      className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                      style={{ animationDelay: '300ms' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about recruitment..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm"
                disabled={loading}
                aria-label="Chat input"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="px-4 py-2 rounded-lg text-white font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)'
                }}
                aria-label="Send message"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 0l-3-3m3 3l3-3" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default GeminiChatbot

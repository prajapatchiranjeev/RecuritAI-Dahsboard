/**
 * Helper Functions
 * 
 * Utility functions used across the application.
 * Provides reusable logic for common operations.
 * 
 * @module utils/helpers
 */

/**
 * Format number with commas for better readability
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num)
}

/**
 * Get status badge styling based on status type
 * @param {string} status - Status type (Interview, Hired, Review, etc.)
 * @returns {Object} Style object with backgroundColor, color, and borderColor
 */
export const getStatusStyles = (status) => {
  const statusMap = {
    Interview: {
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      color: '#22d3ee',
      borderColor: 'rgba(6, 182, 212, 0.3)',
    },
    Hired: {
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      color: '#34d399',
      borderColor: 'rgba(16, 185, 129, 0.3)',
    },
    Review: {
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      color: '#a78bfa',
      borderColor: 'rgba(139, 92, 246, 0.3)',
    },
    Rejected: {
      backgroundColor: 'rgba(244, 63, 94, 0.2)',
      color: '#fb7185',
      borderColor: 'rgba(244, 63, 94, 0.3)',
    },
  }

  return statusMap[status] || statusMap.Review
}

/**
 * Get gradient style for icon backgrounds
 * @param {string} type - Gradient type
 * @returns {Object} Style object with background gradient
 */
export const getGradientStyle = (type) => {
  const gradients = {
    'purple': { background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(147, 51, 234, 1) 100%)' },
    'cyan': { background: 'linear-gradient(135deg, rgba(8, 145, 178, 1) 0%, rgba(37, 99, 235, 1) 100%)' },
    'green': { background: 'linear-gradient(135deg, rgba(5, 150, 105, 1) 0%, rgba(22, 163, 74, 1) 100%)' },
    'red': { background: 'linear-gradient(135deg, rgba(225, 29, 72, 1) 0%, rgba(220, 38, 38, 1) 100%)' },
    'default': { background: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)' },
  }
  
  return gradients[type] || gradients.default
}

/**
 * Calculate percentage change
 * @param {number} current - Current value
 * @param {number} previous - Previous value
 * @returns {Object} Object with value, formatted string, and type (positive/negative)
 */
export const calculatePercentageChange = (current, previous) => {
  if (previous === 0) return { value: 0, formatted: '0%', type: 'neutral' }
  
  const change = ((current - previous) / previous) * 100
  const type = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral'
  const formatted = `${change > 0 ? '+' : ''}${change.toFixed(1)}%`
  
  return { value: change, formatted, type }
}

/**
 * Debounce function to limit API calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}


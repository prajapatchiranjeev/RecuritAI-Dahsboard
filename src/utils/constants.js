/**
 * Constants File
 * 
 * Centralized configuration and constants for the RecruitAI application.
 * This ensures consistency across components and makes configuration management easier.
 * 
 * @module utils/constants
 */

/**
 * Color palette matching Figma design specifications
 */
export const COLORS = {
  // Primary colors
  PRIMARY: {
    PURPLE: '#7C3AED',
    CYAN: '#06B6D4',
    GRADIENT: 'linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(8, 145, 178, 1) 100%)',
  },
  
  // Status colors
  STATUS: {
    SUCCESS: '#10B981',
    SUCCESS_BG: 'rgba(16, 185, 129, 0.2)',
    SUCCESS_BORDER: 'rgba(16, 185, 129, 0.3)',
    DANGER: '#FB7185',
    DANGER_BG: 'rgba(244, 63, 94, 0.2)',
    WARNING: '#FBBF24',
    INFO: '#22D3EE',
    INFO_BG: 'rgba(6, 182, 212, 0.2)',
    INFO_BORDER: 'rgba(6, 182, 212, 0.3)',
    REVIEW: '#A78BFA',
    REVIEW_BG: 'rgba(139, 92, 246, 0.2)',
    REVIEW_BORDER: 'rgba(139, 92, 246, 0.3)',
  },
  
  // Background colors
  BACKGROUND: {
    MAIN: 'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(30, 41, 59, 1) 85%, rgba(15, 23, 42, 1) 100%)',
    CARD: 'rgba(30, 41, 59, 0.6)',
    HEADER: 'linear-gradient(90deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%)',
    SIDEBAR: 'rgba(30, 41, 59, 0.95)',
  },
  
  // Text colors
  TEXT: {
    PRIMARY: '#FFFFFF',
    SECONDARY: '#9CA3AF',
    MUTED: '#6B7280',
  },
  
  // Border colors
  BORDER: {
    DEFAULT: 'rgba(255, 255, 255, 0.1)',
    LIGHT: 'rgba(255, 255, 255, 0.05)',
    GRID: 'rgba(255, 255, 255, 0.06)',
  },
}

/**
 * Chart configuration
 */
export const CHART_CONFIG = {
  COLORS: {
    APPLICANTS: '#7C3AED',
    HIRED: '#06B6D4',
    INTERVIEWS: '#10B981',
  },
  DOMAIN: {
    MIN: 0,
    MAX: 800,
  },
  TICKS: [0, 200, 400, 600, 800],
  STROKE_WIDTH: 3,
  DOT_RADIUS: 4,
  ACTIVE_DOT_RADIUS: 6,
}

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  SM: '640px',
  LG: '1024px',
}

/**
 * API configuration
 */
export const API_CONFIG = {
  GEMINI: {
    BASE_URL: 'https://generativelanguage.googleapis.com/v1beta',
    MODEL: 'gemini-pro',
    ENV_KEY: 'VITE_GEMINI_API_KEY',
  },
}

/**
 * Animation durations
 */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
}


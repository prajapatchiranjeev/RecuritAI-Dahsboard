# RecruitAI Landing Page

A beautiful recruitment dashboard landing page built with React, Vite, and Tailwind CSS, matching the Figma design exactly.

## Features

- **Fully Responsive Design**: Mobile-first approach with breakpoints at 640px (sm) and 1024px (lg)
  - **Mobile (< 640px)**: 
    - Sidebar hidden by default, accessible via hamburger menu
    - Stats cards stack in single column
    - Table converted to card layout
    - Scrollable charts with horizontal scroll
    - Optimized touch targets (44px minimum)
    - Reduced padding and font sizes for mobile
  - **Tablet (640px - 1024px)**: 
    - Sidebar still hidden, accessible via menu
    - Stats cards in 2 columns
    - Full table layout
  - **Desktop (> 1024px)**: 
    - Sidebar always visible
    - Full layout with all components side-by-side
- **Modern UI**: Dark theme with gradient backgrounds matching the Figma design
- **Interactive Components**: 
  - Slide-in sidebar navigation with mobile overlay
  - Statistics cards with percentage changes
  - Analytics chart with Recharts (scrollable on mobile)
  - Recent applicants table (card view on mobile)
  - Messages section with max-height scrolling
  - Activity feed with timeline

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
RecruitAI/
├── src/
│   ├── components/          # React components
│   │   ├── Sidebar.jsx       # Sidebar navigation with menu items
│   │   ├── Header.jsx        # Top header with search and user profile
│   │   ├── StatsCards.jsx    # Statistics cards (Total Applicants, etc.)
│   │   ├── AnalyticsChart.jsx # Recruitment analytics line chart
│   │   ├── RecentApplicants.jsx # Applicants table/card view
│   │   ├── Messages.jsx     # Recent conversations list
│   │   ├── ActivityFeed.jsx  # Activity timeline feed
│   │   └── GeminiChatbot.jsx # AI chatbot component
│   ├── utils/              # Utility functions and constants
│   │   ├── constants.js    # App-wide constants (colors, config)
│   │   └── helpers.js     # Helper functions (formatters, etc.)
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .env.example            # Environment variables template
├── README.md               # Project documentation
└── CONTRIBUTING.md         # Contribution guidelines
```

## Design Details

All colors, spacing, and styling match the Figma design exactly:
- Background gradients from Figma (exact RGBA values)
- Exact color values (RGB/Hex) - stored in `src/utils/constants.js`
- Proper spacing and layout with responsive breakpoints
- Matching typography (Inter font family)
- Correct border radius (8px, 12px, 9999px for full circles)
- Proper shadows and effects matching Figma design

### Code Quality Standards

- **Component Documentation**: All components have JSDoc comments explaining purpose, props, and usage
- **Code Organization**: Logical file structure with separation of concerns
- **Constants Management**: Centralized constants in `utils/constants.js`
- **Helper Functions**: Reusable utilities in `utils/helpers.js`
- **Error Handling**: Proper error handling in async operations
- **Accessibility**: ARIA labels and keyboard navigation support
- **Responsive Design**: Mobile-first approach with consistent breakpoints

### Key Features Implemented

1. **Chart Visualization**: 
   - Line chart with three data series (Applicants, Hired, Interviews)
   - Exact color matching from Figma (#7C3AED, #06B6D4, #10B981)
   - Interactive tooltips and period selection
   - Responsive with horizontal scroll on mobile

2. **AI Chatbot Integration**:
   - Google Gemini API integration
   - Fallback mock responses when API key not configured
   - Smooth animations and message history
   - Mobile-responsive chat window

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for analytics
- **Google Gemini AI** - AI chatbot for recruitment assistance

## Gemini AI Chatbot Setup

The application includes a Gemini AI-powered chatbot for recruitment assistance. To enable it:

1. Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a `.env` file in the root directory
3. Add your API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. Restart the development server

**Note**: If no API key is provided, the chatbot will use mock responses for demonstration purposes.

## License

MIT

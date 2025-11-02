/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f5f3ff',
          '100': '#ede9fe',
          '500': '#8b5cf6',
          '600': '#7c3aed',
          '700': '#6d28d9',
        },
        'secondary': {
          '400': '#22d3ee',
          '500': '#06b6d4',
          '600': '#0891b2',
        },
        'success': {
          '400': '#34d399',
          '500': '#10b981',
        },
        'danger': {
          '400': '#fb7185',
          '500': '#ef4444',
          '600': '#e11d48',
        },
      },
    },
  },
  plugins: [],
}

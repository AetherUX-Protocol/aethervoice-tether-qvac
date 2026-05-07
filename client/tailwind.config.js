/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Sovereign Palette
        brand: {
          dark: "#0F172A",       // Deep Charcoal for background
          surface: "#1E293B",    // Lighter slate for cards/sections
          primary: "#0052FF",    // Sovereign Blue (Action items)
          success: "#27AD75",    // Tether Green (Verification success)
          warning: "#F59E0B",    // Cautionary orange
          danger: "#EF4444",     // Fraud/Stop red
          text: "#F8FAFC",       // Off-white for readability
        },
      },
      fontFamily: {
        // Monospace for technical precision, Sans for readability
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Subtle glows to emphasize "Silicon-level" security
        'sovereign': '0 0 15px -3px rgba(0, 82, 255, 0.2)',
        'trust': '0 0 20px -5px rgba(39, 173, 117, 0.3)',
      }
    },
  },
  plugins: [],
}

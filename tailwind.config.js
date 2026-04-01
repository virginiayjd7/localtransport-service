/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Golden Standard Theme (User side)
                'brand-gold': '#FFD700',
                'brand-gold-dark': '#705d00',

                // Brand Green Theme (Driver/Directory side)
                'brand-green': '#2E7D32',
                'brand-green-vibrant': '#4CAF50',

                // Material Standard colors from early analysis
                "background": "#faf9f7",
                "surface": "#faf9f7",
                "on-surface": "#1a1c1b",
                "on-surface-variant": "#4d4732",
                "outline-variant": "#d0c6ab",
                "secondary": "#5d5e61",
                "tertiary": "#00696f",
            },
            fontFamily: {
                "headline": ["Manrope", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "label": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "full": "9999px"
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}

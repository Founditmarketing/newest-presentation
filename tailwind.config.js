/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#0A0A0A', // Rich Black
                    charcoal: '#121212', // Deep Charcoal
                    gold: '#D4AF37', // Metallic Gold
                    dark: '#080808', // Off-black for contrast (legacy)
                    gray: '#1A1A1A', // Deep Gray (legacy)
                    silver: '#E5E5E5', // High-end text (legacy)
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Outfit', 'sans-serif'], // We use 'serif' class for headings in this project, so we map it to Outfit
                mono: ['JetBrains Mono', 'Menlo', 'monospace'],
            },
            animation: {
                'grid-flow': 'grid-flow 20s linear infinite',
            },
            keyframes: {
                'grid-flow': {
                    '0%': { transform: 'rotateX(60deg) translateY(0)' },
                    '100%': { transform: 'rotateX(60deg) translateY(50px)' },
                }
            }
        },
    },
    plugins: [],
}

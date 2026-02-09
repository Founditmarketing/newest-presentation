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
                    orange: '#DD4600', // International/Hermes Orange (Deeper, less neon)
                    black: '#030303', // Rich Black (OLED friendly)
                    dark: '#080808', // Off-black for contrast
                    gray: '#1A1A1A', // Deep Gray
                    silver: '#E5E5E5', // High-end text
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
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

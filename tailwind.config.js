/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E07A5F',   // Terra Cotta
                secondary: '#F4F1DE', // Cream/Eggshell
                accent: '#8C1C13',    // Burnt Red
                neutral: '#3D405B',   // Warm Dark Blue
                slate: {
                    950: '#020617', // Keeping existing slate for utility if needed
                },
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-warm': 'linear-gradient(135deg, #E07A5F 0%, #8C1C13 100%)',
            },
            animation: {
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    950: '#020617',
                },
                gold: {
                    400: '#FACC15', // yellow-400
                    500: '#EAB308', // yellow-500
                    600: '#CA8A04', // yellow-600
                },
                flash: {
                    red: '#EF4444',
                    orange: '#F97316'
                }
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-gold': 'linear-gradient(135deg, #FACC15 0%, #EAB308 100%)',
            },
            animation: {
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}

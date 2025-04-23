// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lavender: {
                    200: "#e6e6fa",
                },
                purple: {
                    400: "#a78bfa",
                    900: "#4c1d95",
                },
                teal: {
                    400: "#38b2ac",
                },
                green: {
                    500: "#48bb78",
                    600: "#38a169",
                },
                blue: {
                    500: "#4299e1",
                },
            },
        },
    },
    plugins: [],
}

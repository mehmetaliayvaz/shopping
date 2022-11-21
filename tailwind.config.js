/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1080px",
        "2xl": "1344px",
    },
    extend: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        colors: {
            primary: {
                DEFAULT: "#D72727",
                500: "#D72727",
            },
            secondary: {
            },
            tertiary: {
            },
            gray: {
                50: "#FAFAFA",
                100: "#F5F5F5",
                200: "#EDEDED",
                600: "#9B9B9B",
                700: "#4E4E4E",
            },
        },
        borderRadius: {
        },
        backgroundImage: {
            
        },
        fontSize: {
        },
        fontFamily: {
            "poppins": ['"Poppins"', "sans-serif"],
        },
        boxShadow: {
            "sm": "0 4px 4px rgba(0, 0, 0, 0.25)",
            "md": "0 4px 10px rgba(0, 0, 0, 0.1)",
        }
    },
},
  plugins: [],
}
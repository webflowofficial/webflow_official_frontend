/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.tsx"],
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xsm: { min: "480px" },

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            "sm-max": { max: "480px" },
            // => @media (max-width: 767px) { ... }
            "md-max": { max: "768px" },
            // => @media (max-width: 767px) { ... }
        },
        extend: {
            boxShadow: {
                "primary-box": "0 0px 12px -7px black",
                "secondary-box": "0 0px 30px -14px black",
            },
            fontFamily: {
                "primary-font-family": ["Roboto, sans-serif;"],
            },
            colors: {
                "custom-primary-background": "rgb(10,25,47)",
                "custom-primary-button": "rgb(100,255,218)",
                "custom-secondary-button": "rgba(100,255,219,0.13)",
                "custom-primary-font": "rgb(204,214,246)",
                "custom-secondary-font": "rgb(136,146,176)",
            },
        },
    },
    plugins: [],
};

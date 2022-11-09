/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        colors: {
            "dark": "#121616",
            "white": "#fff",
        },
        fontFamily: {
            anton: ["Anton", "sans-serif"],
        },
    },
    plugins: [],
};

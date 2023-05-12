/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                heading: "#5e7cbf",
                navbutton: "#262626",
                navbuttonSelected: "#1e5785",
                navbuttonHover: "#3175ad",
                inputBox: "#8d8d8d",
            },
        },
    },
    plugins: [],
};

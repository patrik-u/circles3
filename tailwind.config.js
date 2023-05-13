/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                heading: "#5e7cbf",
                navbutton: "#e2e2e2",
                navbuttonSelected: "#5682c4",
                navbuttonHover: "#68bbff",

                navbuttonDark: "#262626",
                navbuttonSelectedDark: "#2f3c50",
                navbuttonHoverDark: "#3175ad",

                inputBox: "#d1d1d1",
                inputBoxDark: "#2f3c50",
            },
        },
    },
    plugins: [],
};

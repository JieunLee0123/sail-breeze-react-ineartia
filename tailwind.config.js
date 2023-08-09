import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
              sans: ["Figtree", ...defaultTheme.fontFamily.sans],
              pretendard: ["Pretendard"]
            },
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            lg: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        colors: {
            // primary
            yellow_00: "#FFCA0B",
            yellow_01: "#FFDB59",
            yellow_02: "#FFE578",
            yellow_03: "#FFEDA0",
            yellow_04: "#FFF7D2",
            // sub
            blue_01: "#205388",
            blue_02: "#518BFF",
            blue_03: "#96BDFF",
            blue_04: "#ECF0F1",
            // sub_color
            sub_green: "#55BB45",
            sub_pink: "#F88",
            sub_orange: "#FF9C40",
            sub_purple: "#B15EE4",
            // monotone
            gray_01: "#212529",
            gray_02: "#40464F",
            gray_03: "#5C6066",
            gray_04: "#B2B4B7",
            gray_05: "#EBEBEB",
            gray_bg: "#F6F6F6",
            white: "#FFFFFF",
        },
    },

    plugins: [forms],
});

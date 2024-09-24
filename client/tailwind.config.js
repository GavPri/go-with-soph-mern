/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F1F1F1", //White  Base for background
        text: "#014421", // Dark Green for text
        border: "#00A86B", // Light Green for border
        brand: "#00A86B", // Light Green for brand elements
        error: "#E63946", // Bright Red for error messages
        success: "#2ECC71", // Bright Green for success messages
        accentPrimary: "#C7A600", // Muted Yellow for primary accent
        accentSecondary: "#4C5C4B", // Greenish Gray for secondary accent
      },
      screens: {
        sm: "576px", // Small devices (landscape phones, 576px and up)
        md: "768px", // Medium devices (tablets, 768px and up)
        lg: "992px", // Large devices (desktops, 992px and up)
        xl: "1200px", // Extra large devices (large desktops, 1200px and up)
        xxl: "1400px", // Extra extra large devices (larger desktops, 1400px and up)
      },
      fontFamily: {
        qs: ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
};

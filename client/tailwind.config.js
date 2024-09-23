/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#014421", // Dark Green Base for background
        text: "#F1F1F1", // White for text
        border: "#00A86B", // Light Green for border
        brand: "#00A86B", // Light Green for brand elements
        error: "#E63946", // Bright Red for error messages
        success: "#2ECC71", // Bright Green for success messages
        accentPrimary: "#C7A600", // Muted Yellow for primary accent
        accentSecondary: "#4C5C4B", // Greenish Gray for secondary accent
      },
    },
  },
  plugins: [],
};

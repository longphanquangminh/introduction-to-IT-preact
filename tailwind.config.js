/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientAnimation: {
          "0%": {
            filter: "hue-rotate(0deg)",
          },
          "100%": {
            filter: "hue-rotate(360deg)",
          },
        },
        bounceUpDown: {
          // Thêm hiệu ứng chữ nhảy lên và nhảy xuống
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        "my-animation": "gradientAnimation 0.5s linear infinite",
        bounce: "bounceUpDown 1s ease-in-out infinite", // Hiệu ứng nhảy lên và nhảy xuống
      },
    },
  },
  plugins: [],
};

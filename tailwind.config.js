module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "gray-opacity": "rgba(192,192,192,0.5)",
      },
    },
  },
  plugins: [require("daisyui")],
};

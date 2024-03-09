/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': "#353941",
        "secondary": "#90b8f8",
        "btn": "#90b8f8",
        "text": "#5f85db",
        "text-2": "#90b8f8",
     
      }, 
      boxShadow:{
        boxStyle: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
      }, 
      opacity:{
        opacity: "0.4"
      }
    },
  },
  plugins: [],
}


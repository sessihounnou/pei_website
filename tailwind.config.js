module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: '#000',
      white: '#fff',
      showcase : '#F1F4F6',
      headlines : '#1A202C', 
      line : '#EEF1F5',
      primary : {
        base:'#4857DE',
        safe : '#0B6403',
        fade:'#AACCFA',
      },
    }
  },
  plugins: [],
}
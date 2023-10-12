module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-primary": "url('/src/assets/pexels-rfstudio-38110821.png')",
        "about-primary":
          "url('/src/assets/pexels-andrea-piacquadio-37690211-1.png')",
        "frame-6": "url('/src/assets/Frame6.png')",
        "frame-7": "url('./src/assets/Frame7.png')",
        "frame-8": "url('./src/assets/Frame8.png')",
        "frame-9": "url('./src/assets/Frame9.png')",
        "fm-4": "url('./src/assets/fm.png')",
        "fr-4": "url('./src/assets/fr.png')",
        "f1-4": "url('./src/assets/f1.png')",
        "frame-10": "url('./src/assets/Frame10.png')",
        "frame-11": "url('./src/assets/Frame11.png')",
        "frame-14": "url('./src/assets/Frame14.png')",
        "frame-15": "url('./src/assets/Frame15.png')",
        "image-i5": "url('./src/assets/i5.png')",
        "image-s1": "url('./src/assets/s1.png')",
        "image-d1": "url('./src/assets/d1.png')",
        "image-c1": "url('./src/assets/c1.png')",
        "image-1": "url('./src/assets/image1.png')",
        "frame-16": "url('./src/assets/Frame16.png')",
      },
      fontFamily: {
        base: ["ui-sans-serif", "system-ui"],
      },
      colors: {
        black: "#000",
        white: "#fff",
        showcase: "#F1F4F6",
        headlines: "#1A202C",
        line: "#EEF1F5",
        primary: {
          base: "#4857DE",
          safe: "#0B6403",
          fade: "#AACCFA",
        },
      },
    },
  },
  plugins: [],
};

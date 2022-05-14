module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        OpenSans:['Open Sans,sans-serif'],
        Libre: ['Libre Baskerville, serif'],
        Nunito:['Nunito, sans-serif'],
        Quattrocento:["Libre Baskerville, serif"]

      },
      backgroundImage:{
        mainImg:"linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 63.53%,#0A001A 85.33%) ,url('../public/Main/Img.jpg')",
        mainImage:"linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 63.53%,#0A001A 85.33%) ,url('../public/Main/Rectangle 157.jpg')",
        bgImage:"linear-gradient(180deg, rgba(10, 0, 26, 1) 10%, rgba(5,0,4,1) 100%,#0A0B1A 100%)" ,
        bgdarken:"linear-gradient(180deg, rgba(5, 0, 4, 1) 10%, rgba(5, 0, 4, 1) 100%,#0A0B1A 100%)",
        bgtobalck:'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(7,0,14,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)'

      },
      colors:{
        'showsbg':"rgba(17, 18, 41, 1)",
        'darkpurple':'#2A256D',
      },
      width:{
        "0.6":"6rem"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'side-bar-mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
        'side-bar-desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purple-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia-white': 'hsl(217, 100%, 97%)',
        'alabaster-white': 'hsl(231, 100%, 99%)',
      },
      fontFamily: {
        body: ['Ubuntu', 'sans-serif'],
      },
      maxHeight: {
        'forum-max': '40rem',
      },
      translate: {
        'vh-10': '10vh',
      },
      maxWidth: {
        'px-112': '120px',
        '9/10': '90%',
      },
    },
  },
  plugins: [],
};

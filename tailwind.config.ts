import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warmWhite: '#f9f7f2',
        charcoal: '#1f1f1d',
        beige: '#d8cfc0',
        mist: '#dcdad4',
        gold: '#b89b63'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 15px 45px rgba(31, 31, 29, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;

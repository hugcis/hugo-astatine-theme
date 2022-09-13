module.exports = {
  content: [
    "content/**/*.md",
    "layouts/**/*.html",
    "../personal-website/layouts/**/*.html",
    "../personal-website/content/**/*.md"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '40rem',
        md: '40rem',
        lg: '40rem',
        xl: '45rem',
        '2xl': '50rem',
      },
    },
    letterSpacing: {
      wide: ".03em"
    },
    extend: {
      lineHeight: {
        'loose': '1.7',
      },
      flexGrow: {
        '2': 2
      },
            flexShrink: {
        '2': 2
      },
      colors: {
        'tp-black': 'rgba(0,0,0,.8)',
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "avenir next", "avenir",
               "segoe ui", "helvetica neue", "helvetica",
               "Cantarell", "Ubuntu", "roboto", "noto", "arial", "sans-serif"],
      },
      gridTemplateColumns: {
        'nav': 'repeat(auto-fill, minmax(80px, 1fr))',
        'minimal-list-item': '15% 85%',
        'list-item': '.6fr 3fr auto 1fr',
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}

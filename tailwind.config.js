module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
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
    }
  },
  plugins: [],
}

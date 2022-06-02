module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      flexGrow: {
        '2': 2
      },
            flexShrink: {
        '2': 2
      }

    }
  },
  plugins: [],
}

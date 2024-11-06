module.exports = {
    darkMode:'selector',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
          colors: {
            primary: {
              light: '#6D28D9', // custom light color
              DEFAULT: '#5B21B6', // primary color
              dark: '#4C1D95' // dark color
            },
            secondary: {
              light: '#60A5FA',
              DEFAULT: '#3B82F6',
              dark: '#1E40AF'
            },
          },
        },
      },
    plugins: [],
}
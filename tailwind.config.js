module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/**/*.scss',
  ],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}

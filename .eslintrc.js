const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    curly: ['error', 'multi-line'],
    'no-unused-vars': isProd ? ['error'] : ['warn'],
    'vue/no-v-html': 0,
    'arrow-parens': ['error', 'as-needed']
  }
}

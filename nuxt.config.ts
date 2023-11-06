// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Fira Sans': true,
      'Courier Prime': true,
    },
  },
})

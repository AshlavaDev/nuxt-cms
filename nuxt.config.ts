// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@nuxtjs/supabase',
    'nuxt-snackbar',
    'nuxt-primevue'
  ],
  googleFonts: {
    families: {
      'Fira Sans': true,
      'Courier Prime': true,
    },
  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000
  },
  primevue: {
    
  }
})

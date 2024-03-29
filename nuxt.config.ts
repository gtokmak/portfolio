// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    

  ],
  tailwindcss: {
    editorSupport: true,
  },
  colorMode:{
    classSuffix: ''
  }
})

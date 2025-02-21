// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      NCDC_API_KEY: process.env.NUXT_NCDC_API_KEY,
      NCDC_API_URL: process.env.NUXT_NCDC_API_URL,
    },
  },
});

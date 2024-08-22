// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    cookie: 'cookie',
  },

  nitro: {
    preset: 'cloudflare-pages',
  },

  modules: ['nitro-cloudflare-dev', '@hebilicious/authjs-nuxt', "@nuxt/ui"],

  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET, // You can generate one with `openssl rand -base64 32`
    },
    discord: {
      clientId: process.env.NUXT_DISCORD_CLIENT_ID,
      clientSecret: process.env.NUXT_DISCORD_CLIENT_SECRET,
    },
    public: {
      authJs: {
        // baseUrl: 'http://localhost:8788', // The URL of your deployed app (used for origin Check in production)
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true, // whether to hit the /auth/session endpoint on every client request
      },
    },
  },
})
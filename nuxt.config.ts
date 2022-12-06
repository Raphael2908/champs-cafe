// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss', 
        // 'vue-sweetalert2/nuxt'
    ],
    runtimeConfig: {
        // The private keys which are only available within server-side
        // apiSecret: '123',
        supabaseURL: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY,
        // Keys within public, will be also exposed to the client-side
        public: {
        //   apiBase: '/api'
        }
    },
})

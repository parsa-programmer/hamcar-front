export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        hello: (msg: string) => `Hello ${msg}!`
      }
    }
  })
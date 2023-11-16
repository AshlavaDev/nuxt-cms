// Middleware for checking and protecting routes that require user authetication

export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser()
  if (!user.value) {
    return navigateTo('/login')
  }
})
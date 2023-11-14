<script lang="ts" setup>
 //Login page
  const client = useSupabaseClient()
  const router = useRouter()

  const email = ref('')
  const password = ref('')

  const errorMsg = ref('')
  const successMsg = ref('')

  async function login() {
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })
      if (error) throw error
      router.push('/')
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorMsg.value = error.message
      } else {
        errorMsg.value = 'An unknown error occurred'
      }
    }
  }
</script>

<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <span class="form-element">
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            id="email"
            class="text-input"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </span>
        <span class="form-element">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            id="password"
            class="text-input"
            required
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          />
        </span>
        <button class="button primary-button" type="submit">Login</button>
      </form>
  </section>
</template>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem 1rem 1rem;
    align-items: center;
    gap: 1rem;
    width: 100%;
    background-color: $primary-colour-dark;
  }

  h1 {
  font-family: $display;
  font-size: 2.5rem;
  text-align: center;
  color: $primary-colour-light;

  @media (min-width: $breakpoint-tablet) {
    font-size: 3rem;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: $breakpoint-tablet) {
    width: 75%;
  }

  @media (min-width: $breakpoint-desktop) {
    width: 50%;
  }
}
</style>

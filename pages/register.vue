<script lang="ts" setup>
// Page to register new users

const client = useSupabaseClient()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const errorMsg = ref(null)
const successMsg = ref(null)

async function signUp() {
  try {
    const { data, errors } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    })
  } catch (error) {}
}
</script>

<template>
  <section>
    <h1>Register</h1>
    
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  gap: 1rem;
  min-width: 100%;
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

</style>

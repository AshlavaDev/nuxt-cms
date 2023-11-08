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
    const { data } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    })
  } catch (error) {
    
  }
}
</script>

<template>
  <section>
    <h1>Register</h1>
    <form>
      <span class="form-element">
        <label for="email">Email</label>
        <input v-model="email" type="email" placeholder="Email" id="email" />
      </span>
      <span class="form-element">
        <label for="password">Password</label>
        <input v-model="password" type="password" placeholder="" id="password" />
      </span>
      <span class="form-element">
        <label for="confirmPassword">Confirm Password</label>
        <input v-model="confirmPassword" type="password" placeholder="" id="confirmPassword" />
      </span>
      <button>Submit</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0 1rem;
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

.form-element {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: $primary-colour-light;
  font-size: 1.6rem;
}

</style>

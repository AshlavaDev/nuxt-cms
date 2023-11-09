<script lang="ts" setup>
//TODO: Add toast messages
// Page to register new users
const client = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const emailError = ref(false)
const passwordError = ref(false)
const confirmPasswordError = ref(false)

const errorMsg = ref('')
const successMsg = ref('')

async function signUp() {
  try {
    if (confirmPasswordError.value !== true) {
      const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
      })
      if (error) throw error;
      successMsg.value = 'Check your email to confirm your account'
      router.push('/verify')
    }
    } catch (error: unknown) {
      if (error instanceof Error) {
    errorMsg.value = error.message;
  } else {
    errorMsg.value = 'An unknown error occurred';
  }
    }
}

watch(email, (value) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  emailError.value = !pattern.test(value)
})

watch(password, (value) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  console.log(value)
  if (!pattern.test(value)) {
    passwordError.value = true
  } else {
    passwordError.value = false
  }
})

watch(confirmPassword, (value) => {
  if(value !== password.value) {
    confirmPasswordError.value = true
  } else {
    confirmPasswordError.value = false
  }
})
</script>

<template>
  <section>
    <h1>Register</h1>
    <form @submit.prevent="signUp">
      <span class="form-element">
        <label for="email">Email</label>
        <input v-model="email" type="email" placeholder="Email" id="email" class="text-input" required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <span class="input-error" v-if="emailError">Invalid Email</span>
      </span>
      <span class="form-element">
        <label for="password">Password</label>
        <p class="password-message">Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long</p>
        <input v-model="password" type="password" placeholder="Password" id="password" class="text-input" required pattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/>
        <span class="input-error" v-if="passwordError">Invalid Password</span>
      </span>
      <span class="form-element">
        <label for="confirmPassword">Confirm Password</label>
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" id="confirmPassword" class="text-input" required />
        <span class="input-error" v-if="confirmPasswordError">Passwords Do Not Match</span>
      </span>
      <button class="button primary-button" type="submit">Submit</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
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

.password-message {
  font-size: 1.0rem;
}

</style>

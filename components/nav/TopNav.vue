<script lang="ts" setup>
// The Top Navigation component that uses supabase to detect if a user is logged in and renders accordingly
//TODO: make responsive
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

async function logout() {
  try {
    const { error } = await client.auth.signOut()
    if (error) throw error
    router.push('/')
  } catch (error) {
    console.log(error)
  }
}

</script>

<template>
  <header>
    <p>Nuxt CMS</p>
    <span>
      <Icon name="carbon:menu" />
    </span>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink v-if="!user" to="/register">Register</NuxtLink>
      <NuxtLink v-if="!user" to="/login">Login</NuxtLink>
      <button v-if="user" @click="logout">Logout</button>
    </nav>
  </header>
</template>

<styles lang="scss">

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: full;
  padding: 1rem 2rem;
  background-color: $primary-colour-light;
  border-bottom: 1px solid $primary-colour-dark;

  font-size: 1.2rem;
  color: $primary-colour-dark;

  @media (min-width: $breakpoint-tablet) {
    font-size: 1.6rem;
    justify-content: space-evenly;
  }

  P {
    font-family: $display;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;

    @media (min-width: $breakpoint-tablet) {
      display: none;
    }
  }

  nav {
    gap: 1rem;
    display: none;

    @media (min-width: $breakpoint-tablet) {
      display: flex;
    }

    a {
      // reset the NuxtLink styles
      text-decoration: none;
      color: inherit;

      padding: 0.5rem 1rem;

      &:hover {
        background-color: $primary-colour-dark;
        color: $primary-colour-light;
      }
    }

    button {
      // overrides weird default css button styles that aren't inherited
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      font: inherit;
      cursor: pointer;
      color: inherit;      
      outline: inherit;

      font-size: 1.2rem;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: $primary-colour-dark;
        color: $primary-colour-light;
      }

      @media (min-width: $breakpoint-tablet) {
        font-size: 1.6rem;
      }
    }
  }
}
</styles>

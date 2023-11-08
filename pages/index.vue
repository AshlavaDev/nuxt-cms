<template>
  <section>
    <h1>Nuxt Craft Master Solid</h1>
    <p>The Only Nuxt CMS You'll Ever Need</p>
    <div>
      <NuxtLink to="/register" class="button primary-button">Sign Up</NuxtLink>
      <NuxtLink to="/" class="button secondary-button">Login</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-width: 100%;
  background-color: $primary-colour-dark;

  h1 {
    font-family: $display;
    font-size: 2.5rem;
    text-align: center;
    color: $primary-colour-light;

    @media (min-width: $breakpoint-tablet) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: $white;
    text-align: center;

    @media (min-width: $breakpoint-tablet) {
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    gap: 1rem;
  }
}
</style>

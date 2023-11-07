<template>
  <footer>
    <p>Nuxt CMS</p>
    <p>&copy; Ashley Morgan 2023</p>
  </footer>
</template>

<style lang="scss">
@use '@/assets/styles/global.scss' as *;

footer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-width: full;
  padding: 1rem 2rem;
  background-color: $primary-colour-light;
  border-top: 1px solid $primary-colour-dark;

  color: $primary-colour-dark;
  font-size: 1.2rem;
  font-family: $display;

  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
    font-size: 1.6rem;
  }
}
</style>

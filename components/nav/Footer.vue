<template>
  <footer>
    <p>Nuxt CMS</p>
    <p>&copy; Ashley Morgan 2023</p>
  </footer>
</template>

<style lang="scss">
  @use "@/assets/styles/global.scss" as *;

  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: full;
    padding: 1rem 2rem;
    background-color: $primary-colour-light;
    border-top: 1px solid $primary-colour-dark;

    color: $primary-colour-dark;
    font-size: 1.4rem;
    font-family: $display;
  }

</style>
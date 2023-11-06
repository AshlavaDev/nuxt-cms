<template>
  <!-- The Top Navigation component -->
  <header>
    <p>Nuxt CMS</p>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>
</template>

<styles lang="scss">
  @use "@/assets/styles/global.scss" as *;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: full;
    padding: 1rem 2rem;
    background-color: $primary-colour-light;
    border-bottom: 1px solid $primary-colour-dark;

    font-size: 1.6rem;
    color: $primary-colour-dark;

    P {
      font-family: $display;
    }

    nav {
      display: flex;
      gap: 1rem;
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

  }
</styles>
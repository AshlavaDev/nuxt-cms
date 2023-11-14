<template>
  <!-- The Top Navigation component -->
  <header>
    <p>Nuxt CMS</p>
    <span>
      <Icon name="carbon:menu" />
    </span>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
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
  }
}
</styles>

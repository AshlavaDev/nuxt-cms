<template>
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
    border-bottom: 1px solid $primary-colour;
  }
</styles>
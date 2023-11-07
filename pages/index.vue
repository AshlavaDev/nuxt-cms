<template>
  <section>
    <h1>Nuxt Craft Master Solid</h1>
    <p>The Only Nuxt CMS You'll Ever Need</p>
    <div>
      <NuxtLink to="/" id="primary">Sign Up</NuxtLink>
      <NuxtLink to="/" id="secondary">Login</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss">

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

      a {
        padding: 0.5rem;
        text-decoration: none;
        font-size: 1.2rem;
        border: 1px solid;
        border-color: $primary-colour-light;

        @media (min-width: $breakpoint-tablet) {
          font-size: 2rem;
        }
      }
      
      #primary {
        background-color: $primary-colour-light;
        color: $primary-colour-dark;

        &:hover {
          background-color: $primary-colour-dark;
          color: $primary-colour-light;
        }
      }
      
      #secondary {
        background-color: $primary-colour-dark;
        color: $primary-colour-light;

        &:hover {
          background-color: $white;
          border-color: $white;
          color: $primary-colour-dark;
        }
      }
    }
  }

</style>